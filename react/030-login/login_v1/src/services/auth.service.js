export async function loginAuth(email, password) {
    let logindata = await postToApi("http://localhost:3000/api/auth/login", {
        email,
        password,
    });
    if (logindata.login) {
        logindata.email = email;
        logindata.logindate = Date.now().toString();
        saveUserDataOnClientAuth(logindata);
    }
    return logindata;
}
export async function logoutAuth(email) {}
export async function tokenCheckAuth(token) {
    let data = await postToApi("http://localhost:3000/api/auth/token", {
        token,
    });
    data.token
        ? updateTokenDataOnClientAuth(token)
        : deleteUserDataOnClientAuth();
    return data;
}
export async function registerAuth(email, password) {
    return (
        await postToApi("http://localhost:3000/api/auth/register", {
            email,
            password,
        })
    ).success;
}

export function updateTokenDataOnClientAuth(token) {
    let data = readUserDataOnClientAuth();
    data.token = token;
    saveUserDataOnClientAuth(data);
}
export function saveUserDataOnClientAuth(data) {
    localStorage.setItem("user", JSON.stringify(data));
}
export function readUserDataOnClientAuth() {
    return JSON.parse(localStorage.getItem("user"));
}
export function deleteUserDataOnClientAuth() {
    localStorage.removeItem("user");
}

async function postToApi(url, data, token = readUserDataOnClientAuth()?.token) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
}
async function getFromApi(url) {
    return fetch(url).then((response) => response.json());
}

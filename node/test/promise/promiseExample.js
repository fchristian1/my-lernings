const twoSecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am resolved after 2 seconds");
    }, 2000);
});

const treeSecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = new Error("I am an error");
        resolve(error);
    }, 3000);
});

export const run = async () => {
    try {
        const result = await twoSecondPromise;
        console.log(result);
        const result2 = await treeSecondPromise;
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
};

import fs from "fs";

// Synchronous file read/write
async function syncOperations() {
    console.log("### Synchronous:\n");
    try {
        fs.writeFileSync("data.txt", "Hello, world!", "utf8");
        console.log("File written successfully!");
    } catch (err) {
        console.error(err);
    }

    try {
        const data = fs.readFileSync("data.txt", "utf8");
        console.log("File read successfully!");
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

async function asyncCallbackOperations() {
    console.log("### Callbacks:\n");

    await fs.writeFile("data.txt", "Hello, async world!", "utf8", (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File written successfully!");

        fs.readFile("data.txt", "utf8", (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("File read successfully!");
            console.log(data);
        });
    });
}

// Asynchronous file read/write with async/await
async function asyncOperations() {
    console.log("### Async/Await:\n");

    try {
        await fs.promises.writeFile("data.txt", "Hello, async world!", "utf8");
        console.log("File written successfully!");
    } catch (err) {
        console.error(err);
    }

    try {
        const data = await fs.promises.readFile("data.txt", "utf8");
        console.log("File read successfully!");
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

// Hauptfunktion für sequenzielle Ausführung
async function executeAll() {
    // Zuerst synchrone Operationen ausführen
    await syncOperations();

    // Dann asynchrone Operationen mit Callbacks ausführen
    await asyncCallbackOperations();

    // Dann asynchrone Operationen ausführen
    await asyncOperations();
}

// Führe alle Operationen iterativ nacheinander aus
executeAll();

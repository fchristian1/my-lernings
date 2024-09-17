import fs from "fs";

fs.writeFileSync("message.txt", "Hallo, Welt!", (err) => {
    if (err) {
        console.error(err);
    }
});

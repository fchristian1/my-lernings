const express = require("express");
const authMiddelware = require("./authMiddleware.js");

const app = express();

app.use(authMiddelware);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(4001, () => {
    console.log("Server is running on port 3000");
});

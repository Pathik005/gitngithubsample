const express = require("express");

const PORT = 3210;
const app = express();

app.get("/", (req,res) => {
    console.log("app is working just fine");
    res.send("sample git n github practise app");
});

app.listen(PORT,() => {
    console.log(`app is listening on port: ${PORT}`)
});
const express = require("express");

const PORT = 3210;
const app = express();

app.get("/", (req,res) => {
    console.log("app is working just fine");
    res.send("sample git n github practise app");
});

app.get("/anotherone", (req,res) => {
    console.log("another page just to understand git coomits better.");
    res.send("this is just another page to understand git commits and merges better");
});

app.listen(PORT,() => {
    console.log(`app is listening on port: ${PORT}`)
});
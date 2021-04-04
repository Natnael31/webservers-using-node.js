const express = require("express");
const rand = require("./randomNumber");

const serve = express();
console.log(serve);

serve.get("/", (req, res) =>{
    const randomGenerator = rand.random();
    res.end("Request recieved and processed\nThe random number b/n 1 & 100 is:" + randomGenerator);
});

serve.use(express.static("static/apple-responsive-replica-html-css-mar-2020"));


serve.listen(1234);
const express = require('express')
let app = express();

app.get("/", (req,res) => {
    res.send("Hello World");
})

app.listen("5000", () =>{
    console.log("Listening port is 5000")
})
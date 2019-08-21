var express = require("express")
var app = express()

app.get("/url", (req, res, next) => {
    res.json(["Hello", "there"])
})

app.listen(8080, () => {
    console.log("Server running on port 8080");
})
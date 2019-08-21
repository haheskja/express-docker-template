var express = require("express")
var app = express()

app.get("/url", (req, res, next) => {
    res.json(["Hello", "there"])
})

app.listen(9000, () => {
    console.log("Server running on port 9000");
})
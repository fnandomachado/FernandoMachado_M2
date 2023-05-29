var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/tudo", function (req, res) {
    res.header("Acess-Control-Allow-Origin", "*");
    res.send("Astrobaldo");
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
});


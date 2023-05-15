var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var DBPATH = 'Curriculo.db';
const db = new sqlite3.Database(DBPATH);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.header("Acess-Control-Allow-Origin", "*");
    res.send("Entrega De Programação");
});

app.get("/Candidate", function (req, res) {
    res.header("Acess-Control-Allow-Origin", "*");
    db.all(`SELECT  id_candidate, candidate_name, candidate_phone, candidate_email, candidate_description FROM candidate`, [], (err, rows) => {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

app.post("/createCandidate", function (req, res) {
    res.statusCode = 200;
    res.header("Acess-Control-Allow-Origin", "*");
    var id_candidate = req.body.id_candidate;
    var candidate_name = req.body.candidate_name;
    var candidate_phone = req.body.candidate_phone;
    var candidate_email = req.body.candidate_email;
    var candidate_description = req.body.candidate_description;
    sql = `INSERT INTO candidate (id_candidate,candidate_name,candidate_phone,candidate_email,candidate_description) VALUES (${id_candidate}, "${candidate_name}", ${candidate_phone}, "${candidate_email}","${candidate_description}")`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.send("Erro na gravação: " + err);
        } else {
            res.send("Usuário Cadastrado");
        };
    });
});

app.put("/updateCandidate", function (req, res) {
    res.statusCode = 200;
    res.header("Acess-Control-Allow-Origin", "*");
    var id_candidate = req.body.id_candidate;
    var candidate_name = req.body.candidate_name;
    var candidate_phone = req.body.candidate_phone;
    var candidate_email = req.body.candidate_email;
    var candidate_description = req.body.candidate_description;

    sql = `UPDATE candidate SET candidate_name = "${candidate_name}",candidate_phone = "${candidate_phone}",candidate_email = "${candidate_email}",candidate_description = "${candidate_description}" WHERE id_candidate = ${id_candidate}`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            res.send("Erro na atualização: ", + err);
        } else {
            res.send("Usuário Atualizado");
        };
    });
});

app.delete("/deleteCandidate", function (req, res) {
    res.header("Acess-Control-Allow-Origin", "*");
    var id_candidate = req.body.id_candidate;
    sql = `DELETE FROM candidate WHERE id_candidate = ${id_candidate}`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.send("Erro na gravação: " + err);
        } else {
            res.send("Usuário Deletado");
        };
    });
});

app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`);
});


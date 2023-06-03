var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var DBPATH = 'Curriculo.db';
const db = new sqlite3.Database(DBPATH);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/SelectCandidato', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/public/select.html');
});

app.get('/Candidato', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/public/pagcurriculo.html');
});

app.get("/Candidate", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT * FROM candidate`, [], (err, rows) => {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

app.get("/Accomplishments", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT  id_candidate, id_accomplishments, accomplishments_award, accomplishments_year, accomplishments_description FROM accomplishments`, [], (err, rows) => {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

app.get("/UserSelected", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT * FROM candidate WHERE id_candidate = ${id_candidato}`, [], (err, rows) => {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

app.get("/Adress", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT  id_candidate, id_adress, adress_zipcode, adress_number, adress_street FROM adress`, [], (err, rows) => {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

app.get("/Education", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT  id_candidate, id_education, education_course, education_institution, education_start, education_end, education_degree FROM education`, [], (err, rows) => {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

app.get("/Experience", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT  id_candidate, id_experience, experience_enterprise, experience_role, experience_start, experience_end, experience_description FROM experience`, [], (err, rows) => {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

app.get("/Personality", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT * FROM personality`, [], (err, rows) => {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

app.get("/Skills", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT * FROM skills`, [], (err, rows) => {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

app.post("/createCandidate", function (req, res) {
    res.statusCode = 200;
    res.header("Access-Control-Allow-Origin", "*");
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
    res.header("Access-Control-Allow-Origin", "*");
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
    res.header("Access-Control-Allow-Origin", "*");
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


const { response } = require('express');
const express = require('express');
const db = require('./db.js');
const app = express();
app.use(express.json());

const cronjob = require('cron').CronJob
const job = new cronjob('0 0 9 * * *', () => {
    console.log(Date())
    console.log("Executou o cron")
}, null, true, 'America/Sao_Paulo');

app.get("/", (req, res) => {
    // retorna apenas o status 200 com o nome do projeto
    return res.status(200).json({
        message: "Back-end Challenge 2021 🎖- Space Flight News"
    })
});

app.get("/articles", (req, res) => {
    //retorna artigos paginados -- ?_start=1&_limit=30
    const start = req.query._start
    const limit = req.query._limit
    db.returnPagedArticle(start, limit)
        .then(resultado => {
            res.send(resultado)
        })
});

app.get('/articles/:id', (req, res) => {
    // retorna dados de artigo por id
    const id = req.params.id;
    db.returnArticle(id)
        .then(resultado => {
            res.send(resultado)
        })
});

app.post("/articles", (req, res) => {
    // inser e artigo 
    db.insertArticle(req.body)
        .then(resultado => {
            res.send(resultado)
        })
});

app.put("/articles/:id", (req, res) => {
   // atualiza artigo por id 
   const id = req.params.id;
   const artigo = req.body;
   db.updateArticle(id, artigo)
        .then(resultado => {
            res.send(resultado)
        })
});

app.delete("/articles/:id", (req, res) => {
    // deleta artigo por id
    const id = req.params.id;
    db.deleteArticle(id)
        .then(resultado => {
            res.send(resultado)
        })
});


app.listen(8080, () => {
    console.log("STATUS 200 - Servidor rodando na porta 8080")
});
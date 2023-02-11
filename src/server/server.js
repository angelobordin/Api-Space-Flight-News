import cors from 'cors';
import express from 'express';
import Routes from './routes/RouteBase.js';

const app = express();
const port = 8090;
app.use(cors());

Routes(app);

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Back-end Challenge 2021 🎖- Space Flight News"
    })
});

app.listen(port, () => console.log(`Server is running at port ${port}`));

/*  CRIAR UM CRON PARA ATUALIZAR A BASE COM OS DADOS DA API PUBLICA
const cronjob = require('cron').CronJob
const job = new cronjob('0 0 9 * * *', () => {
    console.log(Date())
    console.log("Executou o cron")
}, null, true, 'America/Sao_Paulo');
*/
import express from 'express';
import Routes from '../routes/RouteBase.js';

const app = express();
const port = 3000;

Routes(app);

app.listen(port, () => console.log(`Server is running at port ${port}`));
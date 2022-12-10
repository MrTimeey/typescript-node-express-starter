import config from './common/appConfig';
import express from 'express';
import cors from 'cors';
import helloWorld from './routes/helloWorld';

const app: express.Application = express();

app.use(cors());
app.use(express.json());

app.use('/', helloWorld);

app.listen(config.port, () => {
    console.log(`it's alive on http://localhost:${config.port}`);
});

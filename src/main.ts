import config from './common/appConfig';
import express from 'express';
import cors from 'cors';
import helloWorld from './routes/helloWorld';
import apiDoc from './routes/apiDoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../api-doc/openapi.json';

const app: express.Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/hello', helloWorld);
app.use('/doc', apiDoc);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: false }));

app.listen(config.port, () => {
    console.log(`it's alive on http://localhost:${config.port}`);
});

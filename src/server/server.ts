import express from 'express';
import cors from 'cors';
import routes from '../routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../api-doc/openapi.json';

const server: express.Application = express();

server.use(cors());
server.use(express.json());

const apiRouter: express.Router = express.Router();
apiRouter.use('/hello', routes.helloWorld);
apiRouter.use('/ping', routes.ping);
apiRouter.use('/doc', routes.apiDoc);

server.use('/api', apiRouter);
server.use('/actuator', routes.actuator);
server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: false }));
server.use(routes.notFound)

export default server;

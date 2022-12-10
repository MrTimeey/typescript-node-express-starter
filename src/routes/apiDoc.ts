import fs from 'fs';
import express from 'express';
import { promisify } from 'util';
const readFileAsync = promisify(fs.readFile);
const apiDocDir = __dirname + '../../../api-doc/';

const getFile = async (name: string) => readFileAsync(apiDocDir + name);

const apiDoc: express.Router = express.Router();

apiDoc.get('/', (req, res) => {
    res.status(200).send({
        providedFiles: fs.readdirSync(apiDocDir).map((file) => `${req.url}${file}`),
    });
});

const createResourceRoute = (name: string) => {
    apiDoc.route(`/${name}`).get(async (_req, res) => {
        const [file] = await Promise.all([getFile(name)]);
        res.setHeader('Content-Type', 'application/json');
        res.send(file.toString());
    });
};

fs.readdirSync(apiDocDir).forEach((file) => createResourceRoute(file));

export default apiDoc;

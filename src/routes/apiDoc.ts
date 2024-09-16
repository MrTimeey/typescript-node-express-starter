import fs from 'fs';
import express from 'express';
import { promisify } from 'util';
import path from 'node:path';
const readFileAsync = promisify(fs.readFile);
const apiDocDir = path.join(__dirname + '/..', '/api-doc');

const getFile = async (name: string) => readFileAsync(apiDocDir + '/' + name);

const apiDoc: express.Router = express.Router();

apiDoc.get('/', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  res
    .status(200)
    .contentType('application/json')
    .send({
      providedFiles: fs.readdirSync(apiDocDir).map((file) => `${baseUrl}/${file}`)
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

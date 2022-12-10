import express from 'express';

const helloWorld: express.Router = express.Router();

helloWorld.get('/', (_req, res) => {
    res.status(200).send({ msg: 'Hello World!' });
});

export default helloWorld;

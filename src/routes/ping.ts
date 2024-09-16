import express from 'express';
import { currentTimestamp } from '../common';

const ping: express.Router = express.Router();

ping.get('/', (_req, res) => {
  res
    .status(200)
    .contentType('application/json')
    .send({ pong: currentTimestamp('DD.MM.YYYY - HH:mm') });
});

export default ping;

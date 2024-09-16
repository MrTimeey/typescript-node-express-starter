import express from 'express';
import { currentTimestamp } from '../common';

const actuator: express.Router = express.Router();

actuator.get('/health/readiness', (_req, res) => {
  res.status(200).send({ status: 'UP' });
});

actuator.get('/health/liveness', (_req, res) => {
  res.status(200).send({ status: 'UP' });
});

export default actuator;

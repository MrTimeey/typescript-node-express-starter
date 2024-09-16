import express from 'express';

const notFound: express.Router = express.Router();

notFound.use((_req, res) => {
  res.status(404).json({
    msg: 'Ohh you are lost, read the API documentation to find your way back home'
  })
})

export default notFound;

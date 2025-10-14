import express, { NextFunction, Request, Response } from "express";
import path from 'path';
// logging middleware
// import morgan from 'morgan';

import planetsRouter from './routes/planets/planets.router';

const CLIENT_URL = 'http://localhost:3000';
const app = express();

// using CORS
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', CLIENT_URL);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// logging middleware
// app.use(morgan('combined'));
app.use(express.json());
// serving the built react app
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(planetsRouter);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


export default app;
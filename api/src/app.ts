import express, { NextFunction, Request, Response } from "express";
import planetsRouter from './routes/planets/planets.router';

const CLIENT_URL = 'http://localhost:3000';
const app = express();
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', CLIENT_URL);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.json());
app.use(planetsRouter);


export default app;
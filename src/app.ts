import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import usersRouter from './routes/usersRoutes';
import testRouter from './routes/testRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(usersRouter);

if (process.env.MODE === "TEST") {
    app.use(testRouter);
}

export default app;

import express from 'express';

import * as usersController from '../controllers/usersController';

const testRouter = express.Router();

testRouter.get("/reset/users", usersController.clearAll);

export default testRouter;
import express from 'express';

import validateSchema from '../middlewares/validateSchemaMiddleware';
import * as usersController from '../controllers/usersController';
import { loginSchema, registerSchema } from '../schemas/registerSchema';

const usersRouter = express.Router();

usersRouter.post("/register", validateSchema(registerSchema), usersController.registerNew);
usersRouter.post("/login", validateSchema(loginSchema), usersController.login);

export default usersRouter
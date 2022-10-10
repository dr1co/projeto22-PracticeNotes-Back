import express from 'express';

import validateSchema from '../middlewares/validateSchemaMiddleware';
import piecesSchema from '../schemas/piecesSchema';

const piecesRouter = express.Router();

// piecesRouter.post("/pieces", validateSchema(piecesSchema), piecesController.addNew);

export default piecesRouter;
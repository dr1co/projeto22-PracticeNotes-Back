import joi from 'joi';

const piecesSchema = joi.object({
    name: joi.string().required(),
    fileUrl: joi.string().required().pattern(/[a-zA-Z0-9]+\.pdf/),
    composerId: joi.number(),
    userId: joi.number().required()
});

export default piecesSchema
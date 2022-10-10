import joi from 'joi';

export const registerSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().required(),
    confirm: joi.string().required().valid(joi.ref('password'))
});

export const loginSchema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
    confirm: joi.string().required().valid(joi.ref('password'))
});
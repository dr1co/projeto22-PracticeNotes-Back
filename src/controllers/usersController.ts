import { Request, Response } from 'express';

import handleError from '../utils/errorUtils';
import * as usersServices from '../services/usersServices';

export async function registerNew(req: Request, res: Response) {
    const { body: newRegistration } = req;

    try {
        await usersServices.register(newRegistration);

        res.status(201).send("User created successfully!");
    } catch (err: any) {
        if (err.code) {
            const statusCode = handleError(err.code);
            return res.status(statusCode).send(err.message);
        }
        res.status(500).send("On usersControllers.registerNew: " + err);
    }
}

export async function login(req: Request, res: Response) {
    const { body: user } = req;

    try {
        await usersServices.login(user);

        res.status(200).send("Logged in successfully");
    } catch (err: any) {
        if (err.code) {
            const statusCode = handleError(err.code);
            return res.status(statusCode).send(err.message);
        }
        res.status(500).send("On usersControllers.registerNew: " + err);
    }
}

export async function clearAll(req: Request, res: Response) {
    try {
        await usersServices.clearDb();

        res.sendStatus(203);
    } catch (err: any) {
        res.status(500).send("On usersControllers.clearAll: " + err);
    }
}
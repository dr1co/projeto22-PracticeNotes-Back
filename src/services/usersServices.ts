import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import * as usersRepository from '../repositories/usersRepository';

dotenv.config();
const jwtKey = process.env.JWT_SECRET || "practicenotes";

export async function register(newUser: Omit<usersRepository.IUser, "id">) {
    try {
        const findUser = await usersRepository.findByEmail(newUser.email);

        if (findUser) {
            throw { code: "EmailUsed", message: "On usersServices.register: Could not register new user: email already in use" };
        }

        await usersRepository.createNew(newUser);
    } catch (err: any) {
        if (err.code) throw err;
        throw { code: "ServerError", message: "On usersServices.register: " + err };
    }
}

export async function login(user: Omit<usersRepository.IUser, "id, confirm">) {
    try {
        const findUser = await usersRepository.findByEmail(user.email);

        if (!findUser || bcrypt.compareSync(user.email, findUser.email)) {
            throw { code: "Unauthorized", message: "On usersServices.register: invalid email/password" };
        }

        const week = 60*60*24*7;
        const token = jwt.sign(findUser, jwtKey, { expiresIn: week });

        return token;
    } catch (err: any) {
        if (err.code) throw err;
        throw { code: "ServerError", message: "On usersServices.register: " + err };
    }
}

export async function clearDb() {
    try {
        await usersRepository.deleteAllData();
    } catch (err) {
        throw err;
    }
}
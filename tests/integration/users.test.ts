import supertest from 'supertest';

import app from '../../src/app';
import { createRandomRegister } from '../factory';

beforeAll(async () => {
    await supertest(app).get("/reset/users");
});

describe("Tests POST on /register", () => {
    it("Successfully creates new user", async () => {
        const newRegistration = createRandomRegister();

        const { status } = await supertest(app).post("/register").send(newRegistration);

        expect(status).toEqual(201);
    });
});
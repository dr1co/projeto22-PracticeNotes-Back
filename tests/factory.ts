import { faker } from '@faker-js/faker';

export function createRandomRegister() {
    const password = faker.internet.password();

    return {
        username: faker.internet.userName(),
        email: "test@gmail.com",
        password,
        confirm: password
    };
}
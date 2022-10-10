import * as usersServices from '../../src/services/usersServices';
import { createRandomRegister } from '../factory';
import * as usersRepository from '../../src/repositories/usersRepository';

describe("Tests register function", async () => {
    const newRegistration = createRandomRegister();

    jest.spyOn(usersRepository, "findByEmail").mockResolvedValueOnce(null);
    jest.spyOn(usersRepository, "createNew").mockImplementationOnce((): any => {
        return newRegistration
    });

    await usersServices.register(newRegistration);

    expect(usersRepository.createNew).toBeCalledTimes(1);
})
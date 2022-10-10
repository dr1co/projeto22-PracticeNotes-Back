import prisma from '../databases/prisma';

export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string,
    confirm: string
}

export async function createNew(newUser: Omit<IUser, "id">) {
    const { username, email, password } = newUser;

    return await prisma.users.create({
        data: {
            username,
            email,
            password
        }
    });
}

export async function findByEmail(email: string) {
    return await prisma.users.findUnique({
        where: {
            email
        }
    });
}

export async function deleteAllData() {
    return await prisma.users.deleteMany();
}
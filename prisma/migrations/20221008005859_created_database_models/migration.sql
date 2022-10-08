-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "composers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "composers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pieces" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "file" BYTEA NOT NULL,
    "composerId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "pieces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercises" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "composers_name_key" ON "composers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pieces_name_userId_key" ON "pieces"("name", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Exercises_name_userId_key" ON "Exercises"("name", "userId");

-- AddForeignKey
ALTER TABLE "pieces" ADD CONSTRAINT "pieces_composerId_fkey" FOREIGN KEY ("composerId") REFERENCES "composers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pieces" ADD CONSTRAINT "pieces_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

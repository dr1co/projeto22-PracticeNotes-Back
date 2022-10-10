/*
  Warnings:

  - You are about to drop the `Exercises` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exercises" DROP CONSTRAINT "Exercises_userId_fkey";

-- DropTable
DROP TABLE "Exercises";

-- CreateTable
CREATE TABLE "exercises" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "exercises_name_userId_key" ON "exercises"("name", "userId");

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

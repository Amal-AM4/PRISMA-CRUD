/*
  Warnings:

  - You are about to drop the `StudentModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentModel" DROP CONSTRAINT "StudentModel_subjectId_fkey";

-- DropTable
DROP TABLE "StudentModel";

-- CreateTable
CREATE TABLE "tbl_student" (
    "id" SERIAL NOT NULL,
    "std_uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "tbl_student_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_student" ADD CONSTRAINT "tbl_student_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "tbl_subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

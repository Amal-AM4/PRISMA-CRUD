/*
  Warnings:

  - A unique constraint covering the columns `[std_uuid]` on the table `tbl_student` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tbl_student_std_uuid_key" ON "tbl_student"("std_uuid");

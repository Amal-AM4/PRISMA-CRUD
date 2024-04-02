-- CreateTable
CREATE TABLE "StudentModel" (
    "id" SERIAL NOT NULL,
    "std_uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "StudentModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StudentModel" ADD CONSTRAINT "StudentModel_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "tbl_subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

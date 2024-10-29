-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "historyId" TEXT;

-- CreateTable
CREATE TABLE "history" (
    "id" TEXT NOT NULL,
    "created-at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated-at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "history"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "userBuyerId" TEXT;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_userBuyerId_fkey" FOREIGN KEY ("userBuyerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

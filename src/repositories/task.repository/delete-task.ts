import { prisma } from "@/lib/prisma"

export async function deleteTask(id: string) {

    await prisma.task.delete({
        where: {
            id
        },
    })
}
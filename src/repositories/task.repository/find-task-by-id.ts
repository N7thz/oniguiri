import { prisma } from "@/lib/prisma"

export async function findTaskById(id: string) {

    const task = await prisma.task.findUnique({
        where: {
            id
        },
    })

    if (!task) return {
        error: "Task not exist."
    }

    return { task }
}
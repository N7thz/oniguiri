import { prisma } from "@/lib/prisma"

export async function findTaskByName(name: string) {

    const task = await prisma.task.findUnique({
        where: {
            name
        }
    })

    if (!task) return {
        error: "Task not exist."
    }

    return { task }
}
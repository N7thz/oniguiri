import { prisma } from "@/lib/prisma"

export async function findAllTasks() {

    const tasks = await prisma.task.findMany({
        include: {
            user: true,
            userBuyer: true
        },
        where: {
            wasBought: false
        },
        orderBy: {
            createdAt: "asc"
        }
    })

    return { tasks }
}
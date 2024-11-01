import { prisma } from "@/lib/prisma"

export async function removeUserBuyerTask(id: string) {

    const task = await prisma.task.update({
        where: {
            id
        },
        data: {
            userBuyerId: null
        }
    })

    return { task }
}

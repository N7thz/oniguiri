import { prisma } from "@/lib/prisma"

interface AddUserBuyerTaskProps {
    id: string
    userBuyerId: string
}

export async function addUserBuyerTask({
    id, userBuyerId
}: AddUserBuyerTaskProps) {

    const task = await prisma.task.update({
        where: {
            id
        },
        data: {
            userBuyerId
        }
    })

    return { task }
}

import { prisma } from "@/lib/prisma"

interface CreateUserRequest {
    email: string
    image: string
    name: string
}

export function UserRepository() {

    async function findUserByEmail(email: string) {

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) return {
            error: "User not exist."
        }

        return { user }
    }

    async function createUser(data: CreateUserRequest) {

        const user = await prisma.user.create({
            data
        })

        return { user }
    }

    return {
        createUser,
        findUserByEmail
    }
}

import { Task, User } from "@prisma/client"
import { FormCreateTaskType } from "./forms-type"

export interface CreateTaskResquest extends FormCreateTaskType {
    userName: string
    email: string
    image: string
}

export interface UpdateTaskResquest extends FormCreateTaskType {
    id: string
}

export type Item = Task & {
    user: User
    userBuyer?: User 
}
export interface ContextProps {
    params: {
        id: string
    }
}
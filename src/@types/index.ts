import { Task, User } from "@prisma/client"
import { FormCreateTaskType } from "./forms-type"

export interface CreateTaskResquest extends FormCreateTaskType {
    userName: string
    email: string
    image: string
}

export interface Item extends Task {
    user: User
}
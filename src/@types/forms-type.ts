import { z } from "zod"
import { FormCreateTaskSchema } from "@/schemas/form-create-task-schema"

export type FormCreateTaskType = z.infer<typeof FormCreateTaskSchema>
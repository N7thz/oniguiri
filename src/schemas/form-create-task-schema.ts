import { z } from "zod"

export const FormCreateTaskSchema = z.object({
    name: z
        .string()
        .min(2, { message: "O nome do item é obrigatório." })
        .max(255, { message: "O nome é muito longo." }),
    quantity: z
        .string()
        .min(1, { message: "A quantidade de itens é obrigatória." })
        .max(4, { message: "Quantidade pode ser no maximo 9999." })
        .transform(quantity => Number(quantity)),
    unit: z
        .enum(["KG", "MG", "UN", "DZ", "LT"]),
    obs: z
        .string()
        .max(255, { message: "A obs é muito longa." })
        .optional()
})
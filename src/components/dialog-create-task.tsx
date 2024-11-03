"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { FormCreateTask } from "./forms/form-create-task"
import { useState } from "react"
import { cn } from "@/lib/utils"

export const DialogCreateTask = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogTrigger asChild>
                <Button className="max-sm:w-full">
                    <Plus />
                    Adicionar item
                </Button>
            </DialogTrigger>
            <DialogContent className={cn(
                "sm:max-w-[425px] rounded-lg",
                "max-sm:w-10/12"
            )}>
                <DialogHeader>
                    <DialogTitle>Criar item</DialogTitle>
                    <DialogDescription>
                        Crie o item que deve ser adicionado a lista
                    </DialogDescription>
                </DialogHeader>
                <FormCreateTask setIsOpen={setIsOpen} />
                <DialogFooter>
                    <Button
                        form="form-create-task"
                        type="submit"
                    >
                        Confirmar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

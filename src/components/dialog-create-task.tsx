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

export const DialogCreateTask = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogTrigger asChild>
                <Button>
                    <Plus />
                    Adicionar item
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
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

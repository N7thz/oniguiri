import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Pen } from "lucide-react"
import { ButtonTaskProps } from "@/@types"
import { FormUpdateTask } from "@/components/forms/form-update-task"
import { useState } from "react"
import { cn } from "@/lib/utils"

export const ButtonEditTask = ({ setIsVisible, item }: ButtonTaskProps) => {

    const [isOpen, setIsOpen] = useState(false)

    function onOpenChange(_: boolean) {
        setIsOpen(open => !open)
        setIsVisible(open => !open)
    }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={onOpenChange}
        >
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="w-full justify-normal"
                >
                    <Pen className="size-4" />
                    Editar
                </Button>
            </DialogTrigger>
            <DialogContent className={cn(
                "sm:max-w-[425px] rounded-lg",
                "max-sm:w-10/12"
            )}>
                <DialogHeader>
                    <DialogTitle>Atualizar item</DialogTitle>
                    <DialogDescription>
                        Atualize um item já criado.
                    </DialogDescription>
                </DialogHeader>
                <FormUpdateTask
                    id={item.id}
                    setIsOpen={setIsOpen}
                />
                <DialogFooter>
                    <Button
                        type="submit"
                        form="form-update-task"
                    >
                        Atualizar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
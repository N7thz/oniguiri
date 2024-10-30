import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Pen } from "lucide-react"
import { Item } from "@/@types"
import { FormUpdateTask } from "./forms/form-update-task"

interface ButtonEditTaskProps {
    setIsVisible: (visible: boolean) => void
    item: Item
}

export const ButtonEditTask = ({ setIsVisible, item }: ButtonEditTaskProps) => {

    console.log(item.id)

    return (
        <Dialog onOpenChange={setIsVisible}>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => setIsVisible(true)}
                >
                    <Pen className="size-4" />
                    Editar
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Atualizar item</DialogTitle>
                    <DialogDescription>
                        Atualize um item já criado.
                    </DialogDescription>
                </DialogHeader>
                <FormUpdateTask item={item} />
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { ButtonTaskProps } from "@/@types"
import { useState } from "react"
import { http } from "@/http"
import { toast } from "@/lib/toast"
import { useUser } from "@/providers/user-provider"

export const ButtonRemoveTask = ({
    item: { id, name, userBuyer }, setIsVisible
}: ButtonTaskProps) => {

    const [isOpen, setIsOpen] = useState(false)


    const { invalidateQuery } = useUser()

    function onOpenChange(_: boolean) {
        setIsOpen(open => !open)
        setIsVisible(open => !open)
    }

    function removeTask(id: string) {

        http
            .removeTask(id)
            .then(() => {

                toast({
                    title: "Item excluido com sucesso.",
                    variant: "sucess"
                })

                setTimeout(invalidateQuery, 1000)
            })
            .catch(err => {
                console.log(err)

                toast({
                    title: "Erro ao excluir o item.",
                    variant: "error"
                })
            })
            .finally(() => setIsOpen(false))
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
                    <Trash2 className="size-4" />
                    Remover
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Remover item</DialogTitle>
                    <DialogDescription>
                        Remover um item já criado.
                    </DialogDescription>
                </DialogHeader>
                <div className="text-destructive text-xl">
                    Tem certeza que deseja excluir o item
                    <span className="ml-2 uppercase font-bold">
                        {name}
                    </span>
                    ?
                </div>
                <DialogFooter>
                    <DialogClose>
                        <Button>
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button
                        variant="destructive"
                        onClick={() => removeTask(id)}
                    >
                        Confirmar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
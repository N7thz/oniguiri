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
import { Plus } from "lucide-react"
import { Item } from "@/@types"
import { Dispatch, SetStateAction, useState } from "react"
import { useHttp } from "@/http"
import { toast } from "@/lib/toast"
import { useUser } from "@/providers/user-provider"

interface ButtonEditTaskProps {
    item: Item
    setIsVisible: Dispatch<SetStateAction<boolean>>
}

export const ButtonAddTaskToUser = ({
    item: { id, name }, setIsVisible
}: ButtonEditTaskProps) => {

    const [isOpen, setIsOpen] = useState(false)

    const http = useHttp()
    const { invalidateQuery, user: { email } } = useUser()

    function onOpenChange(_: boolean) {
        setIsOpen(open => !open)
        setIsVisible(open => !open)
    }

    function addTaskToUserBuyer() {

        http
            .addTaskToUserBuyer({ id, email })
            .then(() => {

                toast({
                    title: "Item adicionado com sucesso.",
                    variant: "sucess"
                })

                setTimeout(invalidateQuery, 1000)
            })
            .catch(err => {
                console.log(err)

                toast({
                    title: "Erro ao adicionar o item.",
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
                    <Plus className="size-4" />
                    Adicionar a mim
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Remover item</DialogTitle>
                    <DialogDescription>
                        Remover um item já criado.
                    </DialogDescription>
                </DialogHeader>
                <div className="text-xl">
                    Tem certeza que deseja comprar o item
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
                    <Button onClick={addTaskToUserBuyer}>
                        Confirmar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
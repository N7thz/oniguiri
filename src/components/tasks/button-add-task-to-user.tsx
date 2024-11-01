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
import { Minus, Plus } from "lucide-react"
import { ButtonTaskProps } from "@/@types"
import { useState } from "react"
import { http } from "@/http"
import { toast } from "@/lib/toast"
import { useUser } from "@/providers/user-provider"

export const ButtonAddTaskToUser = ({
    item: { id, name, userBuyer }, setIsVisible
}: ButtonTaskProps) => {

    const [isOpen, setIsOpen] = useState(false)

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
            .finally(() => onOpenChange(false))
    }

    function removeTaskToUserBuyer() {

        http
            .removeTaskToUserBuyer(id)
            .then(() => {

                toast({
                    title: "Item removido com sucesso.",
                    variant: "sucess"
                })

                setTimeout(invalidateQuery, 1000)
            })
            .catch(err => {
                console.log(err)

                toast({
                    title: "Erro ao remover o item.",
                    variant: "error"
                })
            })
            .finally(() => setIsOpen(false))
    }

    const userBuyerExist = userBuyer !== undefined && userBuyer !== null

    const isMyItem = userBuyer?.email === email

    const Icon = isMyItem ? Minus : Plus

    const action = isMyItem ? "remover" : "comprar"

    return (
        <Dialog
            open={isOpen}
            onOpenChange={onOpenChange}
        >
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="w-full justify-normal"
                    disabled={userBuyerExist && !isMyItem}
                >
                    <Icon className="size-4" />
                    {isMyItem ? "Remover de mim" : "Adicionar a mim"}

                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {isMyItem ? "Remover item" : "Adicionar item"}
                    </DialogTitle>
                    <DialogDescription>
                        {
                            isMyItem
                                ? "Remover item adicionado"
                                : " Adicionar um item a mim"
                        }
                    </DialogDescription>
                </DialogHeader>
                <div className="text-xl">
                    {`Tem certeza que deseja ${action} o item`}
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
                    <Button onClick={
                        isMyItem ? removeTaskToUserBuyer : addTaskToUserBuyer
                    }>
                        Confirmar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
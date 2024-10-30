import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonEditTask } from "./button-edit-task"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Item } from "@/@types"

export const DropMenuItemOptions = ({ item }: { item: Item }) => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Ellipsis />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cn(isVisible && "hidden")}>
                <DropdownMenuLabel>Opções</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <ButtonEditTask
                    setIsVisible={setIsVisible}
                    item={item}
                />
                <DropdownMenuItem>
                    <Trash className="size-4" />
                    Excluir
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
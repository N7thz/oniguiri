import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonEditTask } from "@/components/tasks/button-edit-task"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Item } from "@/@types"
import { ButtonRemoveTask } from "./button-remove-task"
import { ButtonAddTaskToUser } from "./button-add-task-to-user"

export const DropMenuItemOptions = ({ item }: { item: Item }) => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Ellipsis />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cn("w-52", isVisible && "hidden")}>
                <DropdownMenuLabel>Opções</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <ButtonEditTask
                    item={item}
                    setIsVisible={setIsVisible}
                />
                <ButtonRemoveTask
                    item={item}
                    setIsVisible={setIsVisible}
                />
                <ButtonAddTaskToUser
                    item={item}
                    setIsVisible={setIsVisible}
                />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
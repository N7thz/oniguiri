import {
    Card, CardHeader, CardTitle, CardDescription, CardContent,
    CardFooter
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Item } from "@/@types"
import { Ellipsis } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropMenuItemOptions } from "@/components/drop-menu-item-options"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export const TaskItem = ({ item }: { item: Item }) => {

    const {
        name,
        obs,
        unit,
        quantity,
        createdAt,
        user: { image }
    } = item

    const date = format(createdAt, "PPp", { locale: ptBR })

    return (
        <li className="w-full">
            <Card className="size-full">
                <CardHeader>
                    <CardTitle className="w-full flex justify-between items-center text-3xl">
                        <span className="capitalize">
                            {name}
                        </span>
                    </CardTitle>
                    <CardDescription>
                        {date}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 text-lg">
                            <span>
                                {quantity}
                            </span>
                            <span>
                                {unit}
                            </span>
                        </div>
                        <div
                            className="flex flex-col items-center gap-2 text-muted-foreground"
                        >
                            Adicionado por:
                            <Avatar>
                                <AvatarImage src={image} />
                                <AvatarFallback>
                                    <Ellipsis />
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div>
                        Obs:
                        <span className={cn(
                            "ml-2",
                            !obs && "text-muted-foreground"
                        )}>
                            {obs ? obs : "Sem observação."}
                        </span>
                    </div>
                </CardContent>
                <CardFooter className="justify-end">
                    <DropMenuItemOptions item={item} />
                </CardFooter>
            </Card>
        </li>
    )
}

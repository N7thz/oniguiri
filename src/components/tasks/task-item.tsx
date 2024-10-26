import { Task, User } from "@prisma/client"
import {
    Card, CardHeader, CardTitle, CardDescription, CardContent,
    CardFooter
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Item } from "@/@types"
import { Ellipsis } from "lucide-react"
import { Button } from "../ui/button"

export const TaskItem = ({ item }: { item: Item }) => {

    const {
        name,
        obs,
        unit,
        quantity,
        wasBought,
        createdAt,
        user: {
            imageUrl
        }
    } = item

    console.log(imageUrl)

    return (
        <li className="w-full">
            <Card className="size-full">
                <CardHeader>
                    <CardTitle
                        className="w-full flex justify-between items-center text-3xl"
                    >
                        <span className="capitalize">
                            {name}
                        </span>
                        <Checkbox
                            checked={wasBought}
                            className="size-8"
                        />
                    </CardTitle>
                    <CardDescription>
                        {createdAt.toString()}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between">
                    <div className="flex gap-2">
                        <span>
                            {quantity}
                        </span>
                        <span>
                            {unit}
                        </span>
                    </div>
                    <div
                        className="flex flex-col text-muted-foreground items-center gap-2"
                    >
                        Adicionado por:
                        <Avatar>
                            <AvatarImage src={imageUrl} />
                            <AvatarFallback>
                                <Ellipsis />
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </CardContent>
                <CardFooter className="justify-end">
                    <Button variant={"outline"}>
                        <Ellipsis />
                    </Button>
                </CardFooter>
            </Card>
        </li>
    )
}

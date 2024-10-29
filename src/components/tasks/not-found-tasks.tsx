import { ShoppingBasket } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const NotFoundTasks = () => {
    return (
        <div className="w-full flex items-center justify-between px-4 gap-3">
            <Separator className="w-[36%] h-[2px]" />
            <span className="italic text-3xl flex items-center gap-2 whitespace-nowrap">
                sem items
                <ShoppingBasket className="size-8" />
            </span>
            <Separator className="w-[36%] h-[2px]" />
        </div>
    )
}

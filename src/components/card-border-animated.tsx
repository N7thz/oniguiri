import ShineBorder from "@/components/ui/shine-border"
import { ComponentProps } from "react"
import { Card as CardPrimitive } from "./ui/card"
import { cn } from "@/lib/utils"

interface CardProps extends ComponentProps<"div"> {
    colors?: string[]
}

export const Card = ({
    children, colors = ["#6366f1", "#8b5cf6", "#ec4899"], className, ...props
}: CardProps) => {
    return (
        <ShineBorder
            className="w-96 flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={colors}
        >
            <CardPrimitive
                className={cn("border-none size-full", className)}
                {...props}
            >
                {children}
            </CardPrimitive>
        </ShineBorder>
    )
}

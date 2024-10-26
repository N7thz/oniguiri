"use client"

import { useSession } from "next-auth/react"
import { ComponentProps } from "react"

export const PagePrivete = ({ children, ...props }: ComponentProps<"div">) => {

    useSession({ required: true })

    return (
        <div {...props}>
            {children}
        </div>
    )
}

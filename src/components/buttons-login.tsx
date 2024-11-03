"use client"

import { useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Icon } from "./icon"
import { cn } from "@/lib/utils"

export const ButtonsLogin = () => {

    const { status } = useSession()

    const { push } = useRouter()

    useEffect(() => {

        status === "authenticated" && push("/home")

    }, [push, status])

    return (
        <div className={cn(
            "w-full flex justify-around gap-2",
            "max-sm:flex-col"
        )}>
            <Button
                onClick={() => signIn("google")}
                className="w-full"
            >
                <Icon
                    src="/google-icon.svg"
                    alt="google-icon"
                />
                Google
            </Button>
            <Button
                onClick={() => signIn("github")}
                className="w-full"
            >
                <Icon
                    src="/github-icon.svg"
                    alt="github-icon"
                />
                Github
            </Button>
        </div>
    )
}

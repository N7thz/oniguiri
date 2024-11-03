"use client"

import { useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Icon } from "./icon"

export const ButtonsLogin = () => {

    const { status } = useSession()

    const { push } = useRouter()

    console.log(status)

    useEffect(() => {

        status === "authenticated" && push("/home")

    }, [push, status])

    return (
        <div className="w-full flex justify-around gap-2">
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

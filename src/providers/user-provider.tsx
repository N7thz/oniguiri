"use client"

import { useSession } from "next-auth/react"
import { createContext, ReactNode, useContext, useState } from "react"

type User = {
    name: string
    email: string
    image: string
}

interface UserContextProps {
    user: User
}

const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: { children: ReactNode }) {

    const { data } = useSession()

    if (!data || !data.user) return

    const user = data.user as User

    const value: UserContextProps = { user }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
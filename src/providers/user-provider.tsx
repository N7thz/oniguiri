"use client"

import Home from "@/app/page"
import { useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { createContext, ReactNode, useContext, useState } from "react"

type User = {
    name: string
    email: string
    image: string
}

interface UserContextProps {
    user: User
    invalidateQuery: () => void
}

const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: { children: ReactNode }) {

    const { data } = useSession()

    const queryClient = useQueryClient()

    function invalidateQuery() {
        queryClient.invalidateQueries({
            queryKey: ["find-all-tasks"]
        })
    }

    if (!data || !data.user) return <Home />


    const user = data.user as User

    const value: UserContextProps = {
        user,
        invalidateQuery
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useApplication = () => useContext(UserContext)
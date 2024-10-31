import { NextRequest } from "next/server"
import { Get } from "./get"
import { Put } from "./put"
import { Delete } from "./delete"

export interface ContextProps {
    params: {
        id: string
    }
}

export async function GET(_: NextRequest, context: ContextProps) {
    return Get(context)
}

export async function PUT(request: NextRequest, context: ContextProps) {
    return Put(request, context)
}

export async function DELETE(_: NextRequest, context: ContextProps) {
    return Delete(context)
} 
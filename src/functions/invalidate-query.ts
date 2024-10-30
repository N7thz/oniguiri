import { QueryClient } from "@tanstack/react-query"

type QueryKey = "find-task-by-id" | "find-all-tasks"

interface InvalidateQueryProps {
    queryKey: [QueryKey, string],
    queryClient: QueryClient
}

export function invalidateQuery({
    queryClient, queryKey
}: InvalidateQueryProps) {

    queryClient.invalidateQueries({
        queryKey
    })
}
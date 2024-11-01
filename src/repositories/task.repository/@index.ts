import { addUserBuyerTask } from "./add-user-buyer-task"
import { createTask } from "./create-task"
import { deleteTask } from "./delete-task"
import { findAllTasks } from "./find-all-tasks"
import { findTaskById } from "./find-task-by-id"
import { findTaskByName } from "./find-task-by-name"
import { updateTask } from "./update-task"

export function TaskRepository() {
    return {
        addUserBuyerTask,
        createTask,
        updateTask,
        deleteTask,
        findTaskByName,
        findTaskById,
        findAllTasks
    }
}

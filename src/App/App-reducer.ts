import {v1} from 'uuid';

const initialState = {
    tasks: [
        {taskId: v1(), text: 'text', taskCheck: false}
    ] as TaskType[]
}

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/UPDATE-TASK-STATUS':
            return {
                ...state,
                tasks: state.tasks.map(t => t.taskId === action.taskId ? {...t, taskCheck: !t.taskCheck} : t)
            }
        case 'APP/ADD-TASK':
            const task = {taskId: v1(), text: action.text, taskCheck: false}
            return {...state, tasks: [...state.tasks, task]}
        case "APP/DELETE-TASK":
            return {...state, tasks: state.tasks.filter(t => !t.taskCheck)}
        default:
            return {...state}
    }
}

export const updateTaskStatusAC = (taskId: string) => ({type: 'APP/UPDATE-TASK-STATUS', taskId} as const)
export const addTaskAC = (text: string) => ({type: 'APP/ADD-TASK', text} as const)
export const deleteTaskAC = () => ({type: 'APP/DELETE-TASK'} as const)


export type InitialStateType = typeof initialState
export type UpdateTaskStatusActionType = ReturnType<typeof updateTaskStatusAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type DeleteTaskActionType = ReturnType<typeof deleteTaskAC>

type ActionsType =
    | UpdateTaskStatusActionType
    | AddTaskActionType
    | DeleteTaskActionType

export type TaskType = {
    taskId: string
    text: string
    taskCheck: boolean
}
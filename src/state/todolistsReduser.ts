import {todolistType} from "../App";
import {v1} from "uuid";


export type actionType = {
    type: string
    [key: string]: any
}

export const todolistsReducer = (state: todolistType[], action: actionType): todolistType[] => {
    switch (action.type) {
        case "remTodolist":
            return state.filter(tl => tl.id !== action.id)
        case "addTodolist":
            return [
                ...state,
                {
                    id: v1(),
                    todolistTitle: action.todolistTitle,
                    filterCond: "All"
                }
            ]
        case "changeTodolistTitle":
            const updatedTodolist = state.find(tl => tl.id === action.id)
            if (updatedTodolist) {
                updatedTodolist.todolistTitle = action.updatedTodolistTitle
                return [...state]
            } else {
                throw new Error("todolist.id is not correct")
            }
        default:
            throw new Error("action.type is not correct")
    }
}
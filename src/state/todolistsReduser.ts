import {CondType, todolistType} from "../App";
import {v1} from "uuid";

export type actionType = remTodolistActionType
    | addTodolistActionType
    | changeTodolistTitleActionType
    | changeFilterCondActionType
type remTodolistActionType = {
    type: "remTodolist"
    id: string
}
type addTodolistActionType = {
    type: "addTodolist"
    todolistTitle: string
}
type changeTodolistTitleActionType = {
    type: "changeTodolistTitle"
    id: string
    updatedTodolistTitle: string
}
type changeFilterCondActionType = {
    type: "changeFilterCond"
    id: string
    updatedFilterCond: CondType
}

export const remTodolistAC = (id: string): remTodolistActionType => ({
    type: "remTodolist",
    id: id
})
export const addTodolistAC = (todolistTitle:string):addTodolistActionType => ({
    type: "addTodolist",
    todolistTitle: todolistTitle
})
export const changeTodolistTitleAC = (id:string, updatedTodolistTitle:string):changeTodolistTitleActionType =>({
    type: "changeTodolistTitle",
    id: id,
    updatedTodolistTitle: updatedTodolistTitle
})
export const changeFilterCondAC = (id:string,updatedFilterCond: CondType):changeFilterCondActionType=>({
    type: "changeFilterCond",
    id: id,
    updatedFilterCond: updatedFilterCond
})

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
            const updatedTodolist1 = state.find(tl => tl.id === action.id)
            if (updatedTodolist1) {
                updatedTodolist1.todolistTitle = action.updatedTodolistTitle
                return [...state]
            } else {
                throw new Error("todolist.id is not correct, so todolistTitle cannot be changed")
            }
        case "changeFilterCond":
            const updatedTodolist2 = state.find(tl => tl.id === action.id)
            if (updatedTodolist2) {
                updatedTodolist2.filterCond = action.updatedFilterCond
                return [...state]
            } else {
                throw new Error("todolist.id is not correct, so todolist filterCond cannot be changed")
            }
        default:
            throw new Error("action.type is not correct")
    }
}
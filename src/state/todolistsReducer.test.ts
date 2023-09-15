import {CondType, todolistType} from "../App";
import {v1} from "uuid";
import {
    actionType,
    addTodolistAC,
    changeFilterCondAC,
    changeTodolistTitleAC,
    remTodolistAC,
    todolistsReducer
} from "./todolistsReduser";

let initialState: todolistType[]
let todolistId1: string
let todolistId2: string

beforeEach(() => {

        todolistId1 = v1()
        todolistId2 = v1()

        initialState = [
            {id: todolistId1, todolistTitle: "What to learn?", filterCond: "All"},
            {id: todolistId2, todolistTitle: "What to buy?", filterCond: "All"}
        ]

    })

test("Correct todolist should be removed", () => {

    //data
    // const action = {type: "remTodolist", id: todolistId1}
    const action = remTodolistAC(todolistId1)

    // action
    const updatedState: todolistType[] = todolistsReducer(initialState, action)

    // expectation
    expect(updatedState.length).toBe(1)
    expect(updatedState[0].id).toBe(todolistId2)

})

test("Correct todolist should be added", () => {
    // data
    const newTodolistTitle: string = "New Todolist"
    // const action: actionType = {type: "addTodolist", todolistTitle: newTodolistTitle}
    const action: actionType = addTodolistAC(newTodolistTitle)

    // action
    const updatedState = todolistsReducer(initialState, action)

    // expectation
    expect(updatedState.length).toBe(3)
    expect(updatedState[2].todolistTitle).toBe(newTodolistTitle)
    expect(updatedState[2].filterCond).toBe("All")

})

test("Correct todolist should change its title", () => {

    // data
    const updatedTodolistTitle: string = "Updated todolistTitle"
    // const action: actionType = {
    //     type: "changeTodolistTitle",
    //     id: todolistId2,
    //     updatedTodolistTitle: updatedTodolistTitle
    // }
    const action: actionType = changeTodolistTitleAC(todolistId2, updatedTodolistTitle)

    // action
    const updatedState = todolistsReducer(initialState, action)

    // expectation
    expect(updatedState[0].todolistTitle).toBe("What to learn?")
    expect(updatedState[1].todolistTitle).toBe("Updated todolistTitle")

})

test("incorrect id number for changing the todolist title should cause an error", () => {
    // data
    const updatedTodolistTitle: string = "Updated todolistTitle"
    // const action: actionType = {
    //     type: "changeTodolistTitle",
    //     id: "1234", // id which does not exist
    //     updatedTodolistTitle: updatedTodolistTitle
    // }

    const action: actionType = changeTodolistTitleAC("1234", updatedTodolistTitle) // id which does not exist

    // expectation
    expect(() => {
        todolistsReducer(initialState, action)
    }).toThrow("todolist.id is not correct, so todolistTitle cannot be changed")

})

test("Correct todolist filter should be changed", () => {
    // data
    const updatedFilterCond: CondType = "Active"
    // const action: actionType = {
    //     type: "changeFilterCond",
    //     id: todolistId1,
    //     updatedFilterCond: updatedFilterCond
    // }
    const action: actionType = changeFilterCondAC(todolistId1,updatedFilterCond)

    // action
    const updatedState = todolistsReducer(initialState, action)

    // expectation
    expect(updatedState[0].filterCond).toBe(updatedFilterCond)

})

test("incorrect id number for changing the todolist filterCond should cause an error", () => {
    // data
    const updatedFilterCond: CondType = "Active"
    // const action: actionType = {
    //     type: "changeFilterCond",
    //     id: "1234", // id which does not exist
    //     updatedFilterCond: updatedFilterCond
    // }
    const action: actionType = changeFilterCondAC("1234",updatedFilterCond) // id which does not exist

    // expectation
    expect(() => {
        todolistsReducer(initialState, action)
    }).toThrow("todolist.id is not correct, so todolist filterCond cannot be changed")

})

// test("action.type 'cucu' should cause an error", () => {
//     // data
//     const action = {type: "cucu"}
//     // expectation
//     expect(() => todolistsReducer(initialState, action)).toThrow("action.type is not correct")
// })


import {actionType, stateType, usersReducer} from "./usersReduser";
import {todolistType} from "../App";
import {v1} from "uuid";
import {todolistsReducer} from "./todolistsReduser";

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

    }
)
test("Correct todolist should be removed", () => {

    //data
    const action: actionType = {type: "remTodolist", id: todolistId1}

    // action
    const updatedState: todolistType[] = todolistsReducer(initialState, action)

    // expectation
    expect(updatedState.length).toBe(1)
    expect(updatedState[0].id).toBe(todolistId2)

})

test("Correct todolist should be added", () => {
    // data
    const newTodolistTitle: string = "New Todolist"
    const action: actionType = {type: "addTodolist", todolistTitle: newTodolistTitle}

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
    const action: actionType = {
        type: "changeTodolistTitle",
        id: todolistId2,
        updatedTodolistTitle: updatedTodolistTitle
    }

    // action
    const updatedState = todolistsReducer(initialState, action)

    // expectation
    expect(updatedState[0].todolistTitle).toBe("What to learn?")
    expect(updatedState[1].todolistTitle).toBe("Updated todolistTitle")

})

test("incorrect id number for changing the todolist title should cause an error", () => {
// data
    const updatedTodolistTitle: string = "Updated todolistTitle"
    const action: actionType = {
        type: "changeTodolistTitle",
        id: "1234", // id which does not exist
        updatedTodolistTitle: updatedTodolistTitle
    }

// expectation
    expect(()=>{todolistsReducer(initialState,action)}).toThrow("todolist.id is not correct")

})

test("action.type 'cucu' should cause an error", () => {
    // data
    const action = {type: "cucu"}
    // expectation
    expect(() => todolistsReducer(initialState, action)).toThrow("action.type is not correct")
})


import {actionType, changeNameAC, incAgeAC, incChildrenCountAC, stateType, usersReducer} from "./usersReduser";

let initialState: stateType

beforeEach(() => {
        initialState = {
            age: 60,
            childrenCount: 2,
            name: "Gago"
        }
    }
)
test("useReducer should increment state.age", () => {

    //data
    // const action: actionType = {type: "incAge"}
    // const action = {type: "incAge" as const}
    const action:actionType = incAgeAC()

    // action
    const updatedState = usersReducer(initialState, action)

    // expectation
    expect(updatedState.age).toBe(61)
    expect(updatedState.childrenCount).toBe(2)

})

test("useReducer should incement state.ChildrenCount", () => {

        // data
        // const action: actionType = {type: "incChildrenCount"}
        const action: actionType = incChildrenCountAC()

        // action
        const updatedState = usersReducer(initialState, action)

        // expectation
        expect(updatedState.age).toBe(60)
        expect(updatedState.childrenCount).toBe(3)

    })

test("Name should be changed to Garegin", ()=>{

    // data
    const newName = "Garegin"
    // const action:actionType = {
    //     type:"changeName",
    //     newName:newName
    // }
    const action:actionType = changeNameAC(newName)

    // action
    const updatedUser = usersReducer(initialState, action)

    // expectation
    expect(updatedUser.name).toBe("Garegin")

})

// test("action.type 'cucu' should cause an Error", ()=>{
//     const action:actionType = {type:"cucu"}
//     expect(()=>usersReducer(initialState, action)).toThrow("action.type is not correct")
// })


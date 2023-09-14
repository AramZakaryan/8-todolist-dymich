import {actionType, stateType, usersReducer} from "./usersReduser";

let initialState: stateType

beforeEach(() => {
        initialState = {
            age: 60,
            childrenCount: 2,
            name: "Gago"
        }
    }
)
test.skip("useReducer should increment state.age", () => {

    //data
    const action: actionType = {type: "incAge"}

    // action
    const updatedState = usersReducer(initialState, action)

    // expectation
    expect(updatedState.age).toBe(61)
    expect(updatedState.childrenCount).toBe(2)

})


test.skip("useReducer should incement state.age", () => {

        // data
        const action: actionType = {type: "incChildrenCount"}

        // action
        const updatedState = usersReducer(initialState, action)

        // expectation
        expect(updatedState.age).toBe(60)
        expect(updatedState.childrenCount).toBe(3)

    }
)

test.skip("Name should be changed to Garegin", ()=>{

    // data

    const newName = "Garegin"

    const action:actionType = {
        type:"changeName",
        newName:"Garegin"
    }

    // action
    const updatedUser = usersReducer(initialState, action)

    // expectation
    expect(updatedUser.name).toBe("Garegin")

})

test.skip("action.type 'cucu' should cause an Error", ()=>{
    const action:actionType = {type:"cucu"}
    expect(()=>usersReducer(initialState, action)).toThrow("action.type is not correct")
})
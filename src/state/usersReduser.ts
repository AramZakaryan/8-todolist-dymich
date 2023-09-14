export type stateType = {
    age:number
    childrenCount: number
    name: string
}

export type actionType = {
    type: string
    [key: string]: any
}

export const usersReducer = (state:stateType, action:actionType):stateType=>{
    switch (action.type) {
        case "incAge":
            return {...state, age: state.age+1}
        case "incChildrenCount":
            return {...state, childrenCount: state.childrenCount+1}
        case "changeName":
            return {...state, name: action.newName}
        default:
            throw new Error("action.type is not correct")
    }
}
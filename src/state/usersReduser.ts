export type stateType = {
    age: number
    childrenCount: number
    name: string
}

export type actionType = incAgeActionType
    | incChildrenCountActionType
    | changeNameActionType
type incAgeActionType = {
    type: "incAge"
}
type incChildrenCountActionType = {
    type: "incChildrenCount"
}
type changeNameActionType = {
    type: "changeName"
    newName: string
}

export const incAgeAC = ():incAgeActionType=>({
    type: "incAge"
})
export const incChildrenCountAC = ():incChildrenCountActionType=>({
    type: "incChildrenCount"
})
export const changeNameAC = (newName: string):changeNameActionType=>({
    type: "changeName",
    newName:newName
})





export const usersReducer = (state: stateType, action: actionType): stateType => {
    switch (action.type) {
        case "incAge":
            return {...state, age: state.age + 1}
        case "incChildrenCount":
            return {...state, childrenCount: state.childrenCount + 1}
        case "changeName":
            return {...state, name: action.newName}
        default:
            throw new Error("action.type is not correct")
    }
}
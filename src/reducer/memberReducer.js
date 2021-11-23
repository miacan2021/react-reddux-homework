const initState = {
    members:[]
}


export const memberReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_MEMBER":
            return {members: [...state.members, action.payload.newPerson]}
        case "DELETE_MEMBER":
            return {members: state.members.filter(person => person.id !== action.payload.id)}
        default:
            return state
    }
}
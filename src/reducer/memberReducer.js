const initState = {
    members:[]
}


export const memberReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_MEMBER":
            const newPerson = {
                id: Math.random(),
                name: 'John',
                age: Math.floor( Math.random() * 40 )
            }
            return {members: [...state.members, newPerson]}
        case "DELETE_MEMBER":
            return {members: state.members.filter(person => person.id !== action.payload.id)}
        default:
            return state
    }
}
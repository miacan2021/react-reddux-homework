
export const personAddedHandler = () =>{
    const newPerson = {
        id: Math.random(),
        name: 'John',
        age: Math.floor( Math.random() * 40 )
    }
    return{
        type: 'ADD_MEMBER',
        payload:{
           newPerson
        }
    }
}


export const personDeletedHandler = (id) => {
　　return{
    type:'DELETE_MEMBER',
    payload:{
        id
    }
    }
}

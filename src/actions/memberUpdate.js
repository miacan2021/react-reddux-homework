
export const personAddedHandler = () =>{
    return{
        type: 'ADD_MEMBER',
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

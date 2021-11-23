import React from 'react';

import './Person.css';

import { connect } from 'react-redux';
import { personDeletedHandler } from '../../actions/memberUpdate';

const Person = ({data, personDeletedHandlerFunc}) => {

    const del = (id) => {
        personDeletedHandlerFunc(id)
    }
    
 return(
    <div>
    {data.map((person,index) => 
        (
        <div className="Person" key={index} onClick={() => del(person.id) }>
        <h1 key={person.name+index}>{person.name}</h1>
        <p key={person.age+index}>Age: {person.age}</p>
        </div>
    ))
    }
    </div>
)
}

const mapStateToProps = (state) => {
    return {
        data: state.members
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        personDeletedHandlerFunc: (id) => dispatch(personDeletedHandler(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Person);
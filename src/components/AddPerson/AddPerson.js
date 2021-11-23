import React from 'react';

import './AddPerson.css';

import { connect } from 'react-redux';
import { personAddedHandler } from '../../actions/memberUpdate';

const AddPerson = ({data, personAddHandlerFunc}) => {
    const add = () => {
        personAddHandlerFunc()
    }

  return(
    <div className="AddPerson">
        <button onClick={() => add()}>Add Person</button>
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
        personAddHandlerFunc: () => dispatch(personAddedHandler())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPerson);
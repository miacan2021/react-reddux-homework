import React from 'react';

import './AddPerson.css';
import { useDispatch } from 'react-redux';
import { personAddedHandler } from '../../actions/memberUpdate';

const AddPerson = () => {
    const dispatch = useDispatch();
    const add = () => {
        dispatch(personAddedHandler());
      }
  return(
    <div className="AddPerson">
        <button onClick={() => add()}>Add Person</button>
    </div>
)
}
export default AddPerson

// const mapStateToProps = (state) => {
//     return {
//         data: state.members
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         add: () => dispatch(personAddedHandler())
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(AddPerson);
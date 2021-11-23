import React from 'react';

import './Person.css';

import { useSelector, useDispatch } from 'react-redux';
import { personDeletedHandler } from '../../actions/memberUpdate';

const Person = () => {
    const data = useSelector((state) => state.members);
    const dispatch = useDispatch();
    const del = (id) => {
        dispatch(personDeletedHandler(id));
      }
 return(
    <div>
    {data.map((person, index) => 
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
export default Person

// const mapStateToProps = (state) => {
//     return {
//         data: state.members
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return{
//        del: (id) => dispatch(personDeletedHandler(id))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Person);
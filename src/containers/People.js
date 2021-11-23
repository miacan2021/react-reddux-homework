import React from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

const People = () => {
    return (
        <div>
            <AddPerson />
            <Person />
        </div>
    );
}
export default People
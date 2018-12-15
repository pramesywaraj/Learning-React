import React from 'react';

import cockpitStyle from './Cockpit.css';

import Persons from '../Persons/Person/Person';

const cockpit = (props) => {
    let buttonClass = '';
    console.log(props.showPersons);
    if(props.showPersons) {
        buttonClass = cockpitStyle.clicked;
    }

    return (
        <div className={cockpitStyle.Cockpit}>
            <button
                className={buttonClass}
                onClick={props.clicked}>Ganti Nama
            </button>
            {/* persons disini adalah variable */}
            {/* {persons} */}
        </div>
    );
};

export default cockpit;
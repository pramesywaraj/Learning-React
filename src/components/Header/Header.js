import React from 'react';
import headerStyle from './Header.css';

import logo from '../../assets/logo.svg';


const header = (props) => {

    let emptyAlert = [];
    let listCondition = ['Tenang KITA disini.'];
    if( props.persons.length <=2 ) {
        listCondition.pop();
        emptyAlert.push(headerStyle.alert);
        listCondition.push('List dibawah 2, harap tenang.');
    }
    
    if( props.persons.length <= 1)
    {
        emptyAlert.push(headerStyle.danger);
        listCondition.pop();
        listCondition.push('Bahaya list telah kosong!');
    }

    return (
        <header className={headerStyle.Header}>
            <img src={logo} className={headerStyle.Header_logo} alt="logo" />
            <p className={emptyAlert.join(' ')}>
                {listCondition}
            </p>
        </header>
    );
};

export default header;
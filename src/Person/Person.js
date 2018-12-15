import React from 'react';
import personStyle from './Person.css';

// import Radium from 'radium';

const Person = (props) => {
    // const personContainerStyle =  {
    //     '@media (min-width: 500px)': {
    //         width : '450px'
    //     }
    // }

    return (
        // <div className="Person" style={personContainerStyle}> // pas pake radium
        <div className={personStyle.Person}>
            <div className={personStyle.Person_content} onClick={props.click}>
                <p>Aku adalah {props.name} seorang Mahasiswa dan aku berumur {props.age}</p>
                <p>{props.children}</p>
            </div>
            
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

// export default Radium(Person);
export default Person;
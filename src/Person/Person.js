import React from 'react';

const Person = (props) => {
    return(
        <div>I'm {props.name}. I'm {props.age} years old</div>
    );
}

export default Person;
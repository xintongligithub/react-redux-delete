import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    return (<div className={classes.Person}>I'm a {props.name} I'm {props.age} years old</div>);
};

export default person;
import React from 'react';


const person = (props) => {
    return <p>I am {props.name} and I am {props.age/*Math.floor(Math.random()*30)*/} years old !!!</p> //allows us to enter dynamic content...
}

export default person;



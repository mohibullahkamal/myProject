import React from 'react';


const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am {props.age/*Math.floor(Math.random()*30)*/} years old !!!</p>  
            <p>{props.children}</p>
        </div>
    )
}
export default person;


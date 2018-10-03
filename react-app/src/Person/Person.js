import React from 'react';


const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am {props.age/*Math.floor(Math.random()*30)*/} years old !!!</p>  
            <p>{props.children}</p>   {/*children is a reserved word in React -> refers to anyword or elements between openning and closing tags of our component; We could nest complex html code too...other React components... could be unordered lists with list items... */}
        </div>
    )
}
export default person;


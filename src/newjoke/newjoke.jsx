import React, { Component } from 'react';
import './newjoke.css';

const NewJoke = (props) => {
    console.log(props)
    return(
        <div className = "newjokediv">
            <div className = "buttondiv">
                <button onClick = {props.newJokeHandler}>Next Joke</button>
            </div>
        </div>
    )
}

export default NewJoke;

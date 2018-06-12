import React from 'react';
import './randomjokes.css';

const RandomJokes = ({joke}) =>{
    if(!joke){
        return <div className = "maindiv">Loading...</div>
    }
    return(
        <div className = "maindiv">
        <p>{joke}</p>
        </div>
    )
}

export default RandomJokes;

import React from 'react';
import './Entry.css';


const entry = (props) => {
    return (
        <>
            {/* <img src={props.data.sprites.back_default} alt={props.data.name}/> */}
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' alt = {props.data.name}/>
            <h3>{props.data.name}</h3>
            <p><strong>Weight : {props.data.weight}</strong></p>
        </>
    )
}


export default entry;
import React from 'react';
import './Country.css'
import { useState } from 'react';

const Country = ({country}) => {


    const [visited,setVisited] =  useState(false)
const handleVisited = () =>{
    setVisited(true)
}

    console.log(country)
    return (
        <div className='country'>
            <h3>Name: {country.name.common} </h3>
            <img src={country.flags.png}></img>
            <p>Independent: {country.independent ? 'Free': 'Not Free'}</p>
            <p>Population: {country.population}</p>
         <button onClick={handleVisited} >{
            visited? "Visited" : "Not Visited"
         }</button>
        </div>
    );
};

export default Country;
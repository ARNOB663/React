import React from 'react';
import './Country.css'
import { useState } from 'react';

const Country = ({country,handleVisitedCountries,  handleVisitedFlag }) => {
 

    const [visited,setVisited] =  useState(false)
const handleVisited = () =>{

    //   if(visited ===  true)
    //   {
    //     setVisited(false)
    //   }
    //   else{
    // setVisited(true)
    //   }

     setVisited(!visited)// if the value is true it turn the value to false if false tuern this into true
     handleVisitedCountries(country)

}
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common} </h3>
            <img src={country.flags.png}></img>
            <p>Independent: {country.independent ? 'Free': 'Not Free'}</p>
            <p>Population: {country.population}</p>
         <button  
         className={visited? 'btn-visited':'btn-not-visited'} 
         onClick={handleVisited} >{
            visited? "Visited" : "Not Visited"
         }</button>
         <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;
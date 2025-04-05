import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';
import { useState } from 'react';
const Countries = ({countriesPromise}) => {
    const [visitedCounrtries,setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])
   
    const countries=use(countriesPromise);

    const handleVisitedFlag = (flag) =>{
        const newVisitedFlags = [...visitedFlags,flag]
         setVisitedFlags(newVisitedFlags)
  console.log(flag)
    }

    const handleVisitedCountries = (country) =>{
        console.log('country vsited clicked to be added',country)
        const newVisitedCountries = [...visitedCounrtries,country]
        setVisitedCountries(newVisitedCountries);
       // visitedCounrty.push(country)
    }
    
    return (
        <div  >
            <h1>Traveling Countries: {countries.length}</h1>
            <h3>Traveled so far: {visitedCounrtries.length}</h3>
            <div className='visited-flags-container'>
               {
                        visitedFlags.map( (flag,index) => <img key={index} src={flag}></img> )
               }
 
            </div>
            <ol>
                {
                    visitedCounrtries.map(country => <li> key={country.cca3} {country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country => <Country 
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlag = {handleVisitedFlag}
                key={country.cca3} country={country} ></Country>)
            }
            </div>
          
        </div>
    );
};

export default Countries;
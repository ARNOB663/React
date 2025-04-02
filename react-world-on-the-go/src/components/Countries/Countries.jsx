import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';
import { useState } from 'react';
const Countries = ({countriesPromise}) => {
    const [visitedCounrtries,setVisitedCountries] = useState([])
   
    const countries=use(countriesPromise);

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
            <ol>
                {
                    visitedCounrtries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country => <Country 
                handleVisitedCountries={handleVisitedCountries}
                key={country.cca3} country={country} ></Country>)
            }
            </div>
          
        </div>
    );
};

export default Countries;
import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        countriesPromise
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
                setLoading(false);
            });
    }, [countriesPromise]);

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
        console.log(flag);
    };

    const handleVisitedCountries = (country) => {
        console.log('Country visited clicked to be added:', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    if (loading) {
        return <h3>Loading countries...</h3>;
    }

    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h3>Traveled so far: {visitedCountries.length}</h3>
            <div className="visited-flags-container">
                {visitedFlags.map((flag, index) => (
                    <img key={index} src={flag} alt="Visited flag" />
                ))}
            </div>
            <ol>
                {visitedCountries.map((country) => (
                    <li key={country.cca3}>{country.name.common}</li>
                ))}
            </ol>
            <div className="countries">
                {countries.map((country) => (
                    <Country
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                        key={country.cca3}
                        country={country}
                    />
                ))}
            </div>
        </div>
    );
};

export default Countries;
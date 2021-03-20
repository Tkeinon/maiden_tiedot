import React, {useEffect, useState} from 'react';
import FilterCountries from "./components/FilterCountries";
import axios from 'axios';
import './App.css';
import ShowCountries from "./components/ShowCountries";


function App() {

    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState();
    const [searchResult, setSearchResult] = useState([])

    const getAllCountries = () => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                    setCountries(countries.concat(response.data))
                }
            )
    }

    useEffect(() => {
        getAllCountries()
    }, [])

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
        // Search by name
        const result = countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()))
        // Add results to setSearchResults
        setSearchResult(result)

    }

    const showCountry = (countryName) => {
        // Search given country
        const searchCountry = countries.filter(country =>
            country.name.includes(countryName)
        );
        setSearchResult(searchCountry)
    }

    return (
        <div style={{marginLeft: "10px"}}>
            <FilterCountries value={search} onChange={handleSearchChange}/>
            <ShowCountries showResult={searchResult} showInfo={showCountry}/>
            <reactTable />
        </div>
    );
}

export default App;

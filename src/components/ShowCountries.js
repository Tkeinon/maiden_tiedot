import React from 'react';
import SearchedCountries from "./SearchedCountries";
import CountryInfo from "./CountryInfo";

const ShowCountries = ( {showResult, showInfo} ) => {

    return (
        showResult.map(result => {
                    if (showResult.length < 10 && showResult.length > 1)
                        return (
                            <SearchedCountries key={result.name} name={result.name}
                                               onClick={() => showInfo(result.name)}/>
                        )
                    else if (showResult.length === 1)
                        return (
                            <CountryInfo
                                key={result.name}
                                name={result.name}
                                capital={result.capital}
                                population={result.population}
                                languages={result.languages}
                                flagUrl={result.flag}/>
                        )
                }
            )
        )

}

export default ShowCountries;
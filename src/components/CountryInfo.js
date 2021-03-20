import React from "react";

const CountryInfo = ({name, capital, population, languages, flagUrl}) => {



    return (
        <>
            <h1><b>{name}</b></h1>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <h2>Languages</h2>
            <ul>
                {languages.map(language => {
                    return(
                        <li key={language.name}>
                            {language.name}
                        </li>
                    )
                })}
            </ul>
            <div>
                <img src={flagUrl} style={{width: "200px", height: "100px"}} alt={name}/>
            </div>

        </>
    )
}

export default CountryInfo;
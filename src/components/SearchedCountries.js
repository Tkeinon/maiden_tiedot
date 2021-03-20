import React from 'react';

const SearchedCountries = ({name, onClick}) =>{

    return (
        <div>
            <p>
                {name}
                <button
                    onClick={onClick}>Show</button>
            </p>
        </div>
    )
}

export default SearchedCountries;
import React from "react";

const FilterCountries = ({search, onChange}) => {

    return (
        <p>
            Search Countries<span style={{marginLeft: "10px"}}/>
            <input type="text"
                   value={search}
                   onChange={onChange}
            />
        </p>
    )
}

export default FilterCountries;
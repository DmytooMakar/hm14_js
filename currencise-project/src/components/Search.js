import React from "react";
import { FormControl } from "react-bootstrap";

function Search({searchByCurrencies}) {
    return <FormControl
    placeholder="Search by currencies"
    aria-label="Search"
    onKeyUp={e => searchByCurrencies(e.currentTarget.value.trim().toLowerCase())}/>
}

export default Search


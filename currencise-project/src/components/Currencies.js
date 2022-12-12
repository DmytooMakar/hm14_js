import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Currency from "./Currency";
import Search from "./Search";

function Currencies(){
    const [currencies, setCurrencies] = useState([]);
    const [filteredCurrencies, setFilteredCurrencies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221208&json')
        .then(res=>res.json())
        .then(data => setCurrencies(data.map(currency => ({
            r030: currency.r030,
            txt: currency.txt,
            rate: currency.rate,
            cc: currency.cc,
        }))));
    }, [])

    function searchByCurrencies(value){
        setSearchValue(value);
        const result = currencies.filter(currency => currency.txt.toLowerCase().includes(value));
        setFilteredCurrencies(result)
    }
    
    return <>
        <Search  searchByCurrencies={searchByCurrencies}/>

        <Table striped bordered hover >
    <thead>
      <tr><th>Name currency</th><th>Index</th><th>Rate</th></tr>
    </thead>
    <tbody>
        {(searchValue.length ? filteredCurrencies : currencies).map(currency => <Currency key={currency.r030} currency={currency}/>)}
    </tbody>
    </Table>
    </>
    
}

export default Currencies
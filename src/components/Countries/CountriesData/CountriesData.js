import React, { useState, useEffect } from "react";
import "./countriesdata.scss";
import { FetchAPIService } from "../../../services/FetchAPIService";
import CountryItem from "../CountryItem/CountryItem";
import Loading from "../../Loading/Loading";

function CountriesData(props) {
    const [countriesData, setCountriesData] = useState([]);
    const [records, sortedRecords] = useState([]);

    useEffect(() => {
        FetchAPIService(`https://corona.lmao.ninja/v2/countries?yesterday&sort&yesterday&sort`)
        .then((result) => {
            setCountriesData(result);
            sortby(result, "cases");
            sortedRecords(result);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);

    const Filter = (event) => {
        sortedRecords((val)=>countriesData.filter(f => f.country.toLowerCase().includes(event.target.value)));
    }

    function sortby(data, covidData) {
        return data.sort((a, b) => (b[covidData] - a[covidData]))
    }
    
    if (countriesData.length === 0) {
        return <Loading/>;
    }

    return (
        <div className={props.className}>
            <h2 className="dashboard__countrylist--heading">Top Cases</h2>
            <form>
                <input
                    className="dashboard__countrylist--searchbar"
                    type="text"
                    placeholder="Search here"
                    name="search"
                    onChange={Filter}
                />
            </form>
            <ul className="dashboard__countrylist--list">
                {records.map((country,index) => {
                    return (
                        <CountryItem key={country.id+index} countryData={country} />
                    );
                })}
            </ul>
        </div>
    );
}

export default CountriesData;

import "./countryitem.scss";
import CasesData from "../CasesData/CasesData";
import { useState } from 'react';
import { formatNumber } from "../../../services/Statistics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown , faChevronUp } from "@fortawesome/free-solid-svg-icons";

function CountryItem(props) {
    const [toggle, setToggle] = useState(false);
    const countryCode = props.countryData.id;

    const handleImageError = () => {
        console.error(`Image for ${props.countryData.country} failed to load.`);
    };

    return (
        <li className="listitem">
            <div className="accordian" onClick={() => setToggle(!toggle)}>
                <div className="listitem__countrydata">
                <img src={`https://flagsapi.com/${countryCode}/flat/48.png`} alt={props.countryData.country} onError={handleImageError}/>
                    <span className="listitem__countrydata--countryname"> {props.countryData.country} </span>
                </div>
                <div className="listitem__cases">
                    <span>{formatNumber(props.countryData.cases,1000000)}</span>
                    <span><FontAwesomeIcon icon={ toggle ? faChevronUp : faChevronDown } /></span>
                </div>
            </div>
            {toggle &&
            <CasesData totalCases={props.countryData.cases}
                recoveredCases={props.countryData.recovered}
                deathCases={props.countryData.deaths} 
                activeCases={props.countryData.active} />
            }
        </li>
    );
}

export default CountryItem;

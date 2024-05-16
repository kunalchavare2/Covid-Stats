import "./casesdata.scss";
import { formatNumber } from "../../../services/Statistics";

function CasesData(props) {
    return (
      <ul className="listitem__casesdata">
        <li className="listitem__casesdata--value totalcases">total <span>{formatNumber(props.totalCases, 1000000)}</span> </li>
        <li className="listitem__casesdata--value activecases">active <span>{formatNumber(props.activeCases,1000000)}</span></li>
        <li className="listitem__casesdata--value recoveredcases">recovered <span>{formatNumber(props.recoveredCases,1000000)}</span> </li>
        <li className="listitem__casesdata--value deathcases">death <span>{formatNumber(props.deathCases,1000000)}</span>  </li>
      </ul>
    )
}

export default CasesData;
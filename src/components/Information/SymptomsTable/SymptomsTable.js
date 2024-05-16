import "./SymptomsTable.scss";
import symptomsTable from "../../../assets/img/symptoms-table.png";

function SymptomsTable() {
    return (
        <div className="information__symptoms-table">
            <img src={symptomsTable} alt="Symptoms Table"></img>
        </div>
    )
}

export default SymptomsTable;
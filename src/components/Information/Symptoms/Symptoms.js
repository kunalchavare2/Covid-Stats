import "./Symptoms.scss";

function Symptoms(props) {
  const symptoms = [
    {
      id: 1,
      "symptom-label": "Fever",
      "symptom-text":
        "Fever is the most common symptom of COVID-19, but it’s sometimes below 100 F.",
    },
    {
      id: 2,
      "symptom-label": "Tiredness",
      "symptom-text":
        "It is normal to have fatigue after having any virus including COVID.",
    },
    {
      id: 3,
      "symptom-label": "Dry Cough",
      "symptom-text":
        "A dry cough is one of the most common coronavirus symptoms, but some people may have a cough with phlegm.",
    },
    {
      id: 4,
      "symptom-label": "Shortness of Breath",
      "symptom-text":
        "If your breathing has become labored and difficult for no obvious reason.",
    },
    {
      id: 5,
      "symptom-label": "Aches and Pains",
      "symptom-text":
        "Aches or muscle pains may be an early sign of COVID-19, often appearing at the very start of the illness.",
    },
    {
      id: 6,
      "symptom-label": "Sore Throat",
      "symptom-text":
        "A sore throat refers to a painful, dry, and scratchy feeling in the throat.",
    },
  ];
  return (
    <div className={`information__symptoms ${props.theme ? "dark" : ""}`}>
      <h2 className="information__symptoms--head">
        What are the symptoms of COVID-19?
      </h2>
      <div className="information__symptoms--list">
        {symptoms.map((item, id) => {
          return (
            <div className="listitem">
              <span className="listitem__id">{item.id}.</span>
              <h3 className="listitem__label">{item["symptom-label"]}</h3>
              <p className="listitem__text">{item["symptom-text"]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Symptoms;

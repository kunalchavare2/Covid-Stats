import "./About.scss";
import virusImage from "../../../assets/img/corona-virus.png"

function About() {
    return (
        <div className="information__about">
            <img src={virusImage} alt="Corona Virus" className="information__about--image"></img>
            <div className="information__about--content">
                <h2 className="information-head">What is COVID-19?</h2>
                <p className="information-para">COVID-19 (coronavirus disease 2019) is a disease caused by a virus named SARS-CoV-2. It can be very contagious and spreads quickly. Over one million people have died from COVID-19 in the United States. COVID-19 most often causes respiratory symptoms that can feel much like a cold, the flu, or pneumonia. COVID-19 may attack more than your lungs and respiratory system. Other parts of your body may also be affected by the disease. Most people with COVID-19 have mild symptoms, but some people become severely ill.</p>
            </div>
        </div>
    )
}

export default About;
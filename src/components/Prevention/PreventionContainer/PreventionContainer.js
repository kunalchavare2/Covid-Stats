import "./PreventionContainer.scss";
import PreventionContent from "../PreventionContent/PreventionContent";
import PreventionImage from "../PreventionImage/PreventionImage";
import image1 from "../../../assets/img/stay-home.jpg";
import image2 from "../../../assets/img/cough-sneeze.jpg";
import image3 from "../../../assets/img/wear-mask.jpg";
import image4 from "../../../assets/img/wash-hands.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";

function Prevention() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const prevention = [
    {
      title: "Stay at home",
      description:
        "Stay home from work and school. And stay away from other public places. If you must go out, avoid using any kind of public transportation, ridesharing, or taxis. As much as possible, stay in a specific room and away from other people in your home. Also, you should use a separate bathroom, if available.",
      imageurl: image1,
      altText: "Stay Home",
    },
    {
      title: "Cover cough & sneezes",
      description:
        "Covering coughs and sneezes and keeping hands clean can help prevent the spread of serious respiratory illnesses like influenza, respiratory syncytial virus (RSV), whooping cough, and COVID-19. Germs can be easily spread by Coughing, sneezing, or talking and touching your face with unwashed hands after touching contaminated surfaces or objects",
      imageurl: image2,
      altText: "Cover cough & sneezes",
    },
    {
      title: "Wear a face mask",
      description:
        "Make sure your mask covers your nose, mouth and chin. Clean your hands before you put your mask on, before and after you take it off, and after you touch it at any time. When you take off your mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask or dispose of it in a trash bin if it’s a medical mask.",
      imageurl: image3,
      altText: "Wear a face mask",
    },
    {
      title: "Clean & Disinfect",
      description:
        "Wash your hands often with soap and water for at least 20 seconds or clean your hands with an alcohol-based hand sanitizer that contains at least 60% alcohol. . Clean all surfaces that are touched often, like counters, tabletops, and doorknobs. Use household cleaning sprays or wipes according to the label instructions.  ",
      imageurl: image4,
      altText: "Clean & Disinfect",
    },
  ];

  return (
    <div className={`prevention ${darkMode ? "dark" : ""}`}>
      {prevention.map((i, index) => {
        if (index % 2 == 0) {
          return (
            <div className="prevention__list">
              <PreventionContent title={i.title} description={i.description} />
              <PreventionImage image={i.imageurl} alt={i.altText} />
            </div>
          );
        } else {
          return (
            <div className="prevention__list reverse">
              <PreventionContent title={i.title} description={i.description} />
              <PreventionImage image={i.imageurl} alt={i.altText} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Prevention;

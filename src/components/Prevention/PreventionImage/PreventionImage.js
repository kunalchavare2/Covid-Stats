import "./PreventionImage.scss";
import Wrapper from "../../../helpers/wrapper";

function PreventionImage(props){
    return(
        <Wrapper>
            <img src= {props.image} alt={props.alt} className="prevention__list--image"></img>
        </Wrapper>
    )
}

export default PreventionImage;

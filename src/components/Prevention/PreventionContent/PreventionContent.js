import "./PreventionContent.scss";

function PreventionContent(props){
    return(
        <div className="prevention__list--content">
            <h2 className="title">{props.title}</h2>
            <span className="underline"></span>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default PreventionContent;

const TechStackElement = props => {
    return(
        <div className="d-flex flex-column m-4"><img style={{height:'50px',width:'50px'}}   src={props.icon} title={props.title}/></div>
    );
}

export default TechStackElement;
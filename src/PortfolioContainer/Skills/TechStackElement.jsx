const TechStackElement = props => {
    return(
        <div className="d-flex flex-column m-4"><div><img style={{height:'50px',width:'50px'}}   src={props.icon} alt=""/></div><span className="text-white">{props.children}</span></div>
    );
}

export default TechStackElement;
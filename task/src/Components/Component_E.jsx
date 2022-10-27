const Component_E = (props)=>{

    const number = props.array_E;
    const items = number.map((v)=>
    <li>{v}</li>
    );
    return(
        <div className="div">
            <ul>{items}</ul>
        </div>
    );
}
export default Component_E;
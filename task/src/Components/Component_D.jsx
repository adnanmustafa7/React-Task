const Component_D = (props)=>{
    const number = props.array_D;
    const item = number.map((v)=>
    <p>{v}</p>
    );

    return(
        <div className="div">
           <p>{item}</p>
        </div>
    );
}
export default Component_D;
import A from './Component_A'
import C from './Component_C'
const Component_F = ()=>{
    
    const value = false;

    return(
        <div>
            {value? <A />: <C />}

        </div>
    );

}

export default Component_F;
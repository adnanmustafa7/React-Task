import A from './Component_A'
import B from './Component_B'
import C from './Component_C'
import D from './Component_D'
import E from './Component_E'
import F from './Component_F'
const Parent = ()=>{
    
    const button_B = ()=>{
        alert("Hello! I am an Component B ALert box");
        console.log("Component Button B")
    }
 
    const array_D = [1,2,3,4,5,6,7,8]
    const array_E = [9,10,11,12,13,14,15,16]
    
    return(
        <div className="container">
          <div><A /></div>
          <div><B fun={button_B}/></div>
          <div><C /></div>
          <div><D array_D={array_D}/></div>
          <div><E array_E={array_E}/></div>
          <div><F /></div>




        </div>


    );  
}
export default Parent;
import React,{Component,useState,useEffect} from 'react'

// class Counter extends Component{
// state ={
//     count: 0
// }

// setCount=() => {
//     this.setState({count: this.state.count +1})
// }

//     render(){
//         return(
//             <div>
//     <h1>{this.state.count}</h1>

//     <button onClick={this.setCount} >Add</button>
//             </div>
//         )
//     }
// }
function useCounter (){
    const[count,setCount] = useState(0);
    function increment(){
        setCount(count+1)
    }
    return[count,increment]
}
function Counter() {
    const[count,increment] = useCounter()
    useEffect(()=>{
        console.log('lifecycle')
    },[count])
    return(
        <div>
    <h1>{count}</h1>
    <button  onClick={increment}>Add</button>
    </div>

    )
}



export default Counter

	
/* import React, { useState, useEffect } from "react";
 
const Counter = () => {
  const [button, setButton] = useState("");
 
  //useEffect hook
  useEffect(() => {
    console.log("useEffect has been called!", button);
  });
 
  const onYesPress = () => {
    setButton("Yes");
  };
 
  const onNoPress = () => {
    setButton("No");
  };
 
return (
      <div>
        <button onClick={() => onYesPress()}>Yes</button>
        <button onClick={() => onNoPress()}>No</button>
      </div>
    );
};

export default Counter
*/

/*
import React,{Component,useState,useEffect} from 'react'


function useCounter (){
    const[button,setButton] = useState("");
    const onYesPress =()=>{
        setButton("Yes" )
        console.log("yes")
    }
  

    const onNoPress=()=>{
        setButton("No" )
        console.log("No")
    }

return(
    <div>
     <div>
        <button onClick={() => onYesPress()}>Yes</button>
        <button onClick={() => onNoPress()}>No</button>
      </div>

    </div>
)

}




export default useCounter

*/

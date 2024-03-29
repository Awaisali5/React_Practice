import React, { useEffect } from "react"
import { useState } from "react"
import UseEffect from "./Component/UseEffect";



function App() {

  const [Counter, setCounter]=useState(0);

  let IncreasingCount=()=>{

    console.log(`count: ${Counter}`)
    return setCounter(Counter +  1);

  }

  //setting the position for the useEffect problem
  const [Postion, setPosition]= useState({x:0, y:0});

 





  

  return (
    <>
<h2>React Hooks</h2>

{/* useState  */}


<button onClick={IncreasingCount}>Help to increase me!</button>
<h4>Count: {Counter}</h4>

<UseEffect />

    </>
  )
}

export default App

import React from "react"
import useToggleButton from "./component/useToggleButton"
import { useCatFact } from "./component/useCatFact";

function App() {

    const [isVisible, toggle]=useToggleButton();
    const data=useCatFact();
 return (

  <>
  <h3>Custom Hooks in React Js!</h3>

  <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
    </button>
    {isVisible && <h1> Hidden Text</h1>}



    <h2>Data Fetching</h2>
<h3> {data.facts}</h3>
    
  </>



 )
}

export default App

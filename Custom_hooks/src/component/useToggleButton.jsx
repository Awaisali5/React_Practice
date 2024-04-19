import React, { useState } from 'react'

function useToggleButton(initialVal=false) {

    const [state, setState] =useState(initialVal);

    const toggle=()=>{
      setState((prev)=> !prev);
    }

    return [state,toggle]

  
}

export default useToggleButton;


// we always use the use keyword to make the custom hook 
// In normal function we can't use the react hooks inside it but we can we it in the custom hooks 
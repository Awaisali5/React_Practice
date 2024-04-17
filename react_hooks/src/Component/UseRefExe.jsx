import React, { useEffect } from 'react'
import { useRef } from 'react'

const UseRefExe = () => {

    const inputRef=useRef(null);


   

    const handleClick= ()=>{
        inputRef.current.focus();
    }
  return (
      <>
      <div>UseRefExe</div>

      <input ref={inputRef} type="text" placeholder='Type something...' />
      <button onClick={handleClick}>Focus Input</button>
    
    </>
  )
}

export default UseRefExe
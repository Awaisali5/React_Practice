import React from "react";
import { useState } from "react";

const UseStateExe = () => {
  const [Counter, setCounter] = useState(0);

  let IncreasingCount = () => {
    console.log(`count: ${Counter}`);
    return setCounter(Counter + 1);
  };

  //setting the position for the useEffect problem
//   const [Postion, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <div>UseState Counter Example</div>
      <h4>Count: {Counter}</h4>
      <button onClick={IncreasingCount}>Help to increase me!</button>
    </>
  );
};

export default UseStateExe;

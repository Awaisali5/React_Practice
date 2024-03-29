import { useState, useEffect } from "react";
import UseWindowListerner from "./UseWindowListerner";


export default function UseEffect() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    UseWindowListerner('pointermove', (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
  return (

    <>
    <div>UseEffect</div>

    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
    
    </>

    
  )
}

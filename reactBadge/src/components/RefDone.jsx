import React, { useRef } from 'react'

function RefDone() {
    const colorRef=useRef()
    const changeColor=()=>{
        colorRef.current.style.backgroundColor=colorRef.current.style.backgroundColor==="blue"?"green":"blue"
    }
  return (
    <div style={{backgroundColor:"blue"}} ref={colorRef} onClick={changeColor}>
      <h3>click me change color</h3>
    </div>
  )
}

export default RefDone

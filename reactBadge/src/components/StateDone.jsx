import React, { useState } from 'react'

function StateDone() {
    const [counter,setCounter]=useState(0)
  return (
   
    <div>
      <h3>{counter}</h3>
      <button onClick={()=>setCounter(p=>p+1)}>increasing</button>
      <button onClick={()=>setCounter(p=>p-1)}>decreasing</button>
      <button onClick={()=>setCounter(0)}>reset</button>
    </div>
  )
}

export default StateDone

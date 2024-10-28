import React, { useState,useCallback } from 'react'
import Title from './Title'
import Couter1 from './Couter1'
import Buttons from './Buttons'

function Basic() {
    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(5)
    const handleIncrementCounter1=useCallback(()=>{
        setCounter1(counter1+1)
    },[counter1])
    const handleIncrementCounter2=useCallback(()=>{
        setCounter2(counter2+1)
    },[counter2])
  return (
    <div>
      <Title/>
      <Couter1 text='counter1' value={counter1}/>
      <Buttons handleIncrement={handleIncrementCounter1}>increment counter1</Buttons>
      <Couter1 text='counter2' value={counter2}/>
      <Buttons handleIncrement={handleIncrementCounter2}>increment counter2</Buttons>
    </div>
  )
}

export default Basic

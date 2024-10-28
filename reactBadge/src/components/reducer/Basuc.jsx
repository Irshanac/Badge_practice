import React, { useReducer } from 'react'
const initialState={
    count:0,
    color:'blue'
}
const reducer=(state,action)=>{
    switch(action)
    {
        case 'increment':
            return {...state,count:state.count+1} 
        case 'decrement':
            return {...state,count:state.count-1} 
        case 'change':
            return {...state,color:state.color==='green'?"blue":'green'} 
        default:
            return state
    }
}
function Basuc() {
    
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div style={{backgroundColor:state.color}}>
      <p>{state.count}</p>
      <p>ertyui</p>
      <button onClick={()=>dispatch('increment')}>add</button>
      <button onClick={()=>dispatch('decrement')}>-</button>
      <button onClick={()=>dispatch('change')}>change</button>
    </div>
  )
}

export default Basuc

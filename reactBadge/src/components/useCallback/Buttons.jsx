import React from 'react'

function Buttons({handleIncrement,children}) {
    console.log(children);
    
  return (
    <div>
      <button onClick={handleIncrement}>{children}</button>
    </div>
  )
}

export default React.memo(Buttons)
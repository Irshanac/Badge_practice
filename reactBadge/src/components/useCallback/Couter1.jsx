import React from 'react'

function Couter1(props) {
    console.log(props.text)
  return (
    <div>
      <h1>{props.text}:{props.value}</h1>
    </div>
  )
}

export default React.memo(Couter1)

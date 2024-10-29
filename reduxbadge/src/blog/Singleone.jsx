import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'
function Singleone() {
    const navigate=useNavigate()
    const {blog}=useSelector((state)=>state.blog)
    const {id}=useParams()
    const One=blog.find((blg)=>blg.id===Number(id))
  return (
    <div>
       
      <h3>{One.title}</h3>
      <p>{One.body}</p>
      <button onClick={()=>navigate('/addblog')}>add blog</button>
      <button onClick={()=>navigate('/')}>blog</button>
    </div>
  )
}

export default Singleone

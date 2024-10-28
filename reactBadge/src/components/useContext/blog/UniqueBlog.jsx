import React, { useContext } from 'react'
import { ContextBlog } from './BlogContext'
import { useNavigate, useParams } from 'react-router-dom'
function UniqueBlog() {
    const navigate=useNavigate()
    const{blog}=useContext(ContextBlog)
    const {id}=useParams()
    const find=blog.find((blog)=>blog.id===Number(id))
    console.log(find);
    
  return (
    <div>
      <h3>{find.text}</h3>
      <p>{find.body}</p>
      <button onClick={()=>navigate('/addblog')}>add</button>
    </div>
  )
}

export default UniqueBlog

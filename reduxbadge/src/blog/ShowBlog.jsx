import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { deleteblog } from './BlogSlice'
function ShowBlog() { 
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {blog}=useSelector((state)=>state.blog)
  return (
    <div>
      <button onClick={()=>navigate('/addblog')}>add blog</button>
      {blog.length===0?(<h1>it is empty</h1>):(
        <div>
            {blog.map((item)=>(
                <div key={item.id}>
                    <h3 onClick={()=>navigate(`/showOne/${item.id}`)}>{item.title}</h3>
                    <button onClick={()=>navigate(`/edit/${item.id}`)}>Edit</button>
                    <button onClick={()=>dispatch(deleteblog(item.id))}>Delete</button>
                </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default ShowBlog

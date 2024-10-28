import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ContextBlog} from './BlogContext'
function ShowBlog() {
    const {blog}=useContext(ContextBlog)
    const navigate=useNavigate()
  return (
    <div>
        <button onClick={()=>navigate('/addblog')}>add blog</button>
      {blog.length===0?(<h1>it is empty</h1>):(<div>
        {blog.map((blog)=>(
            <div key={blog.id}>
                <Link to={`/blogDetails/${blog.id}`} >{blog.text}</Link>
            </div>
        ))}
      </div>)}
    </div>
  )
}

export default ShowBlog
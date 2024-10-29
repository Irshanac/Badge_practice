import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContextBlog } from './BlogContext'
function EditBlog() {
  const navigate=useNavigate()
    const {blog,editblogs} =useContext(ContextBlog)
    const {id}=useParams()
    const find=blog.find((blog)=>blog.id===Number(id))
    console.log(find)
    const [title,setTitle]=useState(find.text)
    const [body,setBody]=useState(find.body)
    const save=()=>{
        editblogs(id,{text:title,body})
        navigate('/')
    }
  return (
    <div>
      <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='enter the title'/>
      <textarea type="text"  cols={10} rows={10} value={body} onChange={(e)=>setBody(e.target.value)} placeholder='enter the content'/>
        <button onClick={save}>save</button>
    </div>
  )
}

export default EditBlog

import React, { useContext, useState } from 'react'
import {ContextBlog} from'./BlogContext'
import { useNavigate } from 'react-router-dom'
function AddBlog() {
    const navigate=useNavigate()
    const {addBlog}=useContext(ContextBlog)
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const save=()=>{
        addBlog(title,body)
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

export default AddBlog

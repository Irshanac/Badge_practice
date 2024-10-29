import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adddblog } from './BlogSlice'
import { useState } from 'react'
function CreateBlog() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const save=()=>{
        dispatch(adddblog({title,body}))
        console.log("title",title)
        console.log("body",body);
        navigate('/')
    }
  return (
    <div>
      <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)} placeholder='enter title'/>
      <input type="text" value={body}  onChange={(e)=>setBody(e.target.value)} placeholder='enter the content'/>
      <button onClick={save}>save</button>
    </div>
  )
}

export default CreateBlog

import React,{useState} from 'react'
import { addColor } from './ColorSlice'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
function AddData() {
    const dispatch=useDispatch()
    const [color,setColor]=useState('')
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const save=()=>{
        const data={id:nanoid(),title,body,color}
        console.log(data);
        dispatch(addColor(data))
    }
  return (
    <div>
    <input type='type' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
    <input type='type' value={body} onChange={(e)=>setBody(e.target.value)}></input>
    <input type='color' value={color} onChange={(e)=>setColor(e.target.value)}></input>
    <button onClick={save}>save</button>
    </div>
  )
}

export default AddData

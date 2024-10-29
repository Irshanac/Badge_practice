import React, { useState } from 'react'

function Todo() {
    const [text,setTtext]=useState('')
    const [todo,setTosdo]=useState([])
    const [edit,setEdit]=useState(null)
    const [editValue,setEditValue]=useState('')
    const todolist=()=>{
        if(text.trim())
       // setTosdo([...todo,text])
        setTosdo((p)=>[...p,text])
        setTtext("")
    }
    const deletes=(index)=>{
       setTosdo(todo.filter((_,i)=>i!==index))
    }
    const edits=(index)=>{
        setEdit(index)
        const finds=todo.find((_,index)=>index===index)
        setEditValue(finds)
    }
    const save=()=>{
        todo[edit]=editValue
        setEdit(null)
        setEditValue(null)
    }
  return (
    <div>
        {edit===null?(
            <div>
      <input type='text' onChange={(e)=>setTtext(e.target.value)} value={text} placeholder='enter todo' ></input>
      <button onClick={todolist}>add</button>
      {todo.length===0?(<h3>it is empty</h3>):(
        <div>
            {todo.map((todos,index)=>(
                <div key={index}>
                    <p>{todos}</p>
                    <button onClick={()=>deletes(index)}>Delete</button>
                    <button onClick={()=>edits(index)}>Edit</button>
                </div>
            ))}
        </div>
      )}
        </div>
        ):(
            <div>
                <input type='text' value={editValue} onChange={(e)=>setEditValue(e.target.value)}></input>
                <button onClick={save}>Save</button>
            </div>
        )}
      
    </div>
  )
}

export default Todo

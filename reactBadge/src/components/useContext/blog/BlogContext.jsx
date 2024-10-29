import React, { createContext, useState } from 'react'
export const ContextBlog=createContext()
function BlogContext({children}) {
    const [blog,setBlog]=useState([])
    const addBlog=(text,body)=>{
        const newBlog={id:blog.length,text,body}
        setBlog([...blog,newBlog])
    }
    const editblogs=(id,data)=>{
     let  newdata={...data,id}
     console.log(newdata);
      setBlog(blog.map((blg)=>blg.id===Number(id)?newdata:blg))
    }
    const deleteBlog=(id)=>{
      setBlog(blog.filter((data)=>data.id===id))
    }
  return (
    <ContextBlog.Provider value={{blog,addBlog,editblogs,deleteBlog}}>
        {children}
    </ContextBlog.Provider>
  )
}

export default BlogContext

import React, { createContext, useState } from 'react'
export const ContextBlog=createContext()
function BlogContext({children}) {
    const [blog,setBlog]=useState([])
    const addBlog=(text,body)=>{
        const newBlog={id:blog.length,text,body}
        setBlog([...blog,newBlog])
    }
  return (
    <ContextBlog.Provider value={{blog,addBlog}}>
        {children}
    </ContextBlog.Provider>
  )
}

export default BlogContext

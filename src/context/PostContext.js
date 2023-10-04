'use client'
import React, { createContext, useState } from 'react'

export const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([
        {id:1,title:'Jaimin',desription:'Jaimin learning'}
    ])

    const addPost = (newPost) => {
        setPosts([...posts,newPost])
    }
    return (
        <PostContext.Provider value={({posts, addPost})}>
            <div>
                {children}
            </div>
        </PostContext.Provider>

    )
}

export default PostProvider




'use client'
import { PostContext } from '@/context/PostContext'
import React, { useContext } from 'react'

const Meals = () => {
    const {posts, addPost} = useContext(PostContext);
    console.log(posts);


  return (
    <div>
      Jaimin
    </div>
  )
}

export default Meals

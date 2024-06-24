import React from 'react'
import ss from '../../assets/ss.png'
import './blog.css'

function Blogs() {
  return (
    <div className='post' >
      <p className='time'>Nav 20, 2020 . 9 mim read</p>
      <h1>How to Write a Blog Post: A Computer Guide (With Examples)</h1>
      <img src={ss} alt=""   />
      <p className='dis'>When you create a blog, you're given an online platform to write about your passions and reach an audience with shared interests. Each blog post becomes an opportunity to highlight your expertise and dive deep into a specified topic.</p>
    </div>
  )
}

export default Blogs

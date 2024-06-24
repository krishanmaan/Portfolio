import React from 'react'
import Component from './component'
import Blogs from './components/blog/Blogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (

    <>
      
      
    <BrowserRouter>
    <Routes>
      <Route index element={<Component/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/blogs/krishanmaan' element={<Blogs/>} />
      <Route path='*' element={<Component/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
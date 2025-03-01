import { useState } from 'react'
import {Route , Routes } from 'react-router-dom'
import About from './Pages/About'
import Homepage from './Pages/Homepage'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/' element={<Homepage />}></Route>
      </Routes>
    </>
  )
}

export default App

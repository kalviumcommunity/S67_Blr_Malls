import { useState } from 'react'
import {Route , Routes } from 'react-router-dom'
import About from './Pages/About'
import Homepage from './Pages/Homepage'
import Form from './Pages/Form'
import UpdateForm from './Pages/UpdateForm'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='add-mall' element={<Form />}></Route>
        <Route path='update' element={<UpdateForm />}></Route>
      </Routes>
    </>
  )
}

export default App

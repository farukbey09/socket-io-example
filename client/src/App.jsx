import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Chat from './pages/Chat'
import Register from './pages/Register'
import Login from './pages/Login'
import NavBar from './components/NavBar'



const App = () => {
  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path='/' element={<Chat/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<Navigate/>}/>
      </Routes>
    </div>
  )
}

export default App
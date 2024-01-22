import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Chat from './pages/Chat'
import Register from './pages/REgister'
import Login from './pages/Login'


const App = () => {
  return (
    <div>
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
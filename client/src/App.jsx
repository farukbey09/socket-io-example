import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Chat from './pages/Chat'
import Register from './pages/REgister'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import { AuthContext } from './context/AuthContext'
import { ChatContextProvider } from './context/ChatContext'



const App = () => {
  const { user } = useContext(AuthContext)

  return (
    <ChatContextProvider user={user}>
      <div className='container'> 
        <NavBar />
        <Routes>
          <Route path='/' element={user ? <Chat /> : <Login />} />
          <Route path='/register' element={user ? <Chat /> : <Register />} />
          <Route path='/login' element={user ? <Chat /> : <Login />} />
          <Route path='/*' element={<Navigate />} />
        </Routes>
      </div>
    </ChatContextProvider>

  )
}

export default App
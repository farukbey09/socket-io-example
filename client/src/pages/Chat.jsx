import React, { useContext } from 'react'
import ChatList from '../components/Chat/ChatList'
import { ChatContext } from '../context/ChatContext'
import MessageContainer from '../components/Message/MessageContainer'
import { AuthContext } from '../context/AuthContext'


const Chat = () => {
  const {userChats}=useContext(ChatContext)
  const {user}=useContext(AuthContext)
  return (
    <div style={{display:"flex",marginTop:"20px"}}>
      <div style={{marginRight:"10px"}}>

      <ChatList chats={userChats} user={user} />
      </div>

      <MessageContainer user={user}/>

    </div>
  )
}

export default Chat
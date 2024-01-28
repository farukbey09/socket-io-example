import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient'
import { ChatContext } from '../../context/ChatContext'
import MessageItem from './MessageItem'

const MessageContainer = ({user}) => {
  const {currentChat,chatMessages,createMessage}=useContext(ChatContext)
  const { recipientUser } = useFetchRecipientUser(currentChat, user)
  const [newMessage, setNewMessage] = useState("") 
  
  const handleChange=(e)=>{
    if(e.keyCode == 13){
      const body={
        text:newMessage,
        senderId:user?._id,
        chatId:currentChat?._id
      }
      createMessage(body)
      setNewMessage("")
    }
  }

  return (
    <Container maxWidth="xl" style={{margin:"0px",padding:"0px",marginRight:"10px"}}>
        <div style={{ background: 'lightgray', height: '85vh' ,position:"relative"}} >
          <Typography variant='h3' align='center' style={{background:"#0288d1",color:"white"}}>{recipientUser?.name}</Typography>
          <Grid container>
          {chatMessages?.map((t)=>{
            return <Grid item xs={12}><MessageItem message={t} user={user} key={t._id} /> </Grid>
          })}
          </Grid>

          <TextField variant='outlined'  value={newMessage} onKeyDown={(e)=>handleChange(e)} onChange={(e)=>setNewMessage(e.target.value)} fullWidth style={{position:"absolute",bottom:"1px",left:"1px",background:"white"}}/>
        </div>
    </Container>
  )
}

export default MessageContainer
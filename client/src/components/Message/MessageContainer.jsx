import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient'
import { ChatContext } from '../../context/ChatContext'
import MessageItem from './MessageItem'
import "../../styles.css"

const MessageContainer = ({user}) => {
  const {currentChat,chatMessages,createMessage}=useContext(ChatContext)
  const { recipientUser } = useFetchRecipientUser(currentChat, user)
  const [newMessage, setNewMessage] = useState("")
  const scroll=useRef() 
  
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
  useEffect(() => {
    scroll?.current?.scrollIntoView({behavior:"smooth"})

  }, [chatMessages])

  useEffect(() => {
    scroll?.current?.scrollIntoView({behavior:"smooth"})

    const scrollableDiv = scroll.current;

    if (scrollableDiv) {
      scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
    }

  })
  

  return (
    <Container maxWidth="xl" style={{margin:"0px",padding:"0px",marginRight:"10px"}}>
          <Typography variant='h3' align='center' style={{background:"#0288d1",color:"white"}}>{recipientUser?.name}</Typography>
        <div  ref={scroll} className='scroll' style={{ background: 'lightgray', height: '65vh', overflowY:"auto",scrollbarWidth:"thin",scrollbarColor:"gray" }} >
          <Grid container >
          {chatMessages?.map((t)=>{
            return <Grid item xs={12}><MessageItem message={t} user={user} key={t._id} /> </Grid>
          })}
          </Grid>

        </div>
          <TextField variant='outlined'  value={newMessage} onKeyDown={(e)=>handleChange(e)} onChange={(e)=>setNewMessage(e.target.value)} fullWidth style={{background:"white"}}/>
    </Container>
  )
}

export default MessageContainer
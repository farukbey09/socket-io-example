import * as React from 'react';
import Box from '@mui/material/Box';
import ChatListItem from './ChatListItem';
import { Button, Divider, Typography } from '@mui/material';
import CreateChatDialog from './CreateChatDialog';



export default function ChatList({ chats ,user}) {
  const [open, setOpen] = React.useState(false)

  const handleClose=()=>{
    setOpen(false)
  }

  return (<div style={{minWidth:"300px"}}> 
  <Typography variant='h3' align='center'>Chats</Typography> 
  <Button onClick={()=>setOpen(true)} variant='contained' style={{margin:"5px 5px",marginLeft:"5px",marginRight:"5px",width:`95%`}}>Create New Chat</Button>  
  <Divider color='black'></Divider>  
    {chats?.map((chat) => {
    return <ChatListItem  key={chat._id} chat={chat} user={user} />

  })}
  <CreateChatDialog handleClose={handleClose} open={open} user={user} />
  </div>

  );
}
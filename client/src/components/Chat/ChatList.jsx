import * as React from 'react';
import Box from '@mui/material/Box';
import ChatListItem from './ChatListItem';
import { Divider, Typography } from '@mui/material';


export default function ChatList({ chats ,user}) {
  return (<div> 
  <Typography variant='h3' align='center'>Chats</Typography>   
  <Divider color='black'></Divider>  
    {chats?.map((chat) => {
    return <ChatListItem chat={chat} user={user} />

  })}</div>

  );
}
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient';
import { Avatar, Typography } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { ChatContext } from '../../context/ChatContext';
import { useFetchLastMessage } from '../../hooks/useFetchLastMessage';
import moment from 'moment';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(2, 136, 209)',
    margin: "10px",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    cursor:"pointer"
}));

const ChatListItem = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user)
    const { lastMessage } = useFetchLastMessage(chat, user)
    const {handleSetCurrentChat,chatMessages}=React.useContext(ChatContext)
    return (
        <Grid container item width={500} >
            <Grid item xs={12} style={{position:"relative"}} >
                <Item onClick={()=>handleSetCurrentChat(chat)}>
                    <div style={{display:"flex",alignItems:"center"}}>
                <Avatar
                    sx={{ bgcolor: deepOrange[500] }}
                    alt={recipientUser?.name}
                    style={{marginRight:"20px"}}
                >
                                                

                    {recipientUser?.name.charAt(0).toUpperCase()}
                </Avatar>
               
                    <Typography >
                    <Typography fontWeight={"bolder"} fontSize={"18px"}>{recipientUser?.name}</Typography>
                    {lastMessage?.text}
                    </Typography>
                    <Typography style={{position:"absolute",top:"10px",right:"20px"}} color={"white"}>{moment(chat.createdAt).calendar()}</Typography>
                    </div>
            </Item>
            </Grid>
        </Grid>
    )
}

export default ChatListItem
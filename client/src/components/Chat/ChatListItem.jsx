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
import { useEffect, useState } from 'react';
import "../../styles.css"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(2, 136, 209)',
    margin: "10px",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    cursor: "pointer"
}));

const ChatListItem = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user)
    const { lastMessage } = useFetchLastMessage(chat, user)
    const { handleSetCurrentChat, onlineUsers } = React.useContext(ChatContext)
    const [isOnline, setIsOnline] = useState(null)
    useEffect(() => {
        var flag = 0
        onlineUsers?.map((onlineUser) => {
            if (onlineUser.userId === recipientUser?._id)
                flag++
        })
        if (flag == 0)
            setIsOnline(false)
        else
            setIsOnline(true)

    }, [onlineUsers, recipientUser])

    return (
        <Grid container item width={500} >
            <Grid item xs={12} style={{ position: "relative" }} >
                <Item onClick={() => handleSetCurrentChat(chat)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                            sx={{ bgcolor: deepOrange[500] }}
                            alt={recipientUser?.name}
                            style={{ marginRight: "20px" }}
                        >


                            {recipientUser?.name.charAt(0).toUpperCase()}
                        </Avatar>

                        <Typography>
                        <Typography style={{display:"flex",justifyContent:"center",width:"300px"}} fontWeight={"bolder"} fontSize={"18px"}>
                            {recipientUser?.name}
                        </Typography>
                        <Typography style={{float:"left"}}>
                            {lastMessage?.text.length > 40 ? lastMessage?.text.slice(0, 40) + "..." : lastMessage?.text}
                        </Typography>
                        </Typography>

                        <Typography style={{ position: "absolute", top: "17px", right: "25px" }} color={"white"}>{moment(chat.createdAt).calendar()}</Typography>
                        <span className={isOnline ? "online" : ""}></span>
                    </div>
                </Item>
            </Grid>
        </Grid>
    )
}

export default ChatListItem
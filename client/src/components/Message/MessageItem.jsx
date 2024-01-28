import { Box, Typography } from '@mui/material'
import React from 'react'
import "../../styles.css"
import moment from "moment"

const MessageItem = ({message,user}) => {

  return (
    message.senderId===user?._id?
    <Box className="receiver-message-item">
        <div>
         <Typography variant='h5'>{message.text}</Typography> 
         <Typography color={"white"}>{moment(message.createdAt).calendar()}</Typography>
         </div>
         </Box>
    :
    <Box className="sender-message-item">        <div>
    <Typography variant='h5'>{message.text}</Typography> 
    <Typography color={"white"}>{moment(message.createdAt).calendar()}</Typography>
    </div>
    </Box>
    )
}

export default MessageItem
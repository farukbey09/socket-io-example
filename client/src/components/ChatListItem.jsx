import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';



const ChatListItem = ({ chat }) => {
    return (
        <Grid container item width={500}> 
            <Grid item xs={12}>
                <Typography>{chat.members[0]}</Typography>
            </Grid>
        </Grid>
    )
}

export default ChatListItem
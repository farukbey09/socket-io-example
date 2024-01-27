import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient';
import { Avatar, Typography } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    margin: "10px",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
}));

const ChatListItem = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user)
    return (
        <Grid container item width={500}>
            <Grid item xs={12} >
                <Item>
                    <div style={{display:"flex",alignItems:"center"}}>
<
                    Avatar
                    sx={{ bgcolor: deepPurple[500] }}
                    alt={recipientUser?.name}
                >
                    {recipientUser?.name.charAt(0)}
                </Avatar>
               
                    <Typography>
                    {recipientUser?.name}
                        </Typography>
                    </div>
            </Item>
            </Grid>
        </Grid>
    )
}

export default ChatListItem
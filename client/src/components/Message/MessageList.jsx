import { Grid } from '@mui/material'
import React from 'react'
import MessageItem from './MessageItem'
import "../../styles.css"

const MessageList = ({ scroll, chatMessages }) => {

    return (
        <div ref={scroll} className='scroll' >
            <Grid container >
                {chatMessages?.map((t) => {
                    return <Grid item xs={12}><MessageItem message={t} user={user} key={t._id} /> </Grid>
                })}
            </Grid>

        </div>
    )
}

export default MessageList
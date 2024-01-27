import { Box, Container, TextField } from '@mui/material'
import React from 'react'

const MessageContainer = () => {
  return (
    <Container maxWidth="xl" style={{margin:"0px",padding:"0px",marginRight:"10px"}}>
        <div style={{ background: '#cfe8fc', height: '85vh' ,position:"relative"}} >
            <TextField fullWidth style={{position:"absolute",bottom:"1px"}}/>
        </div>
    </Container>
  )
}

export default MessageContainer
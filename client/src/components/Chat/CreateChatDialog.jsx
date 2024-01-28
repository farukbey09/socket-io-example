import { Autocomplete, Box, Button, Dialog, DialogTitle, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { useFetchUsers } from '../../hooks/useFetchUsers'
import { ChatContext } from '../../context/ChatContext'

const CreateChatDialog = ({ open, handleClose,user }) => {
    const {users}=useFetchUsers(user)
    const {createChat,updateNewChatInfo}=useContext(ChatContext)
    

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>
                Create New Chat
            </DialogTitle>
            <Box style={{height:"150px",width:"350px",display:"flex",alignItems:"center",justifyContent:"space-around"}}>

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, newValue) => {
                    updateNewChatInfo({...updateNewChatInfo,firstId:user?._id,secondId:newValue?._id});
                    // console.log(users);
                  }}
                options={users}
                renderInput={(params) => <TextField {...params} label="Users" />}
            />
            <Button variant='contained' onClick={()=>{
                createChat()
                handleClose()
            }}>Create</Button>
            </Box>
            

        </Dialog>
    )
}

export default CreateChatDialog
import React, { useContext } from 'react'
import Grid from "@mui/material/Grid"
import { Button, TextField, Typography } from '@mui/material'
import "../styles.css"
import { AuthContext } from '../context/AuthContext'

const Register = () => {
  const { registerInfo, updateRegisterInfo ,registerUser,isRegisterLoading} = useContext(AuthContext)

  return (
    <Grid className='register-container'>
      <Grid style={{ display: "block" }}>

        <Grid className='register-row'>
          <Grid item xs={5}>
            <Typography style={{ marginRight: "15px", float: "left" }}  >Name</Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField fullWidth variant='filled' onChange={(e)=>updateRegisterInfo({
              ...registerInfo,name:e.target.value
            })}  value={registerInfo.name}/>
          </Grid>
        </Grid>

        <Grid className='register-row'>
        <Grid item xs={5}>
            <Typography style={{ marginRight: "15px", float: "left" }}  >Email</Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField fullWidth variant='filled' onChange={(e)=>updateRegisterInfo({
              ...registerInfo,email:e.target.value
            })}  value={registerInfo.email}/>
          </Grid>
        </Grid>


        <Grid className='register-row'>
        <Grid item xs={5}>
            <Typography style={{ marginRight: "15px", float: "left" }}  >Password</Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField fullWidth variant='filled' onChange={(e)=>updateRegisterInfo({
              ...registerInfo,password:e.target.value
            })} value={registerInfo.password} />
          </Grid>
        </Grid>

        <Grid className='register-row' >
          <Button style={{ width: "100%", marginTop: "10px" }} variant='contained' onClick={registerUser}>
            {!isRegisterLoading?`Submit`:"Creating Account..."}
          </Button>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default Register
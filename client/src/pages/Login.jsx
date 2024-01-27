import React, { useContext } from 'react'
import Grid from "@mui/material/Grid"
import { Button, TextField, Typography } from '@mui/material'
import "../styles.css"
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const { loginInfo,loginUser,updateLoginInfo} = useContext(AuthContext)

  return (
    <Grid className='register-container'>

      <Grid style={{display:"block"}}>

      <Grid className='register-row'>
        <Grid item xs={5}>
            <Typography style={{ marginRight: "15px", float: "left" }}  >Email</Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField fullWidth variant='filled' onChange={(e)=>updateLoginInfo({
              ...loginInfo,email:e.target.value
            })}  value={loginInfo.email}/>
          </Grid>
        </Grid>


        <Grid className='register-row'>
        <Grid item xs={5}>
            <Typography style={{ marginRight: "15px", float: "left" }}  >Password</Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField fullWidth variant='filled' onChange={(e)=>updateLoginInfo({
              ...loginInfo,password:e.target.value
            })} value={loginInfo.password} />
          </Grid>
        </Grid>
        
      <Grid className='register-row' >
      <Button style={{width:"100%",marginTop:"10px"}} variant='contained'  onClick={loginUser} >Submit</Button>
      </Grid>

      </Grid>
    </Grid>
  )
}

export default Login
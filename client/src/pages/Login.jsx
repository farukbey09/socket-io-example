import React from 'react'
import Grid from "@mui/material/Grid"
import { Button, TextField, Typography } from '@mui/material'
import "../styles.css"

const Login = () => {
  return (
    <Grid className='register-container'>

      <Grid style={{display:"block"}}>

      <Grid className='register-row'>
        <Grid xs={5}>
        <Typography style={{marginRight:"15px",float:"left"}}  >Email</Typography>
        </Grid>
        <Grid xs={7}><TextField fullWidth variant='filled'/></Grid>
      </Grid>

      <Grid className='register-row'>
        <Grid xs={5}>
        <Typography style={{marginRight:"15px",float:"left"}}  >Password</Typography>
        </Grid>
        <Grid xs={7}><TextField fullWidth variant='filled'/></Grid>
      </Grid>
      <Grid className='register-row' >
      <Button style={{width:"100%",marginTop:"10px"}} variant='contained'>Submit</Button>
      </Grid>

      </Grid>
    </Grid>
  )
}

export default Login
import { Alert, Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { loginFn } from '../redux/slice-auth'

const LogIn = () => {
  const [loginPassword, setRegisterPasswor] = useState('')
  const [loginEmail, setRegisterEmail] = useState('')
  const error = useAppSelector(state=> state.auth.err)
  const dispatch = useAppDispatch();
  const handlerClick=()=>{
    dispatch(
      loginFn({
        path: 'login',
        email: loginEmail,
        password: loginPassword,
      })
    );
  }
  
    return (
      <div>
<Box
    sx={{ m:'240px auto 0 auto',width: '60%',borderRadius:'30px', height:'50vh',bgcolor: '#ffffff', color:'black', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',gap:2}}
  >
    <h1>Login</h1>
    <TextField sx={{width:'350px'}} id="outlined-basic" label="Email" variant="outlined" name='email' type="email" value={loginEmail} onChange={e=>setRegisterEmail(e.target.value)}/>
    <TextField sx={{width:'350px'}} id="outlined-basic" label="Password" variant="outlined" name='password' type="password" value={loginPassword} onChange={e=>setRegisterPasswor(e.target.value)}/>
    <Button variant="contained" onClick={handlerClick}>Login</Button>
    {error ? <Alert severity="error">{error}</Alert>: <></>}
    <Link to='/register' style={{'textDecoration': 'none', 'color':'inherit'}}>You don't have account?</Link>
    
  </Box>
        
      
      

     


      </div>
    )
}

export default LogIn
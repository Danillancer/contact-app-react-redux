import { Alert, Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { registerFn } from '../redux/slice-auth';

const Register = () => {
  const [registerPassword, setRegisterPasswor] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerName, setRegisterName] = useState('');

  const dispatch = useAppDispatch();
  const error = useAppSelector(state=> state.auth.err)

  const handlerClick = () => {
    dispatch(
      registerFn({
        path: 'register',
        email: registerEmail,
        password: registerPassword,
        name: registerName,
      })
    );
  };

  return (
    <div>
      <Box
        sx={{
          m: '240px auto 0 auto',
          width: '60%',
          borderRadius: '30px',
          height: '50vh',
          bgcolor: '#ffffff',
          color: 'black',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <h1>Register</h1>
        <TextField
          sx={{ width: '350px' }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
          name="text"
          type="text"
        />
        <TextField
          sx={{ width: '350px' }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
          name="email"
          type="email"
        />
        <TextField
          sx={{ width: '350px' }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={registerPassword}
          onChange={(e) => setRegisterPasswor(e.target.value)}
        />
        <Button variant="contained" onClick={handlerClick}>
          Create Account
        </Button>
        {error ? <Alert severity="error">{error}</Alert>: <></>}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          You have account?
        </Link>
      </Box>
    </div>
  );
};

export default Register;

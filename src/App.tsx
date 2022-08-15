import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ContactList from './components/ContactList';
import LogIn from './components/LogIn';

import Register from './components/Register';
import { useAppSelector } from './hooks/hooks';

const App: React.FC = () => {

  const auth = useAppSelector(state=> state.auth.login)

  return (
    <div className="App">
      <Container>
        {auth? <ContactList />:
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        }
        
      </Container>
    </div>
  );
};

export default App;

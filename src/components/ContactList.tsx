
import { Box, Grid, TextField, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useAppSelector } from '../hooks/hooks'
import ContactItem from './ContactItem'
import NewContactForm from './NewContactForm'
import SearchIcon from '@mui/icons-material/Search';

const ContactList = () => {
  const [value, setValue] = useState('')
  const contacts = useAppSelector(state=>state.contacts.list.filter(e=>e.name.includes(value)))
  return (
    <div>
 <Box
        sx={{
          m: '240px auto 0 auto',
          p: 5,
          width: '60%',
          borderRadius: '30px',
          minHeight: '50vh',
          bgcolor: '#ffffff',
          color: 'black',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      > 
    <Grid container direction="row"
  justifyContent="space-between" alignItems="flex-start">
    
    <h2>Contacts</h2>
    <label style={{'display':'flex', 'alignItems': 'flex-end'}}>
<Tooltip title='Search contact'>
    <SearchIcon/>
    </Tooltip>
    <TextField sx={{borderRadius: '50px'}} id="standard-search" label="Search" variant="standard" type="search" value={value} onChange={e=> {
        setValue(e.target.value)
     }}/>
     </label>
     </Grid>

    <NewContactForm/> 
      {contacts.map((contact=>(
        <ContactItem key={contact.id} {...contact}/>
      )))}

      </Box>
    </div>
  )
}

export default ContactList
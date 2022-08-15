import { ListItemButton, ListItemText, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { removeContact, togleContactEdit,editContact} from '../redux/slice-contacts'
import { Contact } from '../types/data'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ContactItem: React.FC<Contact> = ({id,name,edit}) => {
  const [value, setValue] = useState(name)



  const dispatch = useAppDispatch()
  return (
    <div>
      <ListItemButton component="a" href="#simple-list">
      <AccountCircleIcon sx={{"marginRight":"10px"}}/>
      {!edit?
      <ListItemText primary={name} />:
      <TextField fullWidth  type="text" value={value}onChange={e=> {
        setValue(e.target.value)
     }}/>
      }
  <EditIcon onClick={()=>{
        if (value !==name) {
          dispatch(editContact({id:id, title:value}))
        }
        dispatch(togleContactEdit(id))
      }
      }/>
  <DeleteIcon sx={{'color': 'red'}} onClick={()=> dispatch(removeContact(id))}/>
</ListItemButton>

      
    </div>
  )
}

export default ContactItem
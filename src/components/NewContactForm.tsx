import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { addContact } from '../redux/slice-contacts'
import AddIcon from '@mui/icons-material/Add';

const NewContactForm = () => {

   const [value, setValue] = useState('')
   const dispatch = useAppDispatch()

   const handleClick = ()=>{
      if(value.trim().length){
         dispatch(addContact(value))
         setValue('')
      }
   }
   const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement>= (e)=>{ 
     if (e.key === 'Enter') {
      if(value.trim().length){
         dispatch(addContact(value))
         setValue('')
      }
     }
     if (e.key === 'Escape') {
      if(value.trim().length){
         dispatch(addContact(value))
         setValue('')
      }
     }
   }

  return (
    <div className='contact__row'>
      <input type="text" value={value}
      placeholder="new contact"
      onKeyDown={e=>handleKeyDown(e)}
      onChange={e=> {
         setValue(e.target.value)
         
      }} className="contact__input"/>
      <AddIcon onClick={handleClick} className="contact__btn"/>
    </div>
  )
}

export default NewContactForm
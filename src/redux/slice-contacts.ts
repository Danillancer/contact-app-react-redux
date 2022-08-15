import { createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import { ContactState } from "../types/data";



const initialState: ContactState={
   list: [],
}

const contactsSlice = createSlice({
   name:'contact',
   initialState,
   reducers:{
      addContact(state, action:PayloadAction<string>){
         state.list.push({
            id: Date.now(),
            name:action.payload,
            edit:false
         })
      },
      removeContact(state, action:PayloadAction<number>){
         state.list = state.list.filter(el=> el.id!== action.payload)
      },
      editContact(state,action:PayloadAction<{id:number, title:string}>){
         state.list = state.list.map(el=>{
            if (el.id === action.payload.id ) {
               el.name = action.payload.title
            }
            return el
         })
      },
      togleContactEdit(state, action:PayloadAction<number>){
         state.list = state.list.map(el=>{
            if (el.id === action.payload ) {
               el.edit = !el.edit 
            }
            return el
         })
      }

   }
})

export const {addContact, removeContact,togleContactEdit,editContact} = contactsSlice.actions
export const contactReducer =contactsSlice.reducer
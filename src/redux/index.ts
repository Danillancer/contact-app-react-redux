import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice-auth";
import { contactReducer } from "./slice-contacts";



export const store = configureStore({
   reducer:{
      contacts: contactReducer,
      auth: authReducer
   },
   devTools:true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
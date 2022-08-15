import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface PropLogin {
  path: string;
  email: string;
  password: string;
}

interface PropRegister extends PropLogin {
  name: string;
}

interface InitialState {
  name: string;
  err: string | undefined;
  login: boolean
}

export const registerFn = createAsyncThunk<string, PropRegister>(
  'contacts/register',

  async function ({ path, email, password, name },) {
    try {  
      const response = await axios.post(`http://localhost:8080/${path}`, {
        path: 'register',
        email: email,
        password: password,
        name: name,
      });
      return await response.data.user.name;
    } catch (e) {
      const {
        response: { data, status },
      } = e as unknown as {
        response: { data: string; status: number };
      };
      throw {
        name: 'Request Failed',
        message: data,
        code: `${status}`,
      };
    }
  }
);
export const loginFn = createAsyncThunk<string, PropLogin>(
  'contacts/login',

  async function ({ path, email, password }) {
    try { 
      const response = await axios.post(`http://localhost:8080/${path}`, {
        path: 'register',
        email: email,
        password: password,
      });
      return await response.data.user.name;
    } catch (e) {
      const {
        response: { data, status },
      } = e as unknown as {
        response: { data: string; status: number };
      };
      throw {
        name: 'Request Failed',
        message: data,
        code: `${status}`,
      };
    }
  }
);

const initialState: InitialState = {
  name: '',
  err: '',
  login: false
};
const authSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerFn.pending, (state, action) => {
        state.err = '';
      })
      .addCase(registerFn.fulfilled, (state, action) => {
        state.name = action.payload
        state.login= true
      })
      .addCase(registerFn.rejected, (state, action) => {
        state.err = action.error.message;
      })
      .addCase(loginFn.pending, (state, action) => {
        state.err = '';
      })
      .addCase(loginFn.fulfilled, (state, action) => {
        state.name = action.payload;
        state.login= true
      })
      .addCase(loginFn.rejected, (state, action) => {
        state.err = action.error.message;
      });
  },
});

export const authReducer = authSlice.reducer;

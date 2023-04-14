import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addUser = createAsyncThunk(
  'userSlice/addUser',
  async (userdata) => {
      const response = await axios 
      .post('https://application-mock-server.loca.lt/Users',userdata)
      return response.data
  }
)

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {

    builder.addCase(addUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

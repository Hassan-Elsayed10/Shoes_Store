import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

// First, create the thunk
export const login = createAsyncThunk(
    'authSlice/login',
    async (data) => {
        const res = await axios.post('http://192.168.1.6:8080/admin/login', data)
                const jsonValue = JSON.stringify( res.data.result.token);
                await AsyncStorage.setItem('Token_Key',jsonValue )
                return jsonValue
        } 
)

const initialState = {
    token:null,
    loading:false,
    error:""
}

export const authSlice = createSlice({
    name: 'auths',
    initialState,
    reducers:{
        clearToken(state) {
            state.token = null;
          }
    },
    extraReducers: (builder) => {

        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload
            AsyncStorage.setItem('Token_Key',state.token)

        })

    }

})
export const { clearToken } = authSlice.actions;
export default authSlice.reducer;
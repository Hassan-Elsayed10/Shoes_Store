import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
    'productsSlice/fetchProducts',
    async () => {
        const response = await axios 
        .get('https://application-mock-server.loca.lt/products')
        return response.data
    }
)

const initialState = {
    products: [],
    selectedProduct: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state,action) =>{
            const productId =  action.payload;
            state.selectedProduct = state.products.find((p) => p.id === productId);
    }
},


    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })

    }

})

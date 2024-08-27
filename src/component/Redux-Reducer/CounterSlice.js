import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
};

const CounterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state, action)=>{
            state.value = state.value + action.payload;
        },
        decrement: (state, action)=>{
            state.value = state.value + action.payload;
        },
    },
});

const {reducer, actions}=CounterSlice;
export const {increment, decrement}= actions;
export default reducer;
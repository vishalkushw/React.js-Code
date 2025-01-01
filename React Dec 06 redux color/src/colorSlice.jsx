import { createSlice } from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"pink",
    },
    reducers:{
       changeColor:(state)=>{
        state.color="red";
       }
    }
})
export const {changeColor} = colorSlice.actions;
export default colorSlice.reducer;
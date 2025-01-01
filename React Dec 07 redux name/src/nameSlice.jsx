import { createSlice } from "@reduxjs/toolkit";
const nameSlice=createSlice({
    name:"myname",
    initialState:{
        nm:"Hellow friends i am from wardha",
    },
    reducers:{
       changeName:(state)=>{
        state.nm="we are cybrom student";
       }
    }
})
export const {changeName} = nameSlice.actions;
export default nameSlice.reducer;
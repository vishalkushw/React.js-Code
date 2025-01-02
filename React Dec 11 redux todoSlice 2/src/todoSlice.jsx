import {createSlice} from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.task.push(actions.payload);
        
            
        },
        deleteTask:(state,actions)=>{
            console.log(actions.payload.id);
            state.task=state.task.filter(key=> key.id!=actions.payload.id);
        },
        editDataSave:(state,actions)=>{
            for(var i=0; i<state.task.length;i++)
            {
                if(state.task[i].id==actions.payload.id)
                {
                    state.task[i].work=actions.payload.work;
                }
            }
        }
        
    }
})
export const {addTask,deleteTask,editDataSave}=todoSlice.actions;
export default todoSlice.reducer;
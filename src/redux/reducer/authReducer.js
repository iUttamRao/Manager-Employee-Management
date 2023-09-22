import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    manager:[],
    employees:[],
    tasks: [],
}

const authReducer = createSlice({
    name:'auth',
    initialState,
    reducers:{
        addManager : (state,action) => {
            state.manager.push(action.payload);
        },
        addEmployee:(state,action) =>{
            state.employees.push(action.payload);
        },
        addTask:(state,action) =>{
            state.tasks.push(action.payload);
        },
        removeTask :(state,action) => {
            state.tasks.splice(action.payload, 1);
        },
    }
})

export default authReducer.reducer;
export const {addManager,addEmployee,addTask,removeTask} = authReducer.actions
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    arr: []
}

const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        saveArr: (state, action) => {
            state.arr = action.payload
        },
        add: (state, action) => {
            state.arr.push(action.payload)
        },
        remove: (state, action) => {
            state.arr = state.arr.filter(item => item._id !== action.payload)
        },
        update: (state, action) => {
            state.arr = state.arr.map(item => item._id === action.payload._id ? action.payload : item)
        }
    }
})

export const { add, remove, update, saveArr } = clientSlice.actions;
export default clientSlice.reducer;

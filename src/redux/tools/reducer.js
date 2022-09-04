import { createSlice } from '@reduxjs/toolkit';

const toolsSlice = createSlice({
    name: 'tools',
    initialState: {
        currentTool: null
    },
    reducers: {
        setCurrentTool: (state, action) => {
            state.currentTool = action.payload;
        }
    }
});

export const { setCurrentTool } = toolsSlice.actions;
export default toolsSlice.reducer;
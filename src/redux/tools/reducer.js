import { createSlice } from '@reduxjs/toolkit';

const toolsSlice = createSlice({
    name: 'tools',
    initialState: {
        currentGame: null
    },
    reducers: {
        setCurrentTool: (state, action) => {
            state.currentGame = action.payload;
        }
    }
});

export const { setCurrentTool } = toolsSlice.actions;
export default toolsSlice.reducer;
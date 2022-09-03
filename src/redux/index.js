import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import toolsReducer from './tools/reducer';

export const store = configureStore({
   reducer : {
       cart: cartReducer,
       tool: toolsReducer
   }
});
import {configureStore } from "@reduxjs/toolkit";
import createReducer from './CrudSlice';

export const store = configureStore({
         reducer :{
                  userDetail : createReducer,
         }        
})



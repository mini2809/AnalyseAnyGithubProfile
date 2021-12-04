import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slices/Login'

export default configureStore({
    reducer:{
        login:loginReducer,
    },
})
import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    user:{},
  }
export const loginSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        getLogin:state=>{
            state.loading = true;
        },
        getLoginSuccess: (state,{ payload })=>{
            state.user = payload
            state.hasErrors = false
            state.loading =false
        },
        getLoginFailure: state =>{
            state.loading = false
            state.hasErrors = true
        },
    }
})

//Three actions generated from the slice
export const { getLogin, getLoginSuccess, getLoginFailure } = loginSlice.actions

//A selector
export const loginSelector = (state) => state.user || {};

//The reducer
export default loginSlice.reducer

//Asynchronous thunk action
export const fetchLogin=()=>{
    return async dispatch =>{
        dispatch(getLogin())
        try{
            const response  = await fetch('http://localhost:4000/authenticate');
            const data = await response.json();
            dispatch(getLoginSuccess(data))
        }catch(error){
            dispatch(getLoginFailure)
        }
    }
}

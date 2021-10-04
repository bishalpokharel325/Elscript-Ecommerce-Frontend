import axios from "axios"
import { USER_LOGIN_DATA_FAIL, USER_LOGIN_DATA_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PASSWORD_CHANGE_FAIL, USER_PASSWORD_CHANGE_REQUEST, USER_PASSWORD_CHANGE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_VERIFY_FAIL, USER_REGISTER_VERIFY_REQUEST, USER_REGISTER_VERIFY_SUCCESS, USER_RESET_FAIL, USER_RESET_REQUEST, USER_RESET_SUCCESS, USER_RESET_VERIFY_FAIL, USER_RESET_VERIFY_REQUEST, USER_RESET_VERIFY_SUCCESS } from "../constants/userConstants"

export const postUser=(formData)=> async(dispatch)=>{
    try{
        dispatch({
        type:USER_REGISTER_REQUEST
    })
    const resData=await axios.post("http://localhost:8000/auth/users/",formData)
    dispatch({
        type:USER_REGISTER_SUCCESS,
        payload:resData.data
    })
    }
    catch(error){
        dispatch({
        type:USER_REGISTER_FAIL,
        payload:error
    })
    }
    
}
export const verifyUser=(formData)=> async(dispatch)=>{
    try{
        dispatch({
        type:USER_REGISTER_VERIFY_REQUEST
    })
    const resData=await axios.post("http://localhost:8000/auth/users/activation/",formData)
    dispatch({
        type:USER_REGISTER_VERIFY_SUCCESS,
        payload:resData.data
    })
    }
    catch(error){
        dispatch({
        type:USER_REGISTER_VERIFY_FAIL,
        payload:error
    })
    }
}
export const logInUser=(formData)=> async(dispatch)=>{
    try{
        dispatch({
        type:USER_LOGIN_REQUEST
    })
    const resData=await axios.post("http://localhost:8000/auth/jwt/create/",formData)
    dispatch({
        type:USER_LOGIN_SUCCESS,
        payload:resData.data
    })
    if(resData.data.access){
        dispatch(loadUser(resData.data.access))
    }
    
    }
    catch(error){
        dispatch({
        type:USER_LOGIN_FAIL,
        payload:error
    })
    }
    
}
export const loadUser=(access)=> async(dispatch)=>{
    try{
        if(access!="logout"){
            const userData=await axios.get("http://localhost:8000/auth/users/me/",{
        headers:{
            "Authorization":"JWT "+access
        }
    })
    dispatch({
        type:USER_LOGIN_DATA_SUCCESS,
        payload:userData.data
    })
        }
    
    if(access=="logout"){
        dispatch({
        type:USER_LOGOUT,

    })
    }
    }
    
    catch(error){
        dispatch({
        type:USER_LOGIN_DATA_FAIL,
        payload:error
    })
    }
}
export const resetPassword=(formData)=>async (dispatch)=>{
try{
    dispatch({
        type:USER_RESET_REQUEST,
    })
    const resData=await axios.post("http://localhost:8000/auth/users/reset_password/",formData)
    dispatch({
        type:USER_RESET_SUCCESS,
        payload:resData.data
    })
}
catch(error){
    dispatch({
        type:USER_RESET_FAIL,
        payload:error
    })
}
}
export const verifyPassword=(formData)=>async (dispatch)=>{
try{
    dispatch({
        type:USER_RESET_VERIFY_REQUEST,
    })
    const resData=await axios.post("http://localhost:8000/auth/users/reset_password_confirm/",formData)
    dispatch({
        type:USER_RESET_VERIFY_SUCCESS,
        payload:resData.data
    })
}
catch(error){
    dispatch({
        type:USER_RESET_VERIFY_FAIL,
        payload:error
    })
}
}
export const changePassword=(formData,access)=>async (dispatch)=>{
try{
    dispatch({
        type:USER_PASSWORD_CHANGE_REQUEST,
    })
    const config={
        headers:{
            "Authorization":"JWT "+access
        }
    }
    const resData=await axios.post("http://localhost:8000/auth/users/set_password/",formData,config)
    dispatch({
        type:USER_PASSWORD_CHANGE_SUCCESS,
        payload:resData.data
    })
}
catch(error){
    dispatch({
        type:USER_PASSWORD_CHANGE_FAIL,
        payload:error
    })
}
}
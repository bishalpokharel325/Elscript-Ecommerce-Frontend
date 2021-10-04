import { USER_LOGIN_DATA_FAIL, USER_LOGIN_DATA_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_PASSWORD_CHANGE_FAIL, USER_PASSWORD_CHANGE_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_VERIFY_FAIL, USER_REGISTER_VERIFY_REQUEST, USER_REGISTER_VERIFY_SUCCESS, USER_RESET_FAIL, USER_RESET_REQUEST, USER_RESET_SUCCESS, USER_RESET_VERIFY_FAIL, USER_RESET_VERIFY_REQUEST, USER_RESET_VERIFY_SUCCESS, USER_PASSWORD_CHANGE_SUCCESS, USER_LOGOUT } from "../constants/userConstants";

export const userPostReducer=(state={postUserData:[],success:false,loading:false,error:null},action)=>{
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return({
                loading:true,
                postUserData:[],
                success:false
            })
        case USER_REGISTER_SUCCESS:
            return({
                loading:false,
                postUserData:action.payload,
                success:true
            })
        case USER_REGISTER_FAIL:
            return({
                loading:false,
                error:"Cannot Register, Something Wrong!!"
            })
        default:
            return{
                state
            }
    }
}
export const userVerifyReducer=(state={userVerifyData:[],success:false,loading:false,error:null},action)=>{
    switch (action.type) {
        case USER_REGISTER_VERIFY_REQUEST:
            return({
                loading:true,
                postUserData:[],
                success:false
            })
        case USER_REGISTER_VERIFY_SUCCESS:
            return({
                loading:false,
                userVerifyData:action.payload,
                success:true
            })
        case USER_REGISTER_VERIFY_FAIL:
            return({
                loading:false,
                error:"Cannot Verify, Something Wrong!!",
                ...state
            })
        default:
            return{
                state
            }
    }
}
export const userLoginReducer=(state={userLoginData:[],success:false,loading:false,error:null},action)=>{
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return({
                loading:true,
                userLoginData:[],
                success:false
            })
        case USER_LOGIN_SUCCESS:
            localStorage.setItem('access',action.payload.access)
            localStorage.setItem('refresh',action.payload.refresh)
            return({
                ...state,
                loading:false,
                userLoginData:action.payload,
                success:true,
                error:null,
            })
        case USER_LOGIN_FAIL:
            return({
                loading:false,
                userLoginData:[],
                success:false,
                error:"Cannot Login, Something Wrong!!",
            })
        default:
            return{
                ...state
            }
    }
}
export const userLoadReducer=(state={userLoadData:{},success:false,error:null},action)=>{
    switch (action.type) {
        case USER_LOGIN_DATA_SUCCESS:
            return({
                userLoadData:action.payload,
                success:true,
                error:null,
            })
        case USER_LOGOUT:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return({
                userLoadData:null,
                success:false,
                error:null,
            })
        case USER_LOGIN_DATA_FAIL:
            return({
                userLoadData:{},
                error:"Cannot Login, Something Wrong!!",
                success:false,
            })
        default:
            return{
                state
            }
    }
}

export const resetReducer=(state={resetData:[],success:false,loading:false,error:null},action)=>{
    switch (action.type) {
        case USER_RESET_REQUEST:
            return({
                loading:true,
                resetData:[],
                success:false,
                error:null
            })
        case USER_RESET_SUCCESS:
            return({
                loading:false,
                error:null,
                resetData:action.payload,
                success:true
            })
        case USER_RESET_FAIL:
            return({
                loading:false,
                resetData:[],
                error:"Cannot Register, Something Wrong!!",
                success:false,
            })
        default:
            return{
            state
            }
    }
}

export const resetVerifyReducer=(state={resetVerifyData:[],success:false,loading:false,error:null},action)=>{
    switch (action.type) {
        case USER_RESET_VERIFY_REQUEST:
            return({
                loading:true,
                resetVerifyData:[],
                success:false,
                error:null
            })
        case USER_RESET_VERIFY_SUCCESS:
            return({
                loading:false,
                error:null,
                resetVerifyData:action.payload,
                success:true
            })
        case USER_RESET_VERIFY_FAIL:
            return({
                loading:false,
                resetVerifyData:[],
                error:"Cannot Register, Something Wrong!!",
                success:false,
            })
        default:
            return{
                state
            }
    }
}




export const changePasswordReducer=(state={changePasswordData:[],success:false,loading:false,error:null},action)=>{
    switch (action.type) {
        case USER_PASSWORD_CHANGE_REQUEST:
            return({
                loading:true,
                changePasswordData:[],
                success:false,
                error:null
            })
        case USER_PASSWORD_CHANGE_SUCCESS:
            return({
                loading:false,
                error:null,
                changePasswordData:action.payload,
                success:true
            })
        case USER_PASSWORD_CHANGE_FAIL:
            return({
                loading:false,
                changePasswordData:[],
                error:"Cannot Register, Something Wrong!!",
                success:false,
            })
        default:
            return{
                state
            }
    }
}
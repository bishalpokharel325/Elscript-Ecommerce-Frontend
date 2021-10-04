import axios from "axios"
import { ORDER_LIST_POST_FAIL, ORDER_LIST_POST_SUCCESS } from "../constants/orderConstants"

export const postOrderList=(formData)=>async (dispatch)=>{
    try{
        const resData=await axios.post("http://localhost:8000/api/post-orderItems",formData)
        dispatch({
            type:ORDER_LIST_POST_SUCCESS,
            payload:resData.data
        })
    }catch(error){
dispatch({
            type:ORDER_LIST_POST_FAIL,
            payload:error
        })
    }
}
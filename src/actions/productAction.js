import axios from "axios"
import { PRODUCT_GET_REQUEST,PRODUCT_GET_SUCCESS,PRODUCT_GET_FAIL,PRODUCT_GET_SINGLE_REQUEST,PRODUCT_GET_SINGLE_SUCCESS,PRODUCT_GET_SINGLE_FAIL } from "../constants/productConstants"

export const getProducts=(params)=>async (dispatch)=>{
    try{
        dispatch({
            type:PRODUCT_GET_REQUEST
        })
        const resProduct=await axios.get("http://localhost:8000/api/get-products",{params})
        dispatch({
            type:PRODUCT_GET_SUCCESS,
            payload:resProduct.data
        })
    }
    catch(err){
            dispatch({
            type:PRODUCT_GET_FAIL,
            payload:err
        })
    }
}
export const getSingleProducts=(id)=>async (dispatch)=>{
    try{
        dispatch({
            type:PRODUCT_GET_SINGLE_REQUEST
        })
        const resProduct=await axios.get(`http://localhost:8000/api/get-products/${id}`)
        dispatch({
            type:PRODUCT_GET_SINGLE_SUCCESS,
            payload:resProduct.data
        })
    }
    catch(err){
            dispatch({
            type:PRODUCT_GET_SINGLE_FAIL,
            payload:err
        })
    }
}
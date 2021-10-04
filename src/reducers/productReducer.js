import { PRODUCT_GET_FAIL, PRODUCT_GET_REQUEST, PRODUCT_GET_SINGLE_FAIL, PRODUCT_GET_SINGLE_REQUEST, PRODUCT_GET_SINGLE_SUCCESS, PRODUCT_GET_SUCCESS } from "../constants/productConstants"

export const getProductReducer=(state={productData:[],success:false,loading:false,error:null},action)=>{
    switch (action.type) {
        case PRODUCT_GET_REQUEST:
            return({
                loading:true,
                productData:[],
                success:false
            })
        case PRODUCT_GET_SUCCESS:
            return({
                loading:false,
                productData:action.payload,
                success:true
            })
        case PRODUCT_GET_FAIL:
            return({
                loading:false,
                error:"Cannot Load Data, Something Wrong!!"
            })
        default:
            return{
                state
            }
    }
}
export const getSingleProductReducer=(state={productSingleData:[],success:false,loading:false,error:null},action)=>{
    switch (action.type) {
        case PRODUCT_GET_SINGLE_REQUEST:
            return({
                loading:true,
                productSingleData:[],
                success:false
            })
        case PRODUCT_GET_SINGLE_SUCCESS:
            return({
                loading:false,
                productSingleData:action.payload,
                success:true
            })
        case PRODUCT_GET_SINGLE_FAIL:
            return({
                loading:false,
                error:"Cannot Load Data, Something Wrong!!"
            })
        default:
            return{
                state
            }
    }
}
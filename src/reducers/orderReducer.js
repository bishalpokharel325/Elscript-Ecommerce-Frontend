import { ORDER_LIST_POST_FAIL, ORDER_LIST_POST_SUCCESS } from "../constants/orderConstants"

export const orderListPostReducer=(state={listPostData:[],success:false,error:null},action)=>{
    switch (action.type) {
        case ORDER_LIST_POST_SUCCESS:
            return({
                listPostData:action.payload,
                success:true,
                error:null
            })
        case ORDER_LIST_POST_FAIL:
            return({
               listPostData:[],
                error:"Cannot Register, Something Wrong!!",
                success:false,
            })
        default:
            return{
                state
            }
    }
}
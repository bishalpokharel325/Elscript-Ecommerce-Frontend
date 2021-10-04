import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { orderListPostReducer } from "./reducers/orderReducer"
import { getProductReducer, getSingleProductReducer } from "./reducers/productReducer"
import { changePasswordReducer, resetReducer, resetVerifyReducer, userLoadReducer, userLoginReducer, userPostReducer, userVerifyReducer } from "./reducers/userReducer"

const initialstate={}
const middleware=[thunk]
const reducers=combineReducers({
    userPostData:userPostReducer,
    userVerifyData:userVerifyReducer,
    userLoginData:userLoginReducer,
    userData:userLoadReducer,
    userResetData:resetReducer,
    userResetVerifyData:resetVerifyReducer,
    userChangePasswordData:changePasswordReducer,
    listPostData:orderListPostReducer,
    getProductData:getProductReducer,
    getSingleProductData:getSingleProductReducer
})
const store=createStore(reducers,initialstate,composeWithDevTools(applyMiddleware(...middleware)))
export default store

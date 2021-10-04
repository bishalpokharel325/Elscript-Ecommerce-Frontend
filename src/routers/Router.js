import React from 'react'

import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Layout from '../hoc/Layout'
import ActivatePage from '../pages/ActivatePage'
import ForgotPassword from '../pages/ForgotPassword'
import Landing from '../pages/Landing'
import LoginPage from '../pages/LoginPage'
import OrderListPage from '../pages/OrderListPage'
import ProductDetails from '../pages/ProductDetails'
import ProductLists from '../pages/ProductLists'
import RegisterPage from '../pages/RegisterPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import ResetPasswordVerifyPage from '../pages/ResetPasswordVerifypage'

const Router = () => {
     
    return (
        <BrowserRouter>
        <Layout>
                <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/productdetails/:id" component={ProductDetails}/>
                <Route path="/products" component={ProductLists}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/register" exact component={RegisterPage}/>
                <Route path="/reset-password" exact component={ResetPasswordPage}/>
                 <Route path="/forgot-password" exact component={ForgotPassword}/>
                <Route path="/activate/:uid/:token" exact component={ActivatePage}/>
                <Route path="/password/reset/confirm/:uid/:token" exact component={ResetPasswordVerifyPage}/>
                <Route path="/orderlist" exact component={OrderListPage}/>
            </Switch>
        </Layout>
            
        </BrowserRouter>
    )
}

export default Router

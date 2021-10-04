import React, { useContext, useEffect, useState } from 'react'
import './Navbar2.css'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Avatar } from '@material-ui/core';
import { keywordContext,cartnoContext, orderListContext } from '../App';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../actions/userAction';



const Navbar2 = () => {
    const {order_list, setOrderList}=useContext(orderListContext) 
    const {keyword,setKeyword}=useContext(keywordContext)
    const {userLoadData,success,error}=useSelector(state => state.userData)
    const dispatch = useDispatch()
    const onLogOut=(e)=>{
    e.preventDefault()
    }
    console.log(userLoadData)
    const getTotalCartPrice=()=>{
        let total=0
        order_list.forEach((item,key)=>{
            item=JSON.parse(item)
            total=total+parseInt(item.quantity)*parseFloat(item.price)
        })
        return total
    }
    return (
        <div className="navbar2">
            <div className="navbar__left">
                <Link to="/">
                    <img src="./Elscript.png"/>
                </Link>
            </div>
            <div className="navbar__middle">
                <form onClick={e=>{
                    e.preventDefault()
                }}>
                    <input required placeholder="Search Anything" value={keyword} onChange={(e)=>{
                    setKeyword(e.target.value)
                }}/>
                <Link type="submit" to="/products" className="navbar__middle__icon">
                    <SearchSharpIcon className="search__icon"/>
                </Link>
                </form>
            </div>
            <div className="navbar__right">
                <Link to="/orderlist">
                    <div className="navbar__right__cart">
                    <h4>Cart</h4>
                    <ShoppingCartSharpIcon className="cart__icon"/>
                    <p>{order_list?order_list.length:0}</p>
                    <h5 className="cart__price">$({order_list?getTotalCartPrice():0.00})</h5>
                </div>
                </Link>
                
                <div className="navbar__right__signin">
                    {success?<h4>Hello,{userLoadData.first_name}</h4>:<h4>Sign In</h4>}
                    <Avatar/>
                    <KeyboardArrowDownIcon/>
                    {success?
                        <div className="navbar2__dropdown">
                <Link>Your Account</Link>
                <Link>Account Setting</Link>
                <Link>Your Orders</Link>
                <Link>Shortlists</Link>
                <a onClick={(e)=>{
                    onLogOut(e)
                }}>Sign Out</a>
            </div>
            :
            <div className="navbar2__dropdown">
                <Link to="/register">Register</Link>
                <Link to="/login">Sign In</Link>
            </div>
                    }
                    
                </div>
                
            </div>
            
        </div>
    )
}
export default Navbar2

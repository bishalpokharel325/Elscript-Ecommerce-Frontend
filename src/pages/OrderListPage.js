import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import "./OrderList.css"
import { orderListContext } from '../App';
import axios from 'axios';
import { Link } from 'react-router-dom';
const OrderListPage = () => {
    const {order_list, setOrderList}=useContext(orderListContext) 
    const getTotalCartPrice=()=>{
        let total=0
        order_list.forEach((item,key)=>{
            item=JSON.parse(item)
            total=total+parseInt(item.quantity)*parseFloat(item.price)
        })
        return total
    }
    return (
       <div className="register__body flex-column">
            <div className="register__form col-md-9">
                <div>
                     <h4>Your Order List:</h4>
                 <hr/>
                </div>
               
                <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Photo</th>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col">Delete Items</th>
    </tr>
  </thead>
  {order_list.map((item)=>{
      item=JSON.parse(item)
      console.log(item)
      return(
<tbody>
    <tr>
      <th scope="row">
        <img src={item.image} className="order__list__image"/>
      </th>
      <td>{item.title}</td>
      <td>${item.price}</td>
        <td>
            <span className="mx-2">
                <AddIcon/>
            </span>
          {item.quantity}
          <span className="mx-2">
                <RemoveIcon/>
            </span>
        </td>
      <td>${item.price*item.quantity}</td>
       <td><CloseIcon className="text-danger"/></td>
    </tr>
  </tbody>
      )
  })}
  
</table>                
            </div>

            <div className="register__form col-md-9">
                <div className="order__item__second__header">
                     <Link className="btn btn-outline-dark" to="/products">&#8592; &emsp;Continue Shopping</Link>
                <button className="btn btn-outline-success">Make an Order &emsp;&#8594;</button>

                </div>
              
                 <hr/>
                 <div className="order__list__seconddiv">
                    <span>Item: {order_list.length}</span>
                    <span>Total Price: ${getTotalCartPrice()}</span>
                 </div>
            </div>

        </div>
    )
}

export default OrderListPage

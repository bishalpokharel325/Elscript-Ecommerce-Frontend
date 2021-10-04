import React, { useContext, useEffect, useState } from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import ReactImageZoom from 'react-image-zoom';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

import './ProductDetails.css'
import axios from 'axios';
import showStars from '../modules/showStars';
import ButtonPlus from '../components/ButtonPlus';
import Buttonminus from '../components/Buttonminus';
import { orderListContext } from '../App';
import { useSelector } from 'react-redux';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { Link } from 'react-router-dom';

const ProductDetails = ({match}) => {
    const [no,setNo]=useState(0)
    const [totalprice,setTotalPrice]=useState(0)
     const {userLoadData,success,error}=useSelector(state => state.userData)
    const [productdetails, setproductDetails] = useState(
        {})
    const [image_url, setImageurl] = useState("")
    const {order_list, setOrderList}=useContext(orderListContext)
     const [orderData, setOrderData] = useState({
        productId:parseInt(match.params.id),
        title:"",
        price:"",
        image:"",
        quantity:no,
    })
    useEffect(() => {
        axios
        .get(`/api/get-products/${match.params.id}`)
        .then((data)=>{
           
           setproductDetails(data.data)
           setImageurl(data.data.image)
           
        })
    },[])
 useEffect(()=>{
    setTotalPrice(productdetails.price*no) 
 },[no])
 
    console.log(order_list)
    const zoom_props = {scale:1,zoomWidth:500,img: 'http://localhost:8000'+image_url};
    return (
        <div className="product__details">
            <div className="product__detail__body">
                <div className="product__detail__top">
                    <div className="detail__top__left">
                        <ReactImageZoom {...zoom_props}/>
                    </div>
                    <div className="detail__top__middle">
                        <h3>{productdetails.title}</h3>
                         <div className="rating__div">
                            <span>{productdetails.rating&&showStars(productdetails.rating)}</span>
                            <span className="rating__number">({productdetails.rating&&productdetails.rating}/5) of 143 ratings</span>
                        </div>
                        <a href="#"><span>Read 49 reviews from customers</span></a>
                        <h2>Price:&emsp; ${productdetails.price}</h2>
                        
                         <div className="card__wide__cartarea">
                             <h2>Add to Cart:</h2>
                        
                  
                <input type="number" className="form-control" onChange={
                    (e)=>{

                        setNo(parseInt(e.target.value))
                        let newdata={...orderData}
                        newdata["quantity"]=parseInt(e.target.value)
                        newdata["title"]=productdetails.title
                        newdata["price"]=parseInt(productdetails.price)
                        newdata["image"]=image_url
                        setOrderData(newdata)                            
                    }
                }
                placeholder={0}
                />
                <p>(${totalprice?totalprice:0})</p>
                <div className="mx-2"  onClick={(e)=>{
                           e.preventDefault()
                            setOrderList([...order_list, JSON.stringify(orderData)])
                            localStorage.setItem("order_list",order_list)
                    }}>
                            <AddShoppingCartIcon/>
                        </div>
                
                </div>
                <p>{productdetails.description}</p>
                    </div>
                    <div className="detail__top__right">
                        top right
                        <Link to="/orderlist" className="btn btn-success">Proceed to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails

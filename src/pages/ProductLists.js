import { InputLabel, Select } from '@material-ui/core'
import React, { createContext, useContext, useEffect, useState } from 'react'
import Filterbox from '../components/Filterbox'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import './ProductLists.css'
import ViewComfySharpIcon from '@material-ui/icons/ViewComfySharp';
import ViewListSharpIcon from '@material-ui/icons/ViewListSharp';
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import ProductCardWide from '../components/ProductCardWide'
import { Link } from 'react-router-dom'
import { keywordContext } from '../App'
import { categoryContext } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productAction'
const brandContext=createContext()
const codContext=createContext()
const freeshipContext=createContext()
const priceminContext=createContext()
const pricemaxContext=createContext()
const ratingminContext=createContext()
const ratingmaxContext=createContext()
const colorContext=createContext()
const discountContext=createContext()
const sortfieldContext=createContext()
const sortdirectionContext=createContext()
const warrantyContext=createContext()
const ProductLists = () => {
   
    const [brand, setBrand] = useState(null)
    const {keyword, setKeyword} = useContext(keywordContext)
    const {category, setCategory} = useContext(categoryContext)
    const [cod, setCod] = useState(null)
    const [freeship, setFreeship] = useState(null)
    const [price_min, setPricemin] = useState(null)
    const [price_max, setPricemax] = useState(null)
    const [ratingmin, setRatingmin] = useState(null)
    const [ratingmax, setRatingmax] = useState(null)
    const [color, setColor] = useState(null)
    const [discount, setDiscount] = useState(null)
    const [sortfield, setSortfield] = useState(null)
    const [sortdirection, setSortDirection] = useState(null)
    const [warranty, setWarranty] = useState(null)
    const [view, setView] = useState("tile_view")
    const [viewstyle1, setViewStyle1] = useState("view__icon__selected")
    const [viewstyle2, setViewStyle2] = useState(null)
    
    let params={
        brand:brand,
        cash_on_delivery:cod,
        free_shipping:freeship,
        price_min:price_min,
        price_max:price_max,
        rating_min:ratingmin,
        rating_max:ratingmax,
        color_family:color,
        warranty_years:warranty,
        sort_by:sortfield,
        sort_direction:sortdirection,
        discount_price:discount,
        keyword:keyword,


    }
    const {productData,success,loading,error} = useSelector(state => state.getProductData)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getProducts(params))
    },[dispatch,brand,cod,category,view,keyword,freeship,price_min,price_max,ratingmin,ratingmax,color,warranty,sortfield,discount,sortdirection])
    console.log(productData)
    return (
        <div className="product__lists">
            <div className="app__body">
                
                    <brandContext.Provider value={{brand,setBrand}}>
                        <codContext.Provider value={{cod,setCod}}>
                            <freeshipContext.Provider value={{freeship,setFreeship}}>
                            <priceminContext.Provider value={{price_min,setPricemin}}>
                            <pricemaxContext.Provider value={{price_max,setPricemax}}>
                            <ratingminContext.Provider value={{ratingmin,setRatingmin}}>
                            <colorContext.Provider value={{color,setColor}}>
                                <discountContext.Provider value={{discount,setDiscount}}>
                                <sortfieldContext.Provider value={{sortfield,setSortfield}}>
                                <sortdirectionContext.Provider value={{sortdirection,setSortDirection}}>
                                <warrantyContext.Provider value={{warranty,setWarranty}}>
                                    <ratingmaxContext.Provider value={{ratingmax,setRatingmax}}>
                                        <Filterbox/>
                                    </ratingmaxContext.Provider>  
                        </warrantyContext.Provider>
                        </sortdirectionContext.Provider>
                        </sortfieldContext.Provider>
                        </discountContext.Provider>
                        </colorContext.Provider>
                        </ratingminContext.Provider>
                        </pricemaxContext.Provider>
                        </priceminContext.Provider>
                        </freeshipContext.Provider>
                        </codContext.Provider>
                    </brandContext.Provider>
                
                <div className="app__body__right">
                    <div className="app__right__top">
                        <div className="right__header">
                            <h3>{category}</h3>
                        </div>
                        <div className="right__second__header">
                            <p><i>Found {productData&&productData.length} Items</i></p>
                            <div className="right__sortarea">
                                <p>Sort By:</p>
                        <select
                        onChange={(e)=>{
                            const sortparameter=e.target.value.split(" ")
                            sortparameter[1]=parseInt(sortparameter[1])
                            console.log(typeof(sortparameter[1]))
                            setSortfield(sortparameter[0])
                            setSortDirection(parseInt(sortparameter[1]))  
                        }}
                        >
                            <option disabled selected>Sort List:</option>
                            <option value="price 1"> Price Low to High</option>
                            <option value="price -1"> Price High to Low</option>
                            <option value="created_at 1"> Newest to Oldest</option>
                            <option value="created_at -1"> Oldest to Newest</option>
                            <option value="rating -1"> Rating High to Low</option>
                            <option value="rating 1"> Rating Low to High</option>
                            <option value={null}> Most to Least sold</option>
                            <option value={null}> Least to Most sold</option>
                        </select>
                            </div>
                            <div className="view__area">
                                <p>View:</p>
                                <button
                                onClick={(e)=>{
                                    e.preventDefault()
                                    setView("tile_view")
                                    setViewStyle1("view__icon__selected")
                                    setViewStyle2(null)
                                }}
                                >
                                    <ViewComfySharpIcon className={viewstyle1}/>
                                </button>
                                <button
                                onClick={(e)=>{
                                    e.preventDefault()
                                    setView("list_view")
                                    setViewStyle2("view__icon__selected")
                                    setViewStyle1(null)
                                }}
                                >
                                    <ViewListSharpIcon className={viewstyle2} />
                                </button>
                                
                            </div>
                            
                        </div>
                        <hr/>
                    </div>
                     
                    <div className="app__right__bottom">
                      {/* {productdata.map((item)=>{
                          if(view=="tile_view")
                           return 
                           (<Link to={`/productdetails/${item.slug}`}><ProductCard key={item.id} title={item.title} price={item.price} rating={item.rating} src={`http://localhost:8000${item.image}`}/></Link>)
                        if(view=="list_view")
                         return (<Link to={`/productdetails/${item.slug}`}><ProductCardWide key={item.id} description={item.description} title={item.title} price={item.price} rating={item.rating} src={`http://localhost:8000${item.image}`}/></Link>)
                      })}  */}

                      {productData&&productData.map((item)=>{
                          if(view=="list_view")
                         return (<Link to={`/productdetails/${item.id}`}><ProductCardWide key={item.id} description={item.description} title={item.title} price={item.price} rating={item.rating} src={`http://localhost:8000${item.image}`}/></Link>)
                         
                           return <Link to={`/productdetails/${item.id}`}><ProductCard key={item.id} title={item.title} price={item.price} rating={item.rating} src={`http://localhost:8000${item.image}`}/></Link> 
                       })
                     }
                      </div>

                </div>
            </div>
        </div>
    )
}
export {discountContext,brandContext,codContext,freeshipContext,priceminContext,pricemaxContext,ratingminContext,ratingmaxContext,colorContext,warrantyContext,sortdirectionContext,sortfieldContext}
export default ProductLists

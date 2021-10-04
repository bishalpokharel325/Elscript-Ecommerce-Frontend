import React, { useContext } from 'react'
import './Filterbox.css'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { brandContext, codContext, colorContext, discountContext, freeshipContext, pricemaxContext, priceminContext,ratingmaxContext,ratingminContext, sortdirectionContext, sortfieldContext, warrantyContext } from '../pages/ProductLists';
import { Input, TextField } from '@material-ui/core';
import { categoryContext } from '../App';


const useStyles = makeStyles({
  Checkbox: {
    color: 'orange',
  },
  TextField:{
    marginTop:"10px",
    borderColor:"darkorange",
    borderWidth:'2px',
  }
});
const Filterbox = () => {
    const classes = useStyles();
    const {category, setCategory} = useContext(categoryContext)
    const {brand, setBrand} = useContext(brandContext)
    const {cod, setCod} = useContext(codContext)
    const {freeship, setFreeship} = useContext(freeshipContext)
    const {price_min, setPricemin} = useContext(priceminContext)
    const {price_max, setPricemax} = useContext(pricemaxContext)
    const {ratingmin, setRatingmin} = useContext(ratingminContext)
    const {ratingmax, setRatingmax} = useContext(ratingmaxContext)
    const {color, setColor} = useContext(colorContext)
    const {discount, setDiscount} = useContext(discountContext)
    const {sortfield, setSortfield} = useContext(sortfieldContext)
    const {sortdirection, setSortDirection} = useContext(sortdirectionContext)
    const {warranty, setWarranty} = useContext(warrantyContext)

    // useEffect(() => {
    //  axios
    //  .get()
    // }, [brand,cod,freeship,price_min,price_max,rating,color,warranty,sortfield,discount])
    return (
        <div className="filter__box">
            <div className="filter__box__top">
                <h3>Filter Items</h3>
            <hr/>
            </div>
            
            <div className="category__brand">
                <h4>Brand</h4>
                <div className="category__brand__items">
                 <Checkbox className={classes.Checkbox}/>
                  <label>Samsung</label>
                </div>

            </div>
            <hr/>
           

           <div className="category__brand">
                <h4>Service</h4>
                <div className="category__brand__items">
                 <Checkbox
                 value={cod} onChange={(e)=>{
                   if(cod==null){
                       setCod(true)
                   }
                   else{
                      setCod(null)
                   }
                   
                   }}
                 className={classes.Checkbox}/>
                  <label>Cash On Delivery</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox value={freeship} onChange={(e)=>{
                   if(freeship==null){
                       setFreeship(true)
                   }
                   else{
                      setFreeship(null)
                   }
                   
                   }} className={classes.Checkbox}/>
                  <label>Free Shipping</label>
                </div>
            </div>
            <hr/>
                   <div className="category__filter__price">
                     <h4>Price Range:</h4>
                     <div className="filter__price__range">
                       <TextField
                       value={price_min}
                       onChange={(e)=>{
                         setPricemin(e.target.value)
                       }}
                        className={classes.TextField} id="outlined-basic" label="Min. Price" variant="outlined" />
                       <TextField 
                       value={price_max}
                       onChange={(e)=>{
                         setPricemax(e.target.value)
                       }}
                       className={classes.TextField} id="outlined-basic" label="Max. Price" variant="outlined" />
                     </div>
                   </div>

                        <hr/>   
            <div className="category__brand">
            
                <h4>Rating</h4>
                <div className="filter__rating">
                       <select
                       onChange={(e)=>{
                  setRatingmin(parseInt(e.target.value))
                }}>
                         <option selected value="0">0</option>
                         <option value="0.5">0.5</option>
                         <option value="1">1.0</option>
                         <option value="1.5">1.5</option>
                         <option value="2">2</option>
                         <option value="2.5">2.5</option>
                         <option value="3">3</option>
                         <option value="3.5">3.5</option>
                         <option value="4">4</option>
                         <option value="4.5">4.5</option>
                         <option value="5">5</option>
                       </select>
                       <p><i>to</i></p>
                    <select
                       onChange={(e)=>{
                  setRatingmax(parseInt(e.target.value))
                }}>
                         <option value="0">0</option>
                         <option value="0.5">0.5</option>
                         <option value="1">1.0</option>
                         <option value="1.5">1.5</option>
                         <option value="2">2</option>
                         <option value="2.5">2.5</option>
                         <option value="3">3</option>
                         <option value="3.5">3.5</option>
                         <option value="4">4</option>
                         <option value="4.5">4.5</option>
                         <option selected value="5">5</option>
                       </select>
                       
                </div>
                
            </div>
            <hr/>


            {/* <div className="category__brand">
                <h4>Color Family</h4>
                <form>

                
                <div className="category__brand__items">
                 <Checkbox name="color" value="White"
                 onChange={(e)=>{
                   if(color!="White")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 className={classes.Checkbox}/>
                  <label>White</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox  name="color"
                  onChange={(e)=>{
                   if(color!="Black")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 value="Black" className={classes.Checkbox}/>
                  <label>Black</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox  name="color"
                  onChange={(e)=>{
                   if(color!="Grey")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 value="Grey" className={classes.Checkbox}/>
                  <label>Grey</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox  name="color"
                  onChange={(e)=>{
                   if(color!="Red")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 value="Red" className={classes.Checkbox}/>
                  <label>Red</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox  name="color"
                  onChange={(e)=>{
                   if(color!="Blue")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 value="Blue" className={classes.Checkbox}/>
                  <label>Blue</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox name="color"
                  onChange={(e)=>{
                   if(color!="Yellow")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 value="Yellow" className={classes.Checkbox}/>
                  <label>Yellow</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox name="color"
                  onChange={(e)=>{
                   if(color!="Cyan")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 value="Cyan" className={classes.Checkbox}/>
                  <label>Cyan</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox name="color"
                  onChange={(e)=>{
                   if(color!="Green")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 value="Green" className={classes.Checkbox}/>
                  <label>Green</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox name="color"
                  onChange={(e)=>{
                   if(color!="Silver")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 value="Silver" className={classes.Checkbox}/>
                  <label>Silver</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox name="color"
                  onChange={(e)=>{
                   if(color!="Gold")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 value="Gold" className={classes.Checkbox}/>
                  <label>Gold</label>
                </div>
                <div className="category__brand__items">
                 <Checkbox name="color"
                  onChange={(e)=>{
                  if(color!="Purple")
                   setColor(e.target.value)
                   else
                   setColor(null)
                 }}
                 value="Purple" className={classes.Checkbox}/>
                  <label>Purple</label>
                
                </div>
                
                </form>
            </div> */}
        </div>
        
    )
}

export default Filterbox

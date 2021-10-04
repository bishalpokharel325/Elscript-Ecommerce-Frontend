import React, { useState } from 'react'
import './ProductCardWide.css'
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import showStars from '../modules/showStars';
import { Description } from '@material-ui/icons';
import ButtonPlus from './ButtonPlus';
import Buttonminus from './Buttonminus';

const ProductCardWide = ({title,description,src,price,free_delivery,cash_on_delivery,discount,discount_date,rating,wish}) => {
    const [stars, setStars] = useState(0)
    const [cartno,setCartno]=useState(0)
    const placeholder_url="https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png"
    return (

        <div className="product__card__wide">
            {/* <div className="card__image" style={{ backgroundImage: `url(${src?src:placeholder_url})` }}>
                <FavoriteBorderSharpIcon className="wish__icon"/>
            </div>
            <h5>{title}</h5>
            <h3>$ {price}</h3>
            <div className="rating__div">
                <span>{rating&&showStars(rating)}</span>
            <span className="rating__number">({rating&&rating}/5)</span>
        </div> */}
        <div className="card__image" style={{ backgroundImage: `url(${src?src:placeholder_url})` }}>
                    <FavoriteBorderSharpIcon className="wish__icon"/>
                </div>
            <div className="card__wide__left">
                
                <div className="card__left__description">
                    <p><strong>{title}</strong></p>
                    <p className="description">{description}</p>
                    <div className="rating__div">
                <span>{rating&&showStars(rating)}</span>
            <span className="rating__number">({rating&&rating}/5)</span>
        </div>

                </div>
            </div>
            <div className="card__wide__right">
                <h2>${price}</h2>
                <div>
                    <p>Add to Cart:</p>
                <div className="card__wide__cartarea">
                    <ButtonPlus onClick={()=>{
                        setCartno(cartno=>cartno+1)
                    }}/>
                <h3>{cartno}</h3>
                <p>($0)</p>
                <Buttonminus onClick={()=>{
                    if(cartno>0){
                            setCartno(cartno=>cartno-1)
                    }
                        
                    }}/>
                </div>
                </div>
                
                
            </div>


        </div>
    )
}

export default ProductCardWide

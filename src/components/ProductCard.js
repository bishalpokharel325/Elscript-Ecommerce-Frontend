import React, { useState } from 'react'
import './ProductCard.css'
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import showStars from '../modules/showStars';

const ProductCard = ({title,src,price,free_delivery,cash_on_delivery,discount,discount_date,rating,wish}) => {
    const [stars, setStars] = useState(0)
    const placeholder_url="https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png"
    return (
        <div className="product__card">
           <div className="card__image" style={{ backgroundImage: `url(${src?src:placeholder_url})` }}>
                <FavoriteBorderSharpIcon className="wish__icon"/>
            </div>
            <h5>{title}</h5>
            <h3>$ {price}</h3>
            <div className="rating__div">
                <span>{rating&&showStars(rating)}</span>
            <span className="rating__number">({rating&&rating}/5)</span>
        </div>
            </div>
            
    )
}

export default ProductCard

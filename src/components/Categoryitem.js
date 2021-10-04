import React from 'react'
import './Categoryitem.css'

const Categoryitem = ({title}) => {
    
    return (
        <div className="category__item">
            <h5>{title}</h5>
        </div>
    )
}

export default Categoryitem

import React, { Fragment, useContext } from 'react'
import { cartnoContext } from '../App'

const ButtonPlus = () => {
    const {cartno,setCartno}=useContext(cartnoContext)
    return (
        <Fragment>
            <button className="button_change btn btn-success"  onClick={
                (e)=>{
                    e.preventDefault()
                    if(cartno>0){
                        setCartno(cartno=>cartno+1)
                    }
                
                
            }}>+</button>
        </Fragment>
    )
}

export default ButtonPlus

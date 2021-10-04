import React from 'react'
import StorefrontSharpIcon from '@material-ui/icons/StorefrontSharp';
import PhoneIphoneSharpIcon from '@material-ui/icons/PhoneIphoneSharp';
import ContactSupportSharpIcon from '@material-ui/icons/ContactSupportSharp';
import './Navbar1.css'

const Navbar1 = () => {
    return (
        <div className="navbar1">
            <a>
            <div className="nav__items">
                <h4>Sell on D-Commerce</h4>
                <StorefrontSharpIcon/>
            </div>
            </a>
             <a>
            <div className="nav__items background-secondary">
                <h4>Download App</h4>
                <PhoneIphoneSharpIcon/>
            </div>
            </a>
             <a>
            <div className="nav__items background-secondary">
                <h4>Help Center</h4>
                <ContactSupportSharpIcon/>
            </div>
            </a>
            
        </div>
    )
}

export default Navbar1

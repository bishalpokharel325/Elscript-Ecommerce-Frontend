import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../actions/userAction'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'

const Layout = (props) => {
   
    return (
        <div>
            <Navbar1/>
            <Navbar2/>
            {props.children}
        </div>
    )
}

export default Layout

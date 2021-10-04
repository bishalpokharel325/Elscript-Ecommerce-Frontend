import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { logInUser } from '../actions/userAction'
import './RegisterPage.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })
    const userLoginData = useSelector(state => state.userLoginData)
    const dispatch = useDispatch()
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        dispatch(logInUser(formData)) 
        console.log(userLoginData)
    }
    const onChangeHandler=(e)=>{
        const newdata={...formData}
        newdata[e.target.name]=e.target.value
        setFormData(newdata)
    }
    console.log(formData)
    return (
         <div className="register__body">
            <div className="register__form col-md-6">
                 <h4>Login Here</h4>
                 <hr/>
                <form method="post" onSubmit={(e)=>onSubmitHandler(e)}>
                    {userLoginData.error&&
<div className="alert alert-danger" role="alert">
  <h4 className="alert-heading">Sorry !</h4>
  <hr/>
  <p>Something Wrong. Login Failed</p>
    </div>
}
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email Address:</label>
    <input required type="email" className="form-control" name="email" value={formData.email} onChange={(e)=>onChangeHandler(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
    <input required type="password"  minLength={6} className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={(e)=>onChangeHandler(e)}/>
  </div>
   <Link to="/reset-password" className="my-2 col-md-4">Forgot password?</Link>
<Link to="/register" className="my-2 col-md-4">New User?</Link>
{!userLoginData.loading&&
<Fragment>
<button type="submit" className="btn btn-primary">
    Log In
  </button>
  <div className="mt-2">
    <h5>Social Logins</h5>
<button type="button" className="btn btn-primary bg-light text-dark">
  <FacebookIcon className="mx-1 text-primary"/>
    Sign In As Facebook
  </button>
  <button type="button" className="btn btn-primary mx-1 bg-light text-dark">
    <MailOutlineIcon className="mx-1 text-danger"/>
    Sign In As Google
  </button>
  </div>
  <div className="mt-2">
    <h5>Demo Login (For Testing):</h5>
<button type="button" className="btn btn-primary bg-light text-dark">
  < VpnKeyIcon/>
   Demo Login
  </button>
  </div>
  
</Fragment>
  
  
}
  {userLoginData.loading&&
  <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <div className="mr-2">
    Signing In...
    </div>
</button>
  }
  {
      userLoginData.success&&
      <Redirect to="/"/>
  }
</form>
</div>
</div>
    )
}

export default LoginPage

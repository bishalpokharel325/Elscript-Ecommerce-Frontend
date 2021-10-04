import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changePassword } from '../actions/userAction'

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        new_password:"",
        re_new_password:"",
        current_password:""
    })
    const userChangePasswordData = useSelector(state => state.userChangePasswordData)
    const dispatch = useDispatch()
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        dispatch(changePassword(formData,localStorage.getItem('access'))) 
        console.log(userChangePasswordData)
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
                <h4>Change Your Password</h4>
                 <form method="post" onSubmit={(e)=>onSubmitHandler(e)}>
                    {userChangePasswordData.error&&
<div className="alert alert-danger" role="alert">
  <h4 className="alert-heading">Sorry !</h4>
  <hr/>
  <p>Something Wrong. Could not change your password</p>
    </div>
}
{userChangePasswordData.success&&
<div className="alert alert-success" role="alert">
  <h4 className="alert-heading">Success !</h4>
  <hr/>
  <p>Your Password is Successfully Changed</p>
   <Link to="/login" className="my-2 col-md-4">Sign In Here</Link>
    </div>
}
{!userChangePasswordData.success&&
<Fragment>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Current Password:</label>
    <input type="password"  minLength={6} className="form-control" id="exampleInputPassword1" name="current_password" value={formData.current_password} onChange={(e)=>onChangeHandler(e)}/>
  </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
    <input type="password"  minLength={6} className="form-control" id="exampleInputPassword1" name="new_password" value={formData.new_password} onChange={(e)=>onChangeHandler(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Your Password:</label>
    <input type="password" minLength={6} className="form-control" name="re_new_password" value={formData.re_new_password} onChange={(e)=>onChangeHandler(e)}/>
  </div>
   <Link to="/login" className="my-2 col-md-4">Sign In Here</Link>
<Link to="/register" className="my-2 col-md-4">New User? Register Here</Link>        
  {userChangePasswordData.loading?
  <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Changing Password....
</button>
:
<button type="submit" className="btn btn-primary">
    Reset Password
  </button>
  }
</Fragment>
}


</form>
</div>
</div>
    )
}

export default ForgotPassword

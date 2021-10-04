import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetPassword } from '../actions/userAction'

const ResetPasswordPage = () => {

    const [formData, setFormData] = useState({
        email:"",
    })
    const userResetData = useSelector(state => state.userResetData)
    const dispatch = useDispatch()
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        dispatch(resetPassword(formData)) 
        console.log(userResetData)
    }
    const onChangeHandler=(e)=>{
        const newdata={...formData}
        newdata[e.target.name]=e.target.value
        setFormData(newdata)
    }
    
    return (
        <div className="register__body">
            <div className="register__form col-md-6">
                <h4>Reset Your Password</h4>
                 <form method="post" onSubmit={(e)=>onSubmitHandler(e)}>
                    {userResetData.error&&
<div className="alert alert-danger" role="alert">
  <h4 className="alert-heading">Sorry !</h4>
  <hr/>
  <p>Something Wrong. Login Failed</p>
    </div>
}
{userResetData.success&&
<div className="alert alert-success" role="alert">
  <h4 className="alert-heading">Success !</h4>
  <hr/>
  <p>Reset Link is Sent to your Email Account</p>
    </div>
}
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Email:</label>
    <input required type="email" className="form-control" name="email" value={formData.email} onChange={(e)=>onChangeHandler(e)}/>
  </div>
   <Link to="/login" className="my-2 col-md-4">Sign In Here</Link>
<Link to="/register" className="my-2 col-md-4">New User? Register Here</Link>        
  {userResetData.loading?
  <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Sending Link to Reset Password In...
</button>
:
<button type="submit" className="btn btn-primary">
    Reset Password
  </button>
  }
</form>
</div>
</div>
    )
}

export default ResetPasswordPage

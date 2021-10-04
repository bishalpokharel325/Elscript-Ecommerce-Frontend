import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { verifyPassword } from '../actions/userAction'

const ResetPasswordVerifypage = ({match}) => {
    const [formData, setFormData] = useState({
        uid:match.params.uid,
        token:match.params.token,
        new_password:"",
        re_new_password:""
    })
    const userPasswordResetVerifyData = useSelector(state => state.userResetVerifyData)
    const dispatch = useDispatch()
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        dispatch(verifyPassword(formData)) 
        console.log(userPasswordResetVerifyData)
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
            {userPasswordResetVerifyData.error&&
              <div className="alert alert-danger" role="alert">
  Sorry Could not Reset your password.
</div>
            }
             {userPasswordResetVerifyData.success&&
              <div className="alert alert-success" role="alert">
  Password Sucessfully Changed. You can now <Link to="/login">Sign In</Link>
</div>
            }
            {!userPasswordResetVerifyData.success&&
            <div className="alert alert-light" role="alert">
  <h4 className="alert-heading">Reset your Password Here!</h4>
  <hr/>
  {!userPasswordResetVerifyData.loading&&
  <Fragment>
  <form method="post" onSubmit={(e)=>onSubmitHandler(e)}>
      <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
    <input type="password"  minLength={6} className="form-control" id="exampleInputPassword1" name="new_password" value={formData.new_password} onChange={(e)=>onChangeHandler(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Your Password:</label>
    <input type="password" minLength={6} className="form-control" name="re_new_password" value={formData.re_new_password} onChange={(e)=>onChangeHandler(e)}/>
  </div>
   <Link to="/register" className="my-2 col-md-4">New User?</Link>
<Link to="/login" className="my-2 col-md-4">Already a User?</Link>
      <button type="submit" className="btn btn-primary my-2">
    Submit
  </button>
  </form>
  </Fragment>
}
   {userPasswordResetVerifyData.loading&&
    <div className="d-flex justify-content-center">
        <h5 className="mx-4">Reseting Password ... Please Wait</h5>
  <div className="spinner-border" role="status">
  </div>
</div>
    }
</div>
            }
           
        </div>        
        </div>
    )
}

export default ResetPasswordVerifypage

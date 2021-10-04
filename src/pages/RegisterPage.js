import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { postUser } from '../actions/userAction'
import './RegisterPage.css'

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        re_password:""
    })
    const userPostData = useSelector(state => state.userPostData)
    const dispatch = useDispatch()
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        dispatch(postUser(formData)) 
        console.log(userPostData)
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
                 <h4>Register Page</h4>
                 <hr/>
                <form method="post" onSubmit={(e)=>onSubmitHandler(e)}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">First Name:</label>
                            <input className="form-control"  name="first_name" value={formData.first_name} onChange={(e)=>onChangeHandler(e)}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">Last Name:</label>
                            <input className="form-control" name="last_name" value={formData.last_name} onChange={(e)=>onChangeHandler(e)} />
                        </div>
                    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email Address:</label>
    <input type="email" className="form-control" name="email" value={formData.email} onChange={(e)=>onChangeHandler(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
    <input type="password"  minLength={6} className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={(e)=>onChangeHandler(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Your Password:</label>
    <input type="password" minLength={6} className="form-control" name="re_password" value={formData.re_password} onChange={(e)=>onChangeHandler(e)}/>
  </div>
  <Link to="/reset-password" className="my-2 col-md-4">Forgot password?</Link>
<Link to="/login" className="my-2 col-md-4">Already a User?</Link>
  <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Submit
  </button>

</form>
    <div>
  {/* Button trigger modal */}
  
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">

            {/* in case sucessfull */}
            {userPostData.success&&
            <div className="alert alert-success" role="alert">
  <h4 className="alert-heading">Congrats {userPostData.postUserData.first_name} !</h4>
  <hr/>
  <p>You have been sucessfully registered. Check out your email for verification. You can log in using your email as {userPostData.postUserData.email}</p>
  <Link className="dark-link mx-auto" to="/login" data-bs-dismiss="modal" aria-label="Close" >Sign in</Link>
    </div>  
            }
    {/* in case of loading */}
    {userPostData.loading&&!userPostData.error&&
    <div className="d-flex justify-content-center">
        <h5 className="mx-4">Registering.. Please Wait</h5>
  <div className="spinner-border" role="status">
  </div>
</div>

    }
     {userPostData.error&&!userPostData&&
<div className="alert alert-danger" role="alert">
  <h4 className="alert-heading">Sorry !</h4>
  <hr/>
  <p>Something Wrong. Registration Failed</p>
    </div>
}
{/* in case of error */}
 

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    )
}

export default RegisterPage

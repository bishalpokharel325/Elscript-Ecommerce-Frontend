import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { verifyUser } from '../actions/userAction'
import "./RegisterPage.css"

const ActivatePage = ({match}) => {
  const [formData, setFormData] = useState({
        uid:match.params.uid,
        token:match.params.token,
    })
    const userVerifyData = useSelector(state => state.userVerifyData)
    const dispatch = useDispatch()
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        dispatch(verifyUser(formData)) 
        console.log(userVerifyData)
    }
    console.log(formData)
    return (
         <div className="register__body">
            <div className="register__form col-md-6">
            {userVerifyData.error&&
              <div className="alert alert-danger" role="alert">
  Sorry Could not Verify Your Account.
</div>
            }
             {userVerifyData.success&&
              <div className="alert alert-success" role="alert">
  Successfully Verified. You can now <Link to="/login">Sign In</Link>
</div>
            }
            {!userVerifyData.success&&!userVerifyData.error&&
            <div className="alert alert-light" role="alert">
  <h4 className="alert-heading">Your Registration is nearly completed!</h4>
  {!userVerifyData.loading&&
  <Fragment>
<p>Verify your Account by clicking button below.</p>
  <form method="post" onSubmit={(e)=>onSubmitHandler(e)}>
      <button type="submit" className="btn btn-primary my-2">
    Submit
  </button>
  </form>
  </Fragment>
}
   {userVerifyData.loading&&
    <div className="d-flex justify-content-center">
        <h5 className="mx-4">Verifying User.. Please Wait</h5>
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

export default ActivatePage

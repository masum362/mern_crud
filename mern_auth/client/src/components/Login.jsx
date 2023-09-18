import React, { useState, useEffect } from 'react'
import './mix.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginUser } from './Api';



const Login = () => {
  const [showpass, setShowpass] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await LoginUser(values).then((res) => {

        
        if (!res) {
          setIsValid(false)
          localStorage.removeItem('usercookie')
        }

        else if (res.status !== 201) {
          setIsValid(false)
        }
        else {
          localStorage.setItem('usercookie', res.data.token);
          navigate('/dashboard')
          setIsValid(true)
          formik.resetForm();
        }

      })

    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, "Too Short!").max(20, "Too Long!").required('Required!'),
    })


  })


  return (
    <>
      <section className='main-sect' >
        {isValid ? <div className='test ' style={toggle ? { display: "none" } : { display: "flex" }}  >
          <p>Logged In Successfully</p>
          <img className='img1' src="https://www.svgrepo.com/show/21045/delete-button.svg" alt="" onClick={() => setToggle(!toggle)} />
        </div> : <div className='test ' style={toggle ? { display: "none" } : { display: "flex" }}  >
          <p>Something Went Wrong!</p>
          <img className='img1' src="https://www.svgrepo.com/show/21045/delete-button.svg" alt="" onClick={() => setToggle(!toggle)} />
        </div>  }
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="form_input">
              <label htmlFor="email">Email:</label>
              <input type="email" id='email' name='email' placeholder='Enter Your Email Address' onChange={formik.handleChange} value={formik.values.email} />
              <br />
              {formik.errors.email ? (<span style={{ color: "red" }}>{formik.errors.email}</span>) : null}
            </div>

            <div className="form_input">
              <label htmlFor="password">Password:</label>
              <div className='two'>
                <input type={!showpass ? "password" : "text"} id='password' name='password' placeholder='Enter Your Password' onChange={formik.handleChange} value={formik.values.password} />

                <div className="showpass" onClick={() => setShowpass(!showpass)}>
                  {!showpass ? "Show" : "Hide"}
                </div>
                <br />

              </div>
              {formik.errors.password ? (<span style={{ color: "red" }}>{formik.errors.password}</span>) : null}
            </div>
            <button className='btn' type='submit'>Log In</button>
            <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
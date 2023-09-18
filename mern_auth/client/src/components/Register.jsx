import React, { useState, useEffect } from 'react'
import './mix.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addRegisterUser } from './Api';




const Register = () => {

  const [showpass, setShowpass] = useState(false)
  const [showcpass, setShowcpass] = useState(false)

  const [user, setUser] = useState('')

  const navigate = useNavigate();


  // useEffect(async() => {
  //   await deleteRegisterUser();
  // }, [])


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: async (values) => {
      await addRegisterUser(values).then((res) => {
        setUser(res)
        console.log(res)
        setTimeout(() => {
          navigate('/')
        }, 2000);

      }
      ).catch(err => console.log('something went wrong' + err.message))

    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(4, "Too short!").max(50, "Too long!").required("Required!"),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, "Too Short!").max(20, "Too Long!").required('Required!'),
      confirm_password: Yup.string().min(6, "Too Short!").max(20, "Too Long!").required('Required!').oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

  })



  return (
    <>
      {/* {user.map(data => {
      return (
        
      )
    })} */}
      {/* <h1 style={{textAlign:"center",fontSize:"2rem",backgroundColor:"green",color:"white"}}>{user.statusText}</h1> */}
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p>We are glad that you will be using Project Cloud to manage <br />
              your tasks! We hope that you will get like it.</p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="form_input">
              <label htmlFor="name">Name:</label>
              <input type="name" id='name' name='name' placeholder='Enter Your Full Name' onChange={formik.handleChange} />
              {formik.errors.name && formik.touched.name && (<span style={{ color: "red" }}>{formik.errors.name}</span>)}
            </div>

            <div className="form_input">
              <label htmlFor="email">Email:</label>
              <input type="email" id='email' name='email' placeholder='Enter Your Email Address' onChange={formik.handleChange} />

              {formik.errors.email && formik.touched.email && (<span style={{ color: "red" }}>{formik.errors.email}</span>)}
            </div>

            <div className="form_input">
              <label htmlFor="password">Password:</label>
              <div className='two'>
                <input type={!showpass ? "password" : "text"} id='password' name='password' placeholder='Enter Your Password' onChange={formik.handleChange} />
                <div className="showpass" onClick={() => setShowpass(!showpass)}>
                  {!showpass ? "Show" : "Hide"}
                </div>
              </div>
              {formik.errors.password && formik.touched.password && (<span style={{ color: "red" }}>{formik.errors.password}</span>)}
            </div>

            <div className="form_input">
              <label htmlFor="confirm_password">Confirm Password:</label>
              <div className='two'>
                <input type={!showcpass ? "password" : "text"} id='confirm_password' name='confirm_password' placeholder='Confirm Your Password' onChange={formik.handleChange} />
                <div className="showpass" onClick={() => setShowcpass(!showcpass)}>
                  {!showcpass ? "Show" : "Hide"}
                </div>
              </div>

              {formik.errors.confirm_password && formik.touched.confirm_password && (<span style={{ color: "red" }}>{formik.errors.confirm_password}</span>)}
            </div>


            <button className='btn' type='submit'>Register</button>
            <p>Already have an account? <NavLink to="/">Log In</NavLink></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register
import React, { useContext, useEffect } from 'react'
import { dashboardData } from './Api'
import { useNavigate } from 'react-router-dom';

import './mix.css'
import Errors from './Errors';
import { LoginContext } from './contextApi/Context';

const Dashboard = () => {
  const { loginData, setLoginData } = useContext(LoginContext);

  useEffect(() => {
    getDashboardData();
  }, [])

  const navigate = useNavigate();

  const getDashboardData = async () => {

    const token = localStorage.getItem('usercookie')

    await dashboardData(token).then((res) => {

      console.log(res)

      if (res.status === 201) {
        navigate('/dashboard')
        console.log('user verified')

        setLoginData(res.data.validUser)
        console.log(loginData)
      }
      else {
        navigate('*');
        console.log('user not verified')
      }
    }).catch((err) => {
      console.log('user not verified')
      navigate('*')
      console.log(err)
    })

  }


  return (
    <>
      <h1 className='profile'>Profile Infomation</h1>
      <div className='user-div'>
        <img className='user-img' src="data:image/png;base64,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" alt="" />


       {loginData ?  <div className='user-details'>
          <h1 className='user-name'>Name : {loginData.name}</h1>
          <h1 className='user-email'>Email : {loginData.email}</h1>
        </div> : <div className='user-details'>
          <h1 className='user-name'>Name : Md. Masum Ahmed</h1>
          <h1 className='user-email'>Email : masumahmed64077@gmail.com</h1>
        </div>  }


      </div>


    </>
  )
}

export default Dashboard
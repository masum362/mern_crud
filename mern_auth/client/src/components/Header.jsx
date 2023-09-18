import React, { useContext, useState } from 'react'
import logo from '../assets/unnamed.jpg'
import { NavLink } from 'react-router-dom'
import { LoginContext } from './contextApi/Context';
import { useNavigate } from 'react-router-dom';
import Errors from './Errors';
import { logOut } from './Api';

const Header = () => {

  const { loginData, setLoginData } = useContext(LoginContext);
  const [dropDown, setDropdown] = useState(false)
  const navigate = useNavigate()


  // localStorage.removeItem('usercookie')
  //   navigate('/')
  //   console.log('clicked')


const token = localStorage.getItem('usercookie')
  const handleSignOut = async () => {
    await logOut(token).then((res) => {
      console.log(res)
    navigate('/')
    console.log('clicked')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <header className='shadow-xl px-5'>
      <nav className='flex justify-between  items-center py-2 sticky'>
        <div>
          <NavLink to={"/"}><h1 className='font-black text-2xl text-red-700'>Happy <span className='text-green-700'>Ending360</span></h1></NavLink>
        </div>
        <div className='flex justify-between'>
          <NavLink className={'bg-red-900 py-0.5	 rounded-full text-green-500 w-32 h-8 mx-5 text-center hover:text-white '} to={'/'}>Login</NavLink>
          <NavLink className={'bg-red-900 py-0.5	 rounded-full text-green-500 w-32 h-8 mx-5 text-center hover:text-white'} to={'/register'}>Register</NavLink>
        </div>
        <div>



          <div className="relative inline-block text-left">



            {dropDown && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-1" role="none">
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>

                {loginData && <form method="POST" action="#" role="none" style={{ cursor: 'pointer' }}>
                  <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={() => handleSignOut()}>Sign out</button>
                </form>}
              </div>
            </div>}
          </div>











          <div onClick={() => setDropdown(!dropDown)} style={{ cursor: "pointer" }}>
            {loginData ? <p className='w-8 rounded-full bg-lime-400 pl-3 text-xl'>{loginData.name[0].toUpperCase()}</p> : <img className='w-12 rounded-full' src={logo} alt="" />}
          </div>



        </div>
      </nav>

    </header>
  )
}

export default Header
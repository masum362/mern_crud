import React, {  useEffect, useState } from 'react'
import { getUser,updateUser } from './service/Api';
import { useNavigate,useParams } from "react-router-dom";


const EditUser = () => {

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })

  useEffect(() => {
 loaduserData() ;
  }, [])

  const handleOnChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value })

  }

  const navigate = useNavigate();



  const handleSubmit = async(e) => {
    e.preventDefault();
    await updateUser(user,id)
    navigate("/all")
    
    
  }
 
  
  const {id} = useParams();

  const loaduserData = async () =>{
    const response = await getUser(id)
    setUser(response.data[0])
   
  }


  return (
    <div className='Adduser text-center w-1/2 m-auto mt-4 '>
       <h3 className='w-full bg-gray-800	text-white'>Edit user</h3>
      <form className="w-full max-w-sm m-auto pt-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="md:flex md:items-center mb-6 ">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" name="name" type="text" placeholder='masum ahmed' onChange={(e) => handleOnChange(e)}  value={user.name}/>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
              Username
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-username" name="username" type="text" placeholder="Masum362" onChange={(e) => handleOnChange(e)} value={user.username} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" name="email" type="email" placeholder="masum@gmail.com" onChange={(e) => handleOnChange(e)} value={user.email} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" name="password" type="password" placeholder="******************" onChange={(e) => handleOnChange(e)} value={user.password} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">
              Send me your newsletter!
            </span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-blue-500 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" >
              Edit User
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditUser
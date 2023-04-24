import React, { useEffect, useState } from 'react'
import { getHome,deleteUser } from '../../service/Api'
import {Link} from "react-router-dom"


const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers();
  }, [])



  const getAllUsers = async () => {
    const response = await getHome();
    setUsers(response.data)

  }

  const deleteUserBtn =async (id) =>{
     await deleteUser(id)
     getAllUsers();
  }


  return (
    <div>
      <div className="relative overflow-x-auto w-3/4 m-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SI.
              </th>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                username
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>

            </tr>
          </thead>
          <tbody>
            {users.map((user) => {


              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user._id}>

                  <td className='px-6 py-4'>

                  </td>
                  <td className="px-6 py-4">
                    {user.name}
                  </td>
                  <td className="px-6 py-4">
                    {user.username}
                  </td>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>

                  <td className=" py-4 ">
                    <Link to={`/edit/${user._id}`} class="bg-purple-500 hover:bg-purple-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                    </Link>
                    <Link onClick={()=>deleteUserBtn(user._id)} class="ml-2 bg-red-500  hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Delete
                    </Link>
                  </td>
                </tr>
              );


            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Home
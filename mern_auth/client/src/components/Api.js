import axios from 'axios'


export const LoginUser =async (user) =>{
    const URL = 'http://localhost:3000'

    try {
        return await axios.post(`${URL}/login`,user,{withCredentials:true})
        
    } catch (error) {
        console.log(error)
        
    }

}


export const addRegisterUser = async(user) =>{
    const URL = 'http://localhost:3000'


    try {
        return  await axios.post(`${URL}/register`,user,{withCredentials:true})
        
    } catch (error) {
        console.log(error)
        
    }

}

export const dashboardData = async(token) =>{
    const URL = 'http://localhost:3000'
    // console.log(token)

    try {
        return  axios.get(`${URL}/dashboard`, {
            headers: {
              'Authorization':token,
              'Content-Type': 'application/json'
            }
          })
        
    } catch (error) {
       return res.json();
    }

}

export const logOut = async(token) =>{
    const URL = 'http://localhost:3000'

    try {
        console.log(token)
        return await axios.get(`${URL}/logout`,{
            headers: {
              'Authorization':token,
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
                withCredentials:true
    })
        
    } catch (error) {
        return res.json(error)
        
    }

}


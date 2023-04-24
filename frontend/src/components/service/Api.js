import axios  from "axios"

export const addUser = async (user) =>{
    const URL = "http://localhost:2001"
    try {
        return await axios.post(`${URL}/add` , user)
    } catch (error) {

        console.log("add user failed", error)
    }
}


export const getHome = async () =>{

    const URL = "http://localhost:2001"
    try {
        return await axios.get(`${URL}/`)
    
    } catch (error) {

        console.log("add user failed", error)
        
    }
}

export const getUser = async(id) => {
    const URL = "http://localhost:2001"
    try{
        return await axios.get(`${URL}/${id}`,)
    }catch(error){
        console.log("error calling white adduser working" , error)

    }
}
export const updateUser = async(user,id) => {
    const URL = "http://localhost:2001"
    try{
        console.log(user)
        return await axios.post(`${URL}/${id}`,user)
    }catch(error){
        console.log("error calling white adduser working" , error)

    }
}

export const deleteUser = async(id) => {
    const URL = "http://localhost:2001"
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(error){
        console.log("error calling white adduser working" , error)

    }
}






import axios from "axios"
import { useEffect, useState } from "react"

const useToken=(user)=>{
const [token,setToken]=useState('') 
useEffect(()=>{
    (async()=>{
        const email=user?.user?.email 
         if(email){
             const { data } = await axios.post("https://enigmatic-beach-29740.herokuapp.com/login", {
               email,
             });
             setToken(data.token);
             localStorage.setItem("token", data.token);
         }
    })()
},[user])
return [token]
}

export default useToken
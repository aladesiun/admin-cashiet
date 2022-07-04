import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import axios from "axios";

const usePost = (details) =>{
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = process.env.REACT_APP_ADMIN_TOKEN;
    const [data, setData] = useState({});
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);

   const getData=async()=>{
    setLoading(true)

    await  axios.post(endpoint + details.endpoint, details.details, {
        headers: { Authorization: 'Bearer ' + token,
        }
    })
    .then((data)=>{
        if (data.status) {
            setLoading(false);
            console.log(data.data);
            setData(data.data)
            toast.success('success')
        }
        
    }) 
    .catch((error)=> {
        setLoading(false)
        setError(true)
        toast.error(error.message)
    })
   }
     useEffect(()=>{
       getData()
        
     },[details])
     return {data,Loading, Error}
}
export default usePost;
import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();


export default props =>{
    const [products, setProducts]= useState("admin from context");
    
       const signin = async(data)=>{

            return  new Promise((resolve, reject) => {
                axios.post(process.env.REACT_APP_ENDPOINT + data.endpoint, data.details, {
                    headers: { Authorization: 'Bearer ' + process.env.REACT_APP_ADMIN_TOKEN
                    }
                })
                .then((data)=>{
                   alert('hy data')
                    resolve(data);
                })
                .catch((error)=>{
                    reject(error);
                })
            });
       }
       useEffect(()=>{

       })

    return (
        <AdminContext.Provider value={{ admin:adminDetails,  signin:signin}}>
            {props.children}
        </AdminContext.Provider>
    )
} 
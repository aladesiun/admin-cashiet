import React, { useState, createContext, useEffect } from "react";
import axios from 'axios';

export const AdminContext = createContext();


export default props => {
    const [adminDetails, setAdminDetails] = useState({});

    const signin = async (data) => {

        return new Promise((resolve, reject) => {
            axios.post(process.env.REACT_APP_ENDPOINT + data.endpoint, data.details, {
                headers: {
                    Authorization: 'Bearer ' + process.env.REACT_APP_ADMIN_TOKEN
                }
            })
                .then((data) => {
                    setAdminDetails(data.data)
                    var user_details = data.data;
                    var result = encodeURIComponent(JSON.stringify(user_details));
                    localStorage.setItem('adx', result);
                    var admin_token = data.data.token;
                    localStorage.setItem('_ux', admin_token);
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }
    const getAdminDetails = () => {
        let rawDetails = localStorage.getItem('adx');
        if (rawDetails) {
            let data = decodeURIComponent(rawDetails);
            let details = JSON.parse(data);
            setAdminDetails(details)
        }
    }
    useEffect(() => {
        getAdminDetails()
    }, [])

    return (
        <AdminContext.Provider value={{ admin: adminDetails, setAdminDetails: setAdminDetails, signin: signin }}>
            {props.children}
        </AdminContext.Provider>
    )
} 
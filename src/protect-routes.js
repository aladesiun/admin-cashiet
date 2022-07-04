import { Outlet, Navigate } from 'react-router';
// import store from "./store/index";

const useAuth= ()=>{
// let token =localStorage.getItem('token');

//     store
//     .post({
//         endpoint:"verify-token",
//         details:{token:token}

// })
//     .then((data) => {
//         var user_details = data.data.data;
//         var result = encodeURIComponent(JSON.stringify(user_details));
//         localStorage.setItem("kaffir_user", result);
//     })
//     .catch((error) => {
//         var error_message = error.response.data.message;
//         if (error_message === 'Token has expired') {
//             localStorage.removeItem('kaffir_token');
//             localStorage.removeItem('kaffir_user');
//             window.location.href='/signin';
//         }

      
//     });
    let user = false;
    if (localStorage.getItem('_ux')) {
        return user=true;
    }
    return user;
}
const ProtectRoute = () => {
    const isAuth= useAuth();
    return isAuth? <Outlet/> : <Navigate to='/signin'/>;
}
export default ProtectRoute;
 
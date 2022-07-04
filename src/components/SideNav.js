import {Link, Navigate, useNavigate} from 'react-router-dom'
import { AdminContext } from "../contexts/Admin-context";
import { useState, useContext, useEffect } from "react";
const SideNavHeader = () => {
    const admins = useContext(AdminContext);
    let navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem('adx')
        localStorage.removeItem('_ux')
        navigate('/signin');
    }
    return (
        <div className="page-sidebar">
        <div className="main-header-left d-none d-lg-block">
            <div className="logo-wrapper">
                <Link  to="/">
                    <img className="d-none d-lg-block blur-up lazyloaded" src="assets/images/dashboard/multikart-logo.png" alt=""></img>
                </Link>
            </div>
        </div>
        <div className="sidebar custom-scrollbar">
            <div  className="sidebar-back d-lg-none d-block"><i className="fa fa-times" aria-hidden="true"></i></div>
            <div className="sidebar-user">
                <img className="img-60" src={require('../assets/images/cashiet.png')} alt="#"></img>
                <div>
                    <h6 className="f-14">{admins && admins.admin.username}</h6>
                    <p>Admin</p>
                </div>
            </div>
            <ul className="sidebar-menu">
                <li className="active">
                    <Link className="sidebar-header active" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li>
                    <Link className="sidebar-header" to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        <span>Products</span>
                        <i className="fa fa-angle-right pull-right"></i>
                    </Link>

                    <ul className="sidebar-submenu">
                        <li>
                            <Link  to="/products">
                                <i className="fa fa-circle"></i>
                                <span>Products</span>
                            </Link>
                           
                        </li>
                        <li>
                            <Link  to="/products/new">
                                <i className="fa fa-circle"></i>
                                <span>Add Product</span>
                            </Link>
                           
                        </li>

                    </ul>
                </li>

                <li>
                    <Link to="#" className="sidebar-header bg-none" onClick={()=>logout()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                        <span>Login</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    );
}
 
export default SideNavHeader;
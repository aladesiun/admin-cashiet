import Signin from "./signin";
import Signup from "./signup";
import { Link }from 'react-router-dom';

const NewLog = () => {
    return (
        <div className="page-wrapper">
            <div className="authentication-box">
                <div className="container">
                    <div className="w-3">
                        <div className="p-0t">
                            <div className="card tab2-card card-login">
                                <div className="card-body">
                                    <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="top-profile-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="true">
                                                <span className="icon-user me-2"></span>Login
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false">
                                                <span className="icon-unlock me-2"></span>Register
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="top-tabContent">

                                        <div className="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                                            <Signin/>
                                        </div>
                                        
                                        <div className="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                                           
                                            <Signup/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="btn btn-primary back-btn">
                        <i data-feather="arrow-left"></i>back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewLog;

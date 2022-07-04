import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from '../../contexts/Admin-context';
import toast from "react-hot-toast";
const Signin = () => {
    let navigate = useNavigate()
    const admins = useContext(AdminContext);
    console.log(admins.admin);
    const [Admin, setAdmin] = useState({ email: "", password: "" });
    const [Loading, setLoading] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdmin((prevState) => ({
            ...prevState,
            [name]: value.replace(/\s/g, '')
        }))

    }
    const signin = () => {
        setLoading(true);

        admins.signin({
            endpoint: "/users/admin/login",
            details: Admin,
        }).then((data) => {
            if (data.status) {
                setLoading(false);
                window.location.href="/"
                toast.success('success');

            }
            else {
                toast.error('An error occured please try again');
                setLoading(false);
                window.location.reload();
            }
        }).catch((error) => {
            setLoading(false);
            var error_message = error.response.data.message;
            toast.error(error_message);
        });
    };
    useEffect(() => {


    }, []);
    return (
        <>
            <form className="form-horizontal auth-form" onSubmit={(e) => { e.preventDefault(); signin() }}>
                <div className="form-group">

                    <input required name="email" type="email" value={Admin.email}
                        className="form-control" placeholder="email" id="email1" onChange={handleInputChange}></input>
                </div>
                <div className="form-group">
                    <input required name="password" type="password" value={Admin.password}
                        className="form-control" placeholder="password" onChange={handleInputChange}></input>
                </div>
                <div className="form-terms">
                    <div className="form-check mesm-2">

                        <a href="javascript:void(0)" className="btn btn-default forgot-pass">
                            Forgot Password!
                        </a>
                    </div>
                </div>

                <div className="form-button">
                    <button className="btn btn-primary" type="submit">
                        {!Loading && 'Login'}
                        {Loading && 'Loading...'}
                    </button>
                </div>

            </form>
        </>

    );
}

export default Signin;
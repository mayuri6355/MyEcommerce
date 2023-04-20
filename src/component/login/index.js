import React, {useState} from 'react'
import './login.css'
import axios from 'axios';
import cookie from '../../utils/cookies';
import {Formik, Field} from 'formik';
import {Link, useNavigate} from "react-router-dom";
import {BiShow} from "react-icons/bi";
import {BiHide} from "react-icons/bi";


function validateEmail(value) {
    let error;
    if (!value) {
        error = 'This Field Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

export const strongPassword = value => {
    let error;
    if (value) {
        if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/g.test(value)) {
            return "weak_password"
        }
    } else {
        return " This Field Required"
    }
}

function Login() {

    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);


    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };


    const handleLogin = (values, setSubmitting) => {
        axios.post("https://api.escuelajs.co/api/v1/auth/login", values)
            .then((response) => {
                const token = response.data
                axios.defaults.headers.common['Authorization'] = token;
                cookie.save('jwt', token, {
                    path: '/',
                    days: 7,
                });
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div className="Auth-form-container mask d-flex align-items-center h-900 gradient-custom-3">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values) => handleLogin(values)}
            >
                {props => {
                    const {handleSubmit, errors, touched} = props;
                    return (
                        <form onSubmit={handleSubmit} className="Auth-form">
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title text-uppercase">Sign In</h3>
                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className="form-control mt-1 w-100"
                                        placeholder="Enter email"
                                        validate={validateEmail}
                                    />
                                    {errors.email && touched.email && <p className="text-danger">{errors.email}</p>}
                                </div>
                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <div className="pass-wrapper">
                                        <Field
                                            name="password"
                                            className="form-control mt-1"
                                            placeholder="Enter Password"
                                            type={passwordShown ? "text" : "password"}
                                            validate={strongPassword}
                                        />
                                        <i onClick={togglePasswordVisiblity}>{passwordShown ? <BiHide fontSize={25}/> :
                                            <BiShow fontSize={25}/>}</i>{" "}
                                    </div>

                                    {errors.password && touched.password &&
                                    <p className="text-danger">{errors.password}</p>}
                                </div>

                                <div className="d-grid gap-2 mt-3">
                                    <button className="btn btn-primary " type="submit"><Link to="/"
                                                                                             className={"login_btn"}>
                                        Login</Link>
                                    </button>

                                    <p className="text-center text-muted mt-5 mb-0">New User? <Link
                                        to="/signup"
                                        className="text-body"><u>Create Account</u></Link></p>

                                </div>

                            </div>
                        </form>
                    )
                }}
            </Formik>

        </div>
    );
}

export default Login;

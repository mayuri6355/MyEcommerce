import React, {Component, useState} from 'react';
import './SignUp.css';
import axios from "axios";
import {Field, Formik} from "formik";
import {BiShow} from "react-icons/bi";
import {BiHide} from "react-icons/bi";
import {Link,useNavigate} from "react-router-dom";


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
export const required = (value) => value ? "" : "This Field is Required";


const SignUp = (e) => {

    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate()


    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };


    const handleSignUp = (values, setSubmitting) => {
        const avatar = "https://api.lorem.space/image/face?w=640&h=480"
        values = {...values, avatar}
        axios.post("https://api.escuelajs.co/api/v1/users/", values)
            .then((response) => {
                navigate("/login")
            }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100 w-50">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{borderRadius: "20px"}}>
                                    <div className="card-body p-5">
                                        <h2 className=" title1 text-uppercase">Registration</h2>
                                        <Formik
                                            initialValues={{
                                                name: "",
                                                email: "",
                                                password: "",
                                                agree_policy: false,
                                            }}
                                            onSubmit={(values) => handleSignUp(values)}
                                        >
                                            {props => {
                                                const {handleSubmit, errors, touched} = props;
                                                return (

                                                    <form onSubmit={handleSubmit}>
                                                        <div className="form-outline mb-1">
                                                            <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                                            <Field type="text" id="form3Example1cg"
                                                                   name="name"
                                                                   validate={required}
                                                                   className="form-control form-control-md"/>
                                                            {errors.name && touched.name &&
                                                            <p className="text-danger d-flex align-items-start">{errors.name}</p>}
                                                        </div>

                                                        <div className="form-outline mb-1">
                                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                                            <Field type="email" id="form3Example3cg"
                                                                   name="email"
                                                                   validate={validateEmail}
                                                                   className="form-control form-control-md"/>
                                                            {errors.email && touched.email &&
                                                            <p className="text-danger d-flex align-items-start">{errors.email}</p>}
                                                        </div>

                                                        <div className="form-outline mb-1">
                                                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                            <div className="pass-wrapper">
                                                            <Field type={passwordShown ? "text" : "password"}
                                                                   id="form3Example4cg"
                                                                   name="password"
                                                                   className="form-control mt-1"
                                                                   validate={strongPassword}
                                                                  />
                                                            <i onClick={togglePasswordVisiblity}>{passwordShown ? <BiHide fontSize={25}/> : <BiShow fontSize={25}/> }</i>{" "}
                                                            </div>
                                                            {errors.password && touched.password &&
                                                            <p className="text-danger d-flex align-items-start">{errors.password}</p>}
                                                        </div>

                                                        <div className="form-check d-flex justify-content-left mb-7 mt-3">
                                                            <Field
                                                                type="checkbox"
                                                                className="form-check-input me-2"
                                                                name="agree_policy"
                                                                validate={required}
                                                                id="form2Example3cg"
                                                            />
                                                            <label className="form-check-label" htmlFor="form2Example3g">
                                                                I agree all statements in <Link to="#!" className="text-body"><u>Terms of service</u></Link>
                                                            </label>
                                                        </div>
                                                            {errors.agree_policy && touched.agree_policy &&
                                                            <p className="text-danger d-flex align-items-start">{errors.agree_policy}</p>}

                                                        <div className="d-grid gap-2 mt-5">
                                                            <button type="submit" className="btn btn-success ">Register</button>
                                                        </div>

                                                        <p className="text-center text-muted mt-5 mb-0">Have already an account?
                                                            <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                                                    </form>
                                                )
                                            }}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};
export default SignUp;

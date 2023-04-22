import React from 'react';
import './Shipping.css';
import {Formik, Form, Field} from 'formik';
import {toast} from 'react-toastify';


import {
    CardElement,
    useStripe,
    useElements,
    CardCvcElement,
    CardNumberElement,
    CardExpiryElement,
} from '@stripe/react-stripe-js';


const ShippingCart = () => {
    const items = JSON.parse(localStorage.getItem("items")) || []
    const stripe = useStripe();
    const elements = useElements();


    const inputStyle = {
        iconColor: '#c4f0ff',
        color: '#0a0a0a',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
            color: '#fce883',
        },
        '::placeholder': {
            color: '#87BBFD',
        },
    }


    const cartPriceTotal = items.reduce(
        (acc, item) =>
            acc + item.price * (item.totalItems || 1)
        , 0
    )

    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'This Field Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }

    const required = (value) => value ? "" : "This Field is Required";


    const notify = () => toast.success(' Order Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });


    return (

        <Formik
            initialValues={{
                fname: '',
                lname: '',
                email: '',
                houseadd: '',
                cn: '',
                city: '',
                state: '',
                selection: "",
                code: '',
                phone: '',
                card: "0",
                cardNumber: '',
                month: '',
                year: '',
                cvv: ''
            }}
            onSubmit={(values) => {
                notify();
            }}
        >
            {props => {
                const {handleSubmit, errors, touched, values, setFieldValue} = props;
                console.log(values)

                return (
                    <Form onSubmit={handleSubmit} className="container">
                        <div className="title">
                            <h2>Product Order Form</h2>
                        </div>
                        <div className="d-flex">
                            <div className="form1 shipping_form" action method>
                                <label className="payment">Personal Info</label>
                                <label>
                                    <span className="fname">First Name </span>
                                    <Field type="text" validate={required} name="fname"/>
                                    {errors.fname && touched.fname &&
                                    <p className="text-danger d-flex align-items-start">{errors.fname}</p>
                                    }
                                </label>

                                <label>
                                    <span className="lname">Last Name</span>
                                    <Field type="text" validate={required} name="lname"/>
                                    {errors.lname && touched.lname &&
                                    <p className="text-danger d-flex align-items-start">{errors.lname}</p>
                                    }
                                </label>

                                <label>
                                    <span>Email Address </span>
                                    <Field type="email" validate={validateEmail} name="email"/>
                                    {errors.email && touched.email &&
                                    <p className="text-danger d-flex align-items-start">{errors.email}</p>
                                    }
                                </label>

                                <label className="payment">Shipping Address</label>
                                <label>
                                    <span>Street Address </span>
                                    <Field type="text" validate={required} name="houseadd"
                                           placeholder="House number and street name"/>
                                    {errors.houseadd && touched.houseadd &&
                                    <p className="text-danger d-flex align-items-start">{errors.houseadd}</p>
                                    }
                                </label>
                                <label>
                                    <span>Company Name</span>
                                    <Field type="text" validate={required} name="cn"/>
                                    {errors.cn && touched.cn &&
                                    <p className="text-danger d-flex align-items-start">{errors.cn}</p>
                                    }
                                </label>

                                <label>
                                    <span>Town / City </span>
                                    <Field type="text" validate={required} name="city"/>
                                    {errors.city && touched.city &&
                                    <p className="text-danger d-flex align-items-start">{errors.city}</p>}
                                </label>

                                <label>
                                    <span>State / County </span>
                                    <Field type="text" validate={required} name="state"/>
                                    {errors.state && touched.state &&
                                    <p className="text-danger d-flex align-items-start">{errors.state}</p>}
                                </label>

                                <label>
                                    <span>Country </span>
                                    <Field as="select" validate={required} name="selection">
                                        <option value="select">Select a country...</option>
                                        <option value="GEO">Georgia</option>
                                        <option value="DEU">Germany</option>
                                        <option value="GHA">Ghana</option>
                                        <option value="GIB">Gibraltar</option>
                                        <option value="GRC">Greece</option>
                                        <option value="GUY">Guyana</option>
                                        <option value="HTI">Haiti</option>
                                        <option value="HMD">Heard Island and McDonald Islands</option>
                                        <option value="VAT">Holy See (Vatican City State)</option>
                                        <option value="HND">Honduras</option>
                                        <option value="HKG">Hong Kong</option>
                                        <option value="HUN">Hungary</option>
                                        <option value="ISL">Iceland</option>
                                        <option value="IND">India</option>
                                    </Field>
                                    {errors.selection && touched.selection &&
                                    <p className="text-danger d-flex align-items-start">{errors.selection}</p>}
                                </label>

                                <label>
                                    <span>Postcode / ZIP</span>
                                    <Field type="text" validate={required} name="code"/>
                                    {errors.code && touched.code &&
                                    <p className="text-danger d-flex align-items-start">{errors.code}</p>}
                                </label>

                                <label>
                                    <span>Phone</span>
                                    <Field type="tel" validate={required} name="phone"/>
                                    {errors.phone && touched.phone &&
                                    <p className="text-danger d-flex align-items-start">{errors.phone}</p>}
                                </label>
                            </div>
                            <div className="Yorder">
                                <table>
                                    <th colSpan={2} className="payment"><b>Your order</b></th>
                                    <tbody>
                                    {(items || []).map((item, index) => (
                                        <tr>
                                            <td>{item.title}</td>
                                            <td>{item.price * item.totalItems || item.price}</td>
                                        </tr>
                                    ))}
                                    <tr style={{borderBottom: "1px solid gray"}}>
                                        <td>Shipping</td>
                                        <td>Free shipping</td>
                                    </tr>
                                    <tr>
                                        <td><b>SubTotal</b></td>
                                        <td><b>${cartPriceTotal}</b></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <br/>
                                <div>
                                    <Field type="radio" name="card" value="0"/> Credit/DebitCard
                                </div>

                                < div>
                                    <Field type="radio" name="card" value="1"/> Cash on Delivery
                                </div>

                                {values.card !== "1" &&
                                <div className="row">
                                    <label>CardNumber</label>
                                    <div className="col-sm-12">
                                        <div style={{
                                            border: "1px solid #dadada",
                                            padding: "6px 4px",
                                        }}>
                                            <CardNumberElement onChange={(value) => setFieldValue("cardNumber", value)}
                                                                options={{
                                                                    style: {
                                                                        base: inputStyle,
                                                                    },
                                                                }}
                                        />
                                        </div>
                                        {values.cardNumber === "" && touched.cardNumber &&
                                        <p className="text-danger d-flex align-items-start">This Field is Required</p>}
                                        <p className="text-danger d-flex align-items-start"> {values.cardNumber.error?.message}</p>
                                    </div>

                                    <div className="col-sm-6">
                                        <label className="mt-2">Expairy Date</label>
                                        <div style={{
                                            border: "1px solid #dadada",
                                            padding: "6px 4px",
                                        }}>
                                            <CardExpiryElement
                                                onChange={(value) => setFieldValue("year", value)}
                                                options={{
                                                    style: {
                                                        base: inputStyle,
                                                    },
                                                }}
                                            />
                                        </div>
                                        {values.year === "" && touched.year &&
                                        <p className="text-danger d-flex align-items-start">This Field is Required</p>}
                                        <p className="text-danger d-flex align-items-start"> {values.year.error?.message}</p>
                                    </div>

                                    <div className="col-sm-6">
                                        <label className="mt-2">Cvc</label>
                                        <div style={{
                                            border: "1px solid #dadada",
                                            padding: "6px 4px",
                                        }}>
                                            <CardCvcElement
                                                onChange={(value) => setFieldValue("cvv", value)}
                                                options={{
                                                    style: {
                                                        base: inputStyle,
                                                    },
                                                }}
                                            />
                                        </div>
                                        {values.cvv === "" && touched.cvv &&
                                        <p className="text-danger d-flex align-items-start">This Field is Required</p>}
                                    </div>
                                </div>
                                }
                                <button className='w-100' type="submit">Continue to Checkout</button>
                            </div>

                        </div>
                    </Form>
                )
            }}
        </Formik>
    );
};

export default ShippingCart;
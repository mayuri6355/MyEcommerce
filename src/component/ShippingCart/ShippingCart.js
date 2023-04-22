import React from 'react';
import './Shipping.css';
import {Formik, Form, Field} from 'formik';
import {toast} from 'react-toastify';


const ShippingCart = () => {
    const items = JSON.parse(localStorage.getItem("items")) || []
    var year = "";
    const cy = new Date().getFullYear();
    var month = "";
    const currentMonth = new Date().getMonth() + 1;


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

    function expYearValidate(value) {
        let error;
        if (!value) {
            error = "This Field is Required"
        } else if (value < cy) {
            error = 'Expiry  Year cannot be less than year ' + cy;
        } else if (value > (cy + 10)) {
            error = 'Expiry  Year cannot be greater than year ' + (cy + 10);
        } else {
            year = value;
        }
        expMonthValidate(month);
        return error;
    }

    function expMonthValidate(value) {
        let error;
        month = value;
        if (!value) {
            error = "This Field is Required";
        } else if (value < 1 && value > 12) {
            error = "'Expiry Month should be between 1 to 12";
        } else {
            if (year) {
                if (year === cy && value < currentMonth)
                    error = "Expire Month";
            }
        }
        return error;

    }

    function cardValidate(value) {
        let error;
        if (!value) {
            error = "This Field is Required";
        } else if (value.length < 16) {
            error = "Invalid Card Number";
        }
        return error;
    }

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
                console.log(values)
                notify();
            }}
        >
            {props => {
                const {handleSubmit, errors, touched, values} = props;

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
                                    <Field type="text" validate={required} name="houseadd" placeholder="House number and street name"/>
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
                                        <option value="AFG">Afghanistan</option>
                                        <option value="ALA">Åland Islands</option>
                                        <option value="ALB">Albania</option>
                                        <option value="DZA">Algeria</option>
                                        <option value="ASM">American Samoa</option>
                                        <option value="AND">Andorra</option>
                                        <option value="AGO">Angola</option>
                                        <option value="AIA">Anguilla</option>
                                        <option value="ATA">Antarctica</option>
                                        <option value="ATG">Antigua and Barbuda</option>
                                        <option value="ARG">Argentina</option>
                                        <option value="ARM">Armenia</option>
                                        <option value="ABW">Aruba</option>
                                        <option value="AUS">Australia</option>
                                        <option value="AUT">Austria</option>
                                        <option value="AZE">Azerbaijan</option>
                                        <option value="BHS">Bahamas</option>
                                        <option value="BHR">Bahrain</option>
                                        <option value="BGD">Bangladesh</option>
                                        <option value="BRB">Barbados</option>
                                        <option value="BLR">Belarus</option>
                                        <option value="BEL">Belgium</option>
                                        <option value="BLZ">Belize</option>
                                        <option value="BEN">Benin</option>
                                        <option value="BMU">Bermuda</option>
                                        <option value="BTN">Bhutan</option>
                                        <option value="BOL">Bolivia, Plurinational State of</option>
                                        <option value="BES">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="BIH">Bosnia and Herzegovina</option>
                                        <option value="BWA">Botswana</option>
                                        <option value="BVT">Bouvet Island</option>
                                        <option value="BRA">Brazil</option>
                                        <option value="IOT">British Indian Ocean Territory</option>
                                        <option value="BRN">Brunei Darussalam</option>
                                        <option value="BGR">Bulgaria</option>
                                        <option value="BFA">Burkina Faso</option>
                                        <option value="BDI">Burundi</option>
                                        <option value="KHM">Cambodia</option>
                                        <option value="CMR">Cameroon</option>
                                        <option value="CAN">Canada</option>
                                        <option value="CPV">Cape Verde</option>
                                        <option value="CYM">Cayman Islands</option>
                                        <option value="CAF">Central African Republic</option>
                                        <option value="TCD">Chad</option>
                                        <option value="CHL">Chile</option>
                                        <option value="CHN">China</option>
                                        <option value="CXR">Christmas Island</option>
                                        <option value="CCK">Cocos (Keeling) Islands</option>
                                        <option value="COL">Colombia</option>
                                        <option value="COM">Comoros</option>
                                        <option value="COG">Congo</option>
                                        <option value="COD">Congo, the Democratic Republic of the</option>
                                        <option value="COK">Cook Islands</option>
                                        <option value="CRI">Costa Rica</option>
                                        <option value="CIV">Côte d'Ivoire</option>
                                        <option value="HRV">Croatia</option>
                                        <option value="CUB">Cuba</option>
                                        <option value="CUW">Curaçao</option>
                                        <option value="CYP">Cyprus</option>
                                        <option value="CZE">Czech Republic</option>
                                        <option value="DNK">Denmark</option>
                                        <option value="DJI">Djibouti</option>
                                        <option value="DMA">Dominica</option>
                                        <option value="DOM">Dominican Republic</option>
                                        <option value="ECU">Ecuador</option>
                                        <option value="EGY">Egypt</option>
                                        <option value="SLV">El Salvador</option>
                                        <option value="GNQ">Equatorial Guinea</option>
                                        <option value="ERI">Eritrea</option>
                                        <option value="EST">Estonia</option>
                                        <option value="ETH">Ethiopia</option>
                                        <option value="FLK">Falkland Islands (Malvinas)</option>
                                        <option value="FRO">Faroe Islands</option>
                                        <option value="FJI">Fiji</option>
                                        <option value="FIN">Finland</option>
                                        <option value="FRA">France</option>
                                        <option value="GUF">French Guiana</option>
                                        <option value="PYF">French Polynesia</option>
                                        <option value="ATF">French Southern Territories</option>
                                        <option value="GAB">Gabon</option>
                                        <option value="GMB">Gambia</option>
                                        <option value="GEO">Georgia</option>
                                        <option value="DEU">Germany</option>
                                        <option value="GHA">Ghana</option>
                                        <option value="GIB">Gibraltar</option>
                                        <option value="GRC">Greece</option>
                                        <option value="GRL">Greenland</option>
                                        <option value="GRD">Grenada</option>
                                        <option value="GLP">Guadeloupe</option>
                                        <option value="GUM">Guam</option>
                                        <option value="GTM">Guatemala</option>
                                        <option value="GGY">Guernsey</option>
                                        <option value="GIN">Guinea</option>
                                        <option value="GNB">Guinea-Bissau</option>
                                        <option value="GUY">Guyana</option>
                                        <option value="HTI">Haiti</option>
                                        <option value="HMD">Heard Island and McDonald Islands</option>
                                        <option value="VAT">Holy See (Vatican City State)</option>
                                        <option value="HND">Honduras</option>
                                        <option value="HKG">Hong Kong</option>
                                        <option value="HUN">Hungary</option>
                                        <option value="ISL">Iceland</option>
                                        <option value="IND">India</option>
                                        <option value="IDN">Indonesia</option>
                                        <option value="IRN">Iran, Islamic Republic of</option>
                                        <option value="IRQ">Iraq</option>
                                        <option value="IRL">Ireland</option>
                                        <option value="IMN">Isle of Man</option>
                                        <option value="ISR">Israel</option>
                                        <option value="ITA">Italy</option>
                                        <option value="JAM">Jamaica</option>
                                        <option value="JPN">Japan</option>
                                        <option value="JEY">Jersey</option>
                                        <option value="JOR">Jordan</option>
                                        <option value="KAZ">Kazakhstan</option>
                                        <option value="KEN">Kenya</option>
                                        <option value="KIR">Kiribati</option>
                                        <option value="PRK">Korea, Democratic People's Republic of</option>
                                        <option value="KOR">Korea, Republic of</option>
                                        <option value="KWT">Kuwait</option>
                                        <option value="KGZ">Kyrgyzstan</option>
                                        <option value="LAO">Lao People's Democratic Republic</option>
                                        <option value="LVA">Latvia</option>
                                        <option value="LBN">Lebanon</option>
                                        <option value="LSO">Lesotho</option>
                                        <option value="LBR">Liberia</option>
                                        <option value="LBY">Libya</option>
                                        <option value="LIE">Liechtenstein</option>
                                        <option value="LTU">Lithuania</option>
                                        <option value="LUX">Luxembourg</option>
                                        <option value="MAC">Macao</option>
                                        <option value="MKD">Macedonia, the former Yugoslav Republic of</option>
                                        <option value="MDG">Madagascar</option>
                                        <option value="MWI">Malawi</option>
                                        <option value="MYS">Malaysia</option>
                                        <option value="MDV">Maldives</option>
                                        <option value="MLI">Mali</option>
                                        <option value="MLT">Malta</option>
                                        <option value="MHL">Marshall Islands</option>
                                        <option value="MTQ">Martinique</option>
                                        <option value="MRT">Mauritania</option>
                                        <option value="MUS">Mauritius</option>
                                        <option value="MYT">Mayotte</option>
                                        <option value="MEX">Mexico</option>
                                        <option value="FSM">Micronesia, Federated States of</option>
                                        <option value="MDA">Moldova, Republic of</option>
                                        <option value="MCO">Monaco</option>
                                        <option value="MNG">Mongolia</option>
                                        <option value="MNE">Montenegro</option>
                                        <option value="MSR">Montserrat</option>
                                        <option value="MAR">Morocco</option>
                                        <option value="MOZ">Mozambique</option>
                                        <option value="MMR">Myanmar</option>
                                        <option value="NAM">Namibia</option>
                                        <option value="NRU">Nauru</option>
                                        <option value="NPL">Nepal</option>
                                        <option value="NLD">Netherlands</option>
                                        <option value="NCL">New Caledonia</option>
                                        <option value="NZL">New Zealand</option>
                                        <option value="NIC">Nicaragua</option>
                                        <option value="NER">Niger</option>
                                        <option value="NGA">Nigeria</option>
                                        <option value="NIU">Niue</option>
                                        <option value="NFK">Norfolk Island</option>
                                        <option value="MNP">Northern Mariana Islands</option>
                                        <option value="NOR">Norway</option>
                                        <option value="OMN">Oman</option>
                                        <option value="PAK">Pakistan</option>
                                        <option value="PLW">Palau</option>
                                        <option value="PSE">Palestinian Territory, Occupied</option>
                                        <option value="PAN">Panama</option>
                                        <option value="PNG">Papua New Guinea</option>
                                        <option value="PRY">Paraguay</option>
                                        <option value="PER">Peru</option>
                                        <option value="PHL">Philippines</option>
                                        <option value="PCN">Pitcairn</option>
                                        <option value="POL">Poland</option>
                                        <option value="PRT">Portugal</option>
                                        <option value="PRI">Puerto Rico</option>
                                        <option value="QAT">Qatar</option>
                                        <option value="REU">Réunion</option>
                                        <option value="ROU">Romania</option>
                                        <option value="RUS">Russian Federation</option>
                                        <option value="RWA">Rwanda</option>
                                        <option value="BLM">Saint Barthélemy</option>
                                        <option value="SHN">Saint Helena, Ascension and Tristan da Cunha</option>
                                        <option value="KNA">Saint Kitts and Nevis</option>
                                        <option value="LCA">Saint Lucia</option>
                                        <option value="MAF">Saint Martin (French part)</option>
                                        <option value="SPM">Saint Pierre and Miquelon</option>
                                        <option value="VCT">Saint Vincent and the Grenadines</option>
                                        <option value="WSM">Samoa</option>
                                        <option value="SMR">San Marino</option>
                                        <option value="STP">Sao Tome and Principe</option>
                                        <option value="SAU">Saudi Arabia</option>
                                        <option value="SEN">Senegal</option>
                                        <option value="SRB">Serbia</option>
                                        <option value="SYC">Seychelles</option>
                                        <option value="SLE">Sierra Leone</option>
                                        <option value="SGP">Singapore</option>
                                        <option value="SXM">Sint Maarten (Dutch part)</option>
                                        <option value="SVK">Slovakia</option>
                                        <option value="SVN">Slovenia</option>
                                        <option value="SLB">Solomon Islands</option>
                                        <option value="SOM">Somalia</option>
                                        <option value="ZAF">South Africa</option>
                                        <option value="SGS">South Georgia and the South Sandwich Islands</option>
                                        <option value="SSD">South Sudan</option>
                                        <option value="ESP">Spain</option>
                                        <option value="LKA">Sri Lanka</option>
                                        <option value="SDN">Sudan</option>
                                        <option value="SUR">Suriname</option>
                                        <option value="SJM">Svalbard and Jan Mayen</option>
                                        <option value="SWZ">Swaziland</option>
                                        <option value="SWE">Sweden</option>
                                        <option value="CHE">Switzerland</option>
                                        <option value="SYR">Syrian Arab Republic</option>
                                        <option value="TWN">Taiwan, Province of China</option>
                                        <option value="TJK">Tajikistan</option>
                                        <option value="TZA">Tanzania, United Republic of</option>
                                        <option value="THA">Thailand</option>
                                        <option value="TLS">Timor-Leste</option>
                                        <option value="TGO">Togo</option>
                                        <option value="TKL">Tokelau</option>
                                        <option value="TON">Tonga</option>
                                        <option value="TTO">Trinidad and Tobago</option>
                                        <option value="TUN">Tunisia</option>
                                        <option value="TUR">Turkey</option>
                                        <option value="TKM">Turkmenistan</option>
                                        <option value="TCA">Turks and Caicos Islands</option>
                                        <option value="TUV">Tuvalu</option>
                                        <option value="UGA">Uganda</option>
                                        <option value="UKR">Ukraine</option>
                                        <option value="ARE">United Arab Emirates</option>
                                        <option value="GBR">United Kingdom</option>
                                        <option value="USA">United States</option>
                                        <option value="UMI">United States Minor Outlying Islands</option>
                                        <option value="URY">Uruguay</option>
                                        <option value="UZB">Uzbekistan</option>
                                        <option value="VUT">Vanuatu</option>
                                        <option value="VEN">Venezuela, Bolivarian Republic of</option>
                                        <option value="VNM">Viet Nam</option>
                                        <option value="VGB">Virgin Islands, British</option>
                                        <option value="VIR">Virgin Islands, U.S.</option>
                                        <option value="WLF">Wallis and Futuna</option>
                                        <option value="ESH">Western Sahara</option>
                                        <option value="YEM">Yemen</option>
                                        <option value="ZMB">Zambia</option>
                                        <option value="ZWE">Zimbabwe</option>
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
                                    <Field type="radio" name="card" value="0"/> Paypal
                                </div>

                                < div>
                                    <Field type="radio" name="card" value="1"/> Cash on Delivery
                                </div>

                                {values.card !== "1" &&
                                <>
                                    <div className="card-footer">
                                        <div className="form-group"><label htmlFor="cardNumber">
                                            <h6>Card number</h6>
                                        </label>
                                            <div className="input-group">
                                                <Field validate={cardValidate} name="cardNumber" type="text"
                                                       maxLength={16}
                                                       placeholder="0000-0000-0000-0000"
                                                       className="form-control position-static "/>
                                            </div>
                                            {
                                                errors.cardNumber && touched.cardNumber &&
                                            <p className="text-danger d-flex align-items-start">{errors.cardNumber}</p>
                                            }
                                        </div>
                                        <div className="row ">
                                            <div className="col-sm-6 pt-4">
                                                <div className="form-group">
                                                    <label>
                                                        <span className="hidden-xs">
                                                            <h6>Expire Month</h6>
                                                        </span>
                                                    </label>
                                                    <div className="input-group">
                                                        <Field type="number" name="month" validate={expMonthValidate} placeholder="MM" className="form-control position-static"/>
                                                    </div>
                                                    {
                                                        errors.month && touched.month &&
                                                    <p className="text-danger d-flex align-items-start">{errors.month}</p>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-sm-6 pt-4">
                                                <div className="form-group">
                                                    <label>
                                                        <span className="hidden-xs">
                                                            <h6>Expire Year</h6>
                                                        </span>
                                                    </label>
                                                    <div className="input-group">
                                                        <Field type="number" name="year" validate={expYearValidate} placeholder="YYYY" className="form-control position-static"/>
                                                    </div>
                                                    {errors.year && touched.year &&
                                                    <p className="text-danger d-flex align-items-start">{errors.year}</p>
                                                    }
                                                </div>
                                            </div>

                                            <div className="col-sm-6 pt-4">
                                                <div className="form-group mb-4">
                                                    <label data-toggle="tooltip"title="Three digit CV code on the back of your card">
                                                        <h6>
                                                            CVV
                                                            <i className="fa fa-question-circle d-inline"/>
                                                        </h6>
                                                    </label>
                                                    <Field type="number" validate={required} name="cvv" onKeyPress={(e) => {if (e.target.value.length > 3) e.preventDefault();}} className="form-control"/>
                                                    {
                                                        errors.cvv && touched.cvv &&
                                                    <p className="text-danger d-flex align-items-start">{errors.cvv}</p>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
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
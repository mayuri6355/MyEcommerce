import React, {useState} from 'react';
import './AddToCart.css';
import Navigation from "../Navbar";
import Nodata from "../NoData/Nodata";
import {BsArrowLeft} from 'react-icons/bs'
import {Link} from "react-router-dom";


const AddToCart = () => {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    const [data, setData] = useState(items)

    const increment = (index) => {
        const list = data;
        list[index].totalItems = (list[index].totalItems || 1) + 1;
        localStorage.setItem("items", JSON.stringify([...list]))
        setData([...list]);
    }

    const Decrement = (index) => {
        const list = data;
        list[index].totalItems = (list[index].totalItems || 1) - 1;
        localStorage.setItem("items", JSON.stringify([...list]))
        setData([...list]);

    }
    const cartPriceTotal = data.reduce(
        (acc, item) =>
            acc + item.price * (item.totalItems || 1)
        , 0
    )

    const clearCart = () => {
        setData([]);
        localStorage.setItem("items", JSON.stringify([]))
    };

    const removeFromCart = (index) => {
        const data = items;
        data.splice(index, 1);
        setData([...data]);
        localStorage.setItem("items", JSON.stringify([...data]))
    }

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <div>
            <div className="App">
                <Navigation/>
                {(items || []).length === 0 && <Nodata/>}
                {(items || []).length !== 0 &&
                <section className="h-100 gradient-custom">
                    <div className="container py-5">
                        <div className="row d-flex justify-content-center my-4">
                            <div className="col-md-8">
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="mb-0 " style={{fontWeight:"bold"}}>Add To Cart items</h5>
                                    </div>
                                    <div className="card-body d-grid gap-2">
                                        {/* Single item */}

                                        {(items || []).map((item, index) => (
                                            <div className="row">
                                                <div key={index} className="col-lg-4 col-md-4 col-sm-4">
                                                    {/* Image */}
                                                    <div className="bg-image hover-overlay hover-zoom ripple rounded"
                                                         data-mdb-ripple-color="light">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp" className="w-100" alt="Blue Jeans Jacket"/>
                                                        <a href="#!">
                                                            <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}/>
                                                        </a>
                                                    </div>
                                                    {/* Image */}
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-3">
                                                    {/* Data */}
                                                    <p className="mt-2 "><strong>{item.title}</strong></p>
                                                    <td className="text-right d-none d-md-block">
                                                    <button type="button" className="btn btn-danger btn-sm me-1 mb-2"
                                                            data-mdb-toggle="tooltip" title="Remove item"
                                                            onClick={() => removeFromCart(index)}>Remove
                                                    </button>
                                                    </td>
                                                    {/* Data */}

                                                </div>
                                                <div className="col-lg-4 col-md-3 col-sm-3 mb-lg-0">
                                                    {/* Quantity */}
                                                    <div className="d-flex mb-4 mt-5" style={{maxWidth: 300}}>
                                                        <button className="btn btn-primary px-3 me-2 addtocart_btn"
                                                                onClick={() => increment(index)}>+
                                                        </button>
                                                        <div className="form-outline">
                                                            <input id="form1" value={item.totalItems || 1} type="number" disabled className="form-control mt-2"/>
                                                            <label className="form-label text-align-center" htmlFor="form1">Quantity</label>
                                                        </div>
                                                        <button className="btn btn-primary px-3 ms-2 addtocart_btn"
                                                                onClick={() => Decrement(index)}>-
                                                        </button>
                                                    </div>
                                                    {/* Quantity */}
                                                    {/* Price */}
                                                    <p className="text-start text-md-center">
                                                        <strong>${item.price}</strong>
                                                    </p>
                                                    {/* Price */}
                                                </div>
                                            </div>
                                        ))}

                                        <hr className="my-4"/>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 mb-4 mb-lg-0 d-flex align-items-center justify-content-start ">
                                                <Link to="/" style={{color: "black",}}><BsArrowLeft fontSize={30}/>Back To HomePage</Link>
                                            </div>

                                            <div className="col-lg-12 col-md-12 mb-4 mb-lg-0 d-flex align-items-center justify-content-end ">
                                                <button className="clear-cart btn btn-danger"
                                                        onClick={() => clearCart()}>Clear Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <p><strong>Expected shipping delivery</strong></p>
                                        <p className="mb-0">{date}</p>
                                    </div>
                                </div>
                                <div className="card mb-4 mb-lg-0"></div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-header py-3"></div>
                                    <div className="card-body">
                                        <div>
                                            <table>
                                                <th colSpan={2}><b>Summary</b></th>
                                                <tbody>
                                                {(items || []).map((item, index) => (
                                                    <tr>
                                                        <td>{item.title}</td>
                                                        <td>{item.price * item.totalItems || item.price}</td>
                                                    </tr>
                                                ))}
                                                <tr className="freeshipping">
                                                    <td >Shipping</td>
                                                    <td >Free shipping</td>
                                                </tr>
                                                <tr >
                                                    <td><b>SubTotal</b></td>
                                                    <td><b>${cartPriceTotal}</b></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <Link to="/shippingcart">
                                            <button type="button" className="btn btn-success btn-md btn-block">
                                                Go to checkout
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }
            </div>
        </div>
    );
};

export default AddToCart;
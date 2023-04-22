import React, {useEffect, useState} from 'react';
import Navigation from "../Navbar";
import './ProductDetail.css';
import {HiShoppingCart} from "react-icons/hi";
import {Link} from "react-router-dom";
import axios from "axios";
import {useParams} from "react-router-dom";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";


const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState("")
    const params = useParams();

    console.log(params.id)

    let [items, setItems] = useState(
        JSON.parse(localStorage.getItem("items")) || []
    );

    function slideImage(num = 1) {
        const imgId = num;
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
        document.querySelector('.img-showcase').style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
    }

    let initialized = false;
    useEffect(() => {
        if (!initialized) {
            initialized = true;
            axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
                .then((response) => {
                    setProductDetails(response.data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [])


    const addToCart = (productDetails = {}) => {
        setItems((prev) => ([...prev, productDetails]));
        localStorage.setItem("items", JSON.stringify([...items, productDetails]))
    };

    const selectProduct = (items || []).map((e) => e.id)

    return (
        <div>
            <Navigation/>
            <Category/>
            <h2 className="productdetails">Products Details</h2>
            <div className="card-wrapper">
                <div className="card1">
                    {/* card left */}
                    <div className="product-imgs">
                        <div className="img-display">
                            <div className="img-showcase">
                                <img
                                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                                    alt="shoe image"/>
                                <img
                                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                                    alt="shoe image"/>
                                <img
                                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                                    alt="shoe image"/>
                                <img
                                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                                    alt="shoe image"/>
                            </div>
                        </div>
                        <div className="img-select">
                            <div className="img-item">
                                <span data-id={1} onClick={() => slideImage(1)}>
                                    <img
                                        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                                        alt="shoe image"/>
                                </span>
                            </div>
                            <div className="img-item">
                                <span data-id={2} onClick={() => slideImage(2)}>
                                    <img
                                        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                                        alt="shoe image"/>
                                </span>
                            </div>
                            <div className="img-item">
                                <span data-id={3} onClick={() => slideImage(3)}>
                                    <img
                                        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                                        alt="shoe image"/>
                                </span>
                            </div>
                            <div className="img-item">
                                <span data-id={4} onClick={() => slideImage(4)}>
                                    <img
                                        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                                        alt="shoe image"/>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* card right */}
                    <div className="product-content">
                        <h2 className="product-title">{productDetails?.title}</h2>
                        <div className="product-price">
                            <p className="new-price">Price: <span>${productDetails?.price}</span></p>
                        </div>
                        <div className="product-detail">
                            <h2>about this item: </h2>
                            <p>{productDetails?.description}</p>
                        </div>
                        <div className="purchase-info">
                            <div className="w-100">
                                <Link>
                                    <button type="button" className="btn"
                                            disabled={selectProduct.includes(Number(params.id))}
                                            onClick={() => addToCart(productDetails)}>
                                        Add to Cart <HiShoppingCart fontSize={30}/>
                                    </button>
                                </Link>
                            </div>

                            <div className="w-100">
                                <Link to="/login">
                                    <button type="button" className="btn">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ProductDetails;
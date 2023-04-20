import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Products.css'

import {Link, useParams} from "react-router-dom"
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";


const Products = () => {
    const [product, setProduct] = useState("")
    const [wish, setWish] = useState(JSON.parse(localStorage.getItem("wish")) || []);

    const selectWish = (wish || []).map((e) => e.id);

    const addToWishList = (item = {},index) => {
        if (selectWish.includes(item.id)) {
             let list = wish;
            list.splice(index, 1);
            setWish([...list]);
             localStorage.setItem("wish", JSON.stringify([...list]))

        } else {
            setWish((prev) => ([...prev,item]));
            localStorage.setItem("wish", JSON.stringify([...wish, item]))
        }
    };


    let initialized=false;
    useEffect(() => {
        if(!initialized){
            initialized=true
            axios.get(`https://api.escuelajs.co/api/v1/products/`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }, [])


    return (
        <div>
            <h2 className="product">Our Products</h2>
            <div className="d-flex align-items-center justify-content-center p-0">
                <div className="shell">
                    <div className="container">
                        <div className="row">
                            {(product || []).map((item, index) => (
                                <div key={index} className="col-md-3">
                                    <div className="wsk-cp-product">
                                        <div className="wsk-cp-img">
                                            <Link to={`/productdetails/${item.id}`}>
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACMgzJxwmiMP18-CqRgo4-jQ6mMlFMwU88apyTsppBw&usqp=CAU&ec=48600112"
                                                    alt="Product" className="img-responsive"
                                                />
                                            </Link>
                                        </div>
                                        <div className="wsk-cp-text">
                                            <div className="title-product">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="card-footer">
                                                <div className="wcf-left"><span
                                                    className="price">{item.price}$</span></div>
                                                <div className="wcf-right"><Link to="" className="">
                                                    {selectWish.includes(item.id)
                                                        ? <AiFillHeart onClick={()=>addToWishList(item)} style={{color:"red"}} fontSize={35}/>
                                                        :  <AiOutlineHeart  onClick={()=>addToWishList(item)} style={{color:"red"}} fontSize={35}/>
                                                    }
                                                    </Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default Products;
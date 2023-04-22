import React, {useContext, useEffect, useState} from 'react';
import Navigation from "../Navbar";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import "./Categorydetails.css"
import authContext from "../AuthProvider/AuthContext";
import MultiRangeSlider from "multi-range-slider-react";
import Footer from "../Footer/Footer";
import Nodata from "../NoData/Nodata";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";


function CategoryDetails() {
    const [data, setData] = useState()
    const params = useParams();
    const {category} = useContext(authContext);
    const [minValue, set_minValue] = useState(9);
    const [maxValue, set_maxValue] = useState(10000);
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

    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    let initialized = false;
    useEffect(() => {
        if (!initialized) {
            initialized = true;
            axios.get(`https://api.escuelajs.co/api/v1/products?categoryId=${params.id}`)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [params])

    const FilterHandle = (e) => {
        axios.get(`https://api.escuelajs.co/api/v1/products?price_min=${e.minValue}&price_max=${e.maxValue}`)
            .then((response) => {
                setData(response.data)
            }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <Navigation/>
            {(data || []).length === 0 && <Nodata/>}
            {(data || []).length !== 0 &&
            <div>
                <h2 className="product">Our Products</h2>
                <div className="shell1 ">
                    <div className="container">
                        <div className="d-flex">
                            <div>
                                <aside>
                                    <p> Filters </p>
                                    <div className="rangeslider_container">
                                        <div>
                                            <MultiRangeSlider
                                                style={{color: "black", border: 'none', boxShadow: 'none'}}
                                                ruler='false'
                                                min={9}
                                                max={10000}
                                                step={50}
                                                minValue={minValue}
                                                maxValue={maxValue}
                                                onChange={(e) => {
                                                    handleInput(e);
                                                    FilterHandle(e);
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <span style={{color: "blue"}}>Price:</span>
                                            <span style={{margin: "10px", color: "black"}}>Min:{minValue}</span>
                                            <span style={{margin: "10px", color: "black"}}>Max:{maxValue}</span>
                                        </div>
                                    </div>

                                    {(category || []).map((item, index) => (
                                        <Link to={`/categorydetails/${item.id}`}> {item.name}  </Link>
                                    ))}
                                </aside>
                            </div>
                            <div className="social">
                                <Link to="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
                                    <i className="fa fa-linkedin"/>
                                </Link>
                            </div>

                            <div className="row">
                                {(data || []).map((item, index) => (
                                    <div key={index} className="col-md-4">
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
                                                    <div className="wcf-left">
                                                        <span className="price">{item.price}$</span>
                                                    </div>
                                                    <div className="wcf-right">
                                                        <Link to="" className="">
                                                        {selectWish.includes(item.id)
                                                            ? <AiFillHeart onClick={()=>addToWishList(item)} style={{color:"red"}} fontSize={35}/>
                                                            :  <AiOutlineHeart  onClick={()=>addToWishList(item)} style={{color:"red"}} fontSize={35}/>
                                                        }
                                                    </Link>
                                                    </div>
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
            }
            <Footer/>
        </div>
    );
}

export default CategoryDetails;
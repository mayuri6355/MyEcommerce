import React, {useEffect, useState} from 'react'
import './Dashboard.css';
import Navigation from "../Navbar";
import Slider from "./Slider";
import Products from "../Products/Products";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";




export default function Dashboard() {

    return (
        <div>
            <Navigation/>
            <Category/>
            <Slider />
            <Products/>
            <Footer/>


        </div>
    )
}

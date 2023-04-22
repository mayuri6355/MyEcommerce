import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import flipkart from '../../img/flipkart.png';
import '../Navbar/Navigation.css';
import {HiShoppingCart} from "react-icons/hi"
import axios from "axios";
import Select from "react-select";
import {Link, useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import authContext from "../AuthProvider/AuthContext";
import {AiOutlineHeart} from 'react-icons/ai';

function Navigation() {
    const items = JSON.parse(localStorage.getItem("items")) || []
    const navigate = useNavigate();
    const {category} = useContext(authContext);


    const renderOption = () => {
        let list = [];
        (category || []).forEach((e) => {
            list.push({
                label: e.name,
                value: e.id
            })
        })
        return list;
    }
    const options = renderOption();

    return (
        <div>
            <Navbar className="sticky-top" bg="primary" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="my-2 my-lg-0"
                            style={{maxHeight: '100px'}}>
                            <Navbar.Brand className="logo_container">
                                <Link to="/">
                                    <img
                                        src={flipkart}
                                        width="100"
                                        height="30"
                                        className="logo d-inline-block align-top "
                                        alt="React Bootstrap"
                                    />
                                </Link>
                            </Navbar.Brand>

                            <Link className="cart" to="/addtocart"><HiShoppingCart fontSize={40}/>
                                {(items || []).length !== 0 &&
                                <span className="cart-count">{items.length}</span>
                                }
                                <Link to="/wishlist" className="wish"><AiOutlineHeart fontSize={35}/></Link>
                            </Link>
                        </Nav>
                        <Form className="search d-flex">
                            <Select
                                styles={{
                                    container: provided => ({
                                        ...provided,
                                        width: 300,
                                        zIndex:10,
                                    }),
                                    indicatorSeparator: (base) => ({
                                        ...base,
                                        display: "none",
                                    }),
                                    dropdownIndicator: (base) => ({
                                        ...base,
                                        display: "none",
                                    }),
                                }}
                                options={options}
                                onChange={({value}) =>{navigate(`/categorydetails/${value}`)}}
                            />
                        </Form>
                    </Navbar.Collapse>
                    <div>
                        <Link to={"/signup"}>
                            <Button className="signupbtn ml-2">Signup</Button>
                        </Link>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}
export default Navigation;
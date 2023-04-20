import React, {useContext, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  './category.css';
import authContext from "../AuthProvider/AuthContext";
import {Link} from "react-router-dom";





const Category = () => {
    const {category} = useContext(authContext);

    return (
        <>
            <div className="d-flex align-items-center justify-content-center p-0">
                {(category || []).map((item, index) => (
                    <div key={index}>
                        <Navbar variant="light">
                            <Container>
                                <Nav className="me-auto">
                                    <Link to={`/categorydetails/${item.id}`} className="navlink">{item.name}</Link>
                                </Nav>
                            </Container>
                        </Navbar>

                    </div>

                ))}


            </div>

            </>

    );
};

export default Category;
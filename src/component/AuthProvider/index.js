import React, {useEffect, useState} from 'react';
import authContext from "./AuthContext";
import axios from "axios";


const AuthProvider = ({children}) => {

    const [category, setCategory] = useState("")


    let initialized = false;
    useEffect(() => {
        if (!initialized) {
            initialized = true

            axios.get("https://api.escuelajs.co/api/v1/categories/")
                .then((response) => {
                    setCategory(response.data);
                }).catch((error) => {
                console.log(error)
            })
        }

    }, [])



    const values = {category};
    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
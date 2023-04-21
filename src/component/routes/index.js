import Login from "../login";
import SignUp from "../SignUp/SignUp";
import ProductDetails from "../Products/ProductDetails";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import {Navigate, useRoutes} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import AddToCart from "../Products/AddToCart";
import ShippingCart from "../ShippingCart/ShippingCart";
import WishList from "../Products/WishList";



const RoutesList = () => {
    let element = [

        {path: "/", element: <Dashboard/>},
        {path: "/signup", element: <SignUp/>},
        {path: "/login", element: <Login/>},
        {path: "/productdetails/:id", element: <ProductDetails/>},
        {path: "/categorydetails/:id", element: <CategoryDetails/>},
        {path: "/addtocart", element: <AddToCart/>},
         {path: "/shippingcart", element: <ShippingCart/>},
        {path: "/wishlist",element: <WishList/>},
        {path: "/", element: <Navigate to="/login"/>},

    ];

    return useRoutes(element);
};

export default RoutesList;

import React, { useState} from 'react';
import './WishList.css'
import Navigation from "../Navbar";

const WishList = () => {
    let wish = JSON.parse(localStorage.getItem("wish")) || [];
    let [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || []);
    const [wishData, setWishData] = useState(wish)

    const removeFromWishList = (index) => {
        const wishData = wish;
        wishData.splice(index, 1);
        setWishData([...wishData]);
        localStorage.setItem("wish", JSON.stringify([...wishData]))
    }


    const addToCart = (wishData = {}, index) => {
            setItems((prev) => ([...prev, wishData]));
            localStorage.setItem("items", JSON.stringify([...items, wishData]))
        removeFromWishList();

    };

    return (
        <div>
            <Navigation/>
            <div className="cart-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-heading mb-10">My wishlist</div>
                            <div className="table-wishlist">
                                <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                                    <thead>
                                    <tr>
                                        <th width="45%" style={{fontWeight: "bold"}}>Product Name</th>
                                        <th width="15%" style={{fontWeight: "bold"}}><b>Unit Price</b></th>
                                        <th width="15%" style={{fontWeight: "bold"}}><b>Stock Status</b></th>
                                    </tr>
                                    </thead>

                                    {(wishData || []).map((item, index) => (
                                        <tbody>
                                        <tr>
                                            <td width="45%">
                                                <div className="display-flex align-center">
                                                    <div className="img-product">
                                                        <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" className="mCS_img_loaded"/>
                                                    </div>
                                                    <div className="name-product">
                                                        {item.title}
                                                    </div>
                                                </div>
                                            </td>
                                            <td width="15%" className="price">${item.price}</td>
                                            <td width="15%"><span className="in-stock-box">In Stock</span></td>
                                            <td width="15%">
                                                <button className="round-black-btn small-btn" onClick={() => addToCart(item)}>Add to Cart</button>
                                                <button className="round-red-btn small-btn" onClick={() => removeFromWishList(index)}>Remove to WishList</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishList;
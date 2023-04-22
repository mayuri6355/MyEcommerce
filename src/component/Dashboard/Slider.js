import React from 'react';
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="slider d-block w-100"
                        src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="slider d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0277/5420/1187/files/Fellmonger-banner-op.jpg?v=1648115649"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" slider d-block w-100"
                        src="https://www.archieelectronic.com/wp-content/uploads/2019/10/electronics1.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
export default Slider;
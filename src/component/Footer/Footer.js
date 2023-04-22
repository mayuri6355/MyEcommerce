import React from 'react';
import './Footer.css'
import flipkart from '../../img/flipkart.png'

const Footer = () => {
    return (
        <div>
            <footer className="section footer-classic context-dark_container bg-image" style={{background: ' #12263a'}}>
                <div className="container">
                    <div className="row row-30">
                        <div className="col-md-4 col-xl-5">
                            <div className="pr-xl-4"><a className="brand" href="index.html"><img className="brand-logo-light w-25 h-25 mt-2" src={flipkart}  /></a>
                                <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                                {/* Rights*/}
                                <p className="rights"><span>©&nbsp; </span><span className="copyright-year">2018</span><span>&nbsp;</span><span>Waves</span><span>.&nbsp;</span><span>All Rights Reserved.</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Contacts</h5>
                            <dl className="contact-list">
                                <dt>Address:</dt>
                                <dd>Flipkart Internet Private Limited,

                                    Buildings Alyssa, Begonia &

                                    Clove Embassy Tech Village,

                                    Outer Ring Road, Devarabeesanahalli Village,

                                    Bengaluru, 560103,

                                    Karnataka, India

                                    CIN : U51109KA2012PTC066107

                                    Telephone: 044-45614700
                                </dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>email:</dt>
                                <dd><a href="mailto:#">Flipkart@gmail.com</a></dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>phones:</dt>
                                <dd><a href="tel:#">https://karosearch.com</a> <span>or</span> <a href="tel:#">https://karosearch.com</a>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <h5>Links</h5>
                            <ul className="nav-list">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters social-container">
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook" /><span>Facebook</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram" /><span>instagram</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter" /><span>twitter</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play" /><span>google</span></a></div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
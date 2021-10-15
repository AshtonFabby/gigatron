import "../styles/contact.scss";

import Footer from "./components/footer"
import MainNav from "./components/mainnav";
import MobileNav from "./components/mobilenav";
import React from "react";
import TopNav from "./components/topnav";
import email from "../images/email-black.svg";
import phone from "../images/phone-black.svg";
import pin from "../images/pin-black.svg";

const ContactPage = () => {
    return (
        <main>
            <title>Contact</title>
            <TopNav />
            <MainNav />
            <MobileNav />
            <div className="contact-hero hero-sub">
                <div className="text">
                    <h1>get intouch with us</h1>
                    <h2>We are glad to serve you </h2>
                </div>
            </div>

            <div className="country">
                <h2>zimbabwean offices</h2>
                <div className="contact">
                    <img src={phone} alt="phone icon" />
                    <p>+263 8644 262 138</p>
                </div>
                <div className="contact">
                    <img src={email} alt="email icon" />
                    <p>info@gigatroning.com</p>
                </div>
                <div className="contact">
                    <img src={pin} alt="location icon" />
                    <p>19 Nuffield Road, Workington,
                        Harare, Zimbabwe </p>
                </div>
                <div className="map">

                </div>

            </div>

            <div className="country">
                <h2>zimbabwean offices</h2>
                <div className="contact">
                    <img src={phone} alt="phone icon" />
                    <p>+263 000 0000</p>
                </div>
                <div className="contact">
                    <img src={email} alt="email icon" />
                    <p>info@gigatroning.com</p>
                </div>
                <div className="contact">
                    <img src={pin} alt="location icon" />
                    <p>19 Nuffield Road, Workington,
                        Harare, Zimbabwe </p>
                </div>
                <div className="map">

                </div>

            </div>
            <Footer />
        </main>
    )
}
export default ContactPage
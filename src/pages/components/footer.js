import "../../styles/footer.scss";

import { Link } from "gatsby";
import React from "react";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import phone from "../../images/phone.svg";
import pin from "../../images/pin.svg";
import twitter from "../../images/twitter.svg";

const Footer = () => {


    return (
        <div className="footer">

            <div className="footer-top">
                <div className="form">
                    <h1>get in touch</h1>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea palceholder="Message"></textarea>
                        <button>submit</button>
                    </form>
                </div>
                <div className="location">
                    <h1>Where we are</h1>
                    <h2>Zimbabwe</h2>
                    <div className="contact">
                        <img src={phone} alt="Phone" />
                        <p>+263 8644 262 138</p>
                    </div>
                    <div className="contact">
                        <img src={pin} alt="location" />
                        <p>No.3014 Pachena Marlborough Harare Zimbabwe</p>
                    </div>

                </div>
                <div className="location">
                    <h2 >Zambia</h2>
                    <div className="contact">
                        <img src={phone} alt="Phone" />
                        <p>+260 968 383 300 </p>
                    </div>
                    <div className="contact">
                        <img src={pin} alt="location" />
                        <p>Suite 137 David Mwila House, President Avenue Town Centre, Copperbelt Province Zambia. </p>
                    </div>
                    <div className="icons">
                        <Link to="/"><img src={facebook} alt="facebook" /></Link>
                        <Link to="/"><img src={instagram} alt="instagram" /></Link>
                        <Link to="/"><img src={twitter} alt="twitter" /></Link>
                        <Link to="/"><img src={linkedin} alt="linkedin" /></Link>
                    </div>
                </div>


            </div>
            <div className="footer-bottom">
                <p>Copyright © 2021 Gigatron Engineering</p>
                <p> Developed by <a href="https://www.digitalvague.com" target="_blank" rel="noreferrer">DigitalVague</a> </p>
            </div>
        </div>
    )
}

export default Footer
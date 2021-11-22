import "../../styles/mainnav.scss"

import React, { useState } from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const MobileNav = () => {
    const [active, setActive] = useState(false);

    const click = () => {
        setActive(!active);
    }
    return (
        <div className="mobile-nav">
            <div className="toggler">
                <StaticImage src="../../images/logo.png" alt="gigatron logo" />
                <div onClick={click} className={active ? "menu-btn active" : "menu-btn"} >
                    <div className="burger"></div>
                </div>
            </div>
            <div className={active ? "links active" : "links"}>
                <Link to="/">home</Link>
                <Link to="/about">about us</Link>
                <Link to="/services">services</Link>
                <Link to="/contact">contact</Link>
                <a href="mailto:info@gigatroneng.com?subject=request a quote"><button>request a quote</button></a>
            </div>
        </div>
    )
}

export default MobileNav;
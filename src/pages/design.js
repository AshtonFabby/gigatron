import "../styles/design.scss";

import Footer from "./components/footer";
import { Link } from "gatsby";
import MainNav from "./components/mainnav";
import MobileNav from "./components/mobilenav";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TopNav from "./components/topnav";

const DesignPage = () => {
    return (
        <main>
            <title>Gigatron | Design</title>
            <TopNav />
            <MobileNav />
            <MainNav />
            <div className="design-hero hero-sub">
                <div className="text">
                    <h1>engineering design</h1>
                </div>
            </div>
            <div className="content content-fix">
                <p>We count with professinal minds, open-ended to problem solving to ensure  the best solution for every problem
                    <br />
                    The approach we use is totally acceptale accross the industry and is flexile enough to work in almost every situation
                    <br />
                    When designing we begin with an explicit goal and continuosly communicate with the client
                    and the different teams, bringing in different kinds of knowledge and experience to best serve your needs
                </p>

                <h1>New drawings and verification of designs</h1>
                <StaticImage src="../images/design.png" className="image-fix" />
                <p>Our team is fully capacitated to give your the quality solution you need. we work both in the
                    development of new solutios, as well as in the verification and betterment of existing ones
                </p>

                <h3>CONTACT US FOR MORE DETAILS ON WHAT WE CAN DO FOR YOU!</h3>

            </div>


            <div className="mini-services-section">
                <h1>other services</h1>
                <div className="mini-services">
                    <div className="service">
                        <Link to="/ndt"><StaticImage src="../images/ndt-home.png" alt="random text" /></Link>
                        <h2>Non Distruction Testing</h2>
                    </div>
                    <div className="service">
                        <Link to="/firesystem"><StaticImage src="../images/fire-home.png" alt="random text" /></Link>
                        <h2>intallation of fire systems</h2>
                    </div>
                    <div className="service">
                        <Link to="/inspection"><StaticImage src="../images/inspection-bg2.png" alt="random text" /></Link>
                        <h2>Inspection & Maintenance</h2>
                    </div>
                    <div className="service">
                        <Link to="/training"><StaticImage src="../images/training-home.png" alt="random text" /></Link>
                        <h2>training sevices</h2>
                    </div>
                    <div className="service">
                        <Link to="/distribution"><StaticImage src="../images/chemicals-home.png" alt="random text" /></Link>
                        <h2>Distribution of NDT consumables </h2>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
export default DesignPage
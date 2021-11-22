import "../styles/inspection.scss";

import Footer from "./components/footer";
import { Link } from "gatsby";
import MainNav from "./components/mainnav";
import MobileNav from "./components/mobilenav";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TopNav from "./components/topnav";

const InspectionPage = () => {
    return (
        <main>
            <title>Gigatron | Inspection</title>
            <TopNav />
            <MobileNav />
            <MainNav />
            <div className="inspection-hero hero-sub">
                <div className="text">
                    <h1>Inspection & Maintenance of Lifting Equipment </h1>
                </div>
            </div>
            <div className="content">
                <p>We ensure the integrity and ongoing safe operation of all lifting
                    equipment through visual and operational inspections carried out on
                    a regular basis</p>
            </div>
            <div className="equipment-boxes">
                <div className="equipment-box">
                    <StaticImage src="../images/goods.png" alt="random text" />
                    <h2>Goods Hoist</h2>
                </div>
                <div className="equipment-box">
                    <StaticImage src="../images/chain.png" alt="random text" />
                    <h2>Chain Blocks</h2>
                </div>
                <div className="equipment-box">
                    <StaticImage src="../images/winch.png" alt="random text" />
                    <h2>Mining Winch</h2>
                </div>
                <div className="equipment-box">
                    <StaticImage src="../images/rope.png" alt="random text" />
                    <h2 className="last">Wire Ropes</h2>
                </div>
            </div>

            <div className="content">
                <p>The periodic inspections carried out serve to protect
                    users by ensuring the equipment is at its best before use; this
                    prevents accidents and ensures your workshop is effeciently running
                    always.</p>
                <p>The range of lifting equipement we inspect and maintain is wide,
                    you can get in touch with us
                    to find out more</p>
            </div>

            <div className="content-container">
                <h1>Inspection of lifts</h1>
                <StaticImage src="../images/lifts.png" />
                <p>We have recently introduced inspecton and maintenance
                    of lifts to our services and we are currently
                    offering it to clients in Zambia only </p>
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
                        <Link to="/design"><StaticImage src="../images/design-home.png" alt="random text" /></Link>
                        <h2>engineering <br /> design</h2>
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
export default InspectionPage
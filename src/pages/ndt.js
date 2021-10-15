import "../styles/ndt.scss";

import Footer from "./components/footer";
import { Link } from "gatsby";
import MainNav from "./components/mainnav";
import MobileNav from "./components/mobilenav";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TopNav from "./components/topnav";

const NDTPage = () => {
    return (
        <main>
            <title>NDT</title>
            <TopNav />
            <MobileNav />
            <MainNav />
            <div className="design-hero hero-sub">
                <div className="text">
                    <h1>non distructive testing</h1>
                </div>
            </div>
            <div className="content content-fix">
                <p>We use a combination of inspection techniques to evaluate materials, components and systems in both the civil and mechanical fields, with zero disturbances
                </p>

                <h1 className="h1-fix">NDT in Civil Engineering </h1>

                <div className="ndt-grid">
                    <div className="grid-item">
                        <StaticImage src="../images/strength.png" className="image-fix" />
                        <h2>Compressive strength test </h2>
                    </div>
                    <div className="grid-item">
                        <StaticImage src="../images/structure.png" className="image-fix" />
                        <h2>Concrete structures</h2>
                    </div>
                    <div className="grid-item">
                        <StaticImage src="../images/wall.png" className="image-fix" />
                        <h2>Wall scan</h2>
                    </div>
                    <div className="grid-item">
                        <StaticImage src="../images/rebar.png" className="image-fix" />
                        <h2>Rebar detection </h2>
                    </div>
                    <div className="grid-item">
                        <StaticImage src="../images/wallscan.png" className="image-fix" />
                        <h2>wall scan </h2>
                    </div>
                    <div className="grid-item">
                        <StaticImage src="../images/rebound.png" className="image-fix" />
                        <h2>Rebound hammer test </h2>
                    </div>
                </div>

                <h1 className="h1-fix">NDT in Mechanical Engineering</h1>

                <StaticImage src="../images/mechanical-eng.png" />
                <h3 className="h3-fix">Our works branch into NTD in the mechanical fiels. The following are the methods we employ in
                    achieving this: </h3>

                <h2>Visual NDT(VT)</h2>
                <p>This method allows us to detect corrosion, misalignment, damage, cracks, and more.</p>

                <h2>Ultrasonic NDT(UT)</h2>
                <p>Used to check the quality of welds, flaw detection and evaluation of materials.</p>

                <h2>Magnetic Particle NDT(MT)</h2>
                <p>This process uses magnetic fields to find discontinuities at or near the surface of ferromagnetic materials.</p>

                <h2>Liquid Penetrant NDT(PT)</h2>
                <p>Liquid penetrant testing involves the application of a fluid with low viscosity to the material to be tested.</p>
            </div>


            <div className="mini-services-section">
                <h1>other services</h1>
                <div className="mini-services">
                    <div className="service">
                        <Link to="/design"><StaticImage src="../images/design-home.png" alt="random text" /></Link>
                        <h2>engineering <br /> design</h2>
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
export default NDTPage
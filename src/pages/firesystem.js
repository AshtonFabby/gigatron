import "../styles/fire.scss";

import Footer from "./components/footer";
import { Link } from "gatsby";
import MainNav from "./components/mainnav";
import MobileNav from "./components/mobilenav";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TopNav from "./components/topnav";

const FireSystemPage = () => {
    return (
        <main>
            <title>Fire System</title>
            <TopNav />
            <MobileNav />
            <MainNav />
            <div className="fire-hero hero-sub">
                <div className="text">
                    <h1>installation of fire systems</h1>
                </div>
            </div>
            <div className="content content-fix">
                <p>We provide the latest fire fighting equipments to help build
                    morden systems that suppress most fires before major losses
                    occur
                </p>

                <h1>Automatic fire fighting systems </h1>
                <StaticImage src="../images/auto.png" className="image-fix" />
                <p>Automatic fire fighting systems is our big bet. These systems react promptly
                    within the fisrt minutes of a fire breakout, anyday and anytime</p>

                <h1>Suppression systems </h1>
                <StaticImage src="../images/suppression.png" className="image-fix" />

                <p>We offer different types of suppression systems for different applications that best suit the needs of our clients.
                    <br />
                    Our systems extinguish, control and in best cases prevent fires from spreading or occuring
                    entirely
                </p>
                <h1>Sprinkler systems</h1>
                <StaticImage src="../images/sprinkler.png" className="image-fix" />
                <p>we provide the latest fire fighting equipments to help build morden systems that surpress
                    most fires before total loss occurs </p>
                <h1>Fire Fighting Equipment</h1>
                <h2>Fire Detection</h2>
                <StaticImage src="../images/firedetector.png" className="image-fix" />
                <h2>Fire Hydrants</h2>
                <StaticImage src="../images/hydrant.png" className="image-fix" />
                <h2>Fire Extinguishers</h2>
                <StaticImage src="../images/extiguishers.png" className="image-fix" />
                <h3>CO2 Fire extinguishers</h3>
                <p>CO2 extinguishers  are  ideal for places with a lot electrical
                    equipment such as offices or server rooms, and can be used on
                    Class B fires (those involving flamable liquids such as paraffin
                    and petrol). These extinguishers work by smothening the fire and
                    cutting off the supply of air, without leaving
                    any residue  </p>
                <h3>Powder Fire Extinguishers</h3>
                <p>Powder extinguishers are multipurpose because they can be used on Class A, B and C fires. </p>
                <h3>Fire Safety Signs</h3>
            </div>


            <div className="mini-services-section">
                <h1>other services</h1>
                <div className="mini-services">
                    <div className="service">
                        <Link to="/ndt"><StaticImage src="../images/ndt-home.png" alt="random text" /></Link>
                        <h2>Non Distruction Testing</h2>
                    </div>
                    <div className="service">
                        <Link to="/design"><StaticImage src="../images/design-home.png" alt="random text" /></Link>
                        <h2>engineering <br /> design</h2>
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
export default FireSystemPage
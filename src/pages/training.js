import "../styles/training.scss";

import Footer from "./components/footer";
import { Link } from "gatsby";
import MainNav from "./components/mainnav";
import MobileNav from "./components/mobilenav";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TopNav from "./components/topnav";

const TrainingPage = () => {
    return (
        <main>
            <title>Training</title>
            <TopNav />
            <MobileNav />
            <MainNav />
            <div className="design-hero hero-sub">
                <div className="text">
                    <h1>training services</h1>
                </div>
            </div>
            <div className="content content-fix">
                <p>Our training services aim at capacitating individuals to follow the best practices, ensuring safety always.
                    <br />
                    In line with occupational safety and health, we are concerned with the safety, health and welfare of your employees in the workplace.
                    <br />
                    Our concern is raised due to the fact that more than 2.78 million people die as a result of workplace-related accidents; in addition 374 million non-fatal accidents take place annually.
                </p>

                <h1>Fire fighting training</h1>
                <StaticImage src="../images/firefigting.png" className="image-fix" />
                <p>Fire is one of the leading causes of death, but it's ironic that people still underestimate its danger when more than 150 fires occur in the workplace every day.
                    <br />
                    Our courses will help you understand the causes of fires, safe housekeeping measures and emergency response procedures and much more
                </p>

                <h1>Machinery & chemical use training  </h1>
                <StaticImage src="../images/mechinery.png" className="image-fix" />
                <p>Incorrect use of machines and chemicals can radically affect the overall results.
                    In worst case scenerios, it can lead to loss of human capital
                </p>
                <h1>boiler training</h1>
                <StaticImage src="../images/boiler.png" className="image-fix" />
                <p>Boiler training is one of our areas of specialization and there is nothing more assuring than being trained by specialists</p>
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
                        <Link to="/design"><StaticImage src="../images/design-home.png" alt="random text" /></Link>
                        <h2>engineering <br /> design</h2>
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
export default TrainingPage
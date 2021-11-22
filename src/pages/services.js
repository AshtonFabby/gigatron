import "../styles/services.scss"

import Footer from "./components/footer";
import { Link } from "gatsby";
import MainNav from "./components/mainnav";
import MobileNav from "./components/mobilenav";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TopNav from "./components/topnav";

const ServicesPage = () => {
    return (
        <main>
            <title>Gigatron | Services</title>
            <TopNav />
            <MainNav />
            <MobileNav />

            <div className="service-hero hero-sub">
                <div className="text">
                    <h1>engineering solutions is what we do best</h1>
                    <h2>The options are endless</h2>
                </div>
            </div>
            <div className="offer">
                <p>We offer a wide range of services including non destructive testing,
                    inspection and maintenance of lifting equipment,
                    installation of fire systems, engineering design and training</p>
            </div>

            <div className="services-section">
                <div className="top">
                    <h1>Offering you the variety you need </h1>
                    <div className="container">
                        <StaticImage src="../images/ndt-home.png" alt="ndt testing" />
                        <div className="text">
                            <Link to="/ndt"><h2>Non Destructive Testing</h2></Link>
                            <p>We use a combination of inspection
                                techniques to evaluate materials,
                                components and systems,
                                both in the civil and mechanical fields, with zero
                                disturbances.
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="other">
                    <h2>other services</h2>
                    <div className="boxes">
                        <Link to="/inspection">
                            <div className="box">
                                <div className="image"><StaticImage src="../images/lifting-home.png" alt="crane" /></div>

                                <div className="content-home">
                                    <h3>Inspection & Maintenance of Lifting Equipment </h3>
                                    <p>we ensure the integrity and ongoing safe operation
                                        of all lifting equipment through visual and operational
                                        inspections carried out on a regular basis</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/firesystem">
                            <div className="box">
                                <div className="image">
                                    <StaticImage src="../images/fire-home.png" alt="fire alarm" />
                                </div>
                                <div className="content-home">
                                    <h3>Installation of fire systems </h3>
                                    <p>We provide the latest fire fighting equipments to help
                                        build morden systems that suppress most fires before
                                        major losses occur
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/design">
                            <div className="box">
                                <div className="image">
                                    <StaticImage src="../images/design-home.png" alt="engineering design" />
                                </div>
                                <div className="content-home">
                                    <h3>Engineering Design</h3>
                                    <p>We count with professinal minds, open-ended
                                        to problem solving to ensure we provide the best
                                        solution to every problem</p>
                                </div>
                            </div>

                        </Link>

                        <Link to="/distribution">
                            <div className="box">
                                <div className="image">
                                    <StaticImage src="../images/chemicals-home.png" alt="chemicals" />
                                </div>
                                <div className="content-home">
                                    <h3>Distribution of NDT consumables</h3>
                                    <p>We are the official distributors of MR CHEMIE NTD materials both
                                        in Zimbabwe and in Zambia;  we offer chemicals for penetrant testing
                                        and magnetic particles testing.</p>
                                </div>
                            </div>

                        </Link>

                        <Link to="/training">
                            <div className="box">
                                <div className="image">
                                    <StaticImage src="../images/training-home.png" alt="girl holding drill" />
                                </div>
                                <div className="content-home">
                                    <h3>Training Services</h3>
                                    <p>Our training services aim at
                                        capacitating individuals to follow the best practices, ensuring safety
                                        always</p>
                                </div>
                            </div>

                        </Link>

                    </div>

                </div>
            </div>
            <div className="equipment-section">
                <h1>equipment</h1>
                <div className="equipments">
                    <div className="equipment">
                        <div className="image">
                            <StaticImage src="../images/zbl1.png" alt="ZBL-R800" />
                        </div>
                        <div className="text">
                            <h2>
                                ZBL-R800
                                Multi-Functional Rebar Detector
                            </h2>
                            <p>
                                multi-functional integrated rebar detector which can be used
                                for testing the thickness of protective layers, measuring the
                                diameter, location, and distribution of rebar as well as for detecting the corrosion content of a rebar
                            </p>
                        </div>
                    </div>
                    <div className="equipment">
                        <div className="image">
                            <StaticImage src="../images/zc3.png" alt="ZBL-R800" />
                        </div>
                        <div className="text">
                            <h2>
                                ZC3
                                Concrete Rebound Hammer
                            </h2>
                            <p>
                                The concrete test hammer is generally applied to building
                                components, bridges and all kinds of concrete components
                                (panels, beams, columns, bridges) strength
                            </p>
                        </div>
                    </div>
                    <div className="equipment">
                        <div className="image">
                            <StaticImage src="../images/zbl2.png" alt="ZBL-R800" />
                        </div>
                        <div className="text">
                            <h2>
                                ZBL-U5100/U5200
                                Ultrasonic Detector
                            </h2>
                            <p>
                                the ZBL-U5100/U5200 is a tool for ultrasound investigations
                                of new generation that allows you to perform different types
                                of tests on concrete structures and on foundation piles through
                                the cross-hole methodology
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />


        </main>
    )
}

export default ServicesPage
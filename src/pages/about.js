import "../styles/about.scss"

import Footer from "./components/footer";
import MainNav from "./components/mainnav";
import MobileNav from "./components/mobilenav";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TopNav from "./components/topnav";
import diamond from "../images/diamond.svg";
import four from "../images/four.svg";
import mission from "../images/mission.svg";
import one from "../images/one.svg";
import three from "../images/three.svg";
import two from "../images/two.svg";
import vision from "../images/vision.svg";

const AboutPage = () => {
    return (
        <main>
            <title>Home</title>
            <TopNav />
            <MainNav />
            <MobileNav />

            <div className="about-hero hero-sub">
                <div className="text">
                    <h1>We Are Gigatron Engineering </h1>
                    <h2>Offering you real engineering solutions</h2>
                </div>
            </div>

            <div className="about-section">

                <StaticImage
                    src="../images/about-section.png"
                    alt="lady holding a book"
                />

                <div className="text">
                    <h1>About Us</h1>
                    <p>Gigatron Engineering is the fastest
                        growing NTD company in Zimbabwe,
                        serving customers from over four countries
                        accross Africa. <br /> <br />
                        We are  a certified engineering
                        company in both Zimbabwe with the Zimbabwe
                        Institute of Engineering and in Zambia with the
                        Engineering Institute of
                        Zambia.
                    </p>
                </div>
            </div>

            <div className="pride">
                <p>
                    We pride ourselves on smart
                    approaches to delivering projects,
                    ensuring that our clients obtain
                    the best outcome possible
                </p>
            </div>

            <div className="vison-section">
                <div className="boxes">
                    <div className="box2">
                        <img src={vision} alt="binoculus" />
                        <h2>vision</h2>
                        <p>Be the best business solution
                            for our clients and the ideal return for
                            our investors. </p>
                    </div>

                    <div className="box2">
                        <img src={mission} alt="dart board" />
                        <h2>mission</h2>
                        <p>Be the best business solution
                            for our clients and the ideal return for
                            our investors. </p>
                    </div>

                </div>
                <hr />
                <div className="values">
                    <div className="box2">
                        <img src={diamond} alt="diamond" />
                        <h2>value</h2>
                    </div>
                    <div className="container">
                        <div className="idk">
                            <div className="value">
                                <img src={one} alt="number one" />
                                <div className="text">
                                    <h2>safety</h2>
                                    <p>The safety and health of our customers
                                        remains the center of our activities.
                                    </p>
                                </div>
                            </div>
                            <div className="value">
                                <img src={two} alt="number two" />
                                <div className="text">
                                    <h2>character & integrity</h2>
                                    <p>Honesty, fairness and delivery is our promise to you.
                                    </p>
                                </div>
                            </div>
                            <div className="value">
                                <img src={three} alt="number three" />
                                <div className="text">
                                    <h2>ACCOMMODATION & REACTIVITY</h2>
                                    <p>We are pro-active in our approach.
                                    </p>
                                </div>
                            </div>
                            <div className="value">
                                <img src={four} alt="number four" />
                                <div className="text">
                                    <h2>PASSION</h2>
                                    <p>We love what we do and this is proven in the quality of service we deliver.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trust">
                <h1>you can trust us</h1>
                <div className="images">
                    <div className="image">
                        <StaticImage src="../images/certificate1.png" alt="engineering certificate" />
                    </div>
                    <div className="image">
                        <StaticImage src="../images/certificate2.png" alt="engineering certificate" />
                    </div>
                </div>
                <div className="text">
                    <p>Gigatron Engineering is a certified engineering
                        company in both Zimbabwe (with the Zimbabwe Institute of Engineering) and in  Zambia (with
                        the Engineering Institute of
                        Zambia)</p>
                    <p>
                        We are also registered with the Mines Inspectorate in both countries.
                    </p>
                    <p>Our team is comprised of certified engineering
                        professionals that have vast experience in the
                        field and tangible, envy worth results.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )

}

export default AboutPage
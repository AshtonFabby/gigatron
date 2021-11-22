import "../styles/distribution.scss";

import Footer from "./components/footer";
import { Link } from "gatsby";
import MainNav from "./components/mainnav";
import MobileNav from "./components/mobilenav";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TopNav from "./components/topnav";

const DistribtionPage = () => {
    return (
        <main>
            <title>Gigatron | Distribition</title>
            <TopNav />
            <MobileNav />
            <MainNav />
            <div className="distribution-hero hero-sub">
                <div className="text">
                    <h1>Distribution of NDT consumables </h1>
                </div>
            </div>
            <div className="content content-fix">
                <p className="p-fix">We are the official distributors of MR CHEMIE
                    NTD materials both in Zimbabwe and in Zambia;
                    we offer chemicals for penetrant testing and
                    magnetic particles testing.
                </p>

                <h1>Penetrant Testing </h1>
                <StaticImage src="../images/penetrant.png" className="image-fix image-fix-2" />

                <h2>cleaner</h2>
                <div className="chemicals">
                    <div className="chemical">
                        <StaticImage src="../images/mr79.png" className="image-fix" />
                        <p>MR 79 <br />(special cleaner)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/MR91.png" className="image-fix" />
                        <p>MR 91 H <br />(remover)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/MR85.png" className="image-fix" />
                        <p>MR 85 <br />(remover, acetone free)</p>
                    </div>
                </div>

                <h2>developer</h2>
                <div className="chemicals">
                    <div className="chemical">
                        <StaticImage src="../images/MR70.png" className="image-fix" />
                        <p>MR 70 <br />(developer white)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/MR70H.png" className="image-fix" />
                        <p>MR 70 H <br />(developer white)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/mr70i.png" className="image-fix" />
                        <p>MR 70 I <br />(developer white)</p>
                    </div>
                </div>

                <h2>Penetrant-coloured & fluorescent</h2>
                <div className="chemicals">
                    <div className="chemical">
                        <StaticImage src="../images/mr313.png" className="image-fix" />
                        <p>MR 313 <br />(penetrant red)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/mr312.png" className="image-fix" />
                        <p>MR 70 H <br />(penetrant red+ fluorescent)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/mr62.png" className="image-fix" />
                        <p>MR 62 <br />(penetrant red)</p>
                    </div>
                </div>

                <h1>Magnetic Particle Testing</h1>
                <StaticImage src="../images/magnetic.png" className="image-fix image-fix-2" />

                <h2>dry powder</h2>

                <div className="chemicals">
                    <div className="chemical">
                        <StaticImage src="../images/mr230.png" className="image-fix" />
                        <p>MR 230 <br />(dry magnetic powder, red)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/mr231.png" className="image-fix" />
                        <p>MR 231 <br />(dry magnetic powder, grey)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/mr232.png" className="image-fix" />
                        <p>MR 232 <br />(dry magnetic powder, green)</p>
                    </div>
                </div>

                <h2>Fluorescent</h2>

                <div className="chemicals">
                    <div className="chemical">
                        <StaticImage src="../images/mr76f.png" className="image-fix" />
                        <p>MR 76 F <br />(magnetic powder suspension)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/mr76fh.png" className="image-fix" />
                        <p>MR 76 FH <br />(magnetic powder suspension)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/mr76fr.png" className="image-fix" />
                        <p>MR 76 FR <br />(magnetic powder suspension)</p>
                    </div>
                </div>

                <h2>Dual & coloured</h2>

                <div className="chemicals">
                    <div className="chemical">
                        <StaticImage src="../images/mr222.png" className="image-fix" />
                        <p>MR 222 <br />(magnetic powder)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/mr210.png" className="image-fix" />
                        <p>MR 210 <br />(magnetic powder)</p>
                    </div>
                    <div className="chemical">
                        <StaticImage src="../images/mr76s.png" className="image-fix" />
                        <p>MR 76 S Version A <br />(magnetic powder suspension ASME)</p>
                    </div>
                </div>

                <h3 className="f3-fix">The full list of our products is beyond the scope of this page
                    contact us for more information- info@gigatroneng.com</h3>


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
export default DistribtionPage
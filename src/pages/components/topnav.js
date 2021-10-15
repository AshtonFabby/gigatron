import "../../styles/topnav.scss";

import { Link } from "gatsby";
import React from 'react';
import email from "../../images/svg/email.svg";
import facebook from "../../images/svg/facebook.svg";
import instagram from "../../images/svg/instagram.svg";
import linkedin from "../../images/svg/linkedin.svg";
import phone from "../../images/svg/phone.svg";
import twitter from "../../images/svg/twitter.svg";

const TopNav = () => {

	return (
		<div className="topnav">
			<div className="contacts">
				<div className="contact">
					<img src={phone} alt="phone icon" />
					<p>+2638644262138</p>
				</div>

				<div className="contact">
					<img src={phone} alt="phone icon" />
					<p>+260968383300</p>
				</div>

				<div className="contact">
					<img src={email} alt="email icon" />
					<p>info@gigatroneng.com</p>
				</div>
			</div>

			<div className="socials">
				<Link to="/"><img src={facebook} alt="facebook icon" /></Link>
				<Link to="/"><img src={instagram} alt="instagram icon" /></Link>
				<Link to="/"><img src={twitter} alt="twitter icon" /></Link>
				<Link to="/"><img src={linkedin} alt="linkedin icon" /></Link>
			</div>
		</div>
	);

}

export default TopNav
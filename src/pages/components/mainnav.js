import "../../styles/mainnav.scss"

import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const MainNav = () => {
	return (
		<div className="main-nav-container">
			<div className="main-nav">
				<div className="logo">
					<Link to="/">
						<StaticImage src="../../images/logo.png" alt="Gigatron logo" />
					</Link>
				</div>
				<div className="inner-nav">

					<Link to="/">Home</Link>
					<Link to="/about">About Us</Link>
					<Link to="/services">services</Link>

					{/* <Link to="/#">
						<div className='dropdown'>
							<button className="inner">Services</button>

							<Link to="/ndt">NDT</Link>
							<Link to="/inspection">inspection</Link>
							<Link to="/fire">fire systems</Link>
							<Link to="/distribution">distribution</Link>
							<Link to="/design">engineering design</Link>
							<Link to="/training">training</Link>

						</div>

					</Link> */}
					<Link to="/contact">Contact</Link>

				</div>
				<a href="mailto:info@gigatroneng.com?subject=request a quote"><button className="outer">request a quote</button></a>
			</div>
		</div>
	)
}

export default MainNav;
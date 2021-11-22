import "../styles/main.scss";
import 'swiper/css';
import "./components/topnav.js"

import * as React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';

import Footer from "./components/footer";
import { Link } from "gatsby";
import MainNav from "./components/mainnav.js";
import MobileNav from "./components/mobilenav.js";
import { StaticImage } from "gatsby-plugin-image";
import TopNav from "./components/topnav.js";

SwiperCore.use([Autoplay, Navigation]);

const IndexPage = () => {
	return (

		<main>
			<title>Gigatron | Home</title>
			<TopNav />
			<MainNav />
			<MobileNav />

			<div className="hero">
				<div className="content-hero">
					<h1>Finding real engineering solutions</h1>
					<h2>
						Priding ourselves on smart
						approaches to delivering projects,
						ensuring the best outcome possible
					</h2>
					<a href="mailto:info@gigatroneng.com?subject=request a quote"><button>request a quote</button></a>
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

			<div className="why">
				<StaticImage src="../images/helmet.png" alt="helmet" />
				<div className="text">
					<h1>Why chooose us</h1>
					<h2>Our inspections are performed by ALI certified lift inspectors!</h2>
					<p>
						In hiring us, you are getting more than just an inspector.
						You are guarenteed the peace of mind that comes with being
						inspected by certified professionals <br />
						We keep your employees safe and your workshop running at peak efficiency
					</p>
				</div>

			</div>

			<div className="client">
				<h1>our clients</h1>
				<p>Over the years we have built loyal relationships
					based on trust and quality of service
					and to date we are proud to have the following as
					our customers:</p>

				<div className="clients">
					<Swiper
						loop={true}
						spaceBetween={10}
						centeredSlides={true}
						slidesPerView={3}
						autoplay={{
							"delay": 2500,
							"disableOnInteraction": false
						}}
						navigation={true}
						className="mySwiper">

						<SwiperSlide>
							<StaticImage src="../images/client.png" alt="delta logo" />
						</SwiperSlide>
						<SwiperSlide>
							<StaticImage src="../images/client2.png" alt="delta logo" />
						</SwiperSlide>
						<SwiperSlide>
							<StaticImage src="../images/client3.png" alt="delta logo" />
						</SwiperSlide>
						<SwiperSlide>
							<StaticImage src="../images/client4.png" alt="delta logo" />
						</SwiperSlide>


					</Swiper>

				</div>

			</div>

			<Footer />

		</main>

	)
}

export default IndexPage

import React from 'react';
import './About.css';
import { Container } from '@mui/system';

function About(props) {
	return (
		<div className="aboutBody">
			<h2>Our Mission </h2>
			<p className="about">
				The creation of Zero Carbon is to built to track carbon emissions from
				transportation so users can track their foot print on the environment.
				We designed this product to create awareness for the average person.
			</p>
			<h2>Learn More </h2>
			<p className="about">What is a carbon footprint? </p>
			<li>Greenhouse gasses (carbon dioxide, methane, etc.)</li>
			<li>Produced by the human populations actions </li>
			<p className="about">The average carbon footprint for humans is: </p>
			<li>16 tons per person in the US </li>
			<li>4 tons per person globally</li>

			<p className="about">
				Source -
				<a href="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/#:~:text=The%20average%20carbon%20footprint%20for,is%20closer%20to%204%20tons">
					The Nature Conservancy
				</a>
			</p>

			<p className="about">
				There are a lot of things that contribute to your carbon footprint-
				Transportation is one of them!
			</p>
			<p className="about">
				Here are some ways to reduce your transportation footprint:
			</p>
			<li>Carpool</li>
			<li>Take the bus </li>
			<li>Bike </li>
			<li>Walk</li>
			<li>
				Make the most of your trips- is there another errand you can check off
				your list while you’re already out and about?
			</li>
			<p className="about">
				Learn More! Some good resources to enrich your footprint education:
			</p>
			<p className="about">
				National Geographic - <br />
				<a href="https://www.nationalgeographic.com/environment/article/what-is-a-carbon-footprint-how-to-measure-yours">
					What is your carbon footprint-and how to measure yours
				</a>
			</p>
			<p className="about">
				The Nature Conservancy - <br />
				<a href="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/#:~:text=The%20average%20carbon%20footprint%20for,is%20closer%20to%204%20tons">
					Calculate Your Carbon Footprint Meet your team!
				</a>
			</p>
			{/* <h3> UX Designers</h3>
				<li>Ernesto Fernandez</li>
				<li>Lena Slone</li>
				<h3>Software Engineers</h3>
				<li>Marvin Merida </li>
				<li>Jacky Cheng</li>
				<li>Michelle McPherson</li>
				<li>Peter Young</li>
				<li>Sergio Laguardia</li> */}
			<footer className="aboutFooter">
				<span> Ernesto Fernandez </span>
				<span>Lena Slone</span>
				<span>Marvin Merida</span>

				<span>Jacky Cheng</span>

				<span>Michelle McPherson</span>

				<span>Peter Young</span>

				<span>Sergio Laguardia</span>
			</footer>
		</div>
	);
}

export default About;

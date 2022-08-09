import React from 'react';
import './Co2Emissions.css';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';

function Co2Emission() {
	const current = new Date();
	const date = `
     ${current.getMonth() + 1}-${current.getDate()}-${current.getFullYear()}`;

	return (
		<div>
			<div className="circleContainer">
				<h1> 6.8</h1> <h2>Tons of Co2</h2>
				<h2>Date: {date}</h2>
			</div>
			<Button color="primary" variant="contained">
				Save Result
			</Button>

			<p>
				<Link href="#">Learn More</Link>
			</p>
		</div>
	);
}

export default Co2Emission;

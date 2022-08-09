import React from 'react';
import './Co2Emissions.css';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';

function Co2Emission() {
	const commonStyles = {
		bgcolor: 'background.paper',
		borderColor: 'text.primary',
		m: 1,
		border: 1,
		width: '20rem',
		height: '20rem',
	};
	return (
		<div>
			<div className="circleContainer">
				{/* <div className="circleContaner">
                            <Box sx={{ justifyContent: 'center' }}>
                                <Box sx={{ ...commonStyles, borderRadius: '50%' }}>
                                    <div className="circle">
                                        <h1> 6.8</h1> <h2>Tons of Co2</h2>
                                    </div>
                                </Box>
                            </Box>
                        </div> */}
				<h1> 6.8</h1> <h2>Tons of Co2</h2>
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

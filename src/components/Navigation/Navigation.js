import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';

function Navigation(props) {
	return (
		<div>
			<AppBar
				position="static"
				color="transparent"
				style={{ background: '#ce93d8' }}>
				<Toolbar>
					<Link to="/">
						<Button color="inherit" size="large">
							Home
						</Button>
					</Link>

					<Typography
						variant="h1"
						component="div"
						sx={{ flexGrow: 1 }}></Typography>
					<Stack direction="row" spacing={2}>
						<Link to="/about">
							<Button color="error" size="large" className="players">
								About
							</Button>
						</Link>
						<Link to="/dashboard">
							<Button color="error" size="large">
								Dashboard
							</Button>
						</Link>
					</Stack>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navigation;

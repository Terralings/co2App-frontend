import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Typography,
} from '@mui/material';

import './Dashboard.css';

function Dashboard() {
	return (
		<div>
			<TableContainer
				className="tableContainer"
				sx={{ maxWidth: '500px', boxShadow: 3 }}
				component={Paper}
				align="center">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Type of vehicle</TableCell>
							<TableCell>Distance Traveled</TableCell>
							<TableCell>Emissions</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>Text goes here</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default Dashboard;

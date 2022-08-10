import React from 'react';
import './Dashboard.css';
import Co2Emission from '../Co2Emission/Co2Emission';

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

function Dashboard(props) {
	return (
		<div>
			<h4>Past Trips</h4>
			<TableContainer
				className="tableContainer"
				sx={{ maxWidth: '95%', boxShadow: 3 }}
				component={Paper}
				align="center">
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Co2 Emissions:</TableCell>
							<TableCell>Date:</TableCell>
						</TableRow>
					</TableHead>

					<TableBody
						sx={{
							color: 'text.primary',
							justifyContent: 'center',
						}}>
						<TableRow>
							<TableCell>6.8 </TableCell>

							<TableCell>Time </TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default Dashboard;

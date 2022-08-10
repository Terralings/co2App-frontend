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
import { borders } from '@mui/system';

function Dashboard(props) {
	return (
		<div>
			<h4>Past Trips</h4>
			<TableContainer
				className="tableContainer"
				sx={{
					backgroundColor: 'black',
					maxWidth: '95%',
					boxShadow: 3,
				}}
				component={Paper}
				align="center">
				<Table aria-label="simple table">
					{/* Table Head for labeling row description */}
					{/* <TableHead>
						<TableRow>
							<TableCell>Co2 Emissions:</TableCell>
							<TableCell>Date:</TableCell>
						</TableRow>
					</TableHead> */}

					<TableBody
						sx={{
							justifyContent: 'left',
						}}>
						<TableRow>
							<TableCell style={{ color: 'white' }}>6.8 CO2 </TableCell>

							<TableCell style={{ color: 'white' }}>Time </TableCell>
						</TableRow>
						<TableRow>
							<TableCell style={{ color: 'white' }}>6.8 CO2 </TableCell>

							<TableCell style={{ color: 'white' }}>Time </TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default Dashboard;

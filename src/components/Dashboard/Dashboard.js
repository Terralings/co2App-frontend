import React, { useEffect } from "react";
import "./Dashboard.css";
import Co2Emission from "../Co2Emission/Co2Emission";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { borders } from "@mui/system";

function Dashboard(props) {

  useEffect(() => {
    // console.log(props.entry);
    props.getEntry();
    console.log(props.entry + "from useeffect on dashboard");
  }, [props.user]);
  return (
    <div>
      <h4>Past Trips</h4>
      {/* 
      {props.entry.map((entry, index) => (
        <h2> {entry.carbon}</h2>
      ))} */}
      <TableContainer
        className="tableContainer"
        sx={{
          backgroundColor: "black",
          maxWidth: "95%",
          boxShadow: 3,
        }}
        component={Paper}
        align="center"
      >
        <Table aria-label="simple table">
          {/* <TableHead>

						<TableRow>
							<TableCell>Co2 Emissions:</TableCell>
							<TableCell>Date:</TableCell>
						</TableRow>
					</TableHead> */}


          <TableBody
            sx={{
              justifyContent: "left",
            }}
          >
            {props.entry.map((entry, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: "white" }}>{entry.carbon}</TableCell>
                <TableCell style={{ color: "white" }}>{entry.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

}

export default Dashboard;

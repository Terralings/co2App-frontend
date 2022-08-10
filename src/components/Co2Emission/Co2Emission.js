import React, { useState } from "react";
import "./Co2Emissions.css";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate, Navigate } from "react-router-dom";
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal.js';

function Co2Emission(props) {
  //   const current = new Date();
  //   const date = `
  //      ${current.getMonth() + 1}-${current.getDate()}-${current.getFullYear()}`;

  const [modal, setModal] = useState(true);

  const saveResult = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const navigate = useNavigate();

  const navigateToForm = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      {modal && <ConfirmationModal closeModal={closeModal} />}
      <div className="circleContainer">
        <h1> {props.carbonInfo} </h1>
      </div>

      <Button color="primary" variant="contained" onClick={props.createEntry}>
        Save Result
      </Button>
      <Button color="secondary" variant="contained" onClick={navigateToForm}>
        New Trip
      </Button>

      <p>
        <Link href="/about">Learn More</Link>
      </p>

      {props.user ? <button> Log Out</button> : <div></div>}
    </div>
  );
}

export default Co2Emission;

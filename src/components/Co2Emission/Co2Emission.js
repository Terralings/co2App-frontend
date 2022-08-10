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

  const [modal, setModal] = useState(false);

  const saveResult = () => {
    props.createEntry();
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
    <div className="Co2Body">
      {modal && <ConfirmationModal closeModal={closeModal} />}
      <div className="circleContainer">
        <p className="circleText"> {props.carbonInfo} </p>
        <img src="/assets/gradient.png" className="gradient"></img>
      </div>

      {/* <div className="imgContainer">
				<p> Cool gradient bro</p>
				<img className="circleContainer2" src="/assets/gradient.png" />
			</div> */}
      <div className="buttonsContainer">
        <Button color="primary" variant="contained" onClick={saveResult}>
          Save Result
        </Button>
        <Button color="secondary" variant="contained" onClick={navigateToForm}>
          New Trip
        </Button>
      </div>
      <p>
        <Link href="/about">Learn More</Link>
      </p>
    </div>
  );
}

export default Co2Emission;

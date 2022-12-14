import React, { useState } from "react";
import "./Co2Emissions.css";
import { useNavigate, Navigate } from "react-router-dom";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal.js";
import { login, logout } from "../../services/firebase";

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

  const navigateToContacts = (e) => {
    e.preventDefault();
    navigate("/contactus");
  };
  return (
    <div className="Co2Body">
      {/* Confirmation Modal */}
      {modal && <ConfirmationModal closeModal={closeModal} user={props.user} />}

      <div className="circleContainer">
        {!props.empty ? (
          <p className="circleText">
            {props.carbonInfo}
            <br />
            <p className="kgText"> kg of Co2</p>
          </p>
        ) : (
          <div className="circleText">
            <p class="errorMessage">
              <span onClick={navigateToContacts}>
                {" "}
                Sorry, something unexpected happened. Please click here to
                contact our team{" "}
              </span>
            </p>
          </div>
        )}
      </div>

      <div className="buttonsContainer">
        {props.user ? (
          <button
            className="saveResult"
            variant="contained"
            onClick={saveResult}
          >
            Save Result
          </button>
        ) : (
          <button className="saveResult" variant="contained" onClick={login}>
            Save Result
          </button>
        )}

        <button className="pasttripBtn newtripBtn" onClick={navigateToForm}>
          New Trip
        </button>

        <a className="learnMore" href="/about">
          Learn More...
        </a>
      </div>
    </div>
  );
}

export default Co2Emission;

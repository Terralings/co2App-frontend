import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmationModal.css";
import { login, logout } from "../../services/firebase";

function ConfirmationModal({ closeModal, user }) {
  return (
    <div className="modal-container">
      <div className="modal modal-animation">
        <div className="logo-container">
          <Link to="/">
            <img
              src="/Assets/LOGO_MINT.png"
              alt="ZeroCarbon logo"
              className="mintLogo"
            />
          </Link>
        </div>
        <p>Your Trip is Saved!</p>
        <div className="modal-buttons">
          <Link to="/">
            <button className="newtripBtn">New Trip</button>
          </Link>
          {user ? (
            <Link to="/dashboard">
              <button className="pasttripBtn">View Past Trips</button>
            </Link>
          ) : (
            <button className="pasttripBtn" onClick={login}>
              View Past Trips
            </button>
          )}
          <button className="cancelBtn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;

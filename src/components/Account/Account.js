import { Button } from "@mui/material";
import { useNavigate, Navigate } from "react-router-dom";
import "./Account.css";
import Link from "@mui/material/Link";

const Account = ({ user }) => {
  const navigate = useNavigate();

  const navigateToForm = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const navigateToDashboard = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const convertName = (fullname) => {
    const firstName = fullname.split(" ")[0];
    return firstName;
  };
  return (
    <div className="account-container">
      <div className="accountHeader">
        <p className="accountName">
          {" "}
          <span>hi </span>{convertName(user.displayName)},
        </p>
        <p className="accountPrompt">WHERE ARE WE GOING TODAY?</p>
      </div>

      <div className="accountBtn-container">
        <Button
          color="primary"
          variant="contained"
          onClick={navigateToForm}
          sx={{
            fontSize: "16px",
            background: "#01E2BA",
            borderColor: "black",
            padding: "11px 33px",
            borderRadius: "13px",
            boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.5)",
            backgroundColor: "black",
            maxWidth: "95%",
            boxShadow: 3,
            verticalPadding: 11,
            horizontalPadding: 33,
          }}
        >
          New Trip
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={navigateToDashboard}
          sx={{
            fontSize: "16px",
            background: "#13E3C1",
            borderColor: "black",
            padding: "11px 33px",
            borderRadius: "13px",
            boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.5)",
            backgroundColor: "black",
            maxWidth: "95%",
            boxShadow: 3,
            verticalPadding: 11,
            horizontalPadding: 33,
          }}
        >
          View Past Trips
        </Button>
        <div className="learnMoreBtn">
          <Link href="/about">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Account;

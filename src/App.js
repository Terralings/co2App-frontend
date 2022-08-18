import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Co2Emission from "./components/Co2Emission/Co2Emission";
import Dashboard from "./components/Dashboard/Dashboard";
import axios from "axios";
import Account from "./components/Account/Account";
import Resources from "./components/Resources/Resources";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import ContactUs from "./components/ContactUs/ContactUs";
//FIREBASE STUFF;  MOVE IT TO RESPECTIVE LOCATION AFTERWARDS
import { login, logout } from "../src/services/firebase";
import { auth } from "./services/firebase";

function App() {
  const [isActive, setIsActive] = useState(true);

  const [classState, setClassState] = useState("inactive");

  function handleClick() {
    setIsActive(!isActive);
    if (isActive) {
      setClassState("active");
    } else {
      setClassState("inactive");
    }
    return classState;
  }

  const [user, setUser] = useState(null);
  const [entry, setEntry] = useState([]);

  const URL = "https://zero-carbon-backend.herokuapp.com/home/";

  //carbon states
  // const [distInput, setDistInput] = useState("");
  // const [vehTypeInput, setVehTypeInput] = useState("");
  const [carbonInfo, setCarbonInfo] = useState("");

  const [empty, setEmpty] = useState(false);

  // FORM STATES
  const [newForm, setNewForm] = useState({
    // pointA: "",
    // pointB: "",
    date: "",
    vehTypeInput: "",
    distance: "",
  });
  const convert = (number) => {
    return number * 1.60934;
  };

  //API FUNCTION
  const getAPI = async () => {
    axios({
      method: "post",
      url: "https://app.trycarbonapi.com/api/carTravel",
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDg0Y2NjYTcxMWZlODk5ZDY0NmIzYTc4MjhiNmNkM2YxZDVmNDVlZDViYjgyNTljMGFiZGM0NDdlODgyMzRjYjA4M2RhN2E5NzBlOGYwYzgiLCJpYXQiOjE2NjA4NTA1MTEsIm5iZiI6MTY2MDg1MDUxMSwiZXhwIjoxNjkyMzg2NTExLCJzdWIiOiIxMjk0Iiwic2NvcGVzIjpbXX0.TYXrdpADdYyytlo9HCl6eEzXMSXAshSukyJW81IBNu-4R5EUHeH5iRO5z0GfEiZzR0yTzGujfKHOxt_ws__SYA`,
        "Content-Type": "application/json",
      },
      data: {
        distance: convert(newForm.distance),
        vehicle: newForm.vehTypeInput,
      },
    })
      .then((res) => {
        console.log(res);
        const apiInfo = res.data;
        if (apiInfo.message) {
          setEmpty(true);
          console.log(" api call ran out");
        } else {
          setEmpty(false);
          const { carbon } = apiInfo;
          const adjustedCarbon = carbon.split(" ")[0];
          const converted = parseFloat(adjustedCarbon);
          const adjusted = Math.max(
            Math.round(converted * 10) / 10,
            2.8
          ).toFixed(2);
          setCarbonInfo(adjusted);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const checkAPIcall = (data) => {
    const firstWord = data.split(" ")[0];
    if (firstWord == "You") {
      console.log("api calls ran out");
    } else {
      return data;
    }
  };

  const navigate = useNavigate();
  const handleCalcSubmit = (e) => {
    e.preventDefault();
    getAPI();
    navigate("/co2Emissions");
  };
  // GET ROUTE
  const getEntry = async () => {
    const token = await user.getIdToken();
    console.log(token);
    console.log(user.uid);
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: " Bearer " + token,
      },
    });
    const data = await response.json();
    setEntry(data);
    console.log("from get route function: " + entry);
  };

  // CREATE ROUTE
  const createEntry = async () => {
    const token = await user.getIdToken();
    console.log("here" + user.uid);
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        Authorization: " Bearer " + token,
      },
      body: JSON.stringify({
        date: newForm.date,
        distance: newForm.distance,
        carbon: carbonInfo,
        googleId: user.uid,
      }),
      // body: JSON.stringify(entry),
    });
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    // getEntry();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <header>
        <button className="hamburger-icon" onClick={handleClick}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="homeLogo-container">
          <Link to="/">
            <img
              src="/Assets/LOGO_MINT.png"
              alt="ZeroCarbon logo"
              className="homeLogo"
            />
          </Link>
        </div>
      </header>
      <Navigation
        classState={classState}
        handleClick={handleClick}
        user={user}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              // carbonInfo={carbonInfo}
              // setCarbonInfo={setCarbonInfo}
              // distInput={distInput}
              // setDistInput={setDistInput}
              // vehTypeInput={vehTypeInput}
              // setVehTypeInput={setVehTypeInput}
              newForm={newForm}
              setNewForm={setNewForm}
              handleCalcSubmit={handleCalcSubmit}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/account" element={<Account user={user} />} />

        <Route
          path="/co2emissions"
          element={
            <Co2Emission
              carbonInfo={carbonInfo}
              user={user}
              createEntry={createEntry}
              empty={empty}
              setEmpty={setEmpty}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              user={user}
              entry={entry}
              getEntry={getEntry}
              setEntry={setEntry}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

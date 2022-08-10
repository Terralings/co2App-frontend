import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Co2Emission from "./components/Co2Emission/Co2Emission";
import Dashboard from "./components/Dashboard/Dashboard";
//FIREBASE STUFF;  MOVE IT TO RESPECTIVE LOCATION AFTERWARDS
import { login, logout } from "../src/services/firebase";
import { auth } from "./services/firebase";

function App() {
  const [isActive, setIsActive] = useState(true);
  const [classState, setClassState] = useState('inactive');

  function handleClick() {
    console.log("hello testing");
    setIsActive(!isActive);
    if (isActive) {
      setClassState('active');
    } else {
      setClassState('inactive');
    }
    return classState;
  }

  const [user, setUser] = useState(null);
  const [entry, setEntry] = useState([]);

  const URL = "http://localhost:4000/home/";

  // GET ROUTE
  const getEntry = async () => {
    const token = await user.getIdToken();
    // console.log(token);
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: " Bearer  " + token,
      },
    });
    const data = await response.json();
    setEntry(data);
  };

  // CREATE ROUTE

  const createEntry = async (entry) => {
    const token = await user.getIdToken();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        Authorization: " Bearer  " + token,
      },
      body: JSON.stringify(entry),
    });
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    getEntry();
    return () => {
      unsubscribe();
    };
  }, [user]);
  return (
    <div className="App">
      {user ? (
        <div onClick={logout}>Logout</div>
      ) : (
        <div onClick={login}>Login</div>
      )}
      <header>
        <button className='hamburger-icon' onClick={handleClick}>
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>
      </header>
      <Navigation classState={classState} handleClick={handleClick}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/co2emissions" element={<Co2Emission />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

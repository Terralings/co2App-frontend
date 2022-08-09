import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

//FIREBASE STUFF;  MOVE IT TO RESPECTIVE LOCATION AFTERWARDS
import { login, logout } from "../src/services/firebase";
import { auth } from "./services/firebase";

function App() {
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
    </div>
  );
}

export default App;

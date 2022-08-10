import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Co2Emission from './components/Co2Emission/Co2Emission';
import Dashboard from './components/Dashboard/Dashboard';
import axios from 'axios';
//FIREBASE STUFF;  MOVE IT TO RESPECTIVE LOCATION AFTERWARDS
import { login, logout } from '../src/services/firebase';
import { auth } from './services/firebase';
import { Container } from '@mui/material';

function App() {
	const [isActive, setIsActive] = useState(true);
	const [classState, setClassState] = useState('inactive');

	function handleClick() {
		console.log('hello testing');
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

	const URL = 'http://localhost:4000/home/';

	//carbon states
	// const [distInput, setDistInput] = useState("");
	// const [vehTypeInput, setVehTypeInput] = useState("");
	const [carbonInfo, setCarbonInfo] = useState('');

	// FORM STATES
	const [newForm, setNewForm] = useState({
		// pointA: "",
		// pointB: "",
		vehTypeInput: '',
		distance: '',
	});

	//API FUNCTION
	const getAPI = async () => {
		axios({
			method: 'post',
			url: 'https://app.trycarbonapi.com/api/carTravel',
			headers: {
				Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiODJiMjhjNWUyYmNkYjFhMDVlZTg1OGEwMzgyNGEwZDEyMDE5MWM3NGM5MDU5NzZkMmQ3NzBmZGRjNGEyZDk1YTg0ZTcyNDc1OGM1YmU2MTciLCJpYXQiOjE2NjAwOTk5NjQsIm5iZiI6MTY2MDA5OTk2NCwiZXhwIjoxNjkxNjM1OTY0LCJzdWIiOiIxMTU0Iiwic2NvcGVzIjpbXX0.odPwnPg9Lqq0TcJRVb4szjVneOl4SXTnu8aTRedpLfzez9riAMU6yGoQP5p1XP-84mqwEyZTDpO-aOe7T1M5_A`,
				'Content-Type': 'application/json',
			},
			data: {
				distance: newForm.distance,
				vehicle: newForm.vehTypeInput,
			},
		})
			.then((res) => {
				console.log(res);
				const apiInfo = res.data;
				const { carbon } = apiInfo;
				setCarbonInfo(carbon);
				console.log(carbonInfo);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	const navigate = useNavigate();
	const handleCalcSubmit = (e) => {
		e.preventDefault();
		getAPI();
		navigate('/co2Emissions');
	};
	// GET ROUTE
	const getEntry = async () => {
		const token = await user.getIdToken();
		// console.log(token);
		const response = await fetch(URL, {
			method: 'GET',
			headers: {
				Authorization: ' Bearer  ' + token,
			},
		});
		const data = await response.json();
		setEntry(data);
	};

	// CREATE ROUTE

	const createEntry = async () => {
		const token = await user.getIdToken();
		await fetch(URL, {
			method: 'POST',
			headers: {
				'Content-type': 'Application/json',
				Authorization: ' Bearer  ' + token,
			},
			body: JSON.stringify({
				// distance: newForm.distance,
				// carbon: carbonInfo,
				distance: 30,
				carbon: 6.7,
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
	}, [user]);
	return (
		<Container>
			<div className="App">
				{user ? (
					<button onClick={logout}>Logout</button>
				) : (
					<button onClick={login}>Login</button>
				)}
				<header>
					<button className="hamburger-icon" onClick={handleClick}>
						<span className="material-symbols-outlined">menu</span>
					</button>
				</header>
				<Navigation classState={classState} handleClick={handleClick} />
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
					<Route
						path="/co2emissions"
						element={
							<Co2Emission
								carbonInfo={carbonInfo}
								user={user}
								createEntry={createEntry}
							/>
						}
					/>
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</div>
		</Container>
	);
}

export default App;

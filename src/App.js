// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Co2Emission from './components/Co2Emission/Co2Emission';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<div className="App">
			<Navigation />

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

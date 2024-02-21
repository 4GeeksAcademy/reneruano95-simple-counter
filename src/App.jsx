import React, { useState, useEffect } from "react";
import SimpleCounter from "./component/SimpleCounter";
import { FaCirclePlay, FaCirclePause, FaCircleStop } from "react-icons/fa6";




const App = (props) => {

	const [counter, setCounter] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const startCounter = () => {
		setIsRunning(true);
	};

	const stopCounter = () => {
		setIsRunning(false);
	};

	const resetCounter = () => {
		setCounter(0);
		setIsRunning(false);
	};


	useEffect(() => {

		if (isRunning) {
			const interval = setInterval(() => {
				setCounter((prevCounter) => prevCounter + 1);
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		}

	}, [isRunning]);

	useEffect(() => {
		window.onload = startCounter;
	}, []);

	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);


	return (
		<>
			<SimpleCounter
				digitOne={one % 10}
				digitTwo={two % 10}
				digitThree={three % 10}
				digitFour={four % 10}
			/>

			<div className="container d-flex justify-content-center mt-2">
				<button className="btn" onClick={startCounter}><FaCirclePlay /></button >
				<button className="btn" onClick={stopCounter}><FaCirclePause /></button>
				<button className="btn" onClick={resetCounter}><FaCircleStop /></button>
			</div>
		</>
	);
};

export default App;

import React, { useState } from "react";
import SimpleCounter from "./component/SimpleCounter";




const App = (props) => {
	const [counter, setCounter] = useState(0);
	const [intervalId, setIntervalId] = useState(null);

	const incrementCounter = () => {
		const newCounter = counter + 1;
		setCounter(newCounter);
	};

	const startCounter = () => {
		const interval = setInterval(incrementCounter, 1000);
		setIntervalId(interval);
	};

	const stopCounter = () => {
		clearInterval(intervalId);
	};

	const resetCounter = () => {
		setCounter(0);
	};

	const resumeCounter = () => {
		startCounter();
	};

	return (
		<>
			<SimpleCounter
				digitOne={props.digitOne}
				digitTwo={props.digitTwo}
				digitThree={props.digitThree}
				digitFour={props.digitFour}
			/>
			<button onClick={startCounter}>Start</button >
			<button onClick={stopCounter}>Stop</button>
			<button onClick={resetCounter}>Reset</button>
			<button onClick={resumeCounter}>Resume</button>
		</>
	);
};

export default App;

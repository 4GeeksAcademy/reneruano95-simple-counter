import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App.jsx";


// let counter = 0
// setInterval(() => {
//     const four = Math.floor(counter / 1000)
//     const three = Math.floor(counter / 100)
//     const two = Math.floor(counter / 10)
//     const one = Math.floor(counter / 1)
//     console.log(four, three, two, one)

//     counter++

//     ReactDOM.render(
//         <App
//             digitOne={one % 10}
//             digitTwo={two % 10}
//             digitThree={three % 10}
//             digitFour={four % 10}
//         />, document.querySelector("#app"));

// }, 1000)


ReactDOM.render(<App />, document.querySelector('#app'));





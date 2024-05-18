import React from "react";
import ReactDOM from "react-dom/client";    
import App from "./App"

// function PrintName(){
//  return <h1> Hello React Js</h1>;
//}

//const PrintName = () => {
//  return <h1> hello , i am coming from arrow functionS </h1>;
//};

//ReactDOM.render(< PrintName /> , document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
    root.render(<App />);
}, 1000);
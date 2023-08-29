import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";

/*
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"; //v6 router
*/

import { Route, Routes } from "react-router-dom";
//v5 router - USED IN THE VIDEO!!!
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether darkmode is enabled or not!
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    }); //null is changed to object

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a2639";
      showAlert("Dark Mode Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "Success");
    }
  };

  return (
    <>
        <Navbar title="TextUtils2" dropdown="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
          {/*<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />*/}
        </div>
    </>
  );
}

export default App;

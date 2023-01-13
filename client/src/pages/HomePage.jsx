import React from "react";
import logo from "./../logo.svg";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>A Test Application for Deployment</p>
      <p>GIthub CI CD wth VPS Server</p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </header>
  );
};

export default HomePage;

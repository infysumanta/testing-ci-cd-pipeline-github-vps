import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <header className="App-header">
      <div>Contact</div>
      <p>Developed By Sumanta</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </header>
  );
};

export default Contact;

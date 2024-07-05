import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container">
      <h1 className="heading">Welcome to Expense tracker</h1>
      <div className="button-container">
        <Link to="/register">
          <Button className="button">Register</Button>
        </Link>
        <Link to="/login">
          <Button className="button">Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;

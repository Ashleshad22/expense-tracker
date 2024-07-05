import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Financialform from "./Financialform";
import Financiallist from "./Financiallist";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const location = useLocation(); // Get current location
  const name = location.state?.name; // Get user's name from state
  if (!name) {
    return (
      <>
        <h1 className="heading">Please Login first</h1>
        <Link to="/login">
          <Button className="mt-4">Login</Button>
        </Link>
      </>
    );
  }
  return (
    <>
      <h1 className="heading">Welcome {name}!</h1>
      <Financialform />
      {/* <Financiallist /> */}
    </>
  );
}

export default Home;

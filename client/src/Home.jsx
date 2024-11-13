import React from "react";
import { useLocation } from "react-router-dom";
import FinancialForm from "./FinancialForm";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FinancialProvider } from "./FinancialContext";

function Home() {
  const location = useLocation(); // Get current location
  const name = location.state?.name; // Get user's name from state
  const id = location.state?.id; // Get user's id from state
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
      <FinancialProvider>
        <FinancialForm userID={id} />
      </FinancialProvider>
    </>
  );
}

export default Home;

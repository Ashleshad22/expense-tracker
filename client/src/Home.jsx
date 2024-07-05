import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Financialform from "./Financialform";
import Financiallist from "./Financiallist";

function Home() {
  const location = useLocation(); // Get current location
  const name = location.state?.name; // Get user's name from state

  return (
    <>
      <h1 className="heading">Welcome {name}!</h1>
      <Financialform />
      {/* <Financiallist /> */}
    </>
  );
}

export default Home;

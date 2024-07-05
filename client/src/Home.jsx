import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation(); // Get current location
  const name = location.state?.name; // Get user's name from state

  return <h1>Welcome {name}</h1>;
}

export default Home;

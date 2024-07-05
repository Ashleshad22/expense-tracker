import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
      <h1 className="heading"> 404 Page Not Found </h1>
      <p className="mt-3">Go to Register Page instead</p>
      <Link to="/register">Register</Link>
    </>
  );
}

export default Page404;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Success") {
          const userData = JSON.parse(result.config.data);
          const userEmail = userData.email;
          const userID = result.data.id;

          axios
            .get(
              `http://localhost:3001/getUserDetails?email=${encodeURIComponent(
                userEmail
              )}`
            )
            .then((response) => {
              const userName = response.data.name;
              navigate(`/home?name=${encodeURIComponent(userName)}`, {
                state: { name: userName, id: userID },
              });
            })
            .catch((err) => console.log(err));
        } else if (result.data === "No record found") {
          navigate("/register", { state: { message: "User not registered" } });
        } else if (result.data === "The password is incorrect") {
          setPassword("");
          setErrorMessage("The password is incorrect");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Card
        className="mt-5 mx-auto"
        style={{ maxWidth: "100%", width: "400px" }}
      >
        <Card.Body>
          {message && (
            <p
              style={{
                color: message === "User already registered" ? "red" : "green",
                fontSize: "1.1em",
                fontWeight: "bold",
                whiteSpace: "pre-line",
              }}
            >
              {message}
            </p>
          )}
          <Card.Title>Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage(""); // Clear error message when user starts typing
                }}
              />
            </Form.Group>

            {errorMessage && (
              <p
                style={{
                  color: "red",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
                {errorMessage}
              </p>
            )}

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;

import { Button, Card, Container, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showMessage, setShowMessage] = useState(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State for loading spinner
  const location = useLocation();
  const message = location.state?.message;

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner
    axios
      .post("http://localhost:3001/register", {
        name,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        setLoading(false); // Hide spinner
        if (result.data === "User already registered") {
          navigate("/login", { state: { message: "User already registered" } });
        } else {
          navigate("/login", {
            state: { message: "Registeration Successful" },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Hide spinner on error)
      });
  };
  return (
    <>
      <Container>
        <Card
          className="mt-5 mx-auto"
          style={{ maxWidth: "100%", width: "400px" }}
        >
          <Card.Body>
            {message && showMessage && (
              <p
                style={{ color: "red", fontSize: "1.1em", fontWeight: "bold" }}
              >
                {message}
              </p>
            )}
            <Card.Title>Register</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <br />
            <p>Already have an Account?</p>
            <Link to="/login">Login</Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Signup;

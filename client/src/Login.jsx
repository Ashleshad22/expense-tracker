import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Login() {
  return (
    <Container>
      <Card className="mt-5 w-50 mx-auto">
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form>
            {/* Email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* Label */}
              <Form.Label>Email address</Form.Label>
              {/* Input */}
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            {/* Password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* Label */}
              <Form.Label>Password</Form.Label>
              {/* Input */}
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            {/* Submit Button */}
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

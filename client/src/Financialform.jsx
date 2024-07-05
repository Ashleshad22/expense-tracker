import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Financialform() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod,
    };

    //this will add the new record to the database
    //addRecord(newRecord);
  };
  return (
    <Container>
      <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="Enter amount" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" required>
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPaymentMethod">
          <Form.Label>Payment Method</Form.Label>
          <Form.Control as="select" required>
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Record
        </Button>
      </Form>
    </Container>
  );
}

export default Financialform;

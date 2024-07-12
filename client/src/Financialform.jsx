import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

function Financialform({ userID }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      userID: userID,
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod,
    };

    //this will add the new record to the database
    addRecord(newRecord);

    axios.post("http://localhost:3001/addFinanceRecord", {
      userID,
      date,
      description,
      amount,
      category,
      paymentMethod,
    });

    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
  };
  return (
    <Container>
      <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
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
          <Form.Control
            as="select"
            required
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
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

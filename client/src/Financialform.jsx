import React, { useState, useEffect } from "react";
import { Form, Button, Container, ListGroup } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Financialform({ userID }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [date, setDate] = useState(new Date());
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/finance/getFinanceRecords/${userID}`
      );
      setRecords(response.data);
    } catch (error) {
      console.error("There was an error fetching the records!", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      userID: userID,
      date: date,
      description: description,
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod,
    };

    axios
      .post("http://localhost:3001/api/finance/addFinanceRecord", newRecord)
      .then((response) => {
        setRecords((prevRecords) => [...prevRecords, newRecord]);
      })
      .catch((error) => {
        console.error("There was an error adding the record!", error);
      });

    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
    setDate(new Date());
  };

  return (
    <Container>
      <h3>Add Finance Record</h3>
      <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <br />
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="form-control"
          />
        </Form.Group>

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

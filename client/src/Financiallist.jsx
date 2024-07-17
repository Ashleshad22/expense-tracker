import React from "react";
import { Table } from "react-bootstrap";

function FinancialList({ records }) {
  return (
    <div style={{ width: "100%" }}>
      <h3 style={{ color: "#007bff", textAlign: "center" }}>Finance Records</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{new Date(record.date).toLocaleDateString()}</td>
              <td>{record.description}</td>
              <td>{record.amount}</td>
              <td>{record.category}</td>
              <td>{record.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FinancialList;

import React from "react";
import { Table } from "react-bootstrap";

function FinancialList({ records}) {

  let totalSpend = 0;
  let totalIncome = 0;

  records.forEach((record) => {
    if (record.amount < 0) {
      totalSpend += record.amount;
    } else {
      totalIncome += record.amount;
    }
  });

  return (
    <div style={{ width: "100%" }}>
      <h3 style={{ color: "#007bff", textAlign: "center" }}>Finance Records</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h4>
          Total Spend: <span style={{ color: "red" }}>₹{totalSpend}</span>
        </h4>
        <h4>
          Total Income: <span style={{ color: "green" }}>₹{totalIncome}</span>
        </h4>
      </div>
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

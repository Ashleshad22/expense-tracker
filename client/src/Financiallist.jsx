import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function FinancialList({ records, setRecords }) {
  const [loading, setLoading] = useState(false);

  let totalExpense = 0;
  let totalIncome = 0;

  records.forEach((record) => {
    if (record.amount < 0) {
      totalExpense += record.amount;
    } else {
      totalIncome += record.amount;
    }
  });

  const deleteUser = async (id) => {
    setLoading(true);
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
  
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3001/api/trash/deleteFinanceRecord/${id}`);
        const newRecords = records.filter((record) => record._id !== id);
        setRecords(newRecords);
        await Swal.fire("Deleted!", "Your transaction has been deleted.", "success");
      }
      setLoading(false);
    } catch (error) {
      console.error("There was an error deleting the record!", error);
      setLoading(false);
    }
  };

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
          Total Expense: <span style={{ color: "red" }}>₹{totalExpense}</span>
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
            <th>Actions</th>
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
              <td>
                <Button
                  className="btn btn-danger"
                  onClick={() => deleteUser(record._id)}
                  disabled={loading}
                >
                  {loading ? "Deleting..." : "Delete"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FinancialList;

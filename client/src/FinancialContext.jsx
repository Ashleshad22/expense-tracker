import React, { createContext, useState } from "react";

export const FinancialContext = createContext();

export const FinancialProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  return (
    <FinancialContext.Provider value={{ records, setRecords }}>
      {children}
    </FinancialContext.Provider>
  );
};
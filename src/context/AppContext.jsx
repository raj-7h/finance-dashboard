import { useState } from "react";
import { transactions as data } from "../data/transactions";
import { AppContext } from "./context";

// provider
export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(data);
  const [role, setRole] = useState("viewer");

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

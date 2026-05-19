import { useEffect, useState } from "react";
import API from "../services/api";
import TransactionCard from "./TransactionCard";

function TransactionList() {

  const [transactions, setTransactions] = useState([]);

  // Backend se data lana
  const getTransactions = async () => {
    try {
      const res = await API.get("/transactions");
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="mt-4">

      <h4 className="mb-3">
        Transactions List
      </h4>

      {/* Agar data nahi hai */}
      {transactions.length === 0 && (
        <p>No transactions found</p>
      )}

      {/* List render */}
      {transactions.map((item) => (
        <TransactionCard key={item._id} item={item} />
      ))}

    </div>
  );
}

export default TransactionList;
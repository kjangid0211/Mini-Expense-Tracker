import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

  const [transactions, setTransactions] = useState([]);

  const getData = async () => {
    try {
      const res = await API.get("/transactions");
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);


  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  return (
    <div className="row mb-4">

      <div className="col-md-4 mb-3">
        <div className="card text-bg-success shadow">
          <div className="card-body">
            <h5>Total Income</h5>
            <h3>₹ {income}</h3>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="card text-bg-danger shadow">
          <div className="card-body">
            <h5>Total Expense</h5>
            <h3>₹ {expense}</h3>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="card text-bg-primary shadow">
          <div className="card-body">
            <h5>Balance</h5>
            <h3>₹ {balance}</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
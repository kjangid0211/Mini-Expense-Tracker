import { useState } from "react";
import API from "../services/api";

function TransactionForm() {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "",
    date: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/transactions", formData);

      console.log(response.data);

      alert("Transaction Added");

      setFormData({
        title: "",
        amount: "",
        type: "",
        date: "",
      });
    } catch (error) {
      console.log(error);

      alert("Error");
    }
  };

  return (
    <div className="card shadow p-4 mb-4">
      <h3 className="mb-3">Add Transaction</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            name="amount"
            className="form-control"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <select
            name="type"
            className="form-select"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>

            <option value="income">Income</option>

            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-dark w-100">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;

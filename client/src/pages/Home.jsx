import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Home() {
  return (
    <div>

      <Navbar />

      <div className="container py-4">

        <Dashboard />

        <TransactionForm />

        <TransactionList />

      </div>

    </div>
  );
}

export default Home;
function TransactionCard({ item }) {

  return (
    <div className="card shadow-sm mb-2">

      <div className="card-body d-flex justify-content-between align-items-center">

        {/* Left side */}
        <div>
          <h5 className="mb-1">
            {item.title}
          </h5>

          <small className="text-muted">
            {item.type} • {new Date(item.date).toDateString()}
          </small>
        </div>

        {/* Right side */}
        <div>
          <h5
            className={
              item.type === "income"
                ? "text-success"
                : "text-danger"
            }
          >
            ₹ {item.amount}
          </h5>
        </div>

      </div>

    </div>
  );
}

export default TransactionCard;
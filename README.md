# 💰 MERN Expense Tracker

A full-stack MERN application used to manage daily income and expense transactions.  
The application allows users to add, view, and manage financial records with real-time balance calculations.

---

# 🚀 Features

- Add Income Transactions
- Add Expense Transactions
- View Transaction History
- Real-time Balance Calculation
- Total Income & Expense Dashboard
- Responsive UI using Bootstrap
- MongoDB Database Integration
- REST API with Express.js
- Persistent Data Storage

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Bootstrap
- Axios

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

---

# 📂 Project Structure

```txt
expense-tracker/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── TransactionForm.jsx
│   │   │   ├── TransactionList.jsx
│   │   │   └── TransactionCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── styles/
│   │   │   └── custom.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── transactionController.js
│   │
│   ├── models/
│   │   └── Transaction.js
│   │
│   ├── routes/
│   │   └── transactionRoutes.js
│   │
│   ├── server.js
│   └── .env
│
├── screenshots/
├── README.md
├── LICENSE
└── .gitignore
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
```

---

## 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```bash
npm run dev
```

---

## 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/transactions | Fetch all transactions |
| POST | /api/transactions | Add new transaction |
| DELETE | /api/transactions/:id | Delete transaction |

---

# 🧠 Application Workflow

```txt
User fills transaction form
          ↓
React sends API request using Axios
          ↓
Express backend receives request
          ↓
MongoDB stores data
          ↓
Backend sends response
          ↓
Frontend updates UI automatically
```

---

# 📊 Dashboard Calculations

The dashboard automatically calculates:

- Total Income
- Total Expense
- Current Balance

using all stored transaction records.

---

# 📸 Screenshots

## Dashboard
(Add dashboard screenshot here)

## Add Transaction Form
(Add form screenshot here)

## Transaction List
(Add transaction list screenshot here)

---

# 🎯 Learning Outcomes

This project demonstrates:

- CRUD Operations
- REST API Development
- React State Management
- Frontend & Backend Integration
- MongoDB Database Operations
- Responsive UI Design

---

# 🚀 Future Improvements

- Edit Transaction
- Search & Filter
- Authentication System
- Charts & Analytics
- Monthly Reports

---

# 👨‍💻 Author

Kartik Jangid

---

# 📜 License

This project is licensed under the MIT License.

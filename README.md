# Mini-Expense-Tracker

Project Overview

The MERN Expense Tracker is a full-stack web application that helps users manage their daily income and expenses. Users can add, view, and track financial transactions, while the system automatically calculates total income, total expenses, and current balance.

The project is built using the MERN stack:

* MongoDB for database
* Express.js for backend API
* React.js for frontend UI
* Node.js for server runtime

⸻

🎯 Project Features

* Add income and expense transactions
* View all transactions in a list format
* Delete transactions
* Real-time calculation of:
    * Total Income
    * Total Expenses
    * Balance
* Clean and responsive UI using Bootstrap
* Backend API with Express and MongoDB
* Persistent data storage (data remains after refresh)

Logic Explanation

1️⃣ Adding Transaction

* User enters data in form
* Data is sent to backend using Axios
* Backend stores data in MongoDB

⸻

2️⃣ Fetching Data

* React calls GET API
* Backend returns all transactions
* UI displays list using map function

⸻

3️⃣ Calculations

* Income = sum of all income transactions
* Expense = sum of all expense transactions
* Balance = Income - Expense

⸻

📊 Dashboard

The dashboard shows:

* Total Income (Green card)
* Total Expenses (Red card)
* Balance (Blue card)

All values are calculated dynamically from database data.


File Structure
expense-tracker/
│
├── client/
├── server/
├── screenshots/
├── README.md
├── LICENSE
└── .gitignore

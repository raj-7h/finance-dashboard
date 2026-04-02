:::writing{variant=“standard” id=“read01”}

💰 Finance Dashboard UI

A clean and interactive finance dashboard built to visualize financial data, manage transactions, and understand spending patterns.

⸻

🚀 Overview

This project is a frontend-based finance dashboard designed to demonstrate:
	•	UI/UX design skills
	•	Component structuring
	•	State management
	•	Data visualization

It simulates a real-world financial tracking interface without backend dependency.

⸻

✨ Features

📊 Dashboard
	•	Total Balance, Income, and Expenses summary cards
	•	Time-based visualization (Line Chart for financial trends)
	•	Category-based visualization (Pie Chart for spending breakdown)

⸻

📄 Transactions
	•	View all transactions (Date, Amount, Category, Type)
	•	Search by category
	•	Filter by income/expense
	•	Edit and delete transactions (Admin only)

⸻

🔐 Role-Based UI (RBAC Simulation)
	•	Viewer
	•	Can only view data
	•	Admin
	•	Can edit and delete transactions

Role can be switched using a dropdown for demonstration.

⸻

📈 Insights
	•	Top spending categories
	•	Basic financial observations
	•	Spending breakdown analysis

⸻

⚙️ State Management
	•	Managed using React Context API
	•	Global state sync across:
	•	Dashboard
	•	Transactions
	•	Insights

⸻

🛠️ Tech Stack
	•	Frontend: React.js
	•	Styling: Tailwind CSS
	•	Charts: Recharts
	•	State Management: Context API
  
⸻

📁 Project Structure
src/
├── assets/            # Images, icons
│   └── icons/
│       ├── delete.png
│       └── edit.png
│
├── components/        # Reusable UI components
│   ├── charts/
│   │   ├── LineChart.jsx
│   │   └── PieChart.jsx
│   │
│   ├── layout/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       └── Table.jsx
│
├── context/           # Global state management
│   ├── context.js
│   └── AppContext.jsx
│
├── hooks/             # Custom hooks
│   └── useAppContext.js
│
├── data/              # Mock/static data
│   └── transactions.js
│
├── pages/             # Application pages (routes)
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   └── Insights.jsx
│
├── App.jsx            # Root component
└── main.jsx           # Entry point
  
⸻
🧪 How to Run
	1.	Clone the repository: git clone https://github.com/raj-7h/finance-dashboard.git
  2.	Navigate to the project folder: cd screening_assignment
  3.	Install dependencies: npm install
  4.	Start the development server: npm run dev

⸻
📌 Key Highlights
	•	Clean and modular component structure
	•	Role-based UI simulation
	•	Dynamic charts with live data updates
	•	Responsive and user-friendly interface
	•	Proper state management using Context API

⸻

🚧 Assumptions
	•	Data is static/mock-based
	•	No backend or authentication is implemented
	•	Role switching is simulated on frontend

⸻

🌟 Future Improvements
	•	Local storage persistence
	•	Dark mode
	•	Advanced filtering
	•	Export transactions (CSV/JSON)
	•	API integration

⸻

🙌 Conclusion

This project demonstrates a practical approach to building a financial dashboard with focus on usability, clean design, and maintainable code structure.

⸻

⭐ If you like this project, feel free to give it a star!
:::

  

# 💰 Finance Dashboard UI

A clean and interactive finance dashboard built to visualize financial data, manage transactions, and understand spending patterns.

---

## 🚀 Overview

This project is a frontend-based finance dashboard designed to demonstrate:

- UI/UX design skills  
- Component structuring  
- State management  
- Data visualization  

It simulates a real-world financial tracking interface without backend dependency.

---

## ✨ Features

### 📊 Dashboard
- Total Balance, Income, and Expenses summary cards  
- Time-based visualization (Line Chart)  
- Category-based visualization (Pie Chart)  

---

### 📄 Transactions
- View all transactions (Date, Amount, Category, Type)  
- Search by category  
- Filter by income/expense  
- Edit and delete transactions (Admin only)  

---

### 🔐 Role-Based UI (RBAC Simulation)
- **Viewer** → Can only view data  
- **Admin** → Can edit and delete transactions  

Role switching available via dropdown.

---

### 📈 Insights
- Top spending categories  
- Basic financial observations  
- Spending breakdown analysis  

---

### ⚙️ State Management
- Managed using **React Context API**  
- Global sync across:
  - Dashboard  
  - Transactions  
  - Insights  

---

## 🛠️ Tech Stack

- React.js  
- Tailwind CSS  
- Recharts  
- Context API  

---

## 📁 Project Structure

```plaintext
src/
├── assets/
│   └── icons/
│       ├── delete.png
│       └── edit.png
│
├── components/
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
├── context/
│   ├── context.js
│   └── AppContext.jsx
│
├── hooks/
│   └── useAppContext.js
│
├── data/
│   └── transactions.js
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   └── Insights.jsx
│
├── App.jsx
└── main.jsx
  
---

## 🧪 How to Run

1. Clone the repository:
```bash
git clone https://github.com/raj-7h/finance-dashboard.git
```

2. Navigate to the project folder:
```bash
cd screening_assignment
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open in browser:
http://localhost:5173

---

## 📌 Key Highlights

- Clean and modular component structure  
- Role-based UI simulation  
- Dynamic charts with live data updates  
- Responsive and user-friendly interface  
- Proper state management using Context API  

---

## 🚧 Assumptions

- Data is static/mock-based  
- No backend or authentication is implemented  
- Role switching is simulated on frontend  

---

## 🌟 Future Improvements

- Local storage persistence  
- Dark mode  
- Advanced filtering  
- Export transactions (CSV/JSON)  
- API integration  

---

## 🙌 Conclusion

This project demonstrates a practical approach to building a financial dashboard with a focus on usability, clean design, and maintainable code structure.

---

⭐ If you like this project, feel free to give it a star!

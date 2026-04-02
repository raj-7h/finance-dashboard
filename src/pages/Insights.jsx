import { useOutletContext } from "react-router-dom";

const Insights = () => {
  const context = useOutletContext() || {};
  const transactions = context.transactions || [];

  // Category map (include all categories, even new ones)
  const categoryMap = {};

  // initialize all categories
  transactions.forEach((t) => {
    if (!categoryMap[t.category]) {
      categoryMap[t.category] = 0;
    }
  });

  // add only expense values
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] += t.amount;
    }
  });

  const highestCategory = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1],
  )[0];

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const savings = totalIncome - totalExpense;

  const topCategories = Object.entries(categoryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const expenseData = transactions.filter((t) => t.type === "expense");

  const avgExpense =
    expenseData.length > 0 ? Math.round(totalExpense / expenseData.length) : 0;

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Highest Spending Category</h3>
          <p className="text-xl font-bold mt-2">
            {highestCategory ? highestCategory[0] : "N/A"}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Monthly Comparison</h3>
          <p className="text-xl font-bold mt-2">
            {totalIncome > totalExpense
              ? "You are saving money 💰"
              : "Expenses are higher ⚠️"}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Net Savings</h3>
          <p
            className={`text-xl font-bold mt-2 ${
              savings >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ₹{savings.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500 mb-3">Top Spending Categories</h3>
        <ul className="space-y-2">
          {topCategories.map(([cat, value]) => (
            <li
              key={cat}
              className="flex flex-col sm:flex-row sm:justify-between text-sm"
            >
              <span>{cat}</span>
              <span className="font-semibold">₹{value.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">Observation</h3>
        <p className="mt-2">
          {totalExpense > totalIncome
            ? "Your expenses exceed income. Consider optimizing discretionary spending."
            : savings > 0
              ? "Great job! You're maintaining positive savings."
              : "Your finances are balanced. Try increasing savings."}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Average expense per transaction: ₹{avgExpense.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Insights;

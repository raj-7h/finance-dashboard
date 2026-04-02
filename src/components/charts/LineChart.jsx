import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { useOutletContext } from "react-router-dom";

const CustomLineChart = () => {
  const { transactions = [] } = useOutletContext() || {};
  const monthlyMap = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const monthIndex = date.getMonth();
    const monthName = date.toLocaleString("default", { month: "short" });

    if (!monthlyMap[monthIndex]) {
      monthlyMap[monthIndex] = {
        name: monthName,
        income: 0,
        expense: 0,
      };
    }

    if (t.type === "income") {
      monthlyMap[monthIndex].income += t.amount;
    } else {
      monthlyMap[monthIndex].expense += t.amount;
    }
  });

  // sort months properly
  const sortedData = Object.keys(monthlyMap)
    .sort((a, b) => a - b)
    .map((key) => {
      const item = monthlyMap[key];
      return {
        name: item.name,
        income: item.income,
        expense: item.expense,
        balance: item.income - item.expense,
      };
    });

  const data = sortedData;

  if (!data.length) {
    return (
      <div className="bg-white p-4 md:p-5 rounded-xl shadow h-64 md:h-72 flex items-center justify-center text-gray-400">
        No data available
      </div>
    );
  }

  return (
    <div className="bg-white p-4 md:p-5 rounded-xl shadow h-64 md:h-72">
      <h3 className="mb-4 font-semibold">Balance Trend</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `₹${value / 1000}k`} width={60} />
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <Legend />
          <Tooltip
            contentStyle={{ borderRadius: "10px", border: "none" }}
            formatter={(value, name) => [`₹${value.toLocaleString()}`, name]}
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;

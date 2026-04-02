import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { transactions } from "../../data/transactions";

const COLORS = ["#3b82f6", "#f87171", "#34d399", "#fbbf24", "#a78bfa"];

const CustomPieChart = () => {
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const data = Object.keys(categoryMap).map((category) => ({
    name: category,
    value: categoryMap[category],
  }));

  return (
    <div className="bg-white p-4 md:p-5 rounded-xl shadow h-64 md:h-72">
      <h3 className="mb-4 font-semibold">Spending Breakdown</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={70}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;

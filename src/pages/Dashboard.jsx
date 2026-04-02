import Card from "../components/ui/Card";
import CustomLineChart from "../components/charts/LineChart";
import CustomPieChart from "../components/charts/PieChart";
import { useAppContext } from "../hook/useAppContext.js";
const Dashboard = () => {
  const { transactions } = useAppContext();
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card title="Total Balance" value={`₹${balance.toLocaleString()}`} />
          <Card title="Income" value={`₹${income.toLocaleString()}`} />
          <Card title="Expenses" value={`₹${expense.toLocaleString()}`} />
        </div>
      </div>

      {/* Analytics */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Analytics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Line Chart Card */}
          <div className="bg-white rounded-2xl shadow-md p-4 h-[320px]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Financial Trend</h3>
              <span className="text-xs text-gray-400">Monthly</span>
            </div>
            <div className="h-[250px]">
              <CustomLineChart />
            </div>
          </div>

          {/* Pie Chart Card */}
          <div className="bg-white rounded-2xl shadow-md p-4 h-[320px]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Spending Breakdown</h3>
              <span className="text-xs text-gray-400">Category</span>
            </div>
            <div className="h-[250px]">
              <CustomPieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

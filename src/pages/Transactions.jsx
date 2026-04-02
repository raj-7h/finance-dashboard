import { useState } from "react";
import Table from "../components/ui/Table";
import { useAppContext } from "../hook/useAppContext.js";

const Transactions = () => {
  const { transactions, setTransactions, role } = useAppContext();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // 🔍 Filter + Search
  const filteredData = transactions
    ?.filter((t) => t.category.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => (filter === "all" ? true : t.type === filter));

  // ❌ Delete
  const handleDelete = (item) => {
    const updated = transactions.filter((t) => t.id !== item.id);
    setTransactions(updated);
  };

  // ✏️ Edit
  const handleEdit = (item) => {
    const newAmount = prompt("Enter new amount:", item.amount);
    const newCategory = prompt("Enter new category:", item.category);
    const newType = prompt("Enter type (income/expense):", item.type);

    if (!newAmount || !newCategory || !newType) return;

    const type = newType.toLowerCase().trim();

    if (type !== "income" && type !== "expense") {
      alert("Type must be income or expense");
      return;
    }

    const updated = transactions.map((t) =>
      t.id === item.id
        ? {
            ...t,
            amount: Number(newAmount),
            category: newCategory,
            type: type,
          }
        : t,
    );

    setTransactions(updated);
  };

  return (
    <div className="space-y-4 p-4 md:p-6">
      {/* 🔍 Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <input
          type="text"
          placeholder="Search by category..."
          className="border px-3 py-2 rounded w-full md:w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded w-full md:w-48"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* 📊 Table */}
      <Table
        data={filteredData || []}
        role={role}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Transactions;

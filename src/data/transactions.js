const categories = ["Food", "Travel", "Shopping", "Bills"];
const types = ["income", "expense"];

export const transactions = Array.from({ length: 500 }, (_, i) => {
  const type = types[Math.floor(Math.random() * types.length)];

  return {
    id: i + 1,
    amount: Math.floor(Math.random() * 5000) + 500,
    type,
    category:
      type === "income"
        ? "Salary"
        : categories[Math.floor(Math.random() * categories.length)],
    date: `2024-03-${Math.floor(Math.random() * 28) + 1}`,
  };
});

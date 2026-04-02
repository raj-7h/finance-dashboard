import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Transactions", path: "/transactions" },
    { name: "Insights", path: "/insights" },
  ];

  return (
    <div className="w-full md:w-64 md:h-screen bg-gray-900 text-white p-3 md:p-5 flex md:flex-col overflow-x-auto">
      <Link
        to="/"
        className="block text-xl font-bold mr-6 md:mb-8 cursor-pointer hover:text-gray-300 whitespace-nowrap"
      >
        Finance
      </Link>

      <ul className="flex md:flex-col gap-4 md:space-y-4">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block cursor-pointer whitespace-nowrap ${
                location.pathname === item.path
                  ? "text-blue-400"
                  : "hover:text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

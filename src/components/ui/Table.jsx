import deleteIcon from "../../assets/delete.png";
import editIcon from "../../assets/edit.png";

const Table = ({ data = [], role, onEdit, onDelete }) => {
  const isAdmin = role?.toLowerCase() === "admin";

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
      <table className="w-full min-w-[600px] text-sm md:text-base">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="py-2 md:py-3 text-xs font-semibold text-gray-500 uppercase text-center">
              Date
            </th>
            <th className="py-2 md:py-3 text-xs font-semibold text-gray-500 uppercase text-center">
              Amount
            </th>
            <th className="py-2 md:py-3 text-xs font-semibold text-gray-500 uppercase text-center">
              Category
            </th>
            <th className="py-2 md:py-3 text-xs font-semibold text-gray-500 uppercase text-center">
              Type
            </th>

            {isAdmin && (
              <th className="py-2 md:py-3 text-xs font-semibold text-gray-500 uppercase text-center">
                Actions
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={isAdmin ? 5 : 4}
                className="text-center py-2 md:py-4 text-gray-500"
              >
                No transactions found
              </td>
            </tr>
          ) : (
            data.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="py-2 md:py-3 whitespace-nowrap text-center">
                  {t.date}
                </td>

                <td className="py-2 md:py-3 font-semibold whitespace-nowrap text-center">
                  ₹{t.amount.toLocaleString()}
                </td>

                <td className="py-2 md:py-3 truncate max-w-[120px] text-center">
                  {t.category}
                </td>

                <td className="py-2 md:py-3 text-center align-middle">
                  <span
                    className={`px-2 py-1 rounded text-xs inline-flex items-center justify-center mx-auto ${
                      t.type === "income"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>

                {isAdmin && (
                  <td className="py-2 md:py-3 text-center">
                    <div className="flex justify-center items-center gap-2 w-full">
                      <button
                        onClick={() => onEdit(t)}
                        className="p-1.5 md:p-2 rounded-md hover:bg-gray-100 transition cursor-pointer hover:scale-105"
                      >
                        <img src={editIcon} alt="edit" className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => onDelete(t)}
                        className="p-1.5 md:p-2 rounded-md hover:bg-red-50 transition cursor-pointer hover:scale-105"
                      >
                        <img
                          src={deleteIcon}
                          alt="delete"
                          className="w-5 h-5"
                        />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

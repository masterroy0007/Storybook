import React from "react";

interface DataTableProps {
  data: Array<Record<string, any>>;
  columns: string[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const rowsPerPage = 5;

  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

  const [searchText, setSearchText] = React.useState("");

  // Sorting
  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) =>
      sortOrder === "asc"
        ? a[sortKey] > b[sortKey]
          ? 1
          : -1
        : a[sortKey] < b[sortKey]
        ? 1
        : -1
    );
  }, [data, sortKey, sortOrder]);

  // Search filter
  const filteredData = sortedData.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // Pagination
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="mb-2 p-1 border rounded"
      />

      {/* Table */}
      <table className="min-w-full border">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                onClick={() => {
                  if (sortKey === col) {
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  } else {
                    setSortKey(col);
                    setSortOrder("asc");
                  }
                }}
                className="cursor-pointer border px-4 py-2"
              >
                {col} {sortKey === col ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, idx) => (
            <tr key={idx} className="border">
              {columns.map((col) => (
                <td key={col} className="border px-4 py-2">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-2 flex justify-between">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-2 py-1 border rounded"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
        </span>
        <button
          onClick={() =>
            setCurrentPage((p) =>
              Math.min(p + 1, Math.ceil(filteredData.length / rowsPerPage))
            )
          }
          className="px-2 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;

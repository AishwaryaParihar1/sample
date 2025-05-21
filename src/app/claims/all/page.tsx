"use client";
import { useState } from "react";

export default function ClaimsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Overdue", "Due Today", "Due Tomorrow", "Due In 7 Days"];
  const headers = ["DATE", "NAME", "POLICY NAME", "CLAIM PROCESSOR"];

  return (
    <div className="p-4">
   

      {/* Top Actions */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="bg-gray-200 text-sm px-4 py-2 rounded">Tpa Claim List</button>
          <button className="bg-gray-200 text-sm px-4 py-2 rounded">Add Inward</button>
          <button className="bg-primary text-white text-sm px-4 py-2 rounded">Apply Filter</button>
        </div>
        <input
          type="text"
          placeholder="Search:"
          className="border px-2 py-1 rounded text-sm"
        />
      </div>

      {/* Tab Navigation */}
      <div className="border border-gray-300 rounded shadow-sm">
        <ul className="flex flex-wrap border-b border-gray-200 text-gray-500 text-sm font-medium">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`px-4 py-2 cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-gray-900 font-semibold border-t border-l border-r rounded-t border-gray-200 border-b-transparent"
                  : "bg-gray-50 hover:bg-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Table */}
        <div className="p-4 bg-white">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-blue-900 text-white">
              <tr>
                {headers.map((header) => (
                  <th key={header} className="border p-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={headers.length} className="text-center p-4 text-gray-600">
                  <div className="flex justify-center mb-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                      alt="No data"
                      className="w-12 h-12 opacity-50"
                    />
                  </div>
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-sm text-gray-600 mt-2">Showing 0 to 0 of 0 entries</div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import FilterBox, { FilterField } from "@/components/FilterBox";

export default function InstallmentsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [filters, setFilters] = useState<Record<string, string>>({});

  const tabs = [
    "All",
    "Due Today",
    "Due Tomorrow",
    "Due This Week",
    "Due In April",
    "Due In May",
    "Due In June",
    "Overdue",
    "Paid",
  ];

  const tableHeaders = [
    "DATE",
    "CLIENT NAME",
    "INSURED NAME",
    "PREMIUM PAID",
    "INSURER",
    "POLICY",
    "POLICY NUMBER",
    "PREMIUM",
    "BUSINESS OWNERS NAME",
  ];

  const fields: FilterField[] = [
    { name: "branch", label: "Branch", type: "text" },
    { name: "businessOwner", label: "Business Owner", type: "select", options: ["All", "Owner A", "Owner B"] },
    { name: "pos", label: "POS", type: "select", options: ["POS 1", "POS 2"] },
    { name: "crm", label: "CRM", type: "select", options: ["CRM 1", "CRM 2"] },
    { name: "clientName", label: "Select Client", type: "select", options: ["Client A", "Client B"] },
    { name: "date", label: "Date Range", type: "date" },
    { name: "leadInsurer", label: "Lead Insurer Name", type: "select", options: ["Insurer A", "Insurer B"] },
  ];

  return (
    <div className="p-4">
      <div className="text-sm text-muted-foreground mb-4">
        Policies &gt; <span className="text-primary font-semibold">Installments</span>
      </div>

      {/* Reusable FilterBox */}
      <FilterBox
        fields={fields}
        onChange={(data) => setFilters(data)}
        onReset={() => setFilters({})}
        showDownloadDropdown={false}
        extraButtons={[{ label: "Import Premium" }]}
      />

      {/* Tabs */}
      <div className="border border-gray-300 rounded shadow-sm mt-4">
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
                {tableHeaders.map((header) => (
                  <th key={header} className="border p-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={tableHeaders.length} className="text-center p-4 text-gray-600">
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

"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronUp, ChevronDown } from "lucide-react";

interface UninvoicedData {
  month: string;
  insurer: string;
  branch: string;
  type: string;
  brokerageDue: string;
}

const dummyData: UninvoicedData[] = [
  {
    month: "January 2025",
    insurer: "Future Generali India Insurance Company Ltd",
    branch: "Jaipur",
    type: "Rewards",
    brokerageDue: "26,500.00",
  },
  {
    month: "January 2025",
    insurer: "Future Generali India Insurance Company Ltd",
    branch: "Jaipur",
    type: "Brokerage",
    brokerageDue: "31,632.00",
  },
  {
    month: "February 2025",
    insurer: "Bajaj Allianz General Insurance Company Limited",
    branch: "Jaipur",
    type: "Rewards",
    brokerageDue: "4,372.20",
  },
  {
    month: "February 2025",
    insurer: "Bajaj Allianz General Insurance Company Limited",
    branch: "Jaipur",
    type: "Brokerage",
    brokerageDue: "17,736.55",
  },
  {
    month: "February 2025",
    insurer: "Future Generali India Insurance Company Ltd",
    branch: "Jaipur",
    type: "Brokerage",
    brokerageDue: "1,39,514.10",
  },
  {
    month: "February 2025",
    insurer: "Go Digit General Insurance",
    branch: "Jaipur",
    type: "Brokerage",
    brokerageDue: "-11,104.80",
  },
];

function formatMonth(date: string): string {
  const d = new Date(date);
  return d.toLocaleString("en-US", { month: "long", year: "numeric" });
}

export default function UninvoicedPage() {
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showSummary, setShowSummary] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const [filterDate, setFilterDate] = useState("");
  const [filterInsurer, setFilterInsurer] = useState("");
  const [filterInsurerBranch, setFilterInsurerBranch] = useState("");
  const [filterBranch, setFilterBranch] = useState("");
  const [filterType, setFilterType] = useState("");

  const resetFilters = () => {
    setFilterDate("");
    setFilterInsurer("");
    setFilterBranch("");
    setFilterInsurerBranch("");
    setFilterType("");
  };

  const filteredData = dummyData.filter((item) => {
    const matchesDate = filterDate
      ? item.month === formatMonth(filterDate)
      : true;
    const matchesInsurer = item.insurer
      .toLowerCase()
      .includes(filterInsurer.toLowerCase());
    const matchesBranch = item.branch
      .toLowerCase()
      .includes(filterBranch.toLowerCase());
    const matchesInsurerBranch = item.branch
      .toLowerCase()
      .includes(filterInsurerBranch.toLowerCase());
    const matchesType = filterType
      ? item.type.toLowerCase() === filterType.toLowerCase()
      : true;

    return (
      matchesDate &&
      matchesInsurer &&
      matchesBranch &&
      matchesInsurerBranch &&
      matchesType
    );
  });

  return (
    <div className="p-4 space-y-4">
      {/* Filter Toggle Button */}
      <button
        className="bg-secondary text-white px-4 py-2 rounded text-sm"
        onClick={() => setShowFilter((prev) => !prev)}
      >
        {showFilter ? "Hide Filter" : "Apply Filter"}
      </button>

      {/* Sliding Filter Panel */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showFilter ? "max-h-[650px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-2">
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border px-3 py-2 rounded text-sm"
          />
          <input
            type="text"
            value={filterInsurer}
            onChange={(e) => setFilterInsurer(e.target.value)}
            placeholder="Insurer"
            className="border px-3 py-2 rounded text-sm"
          />
          <input
            type="text"
            value={filterInsurerBranch}
            onChange={(e) => setFilterInsurerBranch(e.target.value)}
            placeholder="Insurer Branch"
            className="border px-3 py-2 rounded text-sm"
          />
          <input
            type="text"
            value={filterBranch}
            onChange={(e) => setFilterBranch(e.target.value)}
            placeholder="Org Branch"
            className="border px-3 py-2 rounded text-sm"
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border px-3 py-2 rounded text-sm"
          >
            <option value="">Brokerage/Rewards</option>
            <option value="Brokerage">Brokerage</option>
            <option value="Rewards">Rewards</option>
          </select>
        </div>

        {/* Buttons in Filter Modal */}
        <div className="flex flex-wrap justify-start items-center gap-4">
          <div className="relative" onBlur={() => setShowDropdown(false)} tabIndex={0}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-secondary text-white px-4 py-2 rounded text-sm"
            >
              Download
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-1 w-48 bg-white border rounded shadow text-sm z-50">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Summary
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Summary with Statement
                </button>
              </div>
            )}
          </div>

          <button
            onClick={resetFilters}
            className="bg-gray-400 text-white px-4 py-2 rounded text-sm"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Search & Entries */}
      <div className="flex justify-between items-center text-sm">
        <div>
          Show
          <select className="mx-2 border px-2 py-1 text-sm rounded">
            <option>100</option>
            <option>50</option>
            <option>25</option>
          </select>
          entries
        </div>
        <input
          type="text"
          placeholder="Search:"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-2 py-1 rounded text-sm"
        />
      </div>

      {/* Summary */}
      <div className="border rounded bg-gray-50">
        <div
          className="flex justify-between items-center px-4 py-2 border-b text-sm font-medium text-gray-700 cursor-pointer"
          onClick={() => setShowSummary(!showSummary)}
        >
          <span>VIEW SUMMARY</span>
          {showSummary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
        {showSummary && (
          <div className="grid grid-cols-1 sm:grid-cols-3 text-sm px-4 py-3 gap-4 font-medium text-gray-700">
            <div>
              BROKERAGE RECEIVABLE <br />
              <span className="font-semibold text-black">4,21,89,178.12</span>
            </div>
            <div>
              BROKERAGE RECEIVED <br />
              <span className="font-semibold text-black">3,31,41,692.57</span>
            </div>
            <div>
              PENDING BROKERAGE <br />
              <span className="font-semibold text-black">90,47,485.55</span>
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="border rounded shadow-sm overflow-x-auto">
        <Table>
          <TableHeader className="bg-blue-900 text-white">
            <TableRow>
              <TableHead className="text-white">MONTH</TableHead>
              <TableHead className="text-white">INSURER</TableHead>
              <TableHead className="text-white">BRANCH</TableHead>
              <TableHead className="text-white">TYPE</TableHead>
              <TableHead className="text-white">BROKERAGE DUE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData
              .filter((item) =>
                item.insurer.toLowerCase().includes(search.toLowerCase())
              )
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.insurer}</TableCell>
                  <TableCell>{row.branch}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.brokerageDue}</TableCell>
                </TableRow>
              ))}
            {filteredData.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="text-sm text-gray-600 mt-2 px-4 pb-4">
          Showing {filteredData.length} of {dummyData.length} entries
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import FilterBox, { FilterField } from '@/components/FilterBox';

interface Prospect {
  date: string;
  prospectName: string;
  insurer: string;
  nextFollowUp: string;
  status: 'all' | 'overdue' | 'due-today' | 'due-tomorrow' | 'april' | 'may' | 'june';
}

export default function FreshUpcomingPage() {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { label: 'All', key: 'all' },
    { label: 'Overdue', key: 'overdue' },
    { label: 'Due Today', key: 'due-today' },
    { label: 'Due Tomorrow', key: 'due-tomorrow' },
    { label: 'Due In April', key: 'april' },
    { label: 'Due In May', key: 'may' },
    { label: 'Due In June', key: 'june' },
    { label: 'Followups', key: 'followup' },
    { label: 'Calendar', key: 'calendar' },
  ];

  const data: Prospect[] = [
    {
      date: '2025-05-20',
      prospectName: 'THE WEDDING CONNECTION LLP',
      insurer: 'Go Digit',
      nextFollowUp: '2025-05-21',
      status: 'due-tomorrow',
    },
    {
      date: '2025-05-19',
      prospectName: 'MR RAGHUVIR RATHORE',
      insurer: 'Future Generali',
      nextFollowUp: '2025-05-19',
      status: 'due-today',
    },
    {
      date: '2025-04-01',
      prospectName: 'ABC Corp',
      insurer: 'Go Digit',
      nextFollowUp: '2025-04-10',
      status: 'april',
    },
  ];

  const fields: FilterField[] = [
    { name: 'branch', label: 'Branch', type: 'text' },
    { name: 'businessOwner', label: 'Business Owner', type: 'select', options: ['All', 'Rahul', 'Jitendra'] },
    { name: 'pos', label: 'POS', type: 'text' },
    { name: 'crm', label: 'CRM', type: 'text' },
    { name: 'clientName', label: 'Client Name', type: 'select', options: ['Client A', 'Client B'] },
    { name: 'typeOfBusiness', label: 'Type Of Business', type: 'select', options: ['New', 'Rollover/Portability'] },
    { name: 'premiumSize', label: 'Premium Size', type: 'select', options: ['<10K', '10K-50K', '>50K'] },
    { name: 'policyName', label: 'Policy Name', type: 'text' },
    { name: 'classOfPolicy', label: 'Class of Policy', type: 'text' },
    { name: 'dateRange', label: 'Date Range', type: 'date' },
    { name: 'category', label: 'Category', type: 'select', options: ['Category A', 'Category B'] },
    { name: 'followup', label: 'Followup', type: 'select', options: ['Pending', 'Completed'] },
    { name: 'leadInsurerName', label: 'Lead Insurer Name', type: 'select', options: ['Go Digit', 'Future Generali'] },
    { name: 'disposition', label: 'Disposition', type: 'select', options: ['Open', 'Closed'] },
    { name: 'referBy', label: 'Refer By', type: 'select', options: ['Self', 'Agent'] },
  ];

  const filtered = activeTab === 'all'
    ? data
    : data.filter((item) => item.status === activeTab);

  return (
    <div className="p-4 bg-white shadow-md ">
 

      <FilterBox
        fields={fields}
        onChange={(data) => setFilters(data)}
        onReset={() => setFilters({})}
        showDownloadDropdown={true}
        extraButtons={[{ label: 'Installments' }]}
      />

      {/* Tab Filters */}
      <div className="mt-4 border border-gray-300 rounded shadow-sm">
        <ul className="flex flex-wrap border-b border-gray-200 text-gray-500 text-sm font-medium">
          {tabs.map((tab) => (
            <li
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-white text-black border-t border-l border-r rounded-t border-gray-300'
                  : 'hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        {/* Table Data */}
        <div className="p-4 bg-white overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-primary text-white">
              <tr>
                <th className="border p-2">DATE</th>
                <th className="border p-2">PROSPECT NAME</th>
                <th className="border p-2">INSURER</th>
                <th className="border p-2">NEXT FOLLOW UP DATE</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((item, index) => (
                  <tr key={index}>
                    <td className="border p-2">{item.date}</td>
                    <td className="border p-2">{item.prospectName}</td>
                    <td className="border p-2">{item.insurer}</td>
                    <td className="border p-2">{item.nextFollowUp}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-600">
                    No data available in table
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="text-sm text-gray-600 mt-2">
            Showing {filtered.length} of {data.length} entries
          </div>
        </div>
      </div>
    </div>
  );
}

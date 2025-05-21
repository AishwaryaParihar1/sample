'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CustomSelect from '@/components/CustomSelect';

export default function DashboardPage() {
  const [openQuarter, setOpenQuarter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('Due Today');
  const [showFilters, setShowFilters] = useState(false);

  const toggleQuarter = (quarter: string) => {
    setOpenQuarter(openQuarter === quarter ? null : quarter);
  };

  const renderMonthDetails = (months: string[]) => (
    <div className="pl-6 pb-2">
      <table className="table-auto w-full border text-sm">
        <thead>
          <tr className="bg-red-100">
            <th className="border p-2">Month</th>
            <th className="border p-2">Gross Premium</th>
            <th className="border p-2">Net Premium</th>
            <th className="border p-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {months.map((month) => (
            <tr key={month} className="bg-white">
              <td className="border p-2">{month}</td>
              <td className="border p-2">₹0.00</td>
              <td className="border p-2">₹0.00</td>
              <td className="border p-2">₹0.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-4 text-sm text-blue-600">
        <span>Home &gt; <span className="text-red-600">Dashboard</span></span>
        <Button onClick={() => setShowFilters(!showFilters)} className="bg-red-700 hover:bg-red-800">
          <i className="fa fa-filter mr-2" /> Apply Filter
        </Button>
      </div>

      {showFilters && (
        <div className="grid grid-cols-4 gap-4 mb-6">
          <CustomSelect
            label="Branch"
            placeholder="Select Branch"
            defaultValue={{ label: 'All', value: 'all' }}
            options={[
              { label: 'All', value: 'all' },
              { label: 'Jaipur', value: 'jaipur' }
            ]}
          />
          <CustomSelect
            label="Business Owner"
            placeholder="Select Owner"
            defaultValue={{ label: 'All', value: 'all' }}
            options={[
              {
                label: 'Business Owners',
                options: [
                  { label: 'JITENDRA JOSHI , Jaipur', value: 'jitendra' },
                  { label: 'Ashish Kumar Sharma , Jaipur', value: 'ashish' }
                ]
              },
              {
                label: 'Teams',
                options: [
                  { label: 'Booking Team', value: 'booking' },
                  { label: 'Two Wheeler Team', value: 'two-wheeler' }
                ]
              }
            ]}
          />
          <div>
            <label className="block text-sm font-medium mb-1">CRM</label>
            <Input placeholder="Enter CRM" />
          </div>
          <CustomSelect
            label="Financial Year"
            placeholder="Select Year"
            defaultValue={{ label: '2025-2026', value: '2025-2026' }}
            options={[
              { label: '2020-2021', value: '2020-2021' },
              { label: '2021-2022', value: '2021-2022' },
              { label: '2022-2023', value: '2022-2023' },
              { label: '2023-2024', value: '2023-2024' },
              { label: '2024-2025', value: '2024-2025' },
              { label: '2025-2026', value: '2025-2026' }
            ]}
          />
        </div>
      )}

      <Card className="overflow-x-auto border border-gray-300">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border p-2">Business Summary</th>
              <th className="border p-2">Gross Premium</th>
              <th className="border p-2">Net Premium</th>
              <th className="border p-2">Revenue</th>
              <th className="border p-2">No of Policies</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-red-100 font-semibold">
              <td className="border p-2">Total Business</td>
              <td className="border p-2">₹4,18,25,531.59</td>
              <td className="border p-2">0</td>
              <td className="border p-2">0</td>
              <td className="border p-2">0</td>
            </tr>
            {[1, 2, 3, 4].map((q) => (
              <React.Fragment key={`quarter-${q}`}>
                <tr
                  className="bg-blue-50 cursor-pointer hover:bg-blue-100"
                  onClick={() => toggleQuarter(`q${q}`)}
                >
                  <td className="border p-2 font-medium">{q} Quarter</td>
                  <td className="border p-2">₹0.00</td>
                  <td className="border p-2">₹0.00</td>
                  <td className="border p-2">₹0.00</td>
                  <td className="border p-2">0</td>
                </tr>
                {openQuarter === `q${q}` && (
                  <tr>
                    <td colSpan={5} className="bg-white">
                      {renderMonthDetails(
                        q === 1
                          ? ['April', 'May', 'June']
                          : q === 2
                          ? ['July', 'August', 'September']
                          : q === 3
                          ? ['October', 'November', 'December']
                          : ['January', 'February', 'March']
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </Card>

      <div className="mt-6 border border-gray-300 rounded shadow-sm">
        <ul className="flex border-b border-gray-200 text-gray-500 text-sm font-medium">
          {['Due Today', 'Due Tomorrow', 'Due This Week', 'Due This Month', 'Overdue'].map((tab, idx) => (
            <li
              key={idx}
              className={`px-4 py-2 cursor-pointer border-t border-l border-r rounded-t ${
                activeTab === tab
                  ? 'bg-white text-gray-900 font-semibold border-gray-200 border-b-transparent'
                  : 'bg-gray-50 hover:bg-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="p-4 bg-white">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-blue-900 text-white">
              <tr>
                {['Date', 'Prospects', 'Policy', 'Premium', 'Insurer', 'Remarks', 'Business Owner', 'Next Follow Up Date'].map((col) => (
                  <th key={col} className="border p-2">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="text-center p-4 text-gray-600">
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

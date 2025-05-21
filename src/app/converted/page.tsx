'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { FaLink } from 'react-icons/fa6'

const filterFields = [
  'Branch', 'Business Owner', 'POS', 'CRM', 'Client Name', 'Type Of Business', 'Date Range',
  'Insurer Name', 'Policy Name', 'Class of Policy', 'Category', 'Policy Type', 'Policy Status',
  'Invoice Status', 'TAT Above', 'Claim Executive', 'Quality Check', 'Disposition'
]

const tableData = [
  {
    id: '20550',
    tag: 'PL',
    date: '15-05-2025',
    client: 'SDAIFLKSGJD;FKZ.',
    insurer: 'ICICI Lombard General Insurance Company Limited',
    location: 'Jaipur',
    paid: '7926.00',
    mode: 'Credit/Debit Card',
    policy: 'PCV Package (3 Wheeler)',
    number: '1234566',
    check: 'Not Verified',
    invoice: 'Not Reconciled',
    premium: '6717.00',
    status: 'Delivered',
    isLink: false
  },
  {
    id: '20495',
    tag: 'PL',
    date: '15-05-2025',
    client: 'THE PALACE SCHOOL EDUCATIONAL SOCIETY',
    insurer: 'ICICI Lombard General Insurance Company Limited',
    location: 'Jaipur',
    paid: '70800.00',
    mode: 'Credit/Debit Card',
    policy: 'Bharat Laghu Udyam Suraksha',
    number: '1017/392170709/00/000',
    check: 'Not Verified',
    invoice: 'Not Reconciled',
    premium: '60000.00',
    status: 'Delivered',
    isLink: true
  }
]

export default function ConvertedPage() {
  const [search, setSearch] = useState('')

  return (
    <div className="px-6 py-4">
      <div className="text-sm text-muted-foreground mb-4">
        Policies &gt; <span className="text-primary font-semibold">Converted</span>
      </div>

      {/* ✅ TOP FILTER SECTION */}
      <div className="flex justify-between items-center mb-4 gap-4">
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="hover:bg-destructive/60">Import</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Policy</DropdownMenuItem>
              <DropdownMenuItem>Endorsement</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="hover:bg-destructive/60">From Account Balance</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Add Policy</DropdownMenuItem>
              <DropdownMenuItem>Add Endorsement</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="hover:bg-destructive/60">Apply Filter</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Filter Policies</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-4 gap-4">
                {filterFields.map(label => (
                  <div key={label} className="flex flex-col gap-1">
                    <Label htmlFor={label}>{label}</Label>
                    <Input id={label} placeholder={label} />
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="secondary" className="hover:bg-destructive/60">Cancel</Button>
                <Button variant="default" className="bg-primary hover:bg-[hsl(var(--primary-hover))]">Download</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-72"
        />
      </div>

      {/* ✅ TABLE */}
      <div className="overflow-x-auto rounded border">
        <table className="min-w-full text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-4 py-2">DATE</th>
              <th className="px-4 py-2">CLIENT NAME</th>
              <th className="px-4 py-2">LEAD INSURER NAME</th>
              <th className="px-4 py-2">PREMIUM PAID</th>
              <th className="px-4 py-2">POLICY NAME</th>
              <th className="px-4 py-2">POLICY NUMBER</th>
              <th className="px-4 py-2">QUALITY CHECK</th>
              <th className="px-4 py-2">INVOICE</th>
              <th className="px-4 py-2">PREMIUM</th>
              <th className="px-4 py-2">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {tableData
              .filter(row => row.client.toLowerCase().includes(search.toLowerCase()))
              .map((item, i) => (
                <tr key={i} className="hover:bg-muted transition-colors align-top">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="text-white px-1 py-0.5">{item.tag}</Badge>
                      <div>
                        <div className="font-medium">{item.id}</div>
                        <div className="text-xs text-muted-foreground">{item.date}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{item.client}</td>
                  <td className="px-4 py-3">
                    <div>{item.insurer}</div>
                    <div className="text-xs text-muted-foreground">{item.location}</div>
                  </td>
                  <td className="px-4 py-3">
                    ₹ {item.paid}
                    <div className="mt-1 flex items-center gap-1">
                      <span className="bg-gray-200 text-xs px-2 py-1 rounded">{item.mode}</span>
                      <span className="text-lg text-gray-400 cursor-pointer">+</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">{item.policy}</td>
                  <td className="px-4 py-3 text-pink-500">
                    {item.isLink && <FaLink className="inline mr-1" />}
                    {item.number}
                  </td>
                  <td className="px-4 py-3">{item.check}</td>
                  <td className="px-4 py-3">{item.invoice}</td>
                  <td className="px-4 py-3">{item.premium}</td>
                  <td className="px-4 py-3">
                    <Button variant="secondary" className="bg-[#7C8A9A] text-white hover:bg-muted">{item.status}</Button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../Public/Images/logo.png";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Download,
  Plus,
  Settings,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// ✅ Define proper types
type SubMenuItem = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href?: string;
  submenu?: (SubMenuItem | { name: string; submenu: SubMenuItem[] })[];
};

const navItems: NavItem[] = [
  { name: "Home", href: "/dashboard" },
  {
    name: "Policies",
    submenu: [
      {
        name: "Upcoming",
        submenu: [
          { name: "Fresh", href: "/upcoming/fresh" },
          { name: "Renewals", href: "/upcoming/renewals" },
        ],
      },
      { name: "Converted", href: "/converted" },
      { name: "Installments", href: "/installments" },
    ],
  },
  {
    name: "Claims",
    submenu: [{ name: "All", href: "/claims/all" }],
  },
  {
    name: "Accounts",
    submenu: [
      { name: "Uninvoiced", href: "/accounts/uninvoiced" },
      { name: "Invoice", href: "/accounts/invoice" },
      {
        name: "Reconciliation Errors",
        href: "/accounts/reconciliation-errors",
      },
      { name: "TDS Reconciliation", href: "/accounts/tds-reconciliation" },
      { name: "Pending Payout", href: "/accounts/pending-payout" },
      { name: "POS Payments", href: "/accounts/pos-payments" },
    ],
  },
  {
    name: "Reports",
    submenu: [
      { name: "Client Accounts", href: "/reports/client-accounts" },
      { name: "IRDA Statement", href: "/reports/irda-statement" },
      { name: "Premium Register", href: "/reports/premium-register" },
      { name: "Business Statement", href: "/reports/business-statement" },
      { name: "Lost Business Report", href: "/reports/lost-business" },
      { name: "Declined Business Report", href: "/reports/declined-business" },
      { name: "Login User Report", href: "/reports/login-user" },
      {
        name: "Member Business Summary Report",
        href: "/reports/member-business-summary",
      },
      {
        name: "Month Wise Business Report",
        href: "/reports/month-wise-business",
      },
      {
        name: "Claim Acknowledgement Report",
        href: "/reports/claim-acknowledgement",
      },
      { name: "List", href: "/reports/list" },
      { name: "Activity Report", href: "/reports/activity" },
      { name: "Tickets", href: "/reports/tickets" },
      { name: "POSP Activation Report", href: "/reports/posp-activation" },
      { name: "Stage Wise Report", href: "/reports/stage-wise" },
      {
        name: "POSP Onboarding Status Report",
        href: "/reports/posp-onboarding-status",
      },
      { name: "POS PAYOUT REPORT", href: "/reports/pos-payout" },
    ],
  },
  { name: "Upload Policy", href: "/uploadPolicy" },
  {
    name: "Add",
    submenu: [
      {
        name: "Add Business",
        submenu: [
          { name: "Claim A", href: "/add-claim/a" },
          { name: "Claim B", href: "/add-claim/b" },
        ],
      },
      {
        name: "Add Claim",
        submenu: [
          { name: "Claim A", href: "/add-claim/a" },
          { name: "Claim B", href: "/add-claim/b" },
        ],
      },
      {
        name: "Add Invoice",
        href: "/add-invoice",
      },
      {
        name: "Add Ticket",
        href: "/add-ticket",
      },
    ],
  },

  {
    name: "Settings",
    submenu: [
      { name: "Organization",
        submenu: [
        { name: "Claim A", href: "/add-claim/a" },
        { name: "Claim B", href: "/add-claim/b" },
      ],
     },
      { name: "Policy", 
        submenu: [
          { name: "Claim A", href: "/add-claim/a" },
          { name: "Claim B", href: "/add-claim/b" },
        ],
       },
      { name: "Claims",
        submenu: [
          { name: "Claim A", href: "/add-claim/a" },
          { name: "Claim B", href: "/add-claim/b" },
        ],
       },
      { name: "User",
        submenu: [
          { name: "Claim A", href: "/add-claim/a" },
          { name: "Claim B", href: "/add-claim/b" },
        ],
       },
      { name: "Tickets",
        submenu: [
          { name: "Claim A", href: "/add-claim/a" },
          { name: "Claim B", href: "/add-claim/b" },
        ],
       },
      { name: "Templates", 
        submenu: [
          { name: "Claim A", href: "/add-claim/a" },
          { name: "Claim B", href: "/add-claim/b" },
        ],
       },
      { name: "Automation", 
        submenu: [
          { name: "Claim A", href: "/add-claim/a" },
          { name: "Claim B", href: "/add-claim/b" },
        ],
      },

    ],
  },
  {
    name: "User",
    submenu: [
      { name: "Profile", href: "/user/profile" },
      { name: "Change Profile", href: "/user/changeprofile" },
      { name: "Logout", href: "/user/logout" },
    ],
  },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = 34;

  return (
    <nav className="bg-primary text-white px-4 shadow-md font-medium">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={42} height={42} />
          <span className="text-sm font-semibold">
            Pointers Insurance <br /> Brokers
          </span>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden lg:flex text-sm items-center gap-3">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseLeave={() => setHovered(null)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center text-sm gap-1 px-3 py-2 hover:bg-primary-hover"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onMouseEnter={() => setHovered(item.name)}
                  className="flex items-center text-sm gap-1 px-3 py-2 hover:bg-primary-hover"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} />}
                </button>
              )}
              {hovered === item.name && item.submenu && (
                <div className="absolute top-full left-0 z-50 bg-white text-black font-light text-sm shadow-md rounded min-w-[180px]">
                  {item.submenu.map((sub, i) =>
                    "submenu" in sub ? (
                      <div key={sub.name} className="relative group/sub">
                        <div className="flex justify-between items-center px-4 py-2 cursor-pointer">
                          {sub.name} <ChevronRight size={14} />
                        </div>
                        <div className="absolute left-full top-0 hidden group-hover/sub:block w-40 bg-white text-black border shadow-md rounded">
                          {sub.submenu.map((s) => (
                            <Link
                              key={s.name}
                              href={s.href}
                              className="block px-4 py-1 hover:bg-gray-300"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-300"
                      >
                        {sub.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Extra Icons */}
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 py-4 hover:bg-primary-hover">
              <Download size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 p-2">
              <Tabs defaultValue="completed">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                </TabsList>
                <TabsContent value="completed" className="text-sm p-2">
                  <p className="text-green-600 font-medium">
                    ✔ Policy Converted BulkImport - Template is ready to
                    download
                  </p>
                  <a href="#" className="text-blue-500 underline">
                    Download
                  </a>
                  <p className="mt-2 text-xs">Started on 13-05-2025 12:05 PM</p>
                  <p className="text-xs">End on 13-05-2025 12:05 PM</p>
                </TabsContent>
                <TabsContent value="pending" className="text-sm p-2">
                  No pending tasks.
                </TabsContent>
              </Tabs>
            </DropdownMenuContent>
          </DropdownMenu>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative w-52 h-2 rounded-full bg-white bg-opacity-60 overflow-hidden cursor-pointer">
                  <div
                    className="h-2 bg-green-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                Daily Task Progress ({progress}%)
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          
        

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 py-2">
          {navItems.map((item, index) => (
            <div key={item.name} className="border-b border-white/20 px-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="block py-2 font-semibold text-white"
                >
                  {item.name}
                </Link>
              ) : (
                <details className="group">
                  <summary className="cursor-pointer py-2 font-semibold text-white">
                    {item.name}
                  </summary>
                  <div className="pl-4 text-white text-sm">
                    {item.submenu?.map((sub) =>
                      "submenu" in sub ? (
                        <details key={sub.name} className="group">
                          <summary className="cursor-pointer py-1 text-gray-300">
                            {sub.name}
                          </summary>
                          <div className="pl-4">
                            {sub.submenu.map((s) => (
                              <Link
                                key={s.name}
                                href={s.href}
                                className="block py-1 hover:bg-gray-700 rounded"
                              >
                                {s.name}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block py-1 hover:bg-gray-700 rounded"
                        >
                          {sub.name}
                        </Link>
                      )
                    )}
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

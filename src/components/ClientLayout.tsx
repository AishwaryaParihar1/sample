'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbar = pathname === '/' || pathname === '/reset';

  return (
    <>
      {!hideNavbar && <Navbar />}
      {!hideNavbar && <Breadcrumbs />}
      <main className="p-4">{children}</main>
    </>
  );
}

'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Split path into segments
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="text-sm text-gray-400 py-2 px-4">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:underline">Home</Link>
        </li>

        {segments.map((segment, index) => {
          const fullPath = '/' + segments.slice(0, index + 1).join('/');
          const isLast = index === segments.length - 1;

          return (
            <li key={fullPath} className="flex items-center space-x-2">
              <span className="mx-1">/</span>
              {isLast ? (
                <span className="text-primary font-semibold capitalize">{segment}</span>
              ) : (
                <Link href={fullPath} className="hover:underline capitalize text-gray-500">
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

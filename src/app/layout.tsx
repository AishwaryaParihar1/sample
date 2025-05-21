import '../globals.css'; // or '../styles/globals.css' if that's where it is
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sample',
  description: 'Login Page Clone using ShadCN UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

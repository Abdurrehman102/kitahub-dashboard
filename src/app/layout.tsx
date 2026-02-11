import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KITAHUB - Student Learning Platform',
  description: 'A comprehensive learning management system for students and professors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://cdn.tailwindcss.com" 
          strategy="beforeInteractive" 
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}
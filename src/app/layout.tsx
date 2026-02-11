import './globals.css';
import Script from 'next/script'; // Next.js ka Script component import karen
import { Inter } from 'next/font/google'; // Google Font optimization ke liye

// Font setup
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KITAHUB - Student Learning Platform',
  description: 'A comprehensive learning management system for students and professors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}
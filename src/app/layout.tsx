import './globals.css';

export const metadata = {
  title: 'KITAHUB - Student Learning Platform',
  description: 'A comprehensive learning management system for students and professors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}
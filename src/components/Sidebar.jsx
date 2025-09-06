'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({ userType = 'student' }) => {
  const pathname = usePathname();

  const studentMenuItems = [
    { name: 'Dashboard', href: `/dashboard?role=student`, icon: '🏠' },
    { name: 'Assignments', href: `/assignments?role=student`, icon: '📝' },
    { name: 'Discussions', href: `/discussions?role=student`, icon: '💬' },
    { name: 'Profile', href: `/profile?role=student`, icon: '👤' },
    { name: 'Bookmarks', href: `/bookmarks?role=student`, icon: '🔖' },
    { name: 'Settings', href: `/settings?role=student`, icon: '⚙️' },
    { name: 'Courses Overview', href: `/courses?role=student`, icon: '📚' },
  ];

  const professorMenuItems = [
    { name: 'Overview', href: `/overview?role=professor`, icon: '📊' },
    { name: 'Assignments', href: `/assignments?role=professor`, icon: '📝' },
    { name: 'Discussions', href: `/discussions?role=professor`, icon: '💬' },
    { name: 'Students', href: `/students?role=professor`, icon: '👥' },
    { name: 'Resources', href: `/resources?role=professor`, icon: '📁' },
    { name: 'Analytics', href: `/analytics?role=professor`, icon: '📈' },
  ];

  const menuItems = userType === 'professor' ? professorMenuItems : studentMenuItems;

  const isActive = (href) => {
    const basePath = href.split('?')[0];
    const currentBasePath = pathname.split('?')[0];
    return currentBasePath === basePath;
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 sidebar-gradient text-white z-50">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <div className="w-6 h-6 bg-blue-600 rounded transform rotate-12"></div>
          </div>
          <span className="text-xl font-bold">KITAHUB</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${
                active 
                  ? 'bg-white bg-opacity-20 border-r-4 border-white' 
                  : ''
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 left-4 right-4">
        <Link
          href="/"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-20"
        >
          <span className="text-lg">🚪</span>
          <span className="font-medium">Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
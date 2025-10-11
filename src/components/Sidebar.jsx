'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  IoGridOutline, 
  IoBookOutline, 
  IoChatbubbleOutline, 
  IoPersonOutline,
  IoBookmarkOutline,
  IoSettingsOutline,
  IoSchoolOutline,
  IoPeopleOutline,
  IoFolderOutline,
  IoBarChartOutline,
  IoExitOutline,
  IoMenuOutline,
  IoCloseOutline
} from 'react-icons/io5';

const Sidebar = ({ userType = 'student' }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const studentMenuItems = [
    { name: 'Dashboard', href: `/dashboard?role=student`, icon: <IoGridOutline /> },
    { name: 'Assignments', href: `/assignments?role=student`, icon: <IoBookOutline /> },
    { name: 'Discussions', href: `/discussions?role=student`, icon: <IoChatbubbleOutline /> },
    { name: 'Profile', href: `/profile?role=student`, icon: <IoPersonOutline /> },
    { name: 'Bookmarks', href: `/bookmarks?role=student`, icon: <IoBookmarkOutline /> },
    { name: 'Settings', href: `/settings?role=student`, icon: <IoSettingsOutline /> },
    { name: 'Courses Overview', href: `/courses?role=student`, icon: <IoSchoolOutline /> },
  ];

  const professorMenuItems = [
    { name: 'Overview', href: `/overview?role=professor`, icon: <IoGridOutline /> },
    { name: 'Assignments', href: `/assignments?role=professor`, icon: <IoBookOutline /> },
    { name: 'Discussions', href: `/discussions?role=professor`, icon: <IoChatbubbleOutline /> },
    { name: 'Students', href: `/students?role=professor`, icon: <IoPeopleOutline /> },
    { name: 'Resources', href: `/resources?role=professor`, icon: <IoFolderOutline /> },
    { name: 'Analytics', href: `/analytics?role=professor`, icon: <IoBarChartOutline /> },
  ];

  const menuItems = userType === 'professor' ? professorMenuItems : studentMenuItems;

  const isActive = (href) => {
    const basePath = href.split('?')[0];
    const currentBasePath = pathname.split('?')[0];
    return currentBasePath === basePath;
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Top Bar - Logo and Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 z-[10001] flex items-center justify-between px-4" style={{
        background: 'linear-gradient(90deg, #D620FF 0%, #0D6CFF 100%)'
      }}>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
            <span className="text-[#4A148C] font-bold text-2xl">K</span>
          </div>
          <span className="font-bold text-lg text-white">KITAHUB</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoCloseOutline className="text-2xl" /> : <IoMenuOutline className="text-2xl" />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full w-[238px] text-white transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(0deg, #D620FF 0%, #0D6CFF 100%)',
          zIndex: 9999
        }}
      >
        {/* Header */}
        <div className="py-8 px-6 border-b border-white border-opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
              <span className="text-[#4A148C] font-bold text-2xl">K</span>
            </div>
            <span className="font-bold text-lg">KITAHUB</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-6 pt-4 overflow-y-auto h-[calc(100%-120px)]">
          {menuItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors relative ${
                  active 
                    ? 'bg-white text-[#4A148C]' 
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
          
          {/* Log Out */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center px-4 py-3 mb-2 rounded-lg transition-colors text-white hover:bg-white hover:bg-opacity-20 relative"
          >
            <IoExitOutline className="mr-3 text-xl" />
            <span className="font-medium text-sm">Log Out</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
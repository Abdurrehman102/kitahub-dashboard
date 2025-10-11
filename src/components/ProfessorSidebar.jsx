'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  IoGridOutline, 
  IoBookOutline, 
  IoChatbubbleOutline, 
  IoPeopleOutline,
  IoFolderOutline,
  IoBarChartOutline,
  IoExitOutline,
  IoMenuOutline,
  IoCloseOutline
} from 'react-icons/io5';

const ProfessorSidebar = ({ userType = 'professor' }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const professorMenuItems = [
    { name: 'Overview', href: '/professor', icon: <IoGridOutline /> },
    { name: 'Assignments', href: '/assignments?role=professor', icon: <IoBookOutline /> },
    { name: 'Discussions', href: '/discussions?role=professor', icon: <IoChatbubbleOutline /> },
    { name: 'Students', href: '/students?role=professor', icon: <IoPeopleOutline /> },
    { name: 'Resources', href: '/resources?role=professor', icon: <IoFolderOutline /> },
    { name: 'Analytics', href: '/analytics?role=professor', icon: <IoBarChartOutline /> },
  ];

  const isActive = (href) => {
    if (href === '/professor') {
      return pathname === '/professor';
    }
    const basePath = href.split('?')[0];
    const currentBasePath = pathname.split('?')[0];
    return currentBasePath === basePath;
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-[10000] p-2 rounded-lg bg-gradient-to-r from-[#D620FF] to-[#0D6CFF] text-white lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <IoCloseOutline className="text-2xl" /> : <IoMenuOutline className="text-2xl" />}
      </button>

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
          {professorMenuItems.map((item) => {
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
                style={{ pointerEvents: 'auto' }}
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
            style={{ pointerEvents: 'auto' }}
          >
            <IoExitOutline className="mr-3 text-xl" />
            <span className="font-medium text-sm">Log Out</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default ProfessorSidebar;
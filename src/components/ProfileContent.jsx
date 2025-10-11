'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';

// Sidebar and Header components are defined within this single file to create a complete application.
const Sidebar = ({ userType, userName }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const navItems = [
    { id: 'dashboard', name: 'Dashboard', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
    )},
    { id: 'courses', name: 'Courses', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0L.293 6.912a1 1 0 000 1.996l4.212 2.106a1 1 0 00.788 0l4.212-2.106a1 1 0 00.788 0l4.212 2.106a1 1 0 00.788 0l4.212-2.106a1 1 0 000-1.996L10.394 2.08zM15 11l.293.293a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L15 9.586l-.293-.293A1 1 0 0014 9a1 1 0 00-1 1v4a1 1 0 102 0v-3.586z"></path><path d="M15 14a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"></path></svg>
    )},
    { id: 'assignments', name: 'Assignments', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"></path></svg>
    )},
    { id: 'discussions', name: 'Discussions', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-2 5a1 1 0 100 2h4a1 1 0 100-2h-4z" clipRule="evenodd"></path></svg>
    )},
    { id: 'settings', name: 'Settings', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"></path></svg>
    )},
    { id: 'profile', name: 'Profile', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
    )},
    { id: 'bookmarks', name: 'Bookmarks', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-5-5 5V4z"></path></svg>
    )},
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col items-center">
      <div className="flex-shrink-0 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Learnify</h1>
      </div>
      <div className="w-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center p-3 my-2 rounded-lg transition-colors duration-200 ${
              activeTab === item.id ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {item.icon}
            <span className="ml-3 font-semibold">{item.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-auto text-center">
        <p className="text-gray-500 text-xs">Logged in as</p>
        <p className="text-gray-700 font-bold">{userName}</p>
        <span className="text-gray-500 text-sm capitalize">{userType}</span>
      </div>
    </div>
  );
};

const Header = ({ userName, userType }) => {
  return (
    <header className="fixed top-0 left-64 w-[calc(100%-16rem)] h-20 bg-white shadow-md flex items-center justify-between px-8 z-10">
      <div className="text-gray-800 text-3xl font-bold">Profile</div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"></path></svg>
        </button>
        <span className="text-gray-700 font-semibold">{userName}</span>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
          {userName.charAt(0)}
        </div>
      </div>
    </header>
  );
};

const ProfileContent = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-text-primary">Profile</h1>
            
            <div className="neumorphic-card p-6 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 neumorphic-input">
                    <img src="https://placehold.co/128x128" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-text-primary">John Doe</h2>
                <p className="text-gray-500 mb-4">Software Engineering Student</p>
                
                <div className="w-full max-w-lg space-y-4">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-envelope text-gray-500"></i>
                        <span className="text-gray-700">john.doe@university.edu</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-phone-alt text-gray-500"></i>
                        <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-map-marker-alt text-gray-500"></i>
                        <span className="text-gray-700">Campus Hall, Room 201</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Tailwind CSS and Font Awesome for icons */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        
        /* Custom Neumorphic Styles */
        .neumorphic-card {
            background: #e0e5ec;
            border-radius: 12px;
            box-shadow: 8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff;
        }
        .neumorphic-input {
            background: #e0e5ec;
            border: none;
            box-shadow: inset 5px 5px 10px #c9ccd1, inset -5px -5px 10px #f7ffff;
        }
        .text-text-primary {
            color: #4a5568;
        }
      `}</style>
      
      <Sidebar userType="student" userName="John Doe" />
      <Header userName="John Doe" userType="Student" />
      <main className="mt-20 ml-64 p-8 w-[calc(100%-16rem)]">
        <ProfileContent />
      </main>
    </div>
  );
}

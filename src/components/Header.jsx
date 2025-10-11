'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = ({ userName = 'Maya Thompson', userType = 'Student', userRole = 'student' }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();

  const handleRoleSwitch = () => {
    if (userRole === 'student') {
      router.push('/professor');
    } else {
      router.push('/dashboard');
    }
  };

  const getButtonText = () => {
    return userRole === 'student' ? 'Switch to Professor View' : 'Switch to Student View';
  };

  const getUserInfo = () => {
    if (userRole === 'professor') {
      return {
        name: 'Prof. Jane Smith',
        type: 'Professor'
      };
    }
    return {
      name: userName,
      type: userType
    };
  };

  const currentUser = getUserInfo();

  return (
    <>
      {/* Desktop Only Header - Full Features */}
      <header className="hidden lg:block fixed top-0 right-0 left-60 h-16 bg-white border-b border-gray-200 z-40">
        <div className="flex items-center justify-between h-full px-6">
          {/* Right side */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Switch Role Button */}
            <button 
              onClick={handleRoleSwitch}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              {getButtonText()}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <div className="w-6 h-6 text-yellow-500 text-xl">🔔</div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">3</span>
                </div>
              </button>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <img 
                  src="profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold hidden">
                  {currentUser.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{currentUser.name}</div>
                <div className="text-xs text-gray-500">{currentUser.type}</div>
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Notifications dropdown - Desktop only */}
        {showNotifications && (
          <div className="absolute top-16 right-6 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {userRole === 'student' ? (
                <>
                  <div className="p-4 border-b border-gray-50 hover:bg-gray-50">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">📝</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">New assignment posted in Medieval History</p>
                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-b border-gray-50 hover:bg-gray-50">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-sm">✅</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">Assignment graded: Mathematics III</p>
                        <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 text-sm">⏰</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">Deadline reminder: Philosophy essay due tomorrow</p>
                        <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 border-b border-gray-50 hover:bg-gray-50">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">👥</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">5 new student submissions in Medieval History</p>
                        <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-b border-gray-50 hover:bg-gray-50">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-sm">📊</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">Weekly performance report available</p>
                        <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 text-sm">💬</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">New discussion started in Philosophy class</p>
                        <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="p-3 border-t border-gray-100">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all notifications</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
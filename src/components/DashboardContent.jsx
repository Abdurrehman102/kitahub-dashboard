import React, { useState, useEffect } from 'react';
import { Clock, Calendar, MessageCircle, Plus, Search, Filter, ChevronDown, Home, BookOpen, Users, User, Bookmark, Settings, BarChart3, LogOut } from 'lucide-react';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeNav, setActiveNav] = useState('Dashboard');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Character avatar URLs
  const characterAvatars = {
    'Maya Thompson': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya&backgroundColor=6366F1&clothesColor=3c4f5c&eyebrowType=default&eyeType=default&hairColor=000&mouthType=smile&skinColor=ffdbac'
  };

  const getCharacterAvatar = (name) => {
    return characterAvatars[name] || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=random`;
  };

  // Navigation items
  const navItems = [
    { name: 'Dashboard', icon: Home, active: true },
    { name: 'Assignments', icon: BookOpen, active: false },
    { name: 'Discussions', icon: MessageCircle, active: false },
    { name: 'Profile', icon: User, active: false },
    { name: 'Bookmarks', icon: Bookmark, active: false },
    { name: 'Settings', icon: Settings, active: false },
    { name: 'Courses Overview', icon: BarChart3, active: false }
  ];

  // Assignments data
  const assignments = [
    {
      course: 'Medieval History',
      title: 'Answer Writing',
      hours: 2,
      minutes: 56,
      seconds: 2,
      icon: '🏛️'
    },
    {
      course: 'Mathematics III',
      title: 'Multiple Choice Q...',
      hours: 2,
      minutes: 56,
      seconds: 2,
      icon: '📐'
    },
    {
      course: 'English Lesson',
      title: 'Question & Answer',
      hours: 2,
      minutes: 56,
      seconds: 2,
      icon: '📚'
    },
    {
      course: 'Mathematics III',
      title: 'Multiple Choice Q...',
      hours: 2,
      minutes: 56,
      seconds: 2,
      icon: '📐'
    }
  ];

  // Calendar data
  const calendarDays = [
    { day: 'S', date: '', inactive: true },
    { day: 'M', date: '', inactive: true },
    { day: 'T', date: '', inactive: true },
    { day: 'W', date: '', inactive: true },
    { day: 'T', date: '', inactive: true },
    { day: 'F', date: 1, inactive: false },
    { day: 'S', date: 2, inactive: false },
    { day: 'S', date: 3, inactive: false },
    { day: 'M', date: 4, inactive: false },
    { day: 'T', date: 5, inactive: false },
    { day: 'W', date: 6, inactive: false, active: true },
    { day: 'T', date: 7, inactive: false },
    { day: 'F', date: 8, inactive: false },
    { day: 'S', date: 9, inactive: false, active: true },
    { day: 'S', date: 10, inactive: false },
    { day: 'M', date: 11, inactive: false },
    { day: 'T', date: 12, inactive: false },
    { day: 'W', date: 13, inactive: false },
    { day: 'T', date: 14, inactive: false, active: true },
    { day: 'F', date: 15, inactive: false },
    { day: 'S', date: 16, inactive: false },
    { day: 'S', date: 17, inactive: false },
    { day: 'M', date: 18, inactive: false },
    { day: 'T', date: 19, inactive: false },
    { day: 'W', date: 20, inactive: false },
    { day: 'T', date: 21, inactive: false },
    { day: 'F', date: 22, inactive: false },
    { day: 'S', date: 23, inactive: false },
    { day: 'S', date: 24, inactive: false },
    { day: 'M', date: 25, inactive: false },
    { day: 'T', date: 26, inactive: false },
    { day: 'W', date: 27, inactive: false },
    { day: 'T', date: 28, inactive: false },
    { day: 'F', date: 29, inactive: false },
    { day: 'S', date: 30, inactive: false },
    { day: 'S', date: 31, inactive: false }
  ];

  const submissionData = [
    { title: 'Answer Writing', time: '02:56:02', status: 'Submitted' },
    { title: 'Answer Writing', time: '02:56:02', status: 'In Progress' },
    { title: 'Answer Writing', time: '00:00:00', status: 'Not Started' }
  ];

  const discussions = [
    { user: 'Maya Thompson', class: 'Class 7', time: '12 Minutes', message: 'You: List the most recent or active discussion...' },
    { user: 'Maya Thompson', class: 'Class 9', time: '12 Minutes', message: 'You: List the most recent or active discussion...' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-indigo-600 to-purple-700 flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded transform rotate-12"></div>
            </div>
            <span className="text-white text-xl font-bold">KITAHUB</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => setActiveNav(item.name)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      item.name === activeNav
                        ? 'bg-white bg-opacity-20 text-white'
                        : 'text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Log Out */}
        <div className="p-4">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-end">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-yellow-500 hover:bg-gray-100 rounded-lg">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </button>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={getCharacterAvatar('Maya Thompson')}
                  alt="Maya Thompson"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <div className="font-semibold text-gray-800">Maya Thompson</div>
                  <div className="text-sm text-gray-500">Student</div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome Header Card */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <p className="text-blue-100 mb-2 text-sm font-medium">September 4, 2024</p>
                <h1 className="text-3xl font-bold mb-2 flex items-center space-x-2">
                  <span>Welcome Back</span>
                  <span className="text-2xl">👋</span>
                </h1>
                <h2 className="text-2xl font-semibold">Maya Thompson</h2>
              </div>
              <div className="flex-shrink-0 relative">
                <div className="w-48 h-48 relative">
                  {/* Character illustration area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Main character */}
                      <div className="text-6xl mb-4">👨‍🎓</div>
                      {/* Floating elements */}
                      <div className="absolute -top-2 -left-8 w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center text-xl transform rotate-12 shadow-lg">
                        📚
                      </div>
                      <div className="absolute -top-4 right-4 w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-lg transform -rotate-12 shadow-lg">
                        🎒
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Assignments and Calendar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upcoming Assignments */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">📋</span>
                    <h3 className="text-lg font-semibold text-gray-800">Upcoming Assignments</h3>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-gray-500 border-b">
                        <th className="pb-3 font-medium">Course</th>
                        <th className="pb-3 font-medium">Title</th>
                        <th className="pb-3 font-medium">Deadline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assignments.map((assignment, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="py-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{assignment.icon}</span>
                              <span className="font-medium text-gray-800">{assignment.course}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="text-gray-600">{assignment.title}</span>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center space-x-1 text-sm font-mono">
                              <span className="bg-gray-100 px-2 py-1 rounded">{String(assignment.hours).padStart(2, '0')}</span>
                              <span>:</span>
                              <span className="bg-gray-100 px-2 py-1 rounded">{String(assignment.minutes).padStart(2, '0')}</span>
                              <span>:</span>
                              <span className="bg-gray-100 px-2 py-1 rounded">{String(assignment.seconds).padStart(2, '0')}</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1 flex space-x-4">
                              <span>Hours</span>
                              <span>Minutes</span>
                              <span>Seconds</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Upcoming Deadline Calendar */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-lg">📅</span>
                  <h3 className="text-lg font-semibold text-gray-800">Upcoming Deadline</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-600 mb-3">December 2024</h4>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    <div className="font-medium text-gray-400 py-2">S</div>
                    <div className="font-medium text-gray-400 py-2">M</div>
                    <div className="font-medium text-gray-400 py-2">T</div>
                    <div className="font-medium text-gray-400 py-2">W</div>
                    <div className="font-medium text-gray-400 py-2">T</div>
                    <div className="font-medium text-gray-400 py-2">F</div>
                    <div className="font-medium text-gray-400 py-2">S</div>
                    
                    {calendarDays.map((day, index) => (
                      <div 
                        key={index} 
                        className={`py-2 px-1 rounded cursor-pointer ${
                          day.active 
                            ? 'bg-blue-500 text-white font-medium' 
                            : day.inactive 
                              ? 'text-gray-300' 
                              : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {day.date || ''}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Discussion Board and Submission Status */}
            <div className="space-y-6">
              {/* Discussion Board */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-800">Discussion Board</h3>
                  </div>
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                    <Plus className="w-4 h-4" />
                    <span>New Discussion</span>
                  </button>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search Discussions..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 flex items-center space-x-1">
                      <span>Most Recent</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {discussions.map((discussion, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <img
                        src={getCharacterAvatar(discussion.user)}
                        alt={discussion.user}
                        className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-800 text-sm">{discussion.user}</h4>
                          <span className="text-xs text-gray-500">{discussion.class}</span>
                          <span className="text-xs text-gray-400">({discussion.time})</span>
                        </div>
                        <p className="text-sm text-gray-600">{discussion.message}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Single Submission Status Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-200 border-2">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">Submission Status</h4>
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 hover:bg-blue-600 transition-colors">
                    <span>Submission Status</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-end mb-4">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-600 pb-2 border-b border-gray-200">
                    <span>Assignments</span>
                    <span>Title</span>
                    <span>Due Date</span>
                    <span>Status</span>
                  </div>
                  {submissionData.map((item, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 text-sm items-center py-2">
                      <span className="text-gray-700">Assignments</span>
                      <span className="text-gray-700 font-medium">{item.title}</span>
                      <span className="text-gray-600 font-mono">{item.time}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${
                        item.status === 'Submitted' ? 'bg-green-100 text-green-800' :
                        item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                      }`}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
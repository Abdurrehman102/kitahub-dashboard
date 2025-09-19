import React, { useState, useEffect } from 'react';
import { Clock, Calendar, MessageCircle, Plus, Search, Filter, ChevronDown, ChevronLeft, ChevronRight, Home, BookOpen, Users, User, Bookmark, Settings, BarChart3, LogOut } from 'lucide-react';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [submissionDropdownOpen, setSubmissionDropdownOpen] = useState(false);
  const [leftArrowPressed, setLeftArrowPressed] = useState(false);
  const [rightArrowPressed, setRightArrowPressed] = useState(false);
  const [mostRecentDropdownOpen, setMostRecentDropdownOpen] = useState(false);
  
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
    { user: 'Maya Thompson', class: 'Class 7', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },
    { user: 'Maya Thompson', class: 'Class 9', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#ECF3FF' }
  ];

  const handleLeftArrowClick = () => {
    setLeftArrowPressed(true);
    setTimeout(() => setLeftArrowPressed(false), 150);
  };

  const handleRightArrowClick = () => {
    setRightArrowPressed(true);
    setTimeout(() => setRightArrowPressed(false), 150);
  };

  const toggleMostRecentDropdown = () => {
    setMostRecentDropdownOpen(!mostRecentDropdownOpen);
  };

  const closeMostRecentDropdown = () => {
    setMostRecentDropdownOpen(false);
  };

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
          <div className="bg-blue-500 to-indigo-600 rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
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
                  {/* 3D Character illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Main character */}
                      <div className="text-9xl mb-4">👨‍🎓</div>
                      {/* Floating elements */}
                      <div className="absolute -top-2 -left-2 w-14 h-14 bg-pink-400 rounded-lg flex items-center justify-center text-xl transform rotate-12 shadow-lg">
                        📚
                      </div>
                      <div className="absolute -top-6 right-0 w-14 h-14 bg-orange-400 rounded-lg flex items-center justify-center text-lg transform -rotate-12 shadow-lg">
                        🎒
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Row 1 - Upcoming Assignments & Discussion Board */}
            <div className="col-span-7 bg-white rounded-2xl shadow-sm p-6">
              {/* Upcoming Assignments Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="mr-2">📂</span>
                  <h3 className="font-bold text-lg text-gray-900">Upcoming Assignments</h3>
                </div>
                <button className="text-gray-500 hover:text-gray-700 font-semibold text-sm">
                  View all
                </button>
              </div>

              {/* Table Headers */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-gray-900 font-semibold">
                <div>Course</div>
                <div>Title</div>
                <div>Deadline</div>
              </div>

              {/* Assignment Rows */}
              <div className="space-y-4">
                {assignments.map((assignment, index) => (
                  <div 
                    key={index}
                    className="grid grid-cols-3 gap-4 items-center pb-4 border-b border-blue-50"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{assignment.icon}</span>
                      <span className="font-medium text-gray-800">{assignment.course}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">{assignment.title}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {/* Time Container */}
                      <div className="flex items-center space-x-1">
                        <div className="text-center">
                          <div className="bg-blue-50 rounded px-2 py-1 text-sm font-mono">
                            {String(assignment.hours).padStart(2, '0')}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">Hours</div>
                        </div>
                        <span>:</span>
                        <div className="text-center">
                          <div className="bg-blue-50 rounded px-2 py-1 text-sm font-mono">
                            {String(assignment.minutes).padStart(2, '0')}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">Minutes</div>
                        </div>
                        <span>:</span>
                        <div className="text-center">
                          <div className="bg-blue-50 rounded px-2 py-1 text-sm font-mono">
                            {String(assignment.seconds).padStart(2, '0')}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">Seconds</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-5 bg-white rounded-2xl shadow-sm" style={{
              width: '501px',
              height: '450px',
              borderRadius: '16px',
              border: '1px solid rgba(13, 108, 255, 0.08)',
              padding: '24px',
              background: '#FFFFFF'
            }}>
              {/* Discussion Board Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="mr-2" style={{ fontSize: '16px' }}>💬</span>
                  <h3 style={{
                    fontFamily: 'Montserrat',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '100%',
                    color: '#0B0B2C'
                  }}>Discussion Board</h3>
                </div>
                <button className="flex items-center space-x-2 text-sm hover:opacity-70" style={{
                  fontFamily: 'Montserrat',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '100%',
                  color: '#74759A'
                }}>
                  <Plus className="w-4 h-4" />
                  <span>New Discussion</span>
                </button>
              </div>

              {/* Search and Filter */}
              <div className="flex items-center mb-6" style={{ gap: '30px' }}>
                <div className="relative" style={{ width: '282px', height: '40px' }}>
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/3 w-5 h-5" style={{ color: '#3B82F6' }} />
                  <input
                    type="text"
                    placeholder="Search Discussions..."
                    className="w-full pl-5 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      height: '40px',
                      borderRadius: '4px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      fontFamily: 'Montserrat',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '100%',
                      color: '#74759A'
                    }}
                  />
                </div>
                <div className="relative">
                  <button 
                    onClick={toggleMostRecentDropdown}
                    className="flex items-center justify-between px-3 py-2 rounded hover:opacity-90"
                    style={{
                      width: '141px',
                      height: '40px',
                      borderRadius: '4px',
                      padding: '10px',
                      background: '#EFF4FF',
                      fontFamily: 'Montserrat',
                      fontWeight: '400',
                      fontSize: '14px',
                      color: '#74759A'
                    }}
                  >
                    <span>Most Recent</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mostRecentDropdownOpen ? 'rotate-180' : ''}`} style={{ color: '#74759A' }} />
                  </button>
                  
                  {/* Most Recent Dropdown Menu */}
                  {mostRecentDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-20">
                      <div className="py-1">
                        <button 
                          onClick={closeMostRecentDropdown}
                          className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                          style={{ color: '#74759A', fontFamily: 'Montserrat' }}
                        >
                          Most Recent
                        </button>
                        <button 
                          onClick={closeMostRecentDropdown}
                          className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                          style={{ color: '#74759A', fontFamily: 'Montserrat' }}
                        >
                          Most Active
                        </button>
                        <button 
                          onClick={closeMostRecentDropdown}
                          className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                          style={{ color: '#74759A', fontFamily: 'Montserrat' }}
                        >
                          Oldest First
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Discussion Items Container */}
              <div style={{ height: '250px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {discussions.map((discussion, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-4 rounded-lg"
                    style={{
                      width: '453px',
                      height: '117px',
                      borderRadius: '8px',
                      padding: '16px 10px',
                      background: discussion.bgColor,
                      boxShadow: '0px 4px 45px rgba(13, 108, 255, 0.08)',
                      border: discussion.bgColor === '#FFFFFF' ? '1px solid rgba(13, 108, 255, 0.08)' : 'none'
                    }}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium"
                        style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          border: '2px solid white',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}
                      >
                        👩‍🎓
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 style={{
                          fontFamily: 'Montserrat',
                          fontWeight: '600',
                          fontSize: '16px',
                          lineHeight: '100%',
                          color: '#0B0B2C'
                        }}>{discussion.user}</h4>
                        <span style={{
                          fontFamily: 'Montserrat',
                          fontWeight: '500',
                          fontSize: '12px',
                          lineHeight: '100%',
                          color: '#5C5D73',
                          backgroundColor: 'white',
                        }}>{discussion.class}</span>
                        <span style={{
                          fontFamily: 'Montserrat',
                          fontWeight: '500',
                          fontSize: '12px',
                          lineHeight: '100%',
                          color: '#5C5D73',
                        }}>({discussion.time})</span>
                      </div>
                      <p style={{
                        fontFamily: 'Montserrat',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '100%',
                        color: '#5C5D73',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>{discussion.message}</p>
                    </div>
                    <button className="flex-shrink-0" style={{ color: '#ACACAC' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Upcoming Deadline & Submission Status */}
            <div className="col-span-4 bg-white rounded-2xl shadow-sm p-6">
              {/* Upcoming Deadline Header */}
              <div className="flex items-center mb-6">
                <span className="mr-2">📅</span>
                <h3 className="font-bold text-lg text-gray-900">Upcoming Deadline</h3>
              </div>

              {/* Calendar */}
              <div>
                {/* Calendar Header with Navigation Arrows */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-gray-600 font-medium">December 2024</h4>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={handleLeftArrowClick}
                      className={`rounded-full p-1 transition-colors ${
                        leftArrowPressed ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleRightArrowClick}
                      className={`rounded-full p-1 transition-colors ${
                        rightArrowPressed ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Days of Week */}
                <div className="grid grid-cols-7 gap-1 text-center mb-4 text-gray-500 text-sm">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                    <div key={index} className="font-medium">{day}</div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {calendarDays.map((day, index) => (
                    <div 
                      key={index}
                      className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
                        day.active 
                          ? 'bg-blue-50 text-blue-600 font-semibold' 
                          : day.inactive 
                            ? 'text-gray-300' 
                            : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {day.date || ''}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-8 bg-white rounded-2xl shadow-sm border border-blue-200 p-6">
              {/* Header Row - Aligned Submission Status and View All */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative">
                  <button 
                    onClick={() => setSubmissionDropdownOpen(!submissionDropdownOpen)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-blue-600"
                  >
                    <span>Submission Status</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${submissionDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {submissionDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <div className="py-1">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Submissions</button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submitted</button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">In Progress</button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Not Started</button>
                      </div>
                    </div>
                  )}
                </div>
                <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">View All</button>
              </div>

              {/* Table Headers - Fixed grid with proper spacing */}
              <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-900 pb-4 mb-4 border-b border-gray-200">
                <span className="col-span-2">Assignments</span>
                <span className="col-span-3">Title</span>
                <span className="col-span-4">Due Date</span>
                <span className="col-span-3">Status</span>
              </div>

              {/* Submission Rows Container */}
              <div className="space-y-4">
                {submissionData.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-3 shadow-sm border border-blue-50"
                    style={{
                      borderRadius: '8px',
                      padding: '10px',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0px 4px 45px 0px rgba(13, 108, 255, 0.08)'
                    }}
                  >
                    <div className="grid grid-cols-12 gap-4 text-sm items-center">
                      <span className="col-span-2 text-gray-700">Assignments</span>
                      <span className="col-span-3 text-gray-700 font-medium">{item.title}</span>
                      
                      {/* Time Display - Centered in column */}
                      <div className="col-span-4 flex items-center justify-start space-x-1">
                        <div className="text-center">
                          <div className="bg-blue-50 rounded px-2 py-1 text-xs font-mono font-medium">
                            {item.time.split(':')[0]}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">Hours</div>
                        </div>
                        <span className="text-gray-600 text-xs">:</span>
                        <div className="text-center">
                          <div className="bg-blue-50 rounded px-2 py-1 text-xs font-mono font-medium">
                            {item.time.split(':')[1]}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">Minutes</div>
                        </div>
                        <span className="text-gray-600 text-xs">:</span>
                        <div className="text-center">
                          <div className="bg-blue-50 rounded px-2 py-1 text-xs font-mono font-medium">
                            {item.time.split(':')[2]}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">Seconds</div>
                        </div>
                      </div>

                      {/* Status - Takes remaining space */}
                      <span className={`col-span-3 text-sm font-medium ${
                        item.status === 'Submitted' ? 'text-green-600' :
                        item.status === 'In Progress' ? 'text-orange-600' : 'text-gray-600'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
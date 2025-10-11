import React, { useState, useEffect } from 'react';
import { Clock, Calendar, MessageCircle, Plus, Search, Filter, ChevronDown, ChevronLeft, ChevronRight, Home, BookOpen, Users, User, Bookmark, Settings, BarChart3, LogOut, X, Edit2, Trash2, Menu } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [submissionDropdownOpen, setSubmissionDropdownOpen] = useState(false);
  const [submissionFilter, setSubmissionFilter] = useState('All Submissions');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [mostRecentDropdownOpen, setMostRecentDropdownOpen] = useState(false);
  const [discussionFilter, setDiscussionFilter] = useState('Most Recent');
  const [newDiscussionOpen, setNewDiscussionOpen] = useState(false);
  const [discussionMenuOpen, setDiscussionMenuOpen] = useState(null);
  const [newDiscussionData, setNewDiscussionData] = useState({ title: '', message: '' });
  const [hoveredDiscussion, setHoveredDiscussion] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Assignments', icon: BookOpen },
    { name: 'Discussions', icon: MessageCircle },
    { name: 'Profile', icon: User },
    { name: 'Bookmarks', icon: Bookmark },
    { name: 'Settings', icon: Settings },
    { name: 'Courses Overview', icon: BarChart3 }
  ];

    const assignments = [
    { course: 'Medieval History', title: 'Answer Writing', hours: 2, minutes: 56, seconds: 2, icon: '🏰', color: '#FFB6C1' },
    { course: 'Mathematics III', title: 'Multiple Choice Q...', hours: 2, minutes: 56, seconds: 2, icon: '➕', color: '#DDA0DD' },
    { course: 'English Lesson', title: 'Question & Answer', hours: 2, minutes: 56, seconds: 2, icon: '📗', color: '#90EE90' },
    { course: 'Mathematics III', title: 'Multiple Choice Q...', hours: 2, minutes: 56, seconds: 2, icon: '➕', color: '#DDA0DD' },
    { course: 'Physics Lab', title: 'Lab Report', hours: 1, minutes: 30, seconds: 0, icon: '⚗️', color: '#87CEEB' },
    { course: 'Chemistry', title: 'Assignment 1', hours: 3, minutes: 0, seconds: 0, icon: '🧪', color: '#FFD700' },
  ];

  const [submissionData, setSubmissionData] = useState([
    { title: 'Answer Writing', time: '02:56:02', status: 'Submitted' },
    { title: 'Answer Writing', time: '02:56:02', status: 'In Progress' },
    { title: 'Answer Writing', time: '00:00:00', status: 'Not Started' },
    { title: 'Lab Report', time: '01:00:00', status: 'In Progress' },
    { title: 'Multiple Choice', time: '01:30:00', status: 'Submitted' },
  ]);

  const [discussions, setDiscussions] = useState([
    { id: 1, user: 'Maya Thompson', class: 'Class 7', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },
    { id: 2, user: 'Maya Thompson', class: 'Class 9', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },
        { id: 3, user: 'Maya Thompson', class: 'Class 7', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },

  ]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: '', date: '', inactive: true });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: '', date: i, inactive: false, active: [6, 9, 14].includes(i) });
    }
    return days;
  };

  const calendarDays = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const filteredSubmissions = submissionFilter === 'All Submissions' 
    ? submissionData 
    : submissionData.filter(item => item.status === submissionFilter);

  const handleNewDiscussion = () => {
    if (newDiscussionData.title && newDiscussionData.message) {
      const newDisc = {
        id: discussions.length + 1,
        user: 'Maya Thompson',
        class: 'Class 7',
        time: 'Just now',
        message: newDiscussionData.message,
        bgColor: '#FFFFFF'
      };
      setDiscussions([newDisc, ...discussions]);
      setNewDiscussionData({ title: '', message: '' });
      setNewDiscussionOpen(false);
    }
  };

  const deleteDiscussion = (id) => {
    setDiscussions(discussions.filter(d => d.id !== id));
    setDiscussionMenuOpen(null);
  };

  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-purple-600 text-white flex flex-col transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header */}
        <header className="bg-white px-4 lg:px-6 py-2 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2 lg:space-x-4 ml-auto">
              <button className="hidden md:block bg-blue-500 text-white px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium hover:bg-blue-600">
                Switch to Professor View
              </button>
              <div className="relative">
                <button className="p-2 text-yellow-500 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </button>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-3">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maya&backgroundColor=6366F1"
                  alt="Maya Thompson"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white shadow-sm"
                />
                <div className="hidden md:block">
                  <div className="font-semibold text-gray-800 text-sm">Maya Thompson</div>
                  <div className="text-xs text-gray-500">Student</div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 hidden md:block">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {/* Welcome Header Card */}
         <div 
            className="rounded-2xl p-6 lg:p-8 mb-6 text-white relative overflow-hidden flex flex-col lg:flex-row justify-between items-center"
            style={{
              background: '#2065FF',
              boxShadow: '0px 4px 45px 0px #0D6CFF14',
            }}
          >
            <div className="flex-1 z-10 text-center lg:text-left mb-4 lg:mb-0 w-full lg:w-auto">
              <p className="text-white text-opacity-90 mb-4 lg:mb-20 text-sm font-medium">September 4, 2024</p>
              <h1 className="text-xl lg:text-2xl font-normal mb-2">
                <span>Welcome Back 👋</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold">Maya Thompson</h2>
            </div>
            <img 
              src="/Student.png" 
              alt="Professor" 
              className="w-40 h-40 lg:w-56 lg:h-56 object-contain"
            />
          </div>

          {/* Dashboard Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={{ maxWidth: '1176px' }}>
            {/* Upcoming Assignments */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm p-4 lg:p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">📂</span>
                  <h3 className="font-bold text-base lg:text-lg text-gray-900">Upcoming Assignments</h3>
                </div>
                <button className="text-gray-500 hover:text-gray-700 font-semibold text-xs lg:text-sm">View all</button>
              </div>

              <div className="hidden md:grid grid-cols-3 gap-8 mb-4 text-gray-900 font-bold text-sm">
                <div>Course</div>
                <div>Title</div>
                <div>Deadline</div>
              </div>

              <div className="space-y-4 overflow-y-auto" style={{ maxHeight: '320px' }}>
                {assignments.map((assignment, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start md:items-center pb-4 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-8 h-8 rounded flex items-center justify-center text-lg"
                        style={{ backgroundColor: assignment.color }}
                      >
                        {assignment.icon}
                      </div>
                      <span className="text-gray-800 font-normal text-sm">{assignment.course}</span>
                    </div>
                    <div>
                      <span className="text-xs md:hidden text-gray-500">Title: </span>
                      <span className="text-gray-800 font-normal text-sm">{assignment.title}</span>
                    </div>
                    <div className="flex items-center justify-start md:justify-center space-x-1">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1 font-normal">Hours</div>
                        <div className="bg-blue-50 rounded px-2 py-1 text-sm font-mono font-bold">
                          {String(assignment.hours).padStart(2, '0')}
                        </div>
                      </div>
                      <span className="font-bold self-end pb-1">:</span>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1 font-normal">Minutes</div>
                        <div className="bg-blue-50 rounded px-2 py-1 text-sm font-mono font-bold">
                          {String(assignment.minutes).padStart(2, '0')}
                        </div>
                      </div>
                      <span className="font-bold self-end pb-1">:</span>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1 font-normal">Seconds</div>
                        <div className="bg-blue-50 rounded px-2 py-1 text-sm font-mono font-bold">
                          {String(assignment.seconds).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discussion Board */}
            <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm p-4 lg:p-6" style={{ border: '1px solid rgba(13, 108, 255, 0.08)' }}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">💬</span>
                  <h3 className="font-bold text-base lg:text-lg text-gray-900">Discussion Board</h3>
                </div>
                <button 
                  onClick={() => setNewDiscussionOpen(true)}
                  className="flex items-center space-x-2 text-xs lg:text-sm text-gray-500 hover:text-gray-700"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline font-semibold">New Discussion</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center mb-6 gap-3">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <input
                    type="text"
                    placeholder="Search Discussions..."
                    className="w-full pl-5 pr-10 py-2 border rounded bg-gray-50 text-sm"
                  />
                </div>
                <div className="relative">
                  <button 
                    onClick={() => setMostRecentDropdownOpen(!mostRecentDropdownOpen)}
                    className="flex items-center justify-between px-3 py-2 rounded bg-blue-50 text-sm text-gray-600 w-full sm:w-36"
                  >
                    <span>{discussionFilter}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {mostRecentDropdownOpen && (
                    <div className="absolute top-full right-0 mt-1 w-full bg-white border rounded shadow-lg z-20">
                      {['Most Recent', 'Most Active', 'Oldest First'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => { setDiscussionFilter(opt); setMostRecentDropdownOpen(false); }}
                          className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 overflow-y-auto max-h-80">
                {discussions.map((discussion) => (
                  <div 
                    key={discussion.id}
                    onMouseEnter={() => setHoveredDiscussion(discussion.id)}
                    onMouseLeave={() => setHoveredDiscussion(null)}
                    className="flex items-start p-4 rounded-lg transition-all cursor-pointer"
                    style={{
                      background: hoveredDiscussion === discussion.id ? '#ECF3FF' : '#FFFFFF',
                      boxShadow: hoveredDiscussion === discussion.id ? '0px 4px 45px rgba(13, 108, 255, 0.08)' : 'none',
                      border: '1px solid rgba(13, 108, 255, 0.08)'
                    }}
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-2xl mr-3 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                      👩‍🎓
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm lg:text-base">{discussion.user}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        <span 
                          className="px-2 py-1 rounded"
                          style={{ 
                            background: hoveredDiscussion === discussion.id ? '#ECF3FF' : '#ECF3FF',
                            border: hoveredDiscussion === discussion.id ? '1px solid #D0D0D0' : 'none'
                          }}
                        >
                          {discussion.class}
                        </span>
                        <span 
                          className="ml-2"
                          style={{
                            color: hoveredDiscussion === discussion.id ? '#757575' : '#999999'
                          }}
                        >
                          ({discussion.time})
                        </span>
                      </div>
                      <p className="text-xs lg:text-sm text-gray-600 mt-2 break-words">{discussion.message}</p>
                    </div>
                    <div className="relative flex-shrink-0">
                      <button 
                        onClick={() => setDiscussionMenuOpen(discussionMenuOpen === discussion.id ? null : discussion.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                      {discussionMenuOpen === discussion.id && (
                        <div className="absolute right-0 mt-1 w-32 bg-white border rounded shadow-lg z-20">
                          <button className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center">
                            <Edit2 className="w-3 h-3 mr-2" /> Edit
                          </button>
                          <button 
                            onClick={() => deleteDiscussion(discussion.id)}
                            className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center text-red-600"
                          >
                            <Trash2 className="w-3 h-3 mr-2" /> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* Upcoming Deadline Calendar */}
            <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm p-4 lg:p-6" style={{ width: '383px', height: '397px' }}>
              <div className="flex items-center mb-6">
                <span className="mr-2 text-xl">📅</span>
                <h3 className="font-bold text-base lg:text-lg text-gray-900">Upcoming Deadline</h3>
              </div>

              <div className="flex items-center justify-between mb-4">
                <h4 className="text-gray-600 font-medium text-sm">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h4>
                <div className="flex items-center space-x-2">
                  <button onClick={previousMonth} className="rounded-full p-1 bg-gray-100 hover:bg-blue-500 hover:text-white">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextMonth} className="rounded-full p-1 bg-gray-100 hover:bg-blue-500 hover:text-white">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-4 text-gray-500 text-sm">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <div key={index} className="font-medium">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {calendarDays.map((day, index) => (
                  <div 
                    key={index}
                    className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
                      day.active ? 'bg-blue-50 text-blue-600 font-semibold' : day.inactive ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {day.date || ''}
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Status */}
            <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm p-4 lg:p-6 flex flex-col" style={{ height: '397px', width: '780px' }}>
              <div className="flex items-center justify-between mb-6 flex-shrink-0">
                <div className="relative">
                  <button 
                    onClick={() => setSubmissionDropdownOpen(!submissionDropdownOpen)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-blue-600"
                  >
                    <span>{submissionFilter}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {submissionDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                      {['All Submissions', 'Submitted', 'In Progress', 'Not Started'].map((opt) => (
                        <button 
                          key={opt}
                          onClick={() => { setSubmissionFilter(opt); setSubmissionDropdownOpen(false); }}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button className="text-gray-500 hover:text-gray-700 text-xs lg:text-sm font-medium">View All</button>
              </div>

              <div className="hidden md:grid grid-cols-4 gap-4 text-sm font-bold text-gray-900 pb-4 mb-4 border-b flex-shrink-0">
                <span>Assignments</span>
                <span>Title</span>
                <span>Due Date</span>
                <span className="text-right">Status</span>
              </div>

              <div className="space-y-4 overflow-y-auto flex-1">
                {filteredSubmissions.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-blue-50">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm items-center">
                      <span className="text-gray-700 font-normal"><span className="md:hidden font-semibold">Type: </span>Assignments</span>
                      <span className="text-gray-900 font-normal"><span className="md:hidden text-gray-700 font-normal">Title: </span>{item.title}</span>
                      <div className="flex items-center justify-start space-x-1">
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1 font-normal">Hours</div>
                          <div className="bg-blue-50 rounded px-2 py-1 text-xs font-mono font-bold">
                            {item.time.split(':')[0]}
                          </div>
                        </div>
                        <span className="font-bold self-end pb-1">:</span>
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1 font-normal">Minutes</div>
                          <div className="bg-blue-50 rounded px-2 py-1 text-xs font-mono font-bold">
                            {item.time.split(':')[1]}
                          </div>
                        </div>
                        <span className="font-bold self-end pb-1">:</span>
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1 font-normal">Seconds</div>
                          <div className="bg-blue-50 rounded px-2 py-1 text-xs font-mono font-bold">
                            {item.time.split(':')[2]}
                          </div>
                        </div>
                      </div>
                      <span className={`text-sm font-semibold text-left md:text-right ${
                        item.status === 'Submitted' ? 'text-green-600' :
                        item.status === 'In Progress' ? 'text-orange-600' : 'text-gray-600'
                      }`}>
                        <span className="md:hidden text-gray-700 font-normal">Status: </span>{item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* New Discussion Modal */}
      {newDiscussionOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">New Discussion</h3>
              <button onClick={() => setNewDiscussionOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Title"
              value={newDiscussionData.title}
              onChange={(e) => setNewDiscussionData({...newDiscussionData, title: e.target.value})}
              className="w-full border rounded px-3 py-2 mb-3"
            />
            <textarea
              placeholder="Message"
              value={newDiscussionData.message}
              onChange={(e) => setNewDiscussionData({...newDiscussionData, message: e.target.value})}
              className="w-full border rounded px-3 py-2 mb-4 h-32"
            />
            <button 
              onClick={handleNewDiscussion}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Post Discussion
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
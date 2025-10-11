import React, { useState } from 'react';
import { ChevronDown, Plus, Search, MessageSquare, Download, Mail, Phone, ArrowLeft, X, Upload, Edit2, Trash2, Menu, Home, BookOpen, Users, User, Bookmark, Settings, BarChart3, LogOut } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

const StudentCourseDashboard = () => {
  const [selectedSort, setSelectedSort] = useState('Most Recent');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeResourceTab, setActiveResourceTab] = useState('Lecture Slides');
  const [createResourceOpen, setCreateResourceOpen] = useState(false);
  const [hoveredDiscussion, setHoveredDiscussion] = useState(null);
  const [discussionMenuOpen, setDiscussionMenuOpen] = useState(null);
  const [mostRecentDropdownOpen, setMostRecentDropdownOpen] = useState(false);
  const [discussionFilter, setDiscussionFilter] = useState('Most Recent');
  const [newDiscussionOpen, setNewDiscussionOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Assignments', icon: BookOpen },
    { name: 'Discussions', icon: MessageSquare },
    { name: 'Profile', icon: User },
    { name: 'Bookmarks', icon: Bookmark },
    { name: 'Settings', icon: Settings },
    { name: 'Courses Overview', icon: BarChart3 }
  ];

  const [discussions, setDiscussions] = useState([
    { id: 1, user: 'Maya Thompson', class: 'Class 7', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },
    { id: 2, user: 'Maya Thompson', class: 'Class 9', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },
    { id: 3, user: 'Sarah Johnson', class: 'Class 8', time: '25 Minutes', message: 'Can someone explain the concept of existentialism in simpler terms?', bgColor: '#FFFFFF' },
    { id: 4, user: 'Michael Chen', class: 'Class 7', time: '1 Hour', message: 'Does anyone have notes from last week\'s lecture on the Crusades?', bgColor: '#FFFFFF' },
    { id: 5, user: 'Emily Rodriguez', class: 'Class 9', time: '2 Hours', message: 'I found this great article about Kant\'s categorical imperative. Sharing the link!', bgColor: '#FFFFFF' },
    { id: 6, user: 'James Wilson', class: 'Class 8', time: '3 Hours', message: 'What are your thoughts on the upcoming midterm exam?', bgColor: '#FFFFFF' }
  ]);

  const deleteDiscussion = (id) => {
    setDiscussions(discussions.filter(d => d.id !== id));
    setDiscussionMenuOpen(null);
  };

  const assignments = {
    upcoming: [
      { date: 'August 25, 2024', title: 'Mathematics III', status: 'Submitted', avatars: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=3'] },
      { date: 'September 1, 2024', title: 'Medieval History', status: 'Submitted', avatars: ['https://i.pravatar.cc/150?img=4', 'https://i.pravatar.cc/150?img=5', 'https://i.pravatar.cc/150?img=6'] },
      { date: 'September 10, 2024', title: 'Philosophy Essay', status: 'Submitted', avatars: ['https://i.pravatar.cc/150?img=7', 'https://i.pravatar.cc/150?img=8', 'https://i.pravatar.cc/150?img=9'] },
    ],
    past: [
      { date: 'July 15, 2024', title: 'Answer Writing', grade: '85%', feedback: 'Great job on the analysis! However, make sure to cite all sources correctly.', avatars: ['https://i.pravatar.cc/150?img=10', 'https://i.pravatar.cc/150?img=11', 'https://i.pravatar.cc/150?img=12'] },
      { date: 'August 1, 2024', title: 'Question & Answer', grade: '90%', feedback: 'Excellent research and presentation. Keep up the good work!', avatars: ['https://i.pravatar.cc/150?img=13', 'https://i.pravatar.cc/150?img=14', 'https://i.pravatar.cc/150?img=15'] },
    ],
    links: [
      { date: 'September 20, 2024', title: 'Medieval History Assignment' },
      { date: 'September 20, 2024', title: 'Philosophy Assignment' },
      { date: 'September 20, 2024', title: 'Mathematics Assignment' },
      { date: 'September 20, 2024', title: 'Literature Assignment' },
    ],
  };

  const resources = [
    { week: 1, date: 'Aug 7, 2024', title: 'Introduction to Medieval History', type: 'Lecture Slides' },
    { week: 2, date: 'Aug 14, 2024', title: 'The Early Middle Ages', type: 'Lecture Slides' },
    { week: 3, date: 'Aug 21, 2024', title: 'Feudalism and Manor System', type: 'Lecture Slides' },
    { week: 4, date: 'Aug 28, 2024', title: 'The Crusades', type: 'Lecture Slides' },
    { week: 1, date: 'Aug 7, 2024', title: 'Introduction Notes', type: 'Notes' },
    { week: 2, date: 'Aug 14, 2024', title: 'Medieval Notes', type: 'Notes' },
    { week: 1, date: 'Aug 7, 2024', title: 'Reading Materials', type: 'Materials' },
    { week: 2, date: 'Aug 14, 2024', title: 'Study Guide', type: 'Materials' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-purple-600 text-white flex flex-col transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">
              K
            </div>
            <span className="text-xl font-bold">KITAHUB</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-white hover:bg-opacity-10 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 px-3 py-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveNav(item.name);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeNav === item.name
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-white border-opacity-20">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-white hover:bg-opacity-10">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white px-4 py-3 shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                K
              </div>
              <span className="font-bold text-gray-800">KITAHUB</span>
            </div>
            <div className="w-10"></div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Main Dashboard Button */}
          <div className="p-4 lg:p-16 lg:pb-0 xl:pb-5 bg-gray-50">
            <button 
              className="flex items-center px-4 lg:px-8 py-2 text-white font-medium rounded text-xs lg:text-sm mb-4 shadow-lg space-x-2 hover:shadow-xl transition-shadow w-full lg:w-auto justify-center lg:justify-start"
              style={{
                background: 'linear-gradient(78.14deg, #D620FF 9.33%, #0D6CFF 96.96%)',
              }}
            >
              <ArrowLeft size={18} strokeWidth={2} />
              <span>Main Student Dashboard</span>
            </button>
          </div>

          {/* All Main Containers */}
          <div className="p-4 lg:p-8 pt-0 space-y-6">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Class Container */}
              <div className="lg:col-span-7 bg-blue-600 rounded-2xl shadow-md overflow-hidden text-white border border-blue-600 relative min-h-[240px] lg:min-h-[311px]">
                <div className="absolute top-6 lg:top-12 left-4 lg:left-8">
                  <p className="text-white-200 mb-2 font-light text-xs lg:text-sm">September 4, 2024</p>
                </div>
                <div className="absolute bottom-6 lg:bottom-12 left-4 lg:left-10">
                  <h1 className="text-sm lg:text-[18px] font-semibold mb-2 tracking-wide">Class Code: 44553</h1>
                  <h2 className="text-lg lg:text-[24px] font-bold">Philosophy of The Person</h2>
                </div>
                <div className="absolute bottom-0 right-0">
                  <img 
                    src="/assignment.png" 
                    alt="Student" 
                    className="w-[200px] h-[200px] lg:w-[355px] lg:h-[359px] object-contain"
                  />
                </div>
              </div>

              {/* Instructor Information Container */}
              <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm p-4 lg:p-6 border border-gray-200 min-h-[311px]">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs lg:text-sm font-bold text-gray-800">i</span>
                  </div>
                  <h3 className="text-base lg:text-xl font-bold text-gray-900">Instructor's Information</h3>
                </div>
                <div className="space-y-0 overflow-y-auto pr-2" style={{ maxHeight: '240px' }}>
                  {[
                    { name: 'Dr. Jane Doe', img: '/ins_1.jpg', email: 'jane.doe@university.edu' },
                    { name: 'Prof. Emily Davis', img: '/ins_2.jpg', email: 'emily.davis@university.edu' },
                    { name: 'Prof. Jane Smith', img: '/ins_3.jpg', email: 'jane.smith@university.edu' },
                    { name: 'Dr. John Doe', img: '/ins_4.jpg', email: 'john.doe@university.edu' }
                  ].map((instructor, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                      <img 
                        src={instructor.img}
                        alt={instructor.name}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-xs lg:text-sm">{instructor.name}</h4>
                        <p className="text-[8px] lg:text-[9.5px] text-gray-500">Instructor of USA Government University</p>
                      </div>
                      <div className="flex flex-col gap-1 flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-gray-700">
                          <Phone size={12} className="flex-shrink-0 hidden sm:block" />
                          <span className="text-[10px] lg:text-xs whitespace-nowrap">+1 (123) 456-7890</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-700">
                          <Mail size={12} className="flex-shrink-0 hidden sm:block" />
                          <span className="text-[10px] lg:text-xs whitespace-nowrap truncate max-w-[120px]">{instructor.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
              {/* Discussion Board */}
              <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm p-4 lg:p-6" style={{ border: '1px solid rgba(13, 108, 255, 0.08)' }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="mr-2 text-xl">💬</span>
                    <h3 className="font-bold text-sm lg:text-lg text-gray-900">Discussion Board</h3>
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
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />
                    <input
                      type="text"
                      placeholder="Search Discussions..."
                      className="w-full pl-4 pr-10 py-2 border rounded bg-gray-50 text-xs lg:text-sm"
                    />
                  </div>
                  <div className="relative">
                    <button 
                      onClick={() => setMostRecentDropdownOpen(!mostRecentDropdownOpen)}
                      className="flex items-center justify-between px-3 py-2 rounded bg-blue-50 text-xs lg:text-sm text-gray-600 w-full sm:w-36"
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

                <div className="custom-scrollbar space-y-0 overflow-y-auto overflow-x-hidden pr-2" style={{ maxHeight: '320px' }}>
                  {discussions.map((discussion, index) => {
                    const avatarImages = ['1.jpg', '2.jpg', '3.jpg'];
                    const avatarSrc = `/${avatarImages[index % avatarImages.length]}`;
                    
                    return (
                      <div 
                        key={discussion.id}
                        onMouseEnter={() => setHoveredDiscussion(discussion.id)}
                        onMouseLeave={() => setHoveredDiscussion(null)}
                        className="flex items-start py-3 px-2 lg:px-3 -mx-2 lg:-mx-3 rounded-lg transition-all cursor-pointer"
                        style={{
                          background: hoveredDiscussion === discussion.id ? '#ECF3FF' : '#FFFFFF',
                        }}
                      >
                        <div className="flex-shrink-0 mr-2 lg:mr-3">
                          <img 
                            src={avatarSrc}
                            alt={discussion.user}
                            className="w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-gray-900 text-xs lg:text-base">{discussion.user}</span>
                            <span className="text-gray-400 text-[10px] lg:text-[11px] font-light">{discussion.time}</span>
                          </div>
                          <p className="text-[11px] lg:text-[13px] text-gray-600 break-words">{discussion.message}</p>
                        </div>

                        <div className="flex items-center space-x-1 lg:space-x-2 flex-shrink-0 ml-2 lg:ml-3">
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-600 rounded-full"></div>
                          
                          <div className="relative">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setDiscussionMenuOpen(discussionMenuOpen === discussion.id ? null : discussion.id);
                              }}
                              className="text-gray-400 hover:text-gray-600 p-1"
                            >
                              <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            </button>
                            {discussionMenuOpen === discussion.id && (
                              <div className="absolute right-0 mt-1 w-28 lg:w-32 bg-white border rounded shadow-lg z-20">
                                <button className="block w-full text-left px-3 py-2 text-xs lg:text-sm hover:bg-gray-50 flex items-center">
                                  <Edit2 className="w-3 h-3 mr-2" /> Edit
                                </button>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteDiscussion(discussion.id);
                                  }}
                                  className="block w-full text-left px-3 py-2 text-xs lg:text-sm hover:bg-gray-50 flex items-center text-red-600"
                                >
                                  <Trash2 className="w-3 h-3 mr-2" /> Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Announcements */}
              <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm p-4 lg:p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 flex items-center space-x-2">
                    <span className="text-xl lg:text-2xl">📢</span>
                    <span>Announcements</span>
                  </h3>
                  <button className="text-gray-500 hover:text-gray-700 text-xs lg:text-sm font-medium">View All</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Schedule Changes */}
                  <div className="rounded-xl overflow-hidden bg-white border border-gray-300">
                    <div className="px-3 lg:px-4 py-2 lg:py-2.5 border-b border-gray-300">
                      <h4 className="text-xs lg:text-sm font-light text-gray-800">Schedule Changes</h4>
                    </div>
                    <div className="p-2 lg:p-3 space-y-3 overflow-y-auto" style={{ height: '280px', maxHeight: '320px' }}>
                      <div className="bg-blue-600 text-white p-3 lg:p-4 rounded-xl">
                        <p className="text-[10px] lg:text-xs text-white-200 mb-1 font-light">August 15, 2024</p>
                        <h5 className="font-bold text-xs lg:text-sm mb-2">Prof. Emily Davis</h5>
                        <p className="text-[10px] lg:text-xs leading-relaxed mb-3">
                          The lecture scheduled for August 25 has been canceled due to a departmental meeting. A makeup class will be held on September 1 at the usual time slot.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <div className="flex -space-x-1">
                              {[1,2,3].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/150?img=${i}`} alt="" className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 border-blue-600" />
                              ))}
                            </div>
                            <span className="text-[10px] lg:text-xs text-blue-100 ml-1">+60 More</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-1">
                        <p className="text-[10px] lg:text-xs text-gray-500 mb-1">August 16, 2024</p>
                        <h5 className="font-bold text-xs lg:text-sm text-gray-900 mb-1">Prof. Emily Davis</h5>
                        <p className="text-[10px] lg:text-xs text-gray-600 leading-relaxed mb-2">
                          The lecture scheduled for August 25 has been...
                        </p>
                        <button className="text-blue-600 text-[10px] lg:text-xs font-semibold hover:underline">Read More</button>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Exams */}
                  <div className="rounded-xl overflow-hidden bg-white border border-gray-300">
                    <div className="px-3 lg:px-4 py-2 lg:py-2.5 border-b border-gray-300">
                      <h4 className="text-xs lg:text-sm font-light text-gray-800">Upcoming Exams</h4>
                    </div>
                    <div className="p-2 lg:p-3 space-y-3 overflow-y-auto bg-white" style={{ height: '280px', maxHeight: '320px' }}>
                      {[
                        { date: 'August 18, 2024', instructor: 'Dr. John Doe', content: 'The Midterm Exam will take place on September 10, 2024, from...' },
                        { date: 'August 18, 2024', instructor: 'Dr. John Doe', content: 'The Midterm Exam will take place on September 10, 2024, from...' }
                      ].map((item, index) => (
                        <div key={index} className={index > 0 ? "pt-3" : ""}>
                          <p className="text-[10px] lg:text-xs text-gray-500 mb-1">{item.date}</p>
                          <h5 className="font-bold text-xs lg:text-sm text-gray-900 mb-1">{item.instructor}</h5>
                          <p className="text-[10px] lg:text-xs text-gray-600 leading-relaxed mb-2">{item.content}</p>
                          <button className="text-blue-600 text-[10px] lg:text-xs font-semibold hover:underline">Read More</button>
                          <div className="flex items-center">
                            <div className="flex -space-x-1">
                              {[7,8,9].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/150?img=${i}`} alt="" className="w-4 h-4 lg:w-5 lg:h-5 rounded-full" />
                              ))}
                            </div>
                            <span className="text-[10px] lg:text-xs text-gray-500 ml-1.5">+60 More</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Assignment Updates */}
                  <div className="rounded-xl overflow-hidden bg-white border border-gray-300">
                    <div className="px-3 lg:px-4 py-2 lg:py-2.5 border-b border-gray-300">
                      <h4 className="text-xs lg:text-sm font-light text-gray-800">Assignment Updates</h4>
                    </div>
                    <div className="p-2 lg:p-3 space-y-3 overflow-y-auto bg-white" style={{ height: '280px', maxHeight: '320px' }}>
                      {[
                        { date: 'August 20, 2024', instructor: 'Prof. Jane Smith', content: 'The deadline for Assignment 3 has been extended to...' },
                        { date: 'August 20, 2024', instructor: 'Prof. Jane Smith', content: 'The deadline for Assignment 3 has been extended to...' }
                      ].map((item, index) => (
                        <div key={index} className={index > 0 ? "pt-3" : ""}>
                          <p className="text-[10px] lg:text-xs text-gray-500 mb-1">{item.date}</p>
                          <h5 className="font-bold text-xs lg:text-sm text-gray-900 mb-1">{item.instructor}</h5>
                          <p className="text-[10px] lg:text-xs text-gray-600 leading-relaxed mb-2">{item.content}</p>
                         <button className="text-blue-600 text-[10px] lg:text-xs font-semibold hover:underline">Read More</button>
                          <div className="flex items-center">
                            <div className="flex -space-x-1">
                              {[13,14,15].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/150?img=${i}`} alt="" className="w-4 h-4 lg:w-5 lg:h-5 rounded-full" />
                              ))}
                            </div>
                            <span className="text-[10px] lg:text-xs text-gray-500 ml-1.5">+60 More</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Assignments */}
              <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm p-4 lg:p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <span className="text-lg lg:text-xl">📁</span>
                    <span>Assignments</span>
                  </h3>
                  <button className="text-grey-500 text-[11px] lg:text-[12.5px] font-light">View All</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Upcoming Assignments */}
                  <div className="rounded-xl border border-gray-200 bg-white">
                    <div className="border-b border-gray-200 text-gray-400 text-center py-2 text-xs lg:text-sm font-light">
                      Upcoming Assignments
                    </div>
                    <div className="p-3 lg:p-4 space-y-4 lg:space-y-5 overflow-y-auto" style={{ height: '280px', maxHeight: '320px' }}>
                      {assignments.upcoming.map((item, index) => (
                        <div key={index} className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <p className="text-[8px] lg:text-[9px] text-gray-500">
                              {item.date}
                            </p>
                            <span className="px-1.5 py-0.5 bg-green-600 text-white rounded text-[8px] lg:text-[9.5px] font-light">
                              {item.status}
                            </span>
                          </div>
                          <h4 className="text-[11px] lg:text-[12px] font-medium text-gray-800">{item.title}</h4>
                          <p className="text-[9px] lg:text-[10px] text-blue-500 hover:text-blue-700 cursor-pointer underline">View Assignment Details</p>
                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center gap-1.5">
                              <div className="flex -space-x-1">
                                {item.avatars.map((avatar, i) => (
                                  <img key={i} src={avatar} alt="" className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 border-white" />
                                ))}
                              </div>
                              <span className="text-[8px] lg:text-[9px] text-gray-400">+60 More</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Past Assignments */}
                  <div className="rounded-xl border border-gray-140 bg-white">
                    <div className="border-b border-gray-200 text-gray-400 text-center py-2 text-xs lg:text-sm font-light">
                      Past Assignments
                    </div>
                    <div className="p-3 lg:p-4 space-y-4 lg:space-y-5 overflow-y-auto" style={{ height: '280px', maxHeight: '320px' }}>
                      {assignments.past.map((item, index) => (
                        <div key={index} className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <h4 className="text-[11px] lg:text-[12px] font-bold text-gray-800">{item.title}</h4>
                            <span className="text-[8px] lg:text-[9px] font-medium text-green-700">Grade: {item.grade}</span>
                          </div>
                          <p className="text-[8px] lg:text-[9px] text-gray-500">{item.date}</p>
                          <p className="text-[10px] lg:text-xs text-gray-600 leading-snug">
                            <span className="font-semibold text-[10px] lg:text-[11px] text-gray-800">Instructor Feedback:</span> "{item.feedback}"
                          </p>
                          <div className="flex items-center gap-1.5">
                            <div className="flex -space-x-1">
                              {item.avatars.map((avatar, i) => (
                                <img key={i} src={avatar} alt="" className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 border-white" />
                              ))}
                            </div>
                            <span className="text-[8px] lg:text-[9.5px] text-gray-400">+60 More</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Assignment Links */}
                  <div className="rounded-xl border border-gray-200 bg-white">
                    <div className="border-b border-gray-200 text-gray-400 text-center py-2 text-xs lg:text-sm font-light">
                      Assignments Link
                    </div>
                    <div className="p-3 lg:p-4 space-y-4 lg:space-y-5 overflow-y-auto" style={{ height: '280px', maxHeight: '320px' }}>
                      {assignments.links.map((item, index) => (
                        <div key={index} className="space-y-0.5">
                          <h4 className="text-[11px] lg:text-[12px] font-medium text-gray-800">{item.title}</h4>
                          <p className="text-[9px] lg:text-[10px] text-blue-500 hover:text-blue-700 cursor-pointer underline">View Assignment Details</p>
                          <p className="text-[8px] lg:text-[9px] text-gray-500 font-light">
                            {item.date}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm p-4 lg:p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 flex items-center space-x-2">
                    <span>Resources</span>
                  </h3>
                  <button 
                    onClick={() => setCreateResourceOpen(true)}
                    className="text-gray-500 hover:text-gray-700 flex items-center space-x-1.5 transition-colors text-xs lg:text-sm"
                  >
                    <Plus size={18} strokeWidth={2} className="lg:w-[22px] lg:h-[22px]" />
                    <span className="hidden sm:inline font-medium">Create a Resource</span>
                  </button>
                </div>
                
                <div className="flex gap-6 sm:gap-12 lg:gap-28 mb-6 border-b border-gray-200 overflow-x-auto">
                  <button 
                    onClick={() => setActiveResourceTab('Lecture Slides')}
                    className={`pb-3 text-xs lg:text-sm font-medium transition-colors relative whitespace-nowrap ${
                      activeResourceTab === 'Lecture Slides' 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Lecture Slides
                    {activeResourceTab === 'Lecture Slides' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                    )}
                  </button>
                  <button 
                    onClick={() => setActiveResourceTab('Notes')}
                    className={`pb-3 text-xs lg:text-sm font-medium transition-colors relative whitespace-nowrap ${
                      activeResourceTab === 'Notes' 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Notes
                    {activeResourceTab === 'Notes' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                    )}
                  </button>
                  <button 
                    onClick={() => setActiveResourceTab('Materials')}
                    className={`pb-3 text-xs lg:text-sm font-medium transition-colors relative whitespace-nowrap ${
                      activeResourceTab === 'Materials' 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Materials
                    {activeResourceTab === 'Materials' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                    )}
                  </button>
                </div>
                
                <div className="space-y-4 lg:space-y-6 overflow-y-auto pr-2" style={{ maxHeight: '280px' }}>
                  {resources
                    .filter(resource => resource.type === activeResourceTab)
                    .map((resource, index) => (
                      <div key={index} className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-600 text-xs lg:text-sm mb-1">
                            Week {resource.week}: {resource.date}
                          </h4>
                          <p className="text-xs lg:text-[14px] text-gray-600 font-normal mb-2">{resource.title}</p>
                        </div>
                        <button className="flex items-center space-x-1.5 lg:space-x-2 text-blue-600 hover:text-blue-700 flex-shrink-0">
                          <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                          </svg>
                          <span className="text-[10px] lg:text-sm font-medium hidden sm:inline">Download</span>
                        </button>
                      </div>
                    ))}
                </div>
                
                <p className="text-[10px] lg:text-xs text-gray-500 mt-4 lg:mt-6 italic">
                  <strong>Note:</strong> Be sure to regularly check this section for updates and newly added materials to support your studies.
                </p>
              </div>
            </div>
          </div>

          {/* Create Resource Modal */}
          {createResourceOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-4 lg:p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800">Create a Resource</h3>
                  <button 
                    onClick={() => setCreateResourceOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} className="lg:w-6 lg:h-6" />
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">Resource Title</label>
                    <input 
                      type="text" 
                      placeholder="Enter resource title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">Week Number</label>
                    <input 
                      type="number" 
                      placeholder="Enter week number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">Resource Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                      <option>Lecture Slides</option>
                      <option>Notes</option>
                      <option>Materials</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">Upload File</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 lg:p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                      <Upload className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs lg:text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-[10px] lg:text-xs text-gray-400 mt-1">PDF, DOC, PPT (max. 10MB)</p>
                    </div>
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <button 
                      type="button"
                      onClick={() => setCreateResourceOpen(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm"
                    >
                      Create Resource
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* New Discussion Modal */}
          {newDiscussionOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-4 lg:p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800">New Discussion</h3>
                  <button 
                    onClick={() => setNewDiscussionOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} className="lg:w-6 lg:h-6" />
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">Topic</label>
                    <input 
                      type="text" 
                      placeholder="Enter discussion topic"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">Class</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                      <option>Philosophy 101</option>
                      <option>Medieval History</option>
                      <option>Mathematics III</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      rows="4"
                      placeholder="Write your discussion message..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
                    ></textarea>
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <button 
                      type="button"
                      onClick={() => setNewDiscussionOpen(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm"
                    >
                      Post Discussion
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentCourseDashboard;
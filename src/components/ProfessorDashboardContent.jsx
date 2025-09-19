import React, { useState } from 'react';
import { Plus, ChevronDown, Bell, Search, MoreHorizontal } from 'lucide-react';

const ProfessorDashboard = () => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const sidebarItems = [
    { name: 'Overview', icon: '📊', active: true },
    { name: 'Assignments', icon: '📚', active: false },
    { name: 'Discussions', icon: '💬', active: false },
    { name: 'Students', icon: '👥', active: false },
    { name: 'Resources', icon: '📁', active: false },
    { name: 'Analytics', icon: '📈', active: false },
  ];

  const calendarDays = [
    { day: 'Mon', date: 16 },
    { day: 'Tue', date: 17 },
    { day: 'Wed', date: 18 },
    { day: 'Thu', date: 19, active: true },
    { day: 'Fri', date: 20 },
    { day: 'Sat', date: 21 },
    { day: 'Sun', date: 22 },
  ];

  return (
    <div className="flex w-screen min-h-screen bg-[#F0F2F5] font-montserrat">
      {/* Sidebar */}
      <div className="w-[234px] min-h-screen bg-gradient-to-b from-[#340058] to-[#0D6CFF] flex flex-col py-8 px-6 text-white fixed left-0 top-0 z-10">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-10">
          <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
            <span className="text-[#340058] font-bold text-2xl">K</span>
          </div>
          <span className="font-bold text-lg">KITAHUB</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-4 py-3 mb-2 rounded-lg cursor-pointer transition-colors ${
                item.active
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'text-gray-300 hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              <span className="font-medium text-sm">{item.name}</span>
            </div>
          ))}
        </nav>

        {/* Log Out Button */}
        <div className="flex items-center cursor-pointer text-gray-300 hover:text-white transition-colors mt-auto pt-6">
          <span className="mr-3 text-xl">🚪</span>
          <span className="font-medium text-sm">Log Out</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-[234px] ">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <button className="bg-[#0D6CFF] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
            Switch to Student View
          </button>
          <div className="flex items-center space-x-4">
            <div className="relative p-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="font-semibold text-gray-900 text-sm">Prof. Jane Smith</p>
                <p className="text-xs text-gray-500">Professor</p>
              </div>
              <img
                src="https://ui-avatars.com/api/?name=Jane+Smith&background=0D6CFF&color=fff&size=40"
                alt="Prof. Jane Smith"
                className="w-10 h-10 rounded-full border-2 border-white shadow"
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 xl:px-12">
          {/* Welcome Banner */}
          <div
            className="rounded-2xl text-white relative overflow-hidden mb-6 flex justify-between items-center px-12"
            style={{
              background: 'linear-gradient(90deg, #0D6CFF 0%, #60A5FF 100%)',
              height: '280px'
            }}
          >
            <div>
              <p className="text-white text-opacity-90 text-sm mb-3">September 4, 2024</p>
              <div className="mb-2">
                <span className="text-3xl font-light mr-2">Welcome Back</span>
                <span className="text-3xl">👋</span>
              </div>
              <h2 className="text-3xl font-bold">Prof. Jane Smith</h2>
            </div>
            <div className="w-[200px] h-[200px] flex items-center justify-center">
              <div className="text-[120px]">👨‍🏫</div>
            </div>
          </div>

          {/* Main Grid - 2x2 Layout */}
          <div className="grid grid-cols-2 gap-6">
            {/* Top Left - Active Courses */}
            <div className="bg-white rounded-2xl shadow-sm" style={{ width: '573px', height: '350px' }}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#0B0B2C]">📚 Active Courses</h3>
                  <button className="text-[#74759A] bg-white px-4 py-2 rounded-lg text-sm font-light flex items-center ">
                    <Plus className="w-7 h-7 mr-2" />
                    New Course
                  </button>
                </div>

                <div className="space-y-04 overflow-y-auto max-h-[240px]">
                  {[1, 2].map((i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-xl text-[#0B0B2C]">Medieval History</h4>
                        <span className="text-sm text-[#8586A6]">August 20, 2024</span>
                      </div>
                      <p className="text-base font-medium text-[#0B0B2C] mb-3">Prof. Jane Smith</p>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-[#8586A6]">Enrollment:</span>
                          <div className="flex -space-x-1 mr-2">
                            <img src="https://promptsideas.b-cdn.net/prompts/11216/R1tnPab6j1N3C25aPJ-t.png" alt="user" className="w-5 h-5 rounded-full border border-white" />
                            <img src="https://promptsideas.b-cdn.net/prompts/11216/YHIIUoIrdbsWUk2IJzyz.png" alt="user" className="w-5 h-5 rounded-full border border-white" />
                            <img src="https://easy-peasy.ai/_next/image?url=https%3A%2F%2Fmedia.easy-peasy.ai%2Fea726477-e66b-4c73-bcbd-8efcdf91df1b%2F9c3e73e5-b967-40bb-8d30-01abe8470cb4.png&w=828&q=75" alt="user" className="w-5 h-5 rounded-full border border-white" />
                          </div>
                          <span className="text-xs font-medium text-[#74759A]">+60 More</span>
                        </div>
                        <span className="text-sm font-medium text-[#8586A6]">Assignment: 13</span>
                      </div>
                      <p className="text-sm font-medium text-[#8586A6]">Recent Activity: Discussion posted on August 14, 2024</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Right - Assignments */}
            <div className="bg-white rounded-2xl shadow-sm" style={{ width: '573px', height: '350px' }}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#0B0B2C]">📁 Assignments</h3>
                  <button className="text-[#74759A] bg-white px-4 py-2 rounded-lg text-sm font-light flex items-center ">
                    <Plus className="w-7 h-7 mr-2" />
                    New Assignment
                  </button>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-medium text-sm text-[#74759A]">Pending Submission</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-[#74759A]">Sort By:</span>
                    <div className="relative">
                      <button 
                        onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                        className="flex items-center bg-[#EFF4FF] px-3 py-2 rounded text-sm font-semibold text-[#74759A] hover:bg-blue-100 transition-colors"
                      >
                        Due Date <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      {sortDropdownOpen && (
                        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-20 min-w-[120px]">
                          {['Due Date', 'Subject', 'Status'].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setSortDropdownOpen(false)}
                              className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 text-[#74759A]"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 overflow-y-auto max-h-[200px]">
                  {[1, 2].map((i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4 relative">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h5 className="font-medium text-sm text-[#0B0B2C] mb-1">Assignment 4: Answer Writing</h5>
                          <p className="font-medium text-base text-[#0B0B2C] mb-2">Medieval History</p>
                          <div className="text-xs text-[#74759A] mb-3" style={{ lineHeight: '12px' }}>
                            <ul className="list-disc list-inside space-y-1">
                              <li className="mb-1">Write a 5-page essay analyzing the key factors that led to.</li>
                              <li>Include at least three scholarly sources.</li>
                              <li>Follow the MLA format.</li>
                            </ul>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="bg-[#EEEEEE] text-[#0B0B2C] px-2 py-1 rounded text-xs font-medium">
                              Pending Grade
                            </span>
                            <span className="text-xs font-medium text-[#8586A6]">
                              Due Date: <span className="text-[#0B0B2C]">Aug 20, 2024</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end ml-4">
                          <MoreHorizontal className="w-5 h-5 text-[#ACACAC] mb-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Left - Calendar */}
            <div className="bg-white rounded-2xl shadow-sm" style={{ width: '573px', height: '378px' }}>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-6 text-[#0B0B2C]">📅 Calendar</h3>
                
                <div className="flex justify-between mb-6">
                  {calendarDays.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center justify-center rounded-lg ${
                        item.active ? 'bg-[#0D6CFF] text-white' : 'bg-[#ECF3FF] text-[#0B0B2C]'
                      }`}
                      style={{ width: '59px', height: '73px' }}
                    >
                      <div className="text-sm font-normal mb-1">{item.day}</div>
                      <div className="text-2xl font-bold">{item.date}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-[#0B0B2C] mr-4">8:00 PM</span>
                    <div className="flex-1 h-px border-t border-[#0D6CFF14]"></div>
                  </div>
                  
                  <div className="bg-[#ECF3FF] rounded-lg p-4 xl:y-10 xl:px-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-base text-[#0B0B2C]">Medieval History</h4>
                        <div className="flex -space-x-1">
                          <img src="https://img.freepik.com/premium-photo/3d-cartoon-avatar-man-minimal-3d-character-avatar-profile_652053-2067.jpg" alt="user" className="w-5 h-5 rounded-full border border-white" />
                          <img src="https://img.freepik.com/premium-photo/male-artist-3d-cartoon-avatar-portrait_839035-198908.jpg" alt="user" className="w-5 h-5 rounded-full border border-white" />
                           <img src="https://file.aiquickdraw.com/imgcompressed/img/compressed_4b8289e8b6fef41f2b4459178780d82e.webp" alt="user" className="w-5 h-5 rounded-full border border-white" />

                          
                        </div>
                        <span className="text-xs font-medium text-[#74759A]">+60 More</span>
                      </div>
                      <span className="bg-[#0D6CFF] text-white px-3 py-2 rounded text-xs font-semibold">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium text-[#0B0B2C]">8:00 - 9:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right - Discussion Board */}
            <div className="bg-white" style={{ width: '573px', height: '378px' }}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-[#0B0B2C]">💬 Discussion Board</h3>
                  <button className="text-[#74759A] bg-white px-4 py-2 rounded-lg text-sm font-light flex items-center ">
                    <Plus className="w-7 h-7 mr-2" />
                    New Discussion
                  </button>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search Discussions..."
                      className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg bg-[#F8FAFC] text-sm text-[#74759A] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0D6CFF]" />
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#EFF4FF] text-sm font-medium text-[#74759A] hover:bg-blue-100 transition-colors min-w-[120px]"
                    >
                      <span>Most Recent</span>
                      <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${filterDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {filterDropdownOpen && (
                      <div className="absolute top-full right-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                        {['Most Recent', 'Most Active', 'Oldest First'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setFilterDropdownOpen(false)}
                            className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 text-[#74759A] first:rounded-t-lg last:rounded-b-lg"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 overflow-y-auto max-h-[180px]">
                  {[
                    { user: 'Maya Thompson', class: 'Class 7', time: '12 Minutes', bg: '#FFFFFF', border: true },
                    { user: 'Maya Thompson', class: 'Class 9', time: '12 Minutes', bg: '#ECF3FF', border: false }
                  ].map((discussion, i) => (
                    <div
                      key={i}
                      className={`flex items-start rounded-lg p-4 shadow-sm ${discussion.border ? 'border border-gray-100' : ''}`}
                      style={{ backgroundColor: discussion.bg }}
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg mr-3 shadow-sm bg-gradient-to-br from-purple-500 to-blue-500">
                        👩‍🎓
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-sm text-[#0B0B2C]">{discussion.user}</h4>
                          <span className="text-xs bg-white px-2 py-1 rounded text-[#74759A] border">{discussion.class}</span>
                          <span className="text-xs text-[#8586A6]">({discussion.time})</span>
                        </div>
                        <p className="text-sm text-[#5C5D73]">You: List the most recent or active discussion...</p>
                      </div>
                      <MoreHorizontal className="w-5 h-5 text-[#ACACAC] flex-shrink-0" />
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

export default ProfessorDashboard;
import React, { useState } from 'react';
import { ChevronDown, Plus, Search, MessageSquare, Download, Mail, Phone, LayoutDashboard, ClipboardList, BookOpen, BarChart2, LogOut, ArrowLeft } from 'lucide-react';

const StudentCourseDashboard = () => {
  const [selectedSort, setSelectedSort] = useState('Most Recent');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    setIsSortDropdownOpen(false);
  };

  const discussions = [
    {
      user: 'Maya Thompson',
      avatar: 'https://ui-avatars.com/api/?name=MT&background=8B5CF6&color=fff&size=40',
      time: '12 Min Ago',
      content: 'You: List the most recent or active discussion...',
      isActive: true,
    },
    {
      user: 'Maya Thompson',
      avatar: 'https://ui-avatars.com/api/?name=MT&background=EF4444&color=fff&size=40',
      time: '32 Min Ago',
      content: 'You: List the most recent or active discussion...',
      isActive: true,
    },
    {
      user: 'Maya Thompson',
      avatar: 'https://ui-avatars.com/api/?name=MT&background=10B981&color=fff&size=40',
      time: '02 Hours Ago',
      content: 'You: List the most recent or active discussion...',
      isActive: false,
    },
  ];

  const instructors = [
    { name: 'Dr. Jane Doe', initials: 'JD', email: 'jane.doe@university.edu', phone: '+1 (123) 456-7890', background: 'bg-blue-600' },
    { name: 'Prof. Emily Davis', initials: 'ED', email: 'emily.davis@university.edu', phone: '+1 (123) 456-7890', background: 'bg-green-600' },
    { name: 'Prof. Jane Smith', initials: 'JS', email: 'jane.smith@university.edu', phone: '+1 (123) 456-7890', background: 'bg-orange-600' },
    { name: 'Dr. John Doe', initials: 'JD', email: 'jane.doe@university.edu', phone: '+1 (123) 456-7890', background: 'bg-blue-600' },
  ];

  const assignments = {
    upcoming: [
      { date: 'August 25, 2024', title: 'Mathematics III', status: 'Submitted' },
      { date: 'September 1, 2024', title: 'Medieval History', status: 'Submitted' },
      { date: 'September 10, 2024', title: 'Medieval History', status: 'Submitted' },
    ],
    past: [
      { date: 'July 15, 2024', title: 'Answer Writing', grade: '85%', feedback: 'Great job on the analysis! However, make sure to cite all sources correctly.' },
      { date: 'August 1, 2024', title: 'Question & Answer', grade: '90%', feedback: 'Excellent research and presentation. Keep up the good work!' },
    ],
    links: [
      { date: 'September 20, 2024', title: 'Medieval History Assignment' },
      { date: 'September 20, 2024', title: 'Medieval History Assignment' },
      { date: 'September 20, 2024', title: 'Medieval History Assignment' },
      { date: 'September 20, 2024', title: 'Medieval History Assignment' },
    ],
  };

  const resources = [
    { week: 1, date: 'Aug 7, 2024', title: 'Introduction to Medieval History' },
    { week: 2, date: 'Aug 14, 2024', title: 'Introduction to Medieval History' },
    { week: 3, date: 'Aug 21, 2024', title: 'Introduction to Medieval History' },
  ];

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: ClipboardList, label: 'Assignments' },
    { icon: MessageSquare, label: 'Discussions' },
    { icon: BookOpen, label: 'Resources' },
    { icon: BarChart2, label: 'Grades' },
    { icon: LogOut, label: 'Log Out' },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Main Content Area */}
      <div className="ml-60 min-h-screen">
        {/* General Top Header */}
        <div className="bg-white shadow-sm flex items-center justify-between py-4 px-12 sticky top-0 z-40">
          <div className="flex items-center space-x-4">
            {/* Main Student Dashboard button with exact specifications */}
            <div 
              className="flex items-center space-x-2 px-3 py-2 text-white font-medium rounded text-sm"
              style={{
                width: '254px',
                height: '40px',
                background: 'linear-gradient(78.14deg, #D620FF 9.33%, #0D6CFF 96.96%)',
                borderRadius: '4px',
                gap: '14px',
                padding: '13px'
              }}
            >
              <ArrowLeft 
                size={14} 
                className="text-white" 
                style={{
                  width: '18px',
                  height: '12px',
                  stroke: '#FFFFFF',
                  strokeWidth: '3px'
                }}
              />
              <span>Main Student Dashboard</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              3
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                MT
              </div>
              <div>
                <div className="font-semibold text-gray-800">Maya Thompson</div>
                <div className="text-gray-500 text-sm">Student</div>
              </div>
            </div>
          </div>
        </div>

        {/* All Main Containers */}
        <div className="p-8 space-y-8">
          {/* Top Section */}
          <div className="flex space-x-8">
            {/* Class Container */}
            <div className="w-[723px] h-[311px] bg-blue-600 rounded-2xl shadow-md overflow-hidden text-white border border-blue-600 flex">
              <div className="p-8 flex items-end justify-between w-full h-full">
                <div className="flex-1">
                  <p className="text-blue-200 mb-16 font-light">September 4, 2024</p>
                  <h1 className="text-1xl font-semibold mb-4 tracking-wide">Class Code: 44553</h1>
                  <h2 className="text-3xl font-bold">Philosophy of The Person</h2>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 flex items-center justify-center relative">
                    <div className="text-9xl">🧑‍💻</div>
                    <div className="absolute bottom-8 w-32 h-4 bg-yellow-600 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructor Information Container - Fixed width and overflow */}
            <div className="flex-1 h-[311px] bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructor's Information</h3>
              <div className="space-y-3 overflow-y-auto">
                {instructors.map((instructor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 ${instructor.background}`}>
                      {instructor.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm truncate">{instructor.name}</h4>
                      <p className="text-xs text-gray-600 truncate">Instructor of The Government University</p>
                    </div>
                    <div className="flex flex-col text-xs space-y-1 flex-shrink-0">
                      <span className="text-gray-500 truncate max-w-[120px]">{instructor.email}</span>
                      <span className="text-gray-500">{instructor.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - Discussion Board and Announcements Header */}
          <div className="flex space-x-8">
            {/* Discussion Board Container */}
            <div className="w-[501px] h-[378px] bg-white rounded-2xl shadow-sm p-6 border border-gray-200 flex-shrink-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Discussion Board</h3>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors text-sm font-medium">
                  <Plus size={16} className="text-gray-600" />
                  <span>New Discussion</span>
                </button>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="relative flex-1 mr-4">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search Discussions..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div className="relative">
                  <button
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100"
                    onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  >
                    <span className="text-sm text-gray-700">{selectedSort}</span>
                    <ChevronDown size={16} className={`text-gray-500 transform transition-transform ${isSortDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSortDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <ul className="py-1">
                        <li
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSortChange('Most Recent')}
                        >
                          Most Recent
                        </li>
                        <li
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSortChange('Most Active')}
                        >
                          Most Active
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 120px)' }}>
                {discussions.map((discussion, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <img src={discussion.avatar} alt={discussion.user} className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-800">{discussion.user}</h4>
                        <span className="text-xs text-gray-500">{discussion.time}</span>
                        {discussion.isActive && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                      </div>
                      <p className="text-sm text-gray-600 truncate">{discussion.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements Container */}
            <div className="flex-1 h-[378px] bg-white rounded-2xl shadow-sm p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                  <span className="text-orange-500">📢</span>
                  <span>Announcements</span>
                </h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
              </div>
              
              <div className="grid grid-cols-3 gap-3 h-[320px]">
                {/* Schedule Changes */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                    <h4 className="text-sm font-medium text-gray-600">Schedule Changes</h4>
                  </div>
                  <div className="p-3 space-y-3 overflow-y-auto" style={{ height: 'calc(100% - 40px)' }}>
                    {/* Active Schedule Change */}
                    <div className="bg-blue-600 text-white p-3 rounded-lg">
                      <p className="text-xs text-blue-200 mb-1">August 15, 2024</p>
                      <h5 className="font-semibold text-sm mb-2">Prof. Emily Davis</h5>
                      <p className="text-xs leading-relaxed mb-3">
                        The lecture scheduled for August 25 has been canceled due to a departmental meeting. A makeup class will be held on September 1 at the usual time slot.
                      </p>
                      <div className="flex items-center justify-between">
                        <button className="text-white text-xs hover:underline">Read More</button>
                        <div className="flex items-center space-x-1">
                          <div className="flex -space-x-1">
                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                          </div>
                          <span className="text-xs text-blue-200 ml-1">+60 More</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Regular Schedule Change */}
                    <div className="border-t border-gray-200 pt-3">
                      <p className="text-xs text-gray-500 mb-1">August 15, 2024</p>
                      <h5 className="font-medium text-gray-800 text-sm mb-1">Prof. Emily Davis</h5>
                      <p className="text-xs text-gray-600 mb-2">The lecture scheduled for August 25 has been...</p>
                      <button className="text-blue-600 text-xs hover:underline">Read More</button>
                    </div>
                  </div>
                </div>

                {/* Upcoming Exams */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                    <h4 className="text-sm font-medium text-gray-600">Upcoming Exams</h4>
                  </div>
                  <div className="p-3 space-y-3 overflow-y-auto" style={{ height: 'calc(100% - 40px)' }}>
                    <div className="pb-3 border-b border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">August 18, 2024</p>
                      <h5 className="font-medium text-gray-800 text-sm mb-1">Dr. John Doe</h5>
                      <p className="text-xs text-gray-600 mb-2">The Midterm Exam will take place on September 10, 2024, from...</p>
                      <div className="flex items-center justify-between">
                        <button className="text-blue-600 text-xs hover:underline">Read More</button>
                        <div className="flex items-center space-x-1">
                          <div className="flex -space-x-1">
                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                          </div>
                          <span className="text-xs text-gray-500 ml-1">+60 More</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500 mb-1">August 18, 2024</p>
                      <h5 className="font-medium text-gray-800 text-sm mb-1">Dr. John Doe</h5>
                      <p className="text-xs text-gray-600 mb-2">The Midterm Exam will take place on September 10, 2024, from...</p>
                      <button className="text-blue-600 text-xs hover:underline">Read More</button>
                    </div>
                  </div>
                </div>

                {/* Assignment Updates */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                    <h4 className="text-sm font-medium text-gray-600">Assignment Updates</h4>
                  </div>
                  <div className="p-3 space-y-3 overflow-y-auto" style={{ height: 'calc(100% - 40px)' }}>
                    <div className="pb-3 border-b border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">August 20, 2024</p>
                      <h5 className="font-medium text-gray-800 text-sm mb-1">Prof. Jane Smith</h5>
                      <p className="text-xs text-gray-600 mb-2">The deadline for Assignment 3 has been extended to...</p>
                      <div className="flex items-center justify-between">
                        <button className="text-blue-600 text-xs hover:underline">Read More</button>
                        <div className="flex items-center space-x-1">
                          <div className="flex -space-x-1">
                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                          </div>
                          <span className="text-xs text-gray-500 ml-1">+60 More</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500 mb-1">August 20, 2024</p>
                      <h5 className="font-medium text-gray-800 text-sm mb-1">Prof. Jane Smith</h5>
                      <p className="text-xs text-gray-600 mb-2">The deadline for Assignment 3 has been extended to...</p>
                      <button className="text-blue-600 text-xs hover:underline">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Fixed container sizing */}
          <div className="flex space-x-8">
            {/* Assignments Container - Fixed sections overflow */}
            <div className="w-[736px] h-[396px] bg-white rounded-2xl shadow-sm p-6 border border-gray-200 flex-shrink-0 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Assignments</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
              </div>
              <div className="grid grid-cols-3 gap-4 h-[320px]">
                {/* Upcoming Assignments */}
                <div className="rounded-xl border border-gray-200 p-4 overflow-hidden flex flex-col">
                  <div className="bg-blue-600 text-white text-center py-2 rounded-lg text-sm font-medium mb-4">Upcoming Assignments</div>
                  <div className="space-y-4 overflow-y-auto flex-1">
                    {assignments.upcoming.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                        <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                        <h4 className="font-medium text-gray-800 text-sm mb-1">{item.title}</h4>
                        <p className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer mb-2">View Assignment Details</p>
                        <div className="flex items-center space-x-1">
                          <div className="flex -space-x-1">
                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                          </div>
                          <span className="text-xs text-grey-200 ml-1">+60 More</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium" style={{ backgroundColor: '#10B981', color: 'white' }}>{item.status}</span>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Past Assignments */}
                <div className="rounded-xl border border-gray-200 p-4 bg-gray-50 overflow-hidden flex flex-col">
                  <div className="bg-gray-200 text-gray-600 text-center py-2 rounded-lg text-sm font-medium mb-4">Past Assignments</div>
                  <div className="space-y-4 overflow-y-auto flex-1">
                    {assignments.past.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800 text-sm">{item.title}</h4>
                          <span className="text-sm font-medium" style={{ color: '#10B981' }}>Grade: {item.grade}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{item.feedback}</p>
                        <div className="flex items-center space-x-2">
                          <span className="w-5 h-5 rounded-full bg-blue-400 text-white flex items-center justify-center text-xs font-bold">+</span>
                          <span className="text-xs text-gray-600">+60 More</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assignment Links */}
                <div className="rounded-xl border border-gray-200 p-4 bg-gray-50 overflow-hidden flex flex-col">
                  <div className="bg-gray-200 text-gray-600 text-center py-2 rounded-lg text-sm font-medium mb-4">Assignment Links</div>
                  <div className="space-y-4 overflow-y-auto flex-1">
                    {assignments.links.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                        <h4 className="font-medium text-gray-800 text-sm mb-1">{item.title}</h4>
                        <p className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer mb-1">View Assignment Details</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Container - Matched height with assignments */}
            <div className="flex-1 h-[396px] bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Resources</h3>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors text-sm font-medium">
                  <Plus size={16} className="text-gray-600" />
                  <span>Create a Resource</span>
                </button>
              </div>
              <div className="flex space-x-2 mb-4">
                <button className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg text-sm font-medium">Lecture Slides</button>
                <button className="flex-1 bg-gray-100 text-gray-600 text-center py-2 rounded-lg text-sm font-medium hover:bg-gray-200">Notes</button>
                <button className="flex-1 bg-gray-100 text-gray-600 text-center py-2 rounded-lg text-sm font-medium hover:bg-gray-200">Materials</button>
              </div>
              <div className="space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
                {resources.map((resource, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800 text-md mb-1">Week {resource.week}: {resource.date}</h4>
                        <p className="text-sm text-gray-600 mb-2">{resource.title}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Download size={16} className="text-blue-600" />
                        <a href="#" className="text-sm text-blue-600 cursor-pointer hover:underline">Download Slides</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">Note: Be sure to regularly check this section for updates and newly added materials to support your studies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCourseDashboard;
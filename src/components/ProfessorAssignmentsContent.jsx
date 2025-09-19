import React, { useState } from "react";
import {
  Eye,
  Edit,
  Users,
  Search,
  Plus,
  ChevronDown,
  Download,
  BookOpen,
  Settings,
  Bell,
  LogOut
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

const performanceData = [
  { month: "Jan", value: 60 },
  { month: "Feb", value: 80 },
  { month: "Mar", value: 100 },
  { month: "Apr", value: 70 },
  { month: "May", value: 110 },
  { month: "Jun", value: 90 },
];

const barData = [
  { name: "Jan", profit: 40, revenue: 70 },
  { name: "Feb", profit: 60, revenue: 100 },
  { name: "Mar", profit: 50, revenue: 90 },
  { name: "Apr", profit: 80, revenue: 120 },
  { name: "May", profit: 65, revenue: 95 },
  { name: "Jun", profit: 100, revenue: 140 },
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

const discussions = [
  {
    user: "Maya Thompson",
    class: "Philosophy",
    time: "12 Min Ago",
    message: "What is the most recent or active discussion...",
    bgColor: "#F0F7FF"
  },
  {
    user: "Maya Thompson",
    class: "Philosophy", 
    time: "15 min ago",
    message: "What is the most recent or active discussion...",
    bgColor: "#FFFFFF"
  },
  {
    user: "Maya Thompson",
    class: "Philosophy",
    time: "15 min ago", 
    message: "What is the most recent or active discussion...",
    bgColor: "#FFFFFF"
  }
];

const resources = [
  { week: 1, date: "Aug 7, 2024", title: "Introduction to Medieval History" },
  { week: 2, date: "Aug 14, 2024", title: "Introduction to Medieval History" },
  { week: 3, date: "Aug 14, 2024", title: "Introduction to Medieval History" }
];

const ProfessorAssignmentDashboard = () => {
  const [mostRecentDropdownOpen, setMostRecentDropdownOpen] = useState(false);

  const toggleMostRecentDropdown = () => {
    setMostRecentDropdownOpen(!mostRecentDropdownOpen);
  };

  const closeMostRecentDropdown = () => {
    setMostRecentDropdownOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 ml-64 py-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Main Content */}
      <div className="flex-1 px-6 ">
        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Blue Hero - Added top margin */}
          <div className="w-full h-[280px] bg-blue-600 to-blue-700 rounded-2xl text-white flex items-center justify-between px-8 py-8 shadow-lg mt-4">
            <div>
              <div className="text-blue-100 mb-2">September 5, 2024</div>
              <div className="text-blue-100 mb-4 text-sm">Class Code: 54053</div>
              <div className="text-4xl font-bold">Philosophy of The Person</div>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/Character.png"
                alt="Professor"
                className="w-40 h-45 object-contain"
              />
            </div>
          </div>

          {/* Announcements + Assignments - Reduced gap */}
          <div className="grid grid-cols-12 gap-4">
            {/* Announcements Container */}
            <div className="col-span-7">
              <div className="h-[378px] bg-white rounded-2xl shadow-sm p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                    <span className="text-orange-500">📢</span>
                    <span>Assignment Announcements</span>
                  </h3>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">+ Add Announcement</button>
                </div>
                
                <div className="grid grid-cols-3 gap-3 h-[320px]">
                  {/* Schedule Changes */}
                  <div className="border border-blue-600 rounded-xl overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                      <h4 className="text-sm font-medium text-gray-600">Schedule Changes</h4>
                    </div>
                    <div className="p-3 space-y-3 overflow-y-auto" style={{ height: 'calc(100% - 40px)' }}>
                      {/* Active Schedule Change */}
                      <div className="bg-blue-600 text-white p-3 rounded-lg">
                        <p className="text-xs text-blue-200 mb-1">August 15, 2024</p>
                        <h5 className="font-semibold text-sm mb-2">Prof. Emily Davis</h5>
                        <p className="text-xs leading-relaxed mb-3">
                          Bringing change to a work schedule can be complex...
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Post: Bring book</span>
                          <button className="text-white text-xs hover:underline">Read More</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Exams */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                      <h4 className="text-sm font-medium text-gray-600">Upcoming Exams</h4>
                    </div>
                    <div className="p-3 space-y-3 overflow-y-auto" style={{ height: 'calc(100% - 40px)' }}>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p className="text-xs text-gray-500 mb-1">August 18, 2024</p>
                        <h5 className="font-medium text-gray-800 text-sm mb-1">Dr. John Doe</h5>
                        <p className="text-xs text-gray-600 mb-2">Midterm announcement...</p>
                        <span className="text-xs text-gray-500">5 days ago</span>
                      </div>
                    </div>
                  </div>

                  {/* Important Context */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                      <h4 className="text-sm font-medium text-gray-600">Important Context</h4>
                    </div>
                    <div className="p-3 space-y-3 overflow-y-auto" style={{ height: 'calc(100% - 40px)' }}>
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="text-xs text-gray-500 mb-1">August 20, 2024</p>
                        <h5 className="font-medium text-gray-800 text-sm mb-1">Prof. Jane Smith</h5>
                        <p className="text-xs text-gray-600 mb-2">Class updates...</p>
                        <span className="text-xs text-gray-500">1 week ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assignments */}
            <div className="col-span-5">
              <div className="bg-white rounded-2xl p-6 h-[378px] shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold flex items-center">
                    📝 <span className="ml-2">Assignments</span>
                  </h3>
                  <button className="text-blue-600 text-sm font-medium">
                    + New Assignment
                  </button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((item, i) => (
                    <div
                      key={i}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">Assignment {i + 1}</h4>
                        <span className="text-sm text-gray-500">
                          Aug 30, 2024
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Medieval History
                        </span>
                        <div className="flex items-center space-x-3">
                          <span className="text-blue-600 font-medium">13</span>
                          <Eye className="w-4 h-4 text-gray-400" />
                          <Edit className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Discussion + Students - Reduced gap */}
          <div className="grid grid-cols-12 gap-4">
            {/* Discussion */}
            <div className="col-span-7">
              <div className="bg-white rounded-2xl border p-6 h-[378px]">
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
                <div style={{ height: '150px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {discussions.map((discussion, index) => (
                    <div 
                      key={index}
                      className="flex items-start p-3 rounded-lg"
                      style={{
                        borderRadius: '8px',
                        padding: '12px',
                        background: discussion.bgColor,
                        boxShadow: '0px 4px 45px rgba(13, 108, 255, 0.08)',
                        border: discussion.bgColor === '#FFFFFF' ? '1px solid rgba(13, 108, 255, 0.08)' : 'none'
                      }}
                    >
                      <div className="flex-shrink-0 mr-3">
                        <img
                          src={`https://i.pravatar.cc/40?img=${index + 1}`}
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 style={{
                            fontFamily: 'Montserrat',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '100%',
                            color: '#0B0B2C'
                          }}>{discussion.user}</h4>
                          <span style={{
                            fontFamily: 'Montserrat',
                            fontWeight: '500',
                            fontSize: '12px',
                            lineHeight: '100%',
                            color: '#5C5D73',
                          }}>{discussion.time}</span>
                        </div>
                        <p style={{
                          fontFamily: 'Montserrat',
                          fontWeight: '400',
                          fontSize: '14px',
                          lineHeight: '100%',
                          color: '#5C5D73',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>{discussion.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Students */}
            <div className="col-span-5">
              <div className="bg-white rounded-2xl p-6 h-[378px] shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">👥 Students</h3>
                  <span className="text-sm text-gray-500">136 Active</span>
                </div>
                <div className="space-y-3">
                  {[12345, 12346, 12347, 12348].map((id, i) => (
                    <div
                      key={id}
                      className="flex items-center justify-between p-3 border border-gray-100 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={`https://i.pravatar.cc/40?img=${i + 5}`}
                          alt="student"
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="font-medium text-sm">John Doe</div>
                          <div className="text-xs text-gray-500">ID: {id}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="w-6 h-6 border border-gray-300 rounded"></button>
                        <Users className="w-4 h-4 text-gray-400" />
                        <Search className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Performance - Reduced gap */}
          <div className="bg-white rounded-2xl border p-6 h-[400px] shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold mb-4">Performance</h3>
              <button className="text-blue-600 text-sm">Sort By: Due Date ↓</button>
            </div>
            <div className="grid grid-cols-12 gap-8">
              {/* Line Chart */}
              <div className="col-span-4">
                <h4 className="text-xl font-semibold mb-2">Total Student</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">12,000</div>
                <div className="text-sm text-gray-600 mb-4">
                  From Jan 20,2022 to July,2022
                </div>
                <ResponsiveContainer width="100%" height={120}>
                  <LineChart data={performanceData}>
                    <XAxis dataKey="month" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#3B82F6" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              {/* Bar Chart */}
              <div className="col-span-8">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="profit" fill="#3B82F6" />
                    <Bar dataKey="revenue" fill="#F97316" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Calendar + Resources - Side by Side Layout */}
          <div className="grid grid-cols-12 gap-4">
            {/* Calendar */}
            <div className="col-span-7">
              <div className="bg-white rounded-2xl shadow-sm h-[378px]">
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
            </div>

            {/* Resources Container */}
            <div className="col-span-5">
              <div className="h-[378px] bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
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
    </div>
  );
};

export default ProfessorAssignmentDashboard;
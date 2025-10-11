import React, { useState } from "react";
import {
  Eye,
  Edit,
  Edit2,
  Users,
  Search,
  Phone, 
  MessageCircle,
  Plus,
  ChevronDown,
  Download,
  X,
  Calendar as CalendarIcon,
  LogOut,
  Home,
  BookOpen,
  Bell,
  Menu,
  MoreHorizontal,
  Trash2,
  Settings,
  User,
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

const ProfessorAssignmentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mostRecentDropdownOpen, setMostRecentDropdownOpen] = useState(false);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [newDiscussionOpen, setNewDiscussionOpen] = useState(false);
  const [activeResourceTab, setActiveResourceTab] = useState('Lecture Slides');
  const [createResourceOpen, setCreateResourceOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(19);
  
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [discussionFilter, setDiscussionFilter] = useState('Most Recent');
  const [hoveredDiscussion, setHoveredDiscussion] = useState(null);
  const [discussionMenuOpen, setDiscussionMenuOpen] = useState(null);

  const [resources, setResources] = useState([
    { week: 1, date: 'Aug 7, 2024', title: 'Introduction to Medieval History', type: 'Lecture Slides' },
    { week: 2, date: 'Aug 14, 2024', title: 'The Early Middle Ages', type: 'Lecture Slides' },
    { week: 3, date: 'Aug 21, 2024', title: 'Feudalism and Manor System', type: 'Lecture Slides' },
    { week: 1, date: 'Aug 7, 2024', title: 'Introduction Notes', type: 'Notes' },
    { week: 2, date: 'Aug 14, 2024', title: 'Medieval Notes', type: 'Notes' },
    { week: 1, date: 'Aug 7, 2024', title: 'Reading Materials', type: 'Materials' },
    { week: 2, date: 'Aug 14, 2024', title: 'Study Guide', type: 'Materials' },
  ]);

  const [announcements, setAnnouncements] = useState({
    schedule: [
      {
        date: "August 15, 2024",
        title: "Schedule Update",
        content: "The lecture scheduled for August 25 has been canceled due to a departmental meeting. A makeup class will be scheduled for August 26 at the usual time and venue.",
        isHighlighted: true
      },
      {
        date: "August 16, 2024",
        author: "Prof. Emily Davis",
        title: "Tutorial Reschedule",
        content: "Tutorial sessions for this week will be rescheduled to accommodate the upcoming exam preparation.",
        isHighlighted: false
      }
    ],
    exams: [
      {
        date: "September 10, 2024",
        content: "Midterm Exam covering Chapters 1-5.",
      },
      {
        date: "September 15, 2024",
        content: "Quiz on Medieval History concepts.",
      },
      {
        date: "September 20, 2024",
        content: "Final project presentation.",
      }
    ],
    contact: [
      {
        date: "August 20, 2024",
        author: "Dr. John Doe",
        email: "johndoe@university.edu",
        officeHours: "Mondays & Wednesdays, 2:00 PM - 4:00 PM",
        location: "Room 101"
      },
      {
        date: "August 20, 2024",
        author: "Jane Smith",
        email: "janesmith@university.edu",
        officeHours: "Tuesdays, 10:00 AM - 12:00 PM",
        location: "Room 102"
      }
    ]
  });

  const [assignments, setAssignments] = useState([
    { id: 1, title: "Assignment 4: Answer Writing", subject: "Medieval History", description: "Write a 5-page essay analyzing key factors", dueDate: "Aug 20, 2024", status: "Pending Grade" },
    { id: 2, title: "Assignment 3: Research Paper", subject: "World History", description: "Research and write about historical events", dueDate: "Aug 18, 2024", status: "Submitted" },
  ]);

  const [discussions, setDiscussions] = useState([
     { id: 1, user: 'Maya Thompson', class: 'Class 7', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },
     { id: 2, user: 'Maya Thompson', class: 'Class 9', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },
     { id: 3, user: 'Sarah Johnson', class: 'Class 8', time: '25 Minutes', message: 'Can someone explain the concept of existentialism in simpler terms?', bgColor: '#FFFFFF' },
     { id: 4, user: 'Michael Chen', class: 'Class 7', time: '1 Hour', message: 'Does anyone have notes from last week\'s lecture on the Crusades?', bgColor: '#FFFFFF' },
     { id: 5, user: 'Emily Rodriguez', class: 'Class 9', time: '2 Hours', message: 'I found this great article about Kant\'s categorical imperative. Sharing the link!', bgColor: '#FFFFFF' },
     { id: 6, user: 'James Wilson', class: 'Class 8', time: '3 Hours', message: 'What are your thoughts on the upcoming midterm exam?', bgColor: '#FFFFFF' }
   ]);

  const [newAnnouncement, setNewAnnouncement] = useState({
    type: 'schedule',
    date: '',
    author: '',
    content: '',
  });

  const [newAssignment, setNewAssignment] = useState({
    title: '',
    date: '',
    subject: ''
  });

  const [newResource, setNewResource] = useState({
    week: '',
    date: '',
    title: ''
  });

  const [newDiscussion, setNewDiscussion] = useState({
    user: '',
    message: ''
  });

  const handleAddAnnouncement = () => {
    if (newAnnouncement.author && newAnnouncement.content) {
      const updatedAnnouncements = { ...announcements };
      updatedAnnouncements[newAnnouncement.type].push({
        date: newAnnouncement.date || new Date().toLocaleDateString(),
        author: newAnnouncement.author,
        content: newAnnouncement.content,
        isHighlighted: false
      });
      setAnnouncements(updatedAnnouncements);
      setShowAnnouncementModal(false);
      setNewAnnouncement({ type: 'schedule', date: '', author: '', content: '' });
    }
  };

  const handleAddAssignment = () => {
    if (newAssignment.title && newAssignment.subject) {
      setAssignments([...assignments, {
        id: assignments.length + 1,
        title: newAssignment.title,
        subject: newAssignment.subject,
        dueDate: newAssignment.date || new Date().toLocaleDateString(),
        status: "Pending Grade",
        description: ""
      }]);
      setShowAssignmentModal(false);
      setNewAssignment({ title: '', date: '', subject: '' });
    }
  };

  const handleAddResource = () => {
    if (newResource.title && newResource.week) {
      setResources([...resources, {
        week: parseInt(newResource.week),
        date: newResource.date || new Date().toLocaleDateString(),
        title: newResource.title,
        type: activeResourceTab
      }]);
      setShowResourceModal(false);
      setNewResource({ week: '', date: '', title: '' });
    }
  };

  const handleAddDiscussion = () => {
    if (newDiscussion.user && newDiscussion.message) {
      setDiscussions([{
        id: discussions.length + 1,
        user: newDiscussion.user,
        class: "Philosophy",
        time: "Just now",
        message: newDiscussion.message,
        avatar: discussions.length + 1
      }, ...discussions]);
      setNewDiscussionOpen(false);
      setNewDiscussion({ user: '', message: '' });
    }
  };

  const deleteDiscussion = (id) => {
    setDiscussions(discussions.filter(d => d.id !== id));
  };

  const scheduleData = {
    16: [],
    17: [],
    18: [],
    19: [
      {
        course: 'Medieval History 101',
        time: '10:00 AM - 11:30 AM',
        status: 'In Progress'
      },
      {
        course: 'World History 201',
        time: '2:00 PM - 3:30 PM',
        status: 'Upcoming'
      }
    ],
    20: [
      {
        course: 'Renaissance Studies',
        time: '9:00 AM - 10:30 AM',
        status: 'Upcoming'
      }
    ],
    21: [],
    22: []
  };

  return (
    <div className="flex min-h-screen bg-gray-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Backdrop overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-purple-600 text-white flex flex-col transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
       
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen w-full lg:w-auto">
        {/* Mobile Header */}
        <header className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-30 px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">Professor Dashboard</h1>
          <div className="flex items-center space-x-2">
            <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <User className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Main content with padding for mobile header */}
        <div className="flex-1 px-4 lg:px-8 py-4 lg:py-24 mt-32 lg:mt-0 overflow-auto">
          {/* Welcome Banner */}
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
              <h2 className="text-2xl lg:text-3xl font-bold">Prof. Jane Smith</h2>
            </div>
            <img 
              src="/Character.png" 
              alt="Professor" 
              className="w-40 h-40 lg:w-56 lg:h-56 object-contain"
            />
          </div>

          {/* ANNOUNCEMENTS & ASSIGNMENTS ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-4 sm:mb-6" style={{ maxWidth: '1176px' }}>
            {/* ANNOUNCEMENTS SECTION */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 flex items-center space-x-2">
                    <span className="text-xl sm:text-2xl">📢</span>
                    <span>Announcements</span>
                  </h3>
                  <button 
                    onClick={() => setShowAnnouncementModal(true)}
                    className="text-gray-500 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium flex items-center hover:text-gray-700"
                  >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Add Announcement</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {/* Schedule Changes */}
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200">
                      <h4 className="text-xs sm:text-sm font-semibold">Schedule Changes</h4>
                    </div>
                    <div className="overflow-y-auto bg-white" style={{ maxHeight: '220px' }}>
                      {announcements.schedule.map((item, idx) => (
                        <div 
                          key={idx} 
                          className={`p-3 mt-3 border-b border-gray-200 last:border-b-0 ${item.isHighlighted ? 'bg-blue-500' : 'bg-white'}`}
                        >
                          <p className={`text-[9px] sm:text-[10px] mb-2 ${item.isHighlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                            {item.date}
                          </p>
                          <h5 className={`font-semibold text-xs sm:text-sm mb-2 ${item.isHighlighted ? 'text-white' : 'text-gray-800'}`}>
                            {item.title || item.author || "Schedule Update"}
                          </h5>
                          <p className={`text-[10px] sm:text-xs leading-relaxed ${item.isHighlighted ? 'text-white' : 'text-gray-600'}`}>
                            {item.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Exams */}
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Upcoming Exams</h4>
                    </div>
                    <div className="bg-white overflow-y-auto" style={{ maxHeight: '220px' }}>
                      {announcements.exams.map((item, idx) => (
                        <div key={idx} className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 last:border-b-0">
                          <p className="text-[9px] sm:text-[10px] text-gray-500 mb-2">{item.date}</p>
                          <p className="text-xs sm:text-sm text-gray-700 font-medium mb-1">{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Instructor Contact */}
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Instructor Contact</h4>
                    </div>
                    <div className="bg-white overflow-y-auto" style={{ maxHeight: '220px' }}>
                      {announcements.contact.map((item, idx) => (
                        <div key={idx} className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 last:border-b-0">
                          <p className="text-[9px] sm:text-[10px] text-gray-500 mb-1">{item.date}</p>
                          <h5 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">{item.author}</h5>
                          <p className="text-[10px] sm:text-xs text-gray-500 mb-2 break-words">{item.email}</p>
                          <p className="text-[10px] sm:text-xs text-gray-600 mb-1"><span className="font-semibold">Hours:</span> {item.officeHours}</p>
                          <p className="text-[10px] sm:text-xs text-gray-600">{item.location}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ASSIGNMENTS SECTION */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200" style={{ padding: '16px 16px 1px 16px' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-bold flex items-center">
                    <span className="text-xl sm:text-2xl mr-2">📁</span>
                    <span>Assignments</span>
                  </h3>
                  <button 
                    onClick={() => setShowAssignmentModal(true)}
                    className="text-gray-500 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium flex items-center hover:text-gray-700"
                  >
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                    <span className="hidden sm:inline">New Assignment</span>
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                  <h4 className="font-normal text-xs sm:text-sm text-gray-500">Pending Submission</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-500">Sort:</span>
                    <div className="relative">
                      <button
                        onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                        className="flex items-center bg-blue-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold text-gray-600 hover:bg-blue-100 transition-colors"
                      >
                        Due Date <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                      </button>
                      {sortDropdownOpen && (
                        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-20 min-w-32">
                          {['Due Date', 'Subject', 'Status'].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setSortDropdownOpen(false)}
                              className="block w-full text-left px-3 py-2 text-xs sm:text-sm hover:bg-gray-50 text-gray-600"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 overflow-y-auto pb-4" style={{ maxHeight: '220px' }}>
                  {assignments.map((item) => (
                    <div key={item.id} className="rounded-lg p-3 sm:p-4 bg-gray-50 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="font-semibold text-xs sm:text-sm text-gray-900 mb-1">{item.title}</h5>
                          <p className="font-medium text-xs sm:text-sm text-gray-700 mb-2">{item.subject}</p>
                          {item.description && (
                            <p className="text-[10px] sm:text-xs text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                          )}
                        </div>
                        <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 cursor-pointer hover:text-gray-600 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="bg-gray-200 text-gray-900 px-2 py-1 rounded text-[10px] sm:text-xs font-medium">
                          {item.status}
                        </span>
                        <span className="text-[10px] sm:text-xs font-medium text-gray-500">
                          Due: <span className="text-gray-900">{item.dueDate}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DISCUSSION BOARD & STUDENTS ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6" style={{ maxWidth: '1176px' }}>
            {/* Discussion Board */}
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6" style={{ border: '1px solid rgba(13, 108, 255, 0.08)' }}>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center">
                  <span className="mr-2 text-lg sm:text-xl">💬</span>
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">Discussion Board</h3>
                </div>
                <button 
                  onClick={() => setNewDiscussionOpen(true)}
                  className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500 hover:text-gray-700"
                >
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline font-semibold">New Discussion</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-3">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-3 sm:pl-5 pr-10 py-2 border rounded bg-gray-50 text-xs sm:text-sm"
                  />
                </div>
                <div className="relative">
                  <button 
                    onClick={() => setMostRecentDropdownOpen(!mostRecentDropdownOpen)}
                    className="flex items-center justify-between px-3 py-2 rounded bg-blue-50 text-xs sm:text-sm text-gray-600 w-full sm:w-36"
                  >
                    <span className="truncate">{discussionFilter}</span>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 flex-shrink-0" />
                  </button>
                  {mostRecentDropdownOpen && (
                    <div className="absolute top-full right-0 mt-1 w-full bg-white border rounded shadow-lg z-20">
                      {['Most Recent', 'Most Active', 'Oldest First'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => { setDiscussionFilter(opt); setMostRecentDropdownOpen(false); }}
                          className="block w-full text-left px-3 py-2 text-xs sm:text-sm hover:bg-gray-50"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 overflow-y-auto" style={{ maxHeight: '200px' }}>
                {discussions.map((discussion) => (
                  <div 
                    key={discussion.id}
                    onMouseEnter={() => setHoveredDiscussion(discussion.id)}
                    onMouseLeave={() => setHoveredDiscussion(null)}
                    className="flex items-start p-3 sm:p-4 rounded-lg transition-all cursor-pointer"
                    style={{
                      background: hoveredDiscussion === discussion.id ? '#ECF3FF' : '#FFFFFF',
                      boxShadow: hoveredDiscussion === discussion.id ? '0px 4px 45px rgba(13, 108, 255, 0.08)' : 'none',
                      border: '1px solid rgba(13, 108, 255, 0.08)'
                    }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl mr-2 sm:mr-3 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                      👩‍🎓
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base">{discussion.user}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 mt-1">
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
                      <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-2 break-words line-clamp-2">{discussion.message}</p>
                    </div>
                    <div className="relative flex-shrink-0">
                      <button 
                        onClick={() => setDiscussionMenuOpen(discussionMenuOpen === discussion.id ? null : discussion.id)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                      {discussionMenuOpen === discussion.id && (
                        <div className="absolute right-0 mt-1 w-32 bg-white border rounded shadow-lg z-20">
                          <button className="block w-full text-left px-3 py-2 text-xs sm:text-sm hover:bg-gray-50 flex items-center">
                            <Edit2 className="w-3 h-3 mr-2" /> Edit
                          </button>
                          <button 
                            onClick={() => deleteDiscussion(discussion.id)}
                            className="block w-full text-left px-3 py-2 text-xs sm:text-sm hover:bg-gray-50 flex items-center text-red-600"
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

            {/* STUDENTS SECTION */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200" style={{ padding: '16px' }}>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold flex items-center">
                  <span className="text-xl sm:text-2xl mr-2">🎓</span>
                  <span>Students</span>
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-gray-500">1.2k Active</span>
              </div>
              <div className="space-y-1 overflow-y-auto" style={{ maxHeight: '280px' }}>
                {[
                  { id: 12346, name: 'John Doe', img: 'Students.jpg' },
                  { id: 12347, name: 'Jane Smith', img: 'Students.jpg' },
                  { id: 12348, name: 'Mike Johnson', img: 'Students.jpg' },
                  { id: 12349, name: 'Sarah Williams', img: 'Students.jpg' },
                  { id: 12350, name: 'Tom Brown', img: 'Students.jpg' }
                ].map((student, i) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-xs sm:text-sm text-gray-900 truncate">{student.name}</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">Performance: A- / 90%</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                      <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      </button>
                      <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      </button>
                      <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
                        <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PERFORMANCE SECTION */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm" style={{ maxWidth: '1176px' }}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Performance</h3>
              <button className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800">
                Sort By ↓
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              <div className="lg:col-span-4">
                <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">Total Students</h4>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">12,000</div>
                <div className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                  From Jan 20, 2022 to July, 2022
                </div>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={performanceData}>
                    <XAxis dataKey="month" tick={{ fontSize: 10 }} />
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
              <div className="lg:col-span-8">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Bar dataKey="profit" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="revenue" fill="#F97316" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* CALENDAR & RESOURCES SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-4 sm:mb-6" style={{ maxWidth: '1176px' }}>
            {/* Calendar */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-gray-900">📅 Calendar</h3>
              
              <div className="flex justify-between mb-4 sm:mb-6 overflow-x-auto pb-2 gap-1 sm:gap-2">
                {calendarDays.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedDate(item.date)}
                    className={`flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all ${
                      selectedDate === item.date ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-50 text-gray-900 hover:bg-blue-100'
                    }`}
                    style={{ width: '70px', height: '60px', minWidth: '70px' }}
                  >
                    <div className="text-xs font-normal mb-1">{item.day}</div>
                    <div className="text-xl sm:text-2xl font-bold">{item.date}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 sm:space-y-4 overflow-y-auto" style={{ maxHeight: '200px' }}>
                {scheduleData[selectedDate]?.length > 0 ? (
                  scheduleData[selectedDate].map((schedule, idx) => (
                    <div key={idx}>
                      {idx === 0 && (
                        <div className="flex items-center mb-3 sm:mb-4">
                          <span className="text-base sm:text-xl font-semibold text-gray-900 mr-3 sm:mr-4">{schedule.time.split(' - ')[0]}</span>
                          <div className="flex-1 h-px bg-gray-200"></div>
                        </div>
                      )}
                      <div className="bg-blue-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border border-blue-100">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2 flex-1">
                            <h4 className="font-semibold text-sm sm:text-base text-gray-900">{schedule.course}</h4>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="flex items-center -space-x-2">
  <img src="/d1.jpg" alt="Student 1" className="w-4 h-4 rounded-full" />
  <img src="/d2.jpg" alt="Student 2" className="w-4 h-4 rounded-full" />
  <img src="/d3.jpg" alt="Student 3" className="w-4 h-4 rounded-full" />
  <img src="/d4.jpg" alt="Student 4" className="w-4 h-4 rounded-full" />
</div>
                            <span className="text-[9px] sm:text-[10px] font-normal text-gray-500 whitespace-nowrap">+60</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-gray-900">{schedule.time}</span>
                          <span className={`px-2 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs font-medium rounded ${
                            schedule.status === 'In Progress' ? 'bg-blue-500 text-white' :
                            schedule.status === 'Upcoming' ? 'bg-orange-500 text-white' :
                            'bg-green-500 text-white'
                          }`}>
                            {schedule.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500 text-sm">No classes scheduled</div>
                )}
              </div>
            </div>

            {/* Resources */}
            <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                  <span>Resources</span>
                </h3>
                <button 
                  onClick={() => setShowResourceModal(true)}
                  className="text-gray-500 hover:text-gray-700 flex items-center space-x-1 transition-colors text-xs sm:text-sm"
                >
                  <Plus size={16} strokeWidth={2} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden sm:inline font-medium">Create</span>
                </button>
              </div>
              
              <div className="flex gap-4 sm:gap-6 lg:gap-12 mb-4 sm:mb-6 border-b border-gray-200 overflow-x-auto">
                <button 
                  onClick={() => setActiveResourceTab('Lecture Slides')}
                  className={`pb-2 sm:pb-3 text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap ${
                    activeResourceTab === 'Lecture Slides' 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Slides
                  {activeResourceTab === 'Lecture Slides' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </button>
                <button 
                  onClick={() => setActiveResourceTab('Notes')}
                  className={`pb-2 sm:pb-3 text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap ${
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
                  className={`pb-2 sm:pb-3 text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap ${
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
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 overflow-y-auto pr-2" style={{ maxHeight: '280px' }}>
                {resources
                  .filter(resource => resource.type === activeResourceTab)
                  .map((resource, index) => (
                    <div key={index} className="flex items-start justify-between gap-2 sm:gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-600 text-[10px] sm:text-xs lg:text-sm mb-1">
                          Week {resource.week}: {resource.date}
                        </h4>
                        <p className="text-[10px] sm:text-xs lg:text-[14px] text-gray-600 font-normal mb-2">{resource.title}</p>
                      </div>
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                        <span className="text-[9px] sm:text-[10px] lg:text-sm font-medium hidden sm:inline">Download</span>
                      </button>
                    </div>
                  ))}
              </div>
              
              <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 mt-3 sm:mt-4 lg:mt-6 italic">
                <strong>Note:</strong> Check regularly for updates and new materials.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ANNOUNCEMENT MODAL */}
      {showAnnouncementModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Add Announcement</h3>
              <button onClick={() => setShowAnnouncementModal(false)}>
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Type</label>
                <select
                  value={newAnnouncement.type}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, type: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="schedule">Schedule Changes</option>
                  <option value="exams">Upcoming Exams</option>
                  <option value="contact">Instructor Contact</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  value={newAnnouncement.author}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, author: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter author name"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Content</label>
                <textarea
                  value={newAnnouncement.content}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  rows="4"
                  placeholder="Enter announcement content"
                />
              </div>
              <button
                onClick={handleAddAnnouncement}
                className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Add Announcement
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ASSIGNMENT MODAL */}
      {showAssignmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Create Assignment</h3>
              <button onClick={() => setShowAssignmentModal(false)}>
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={newAssignment.title}
                  onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter assignment title"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  value={newAssignment.subject}
                  onChange={(e) => setNewAssignment({...newAssignment, subject: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Due Date</label>
                <input
                  type="date"
                  value={newAssignment.date}
                  onChange={(e) => setNewAssignment({...newAssignment, date: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <button
                onClick={handleAddAssignment}
                className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Create Assignment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESOURCE MODAL */}
      {showResourceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Create New Resource</h3>
              <button onClick={() => setShowResourceModal(false)}>
                <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Week Number</label>
                <input
                  type="number"
                  value={newResource.week}
                  onChange={(e) => setNewResource({...newResource, week: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter week number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                <input
                  type="text"
                  value={newResource.date}
                  onChange={(e) => setNewResource({...newResource, date: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Aug 7, 2024"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={newResource.title}
                  onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter resource title"
                />
              </div>
              <button
                onClick={handleAddResource}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Create Resource
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DISCUSSION MODAL */}
      {newDiscussionOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Start New Discussion</h3>
              <button onClick={() => setNewDiscussionOpen(false)}>
                <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={newDiscussion.user}
                  onChange={(e) => setNewDiscussion({...newDiscussion, user: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Discussion Topic</label>
                <textarea
                  value={newDiscussion.message}
                  onChange={(e) => setNewDiscussion({...newDiscussion, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <button
                onClick={handleAddDiscussion}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Discussion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessorAssignmentDashboard;
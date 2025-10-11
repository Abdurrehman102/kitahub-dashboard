import React, { useState } from 'react';
import { Plus, ChevronDown, Search, MoreHorizontal, X, LayoutDashboard, FileText, MessageSquare, User, Settings, BookOpen, LogOut, Edit2, Trash2, Menu } from 'lucide-react';

const ProfessorDashboard = () => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(19);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [showDiscussionModal, setShowDiscussionModal] = useState(false);
  const [courseForm, setCourseForm] = useState({ title: '', date: '', assignments: '' });
  const [assignmentForm, setAssignmentForm] = useState({ title: '', course: '', dueDate: '', description: '' });
  const [discussionForm, setDiscussionForm] = useState({ title: '', message: '' });
  const [courses, setCourses] = useState([
    { id: 1, title: 'Medieval History', professor: 'Prof. Jane Smith', date: 'August 20, 2024', assignments: 13, enrollment: 64, recentActivity: 'Discussion posted on August 14, 2024' },
    { id: 2, title: 'Renaissance Art', professor: 'Prof. Jane Smith', date: 'August 15, 2024', assignments: 10, enrollment: 52, recentActivity: 'Assignment graded on August 12, 2024' }
  ]);
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Assignment 4: Answer Writing', course: 'Medieval History', dueDate: 'Aug 20, 2024', status: 'Pending Grade', description: ['Write a 5-page essay analyzing key factors', 'Include at least three scholarly sources', 'Follow the MLA format'] },
    { id: 2, title: 'Assignment 3: Research Paper', course: 'Renaissance Art', dueDate: 'Aug 25, 2024', status: 'Pending Grade', description: ['Research Renaissance painting techniques', 'Compare two artists from the period', 'Minimum 3000 words'] }
  ]);
  const [mostRecentDropdownOpen, setMostRecentDropdownOpen] = useState(false);
  const [discussionFilter, setDiscussionFilter] = useState('Most Recent');
  const [discussionMenuOpen, setDiscussionMenuOpen] = useState(null);
  const [hoveredDiscussion, setHoveredDiscussion] = useState(null);
  const [discussions, setDiscussions] = useState([
    { id: 1, user: 'Maya Thompson', class: 'Class 7', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },
    { id: 2, user: 'Maya Thompson', class: 'Class 9', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },
    { id: 3, user: 'Maya Thompson', class: 'Class 7', time: '12 Minutes', message: 'You: List the most recent or active discussion...', bgColor: '#FFFFFF' },
  ]);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Assignments', icon: FileText },
    { name: 'Discussions', icon: MessageSquare },
    { name: 'Profile', icon: User },
    { name: 'Settings', icon: Settings },
    { name: 'Courses Overview', icon: BookOpen },
  ];

  const calendarDays = [
    { day: 'Mon', date: 16 }, { day: 'Tue', date: 17 }, { day: 'Wed', date: 18 }, { day: 'Thu', date: 19 }, { day: 'Fri', date: 20 },
    { day: 'Sat', date: 21 }, { day: 'Sun', date: 22 }, { day: 'Mon', date: 23 }, { day: 'Tue', date: 24 }, { day: 'Wed', date: 25 },
  ];

  const scheduleData = {
    16: [{ course: 'Renaissance Art', time: '9:00 - 10:00', status: 'Completed' }],
    17: [{ course: 'Ancient Philosophy', time: '10:00 - 11:00', status: 'Completed' }],
    18: [{ course: 'Modern Literature', time: '2:00 - 3:00', status: 'Completed' }],
    19: [
      { course: 'Medieval History', time: '8:00 - 9:00', status: 'In Progress' },
      { course: 'Classical Music', time: '10:00 - 11:00', status: 'Upcoming' },
      { course: 'World Geography', time: '2:00 - 3:00', status: 'Upcoming' }
    ],
    20: [{ course: 'European History', time: '9:00 - 10:00', status: 'Upcoming' }],
    21: [], 22: []
  };

  const handleAddCourse = () => {
    if (courseForm.title && courseForm.date) {
      const newCourse = {
        id: courses.length + 1, title: courseForm.title, professor: 'Prof. Jane Smith',
        date: new Date(courseForm.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        assignments: parseInt(courseForm.assignments) || 0, enrollment: 64,
        recentActivity: `Course created on ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
      };
      setCourses([...courses, newCourse]);
      setShowCourseModal(false);
      setCourseForm({ title: '', date: '', assignments: '' });
    }
  };

  const handleAddAssignment = () => {
    if (assignmentForm.title && assignmentForm.course && assignmentForm.dueDate) {
      const descriptionArray = assignmentForm.description ? assignmentForm.description.split('\n').filter(line => line.trim()) : ['No description provided'];
      const newAssignment = {
        id: assignments.length + 1, title: assignmentForm.title, course: assignmentForm.course,
        dueDate: new Date(assignmentForm.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: 'Pending Grade', description: descriptionArray
      };
      setAssignments([...assignments, newAssignment]);
      setShowAssignmentModal(false);
      setAssignmentForm({ title: '', course: '', dueDate: '', description: '' });
    }
  };

  const handleAddDiscussion = () => {
    if (discussionForm.title && discussionForm.message) {
      const newDisc = {
        id: discussions.length + 1, user: 'Prof. Jane Smith', class: 'Medieval History',
        time: 'Just now', message: discussionForm.message, bgColor: '#FFFFFF'
      };
      setDiscussions([newDisc, ...discussions]);
      setDiscussionForm({ title: '', message: '' });
      setShowDiscussionModal(false);
    }
  };

  const deleteDiscussion = (id) => {
    setDiscussions(discussions.filter(d => d.id !== id));
    setDiscussionMenuOpen(null);
  };

  const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-4 lg:p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900">{title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="w-5 lg:w-6 h-5 lg:h-6" /></button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 text-white flex flex-col transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        style={{ background: 'linear-gradient(0deg, #D620FF 0%, #0D6CFF 100%)' }}>
        
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="lg:hidden fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-4"
          style={{ background: 'linear-gradient(90deg, #D620FF 0%, #0D6CFF 100%)' }}>
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
              <span className="text-purple-900 font-bold text-2xl">K</span>
            </div>
            <span className="font-bold text-lg text-white">KITAHUB</span>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20">
            <Menu className="w-6 h-6" />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8 pt-20 lg:pt-8 mt-16">
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
              src="/DCharacter.png" 
              alt="Professor" 
              className="w-40 h-40 lg:w-56 lg:h-56 object-contain"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="text-base lg:text-lg font-semibold text-gray-900">📚 Active Courses</h3>
                <button onClick={() => setShowCourseModal(true)} className="text-gray-500 px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium flex items-center transition-colors hover:text-gray-700">
                  <Plus className="w-4 lg:w-5 h-4 lg:h-5 mr-1 lg:mr-2" />New Course
                </button>
              </div>
              <div className="space-y-3 lg:space-y-4 overflow-y-auto max-h-[300px] lg:max-h-72">
                {courses.map((course) => (
                  <div key={course.id} className="rounded-lg p-3 lg:p-4 bg-gray-50 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm lg:text-lg text-gray-900">{course.title}</h4>
                      <span className="text-xs lg:text-sm text-gray-500">{course.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 lg:mb-3"><p className="text-sm lg:text-base font-medium text-gray-900">{course.professor}</p></div>
                    <div className="flex items-center justify-between mb-2 lg:mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs lg:text-sm font-normal text-gray-500">Enrollment:</span>
                       <div className="flex items-center -space-x-2">
  <img src="/d1.jpg" alt="Student 1" className="w-4 h-4 rounded-full" />
  <img src="/d2.jpg" alt="Student 2" className="w-4 h-4 rounded-full" />
  <img src="/d3.jpg" alt="Student 3" className="w-4 h-4 rounded-full" />
  <img src="/d4.jpg" alt="Student 4" className="w-4 h-4 rounded-full" />
</div>
                        <span className="text-xs font-normal text-gray-500">+{course.enrollment - 4} More</span>
                      </div>
                      <span className="text-xs lg:text-sm font-normal text-gray-500">Assignments: {course.assignments}</span>
                    </div>
                    <p className="text-xs font-normal text-gray-500">Recent Activity: {course.recentActivity}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="text-base lg:text-lg font-semibold text-gray-900">📁 Assignments</h3>
                <button onClick={() => setShowAssignmentModal(true)} className="text-gray-500 px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium flex items-center transition-colors hover:text-gray-700">
                  <Plus className="w-4 lg:w-5 h-4 lg:h-5 mr-1 lg:mr-2" />New Assignment
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-4 lg:mb-6 gap-2">
                <h4 className="font-normal text-xs lg:text-sm text-gray-500">Pending Submission</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-xs lg:text-sm font-medium text-gray-500">Sort By:</span>
                  <div className="relative">
                    <button onClick={() => setSortDropdownOpen(!sortDropdownOpen)} className="flex items-center bg-blue-50 px-2 lg:px-3 py-1.5 lg:py-2 rounded text-xs lg:text-sm font-semibold text-gray-600 hover:bg-blue-100 transition-colors">
                      Due Date <ChevronDown className="w-3 lg:w-4 h-3 lg:h-4 ml-1" />
                    </button>
                    {sortDropdownOpen && (
                      <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-20 min-w-32">
                        {['Due Date', 'Subject', 'Status'].map((opt) => (<button key={opt} onClick={() => setSortDropdownOpen(false)} className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 text-gray-600">{opt}</button>))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-3 lg:space-y-4 overflow-y-auto max-h-[300px] lg:max-h-52">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="rounded-lg p-4 bg-gray-50 shadow-sm border relative hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-medium text-sm text-gray-900 mb-1">{assignment.title}</h5>
                        <p className="font-medium text-base text-gray-900 mb-2">{assignment.course}</p>
                        <div className="text-xs text-gray-600 mb-3">
                          <ul className="list-disc list-inside space-y-1">{assignment.description.map((desc, idx) => (<li key={idx}>{desc}</li>))}</ul>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="bg-gray-200 text-gray-900 px-2 py-1 rounded text-xs font-medium">{assignment.status}</span>
                          <span className="text-xs font-medium text-gray-500">Due: <span className="text-gray-900">{assignment.dueDate}</span></span>
                        </div>
                      </div>
                      <MoreHorizontal className="w-5 h-5 text-gray-400 ml-4 cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-6">
              <h3 className="font-bold text-base lg:text-lg mb-4 lg:mb-6 text-gray-900">📅 Calendar</h3>
              <div className="flex justify-between mb-4 lg:mb-6 overflow-x-auto pb-2 gap-1 lg:gap-2">
                {calendarDays.map((item, index) => (
                  <div key={index} onClick={() => setSelectedDate(item.date)} className={`flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all flex-shrink-0 ${selectedDate === item.date ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-50 text-gray-900 hover:bg-blue-100'}`} style={{ width: '70px', height: '60px', minWidth: '70px' }}>
                    <div className="text-xs font-normal mb-1">{item.day}</div>
                    <div className="text-lg lg:text-2xl font-bold">{item.date}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 lg:space-y-4 overflow-y-auto max-h-[300px] lg:max-h-52">
                {scheduleData[selectedDate]?.length > 0 ? (
                  scheduleData[selectedDate].map((schedule, idx) => (
                    <div key={idx}>
                      {idx === 0 && (<div className="flex items-center mb-3 lg:mb-4"><span className="text-lg lg:text-xl font-semibold text-gray-900 mr-4">{schedule.time.split(' - ')[0]}</span><div className="flex-1 h-px bg-gray-200"></div></div>)}
                      <div className="bg-blue-50 rounded-xl p-3 lg:p-4 mb-3 lg:mb-4 border border-blue-100">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2 flex-1"><h4 className="font-semibold text-sm lg:text-base text-gray-900">{schedule.course}</h4></div>
                          <div className="flex items-center space-x-1">
                            <div className="flex items-center -space-x-2">
  <img src="/d1.jpg" alt="Student 1" className="w-4 h-4 rounded-full" />
  <img src="/d2.jpg" alt="Student 2" className="w-4 h-4 rounded-full" />
  <img src="/d3.jpg" alt="Student 3" className="w-4 h-4 rounded-full" />
  <img src="/d4.jpg" alt="Student 4" className="w-4 h-4 rounded-full" />
</div>
                            <span className="text-[10px] font-normal text-gray-500 whitespace-nowrap">+60</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs lg:text-sm font-medium text-gray-900">{schedule.time}</span>
                          <span className={`px-2 lg:px-3 py-1 lg:py-2 text-xs font-medium rounded ${schedule.status === 'In Progress' ? 'bg-blue-500 text-white' : schedule.status === 'Upcoming' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>{schedule.status}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (<div className="text-center py-6 lg:py-8 text-sm text-gray-500">No classes scheduled</div>)}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6" style={{ border: '1px solid rgba(13, 108, 255, 0.08)' }}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center"><span className="mr-2 text-xl">💬</span><h3 className="font-bold text-lg text-gray-900">Discussion Board</h3></div>
                <button onClick={() => setShowDiscussionModal(true)} className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700">
                  <Plus className="w-4 h-4" /><span className="font-semibold">New Discussion</span>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center mb-6 gap-3">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <input type="text" placeholder="Search Discussions..." className="w-full pl-5 pr-10 py-2 border rounded bg-gray-50 text-sm" />
                </div>
                <div className="relative">
                  <button onClick={() => setMostRecentDropdownOpen(!mostRecentDropdownOpen)} className="flex items-center justify-between px-3 py-2 rounded bg-blue-50 text-sm text-gray-600 w-full sm:w-36">
                    <span>{discussionFilter}</span><ChevronDown className="w-4 h-4" />
                  </button>
                  {mostRecentDropdownOpen && (
                    <div className="absolute top-full right-0 mt-1 w-full bg-white border rounded shadow-lg z-20">
                      {['Most Recent', 'Most Active', 'Oldest First'].map((opt) => (<button key={opt} onClick={() => { setDiscussionFilter(opt); setMostRecentDropdownOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50">{opt}</button>))}
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-4 overflow-y-auto max-h-72">
                {discussions.map((discussion) => (
                  <div key={discussion.id} onMouseEnter={() => setHoveredDiscussion(discussion.id)} onMouseLeave={() => setHoveredDiscussion(null)} className="flex items-start p-4 rounded-lg transition-all cursor-pointer" style={{ background: hoveredDiscussion === discussion.id ? '#ECF3FF' : '#FFFFFF', boxShadow: hoveredDiscussion === discussion.id ? '0px 4px 45px rgba(13, 108, 255, 0.08)' : 'none', border: '1px solid rgba(13, 108, 255, 0.08)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-3 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>👩‍🎓</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-base">{discussion.user}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        <span className="px-2 py-1 rounded" style={{ background: hoveredDiscussion === discussion.id ? '#ECF3FF' : '#ffffffff' }}>{discussion.class}</span>
                        <span className="ml-2" style={{ color: hoveredDiscussion === discussion.id ? '#757575' : '#999999' }}>({discussion.time})</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 break-words">{discussion.message}</p>
                    </div>
                    <div className="relative flex-shrink-0">
                      <button onClick={() => setDiscussionMenuOpen(discussionMenuOpen === discussion.id ? null : discussion.id)} className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
                      </button>
                      {discussionMenuOpen === discussion.id && (
                        <div className="absolute right-0 mt-1 w-32 bg-white border rounded shadow-lg z-20">
                          <button className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center"><Edit2 className="w-3 h-3 mr-2" /> Edit</button>
                          <button onClick={() => deleteDiscussion(discussion.id)} className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center text-red-600"><Trash2 className="w-3 h-3 mr-2" /> Delete</button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Modal show={showCourseModal} onClose={() => setShowCourseModal(false)} title="Add New Course">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label><input type="text" value={courseForm.title} onChange={(e) => setCourseForm({...courseForm, title: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g., Medieval History" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label><input type="date" value={courseForm.date} onChange={(e) => setCourseForm({...courseForm, date: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Number of Assignments</label><input type="number" value={courseForm.assignments} onChange={(e) => setCourseForm({...courseForm, assignments: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="0" /></div>
          <button onClick={handleAddCourse} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">Add Course</button>
        </div>
      </Modal>

      <Modal show={showAssignmentModal} onClose={() => setShowAssignmentModal(false)} title="Create New Assignment">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Assignment Title</label><input type="text" value={assignmentForm.title} onChange={(e) => setAssignmentForm({...assignmentForm, title: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g., Essay on Renaissance" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Course</label><select value={assignmentForm.course} onChange={(e) => setAssignmentForm({...assignmentForm, course: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"><option value="">Select a course</option>{courses.map(course => (<option key={course.id} value={course.title}>{course.title}</option>))}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label><input type="date" value={assignmentForm.dueDate} onChange={(e) => setAssignmentForm({...assignmentForm, dueDate: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Description</label><textarea value={assignmentForm.description} onChange={(e) => setAssignmentForm({...assignmentForm, description: e.target.value})} rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Provide assignment details and instructions..." /></div>
          <button onClick={handleAddAssignment} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">Create Assignment</button>
        </div>
      </Modal>

      <Modal show={showDiscussionModal} onClose={() => setShowDiscussionModal(false)} title="Start New Discussion">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Discussion Topic/Title</label><input type="text" value={discussionForm.title} onChange={(e) => setDiscussionForm({...discussionForm, title: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g., Analyzing Key Factors in WWII" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Initial Message</label><textarea value={discussionForm.message} onChange={(e) => setDiscussionForm({...discussionForm, message: e.target.value})} rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Start the conversation..." /></div>
          <button onClick={handleAddDiscussion} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">Post Discussion</button>
        </div>
      </Modal>
    </div>
  );
};

export default ProfessorDashboard;
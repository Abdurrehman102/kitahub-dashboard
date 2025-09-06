import React, { useState } from 'react';
import { Plus, Calendar, Users, TrendingUp, MessageCircle, Search, ChevronDown, BarChart, FileText } from 'lucide-react';
import { LineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const ProfessorDashboardContent = ({ userName = 'Prof. Jane Smith' }) => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  const activeCourses = [
    {
      title: 'Medieval History',
      instructor: 'Prof. Jane Smith',
      date: 'August 20, 2024',
      enrollment: 140,
      assignments: 13,
      recentActivity: 'Discussion posted on August 14, 2024'
    },
    {
      title: 'Philosophy of The Person',
      instructor: 'Prof. Jane Smith', 
      date: 'September 4, 2024',
      enrollment: 85,
      assignments: 8,
      recentActivity: 'New assignment posted on September 2, 2024'
    }
  ];

  const assignments = [
    {
      type: 'Answer Writing',
      course: 'Medieval History',
      dueDate: 'August 20, 2024',
      status: 'Pending Grading',
      submissions: 13
    },
    {
      type: 'Essay Assignment', 
      course: 'Philosophy of The Person',
      dueDate: 'September 10, 2024',
      status: 'Active',
      submissions: 25
    }
  ];

  const calendarEvents = [
    {
      day: 'Mon',
      date: 16,
      time: '8:00PM',
      course: 'Medieval History',
      duration: '8:00 - 9:00',
      status: 'In Progress'
    },
    {
      day: 'Tue', 
      date: 17,
      time: '9:00PM',
      course: 'Philosophy of The Person',
      duration: '9:00 - 10:00',
      status: 'Scheduled'
    }
  ];

  const students = [
    { name: 'Maya Thompson', performance: 'A / 92%', course: 'Medieval History', id: 1 },
    { name: 'John Doe', performance: 'B+ / 87%', course: 'Philosophy', id: 2 },
    { name: 'Sarah Wilson', performance: 'A- / 89%', course: 'Medieval History', id: 3 },
    { name: 'Mike Johnson', performance: 'B / 84%', course: 'Philosophy', id: 4 },
    { name: 'Emily Davis', performance: 'A+ / 95%', course: 'Medieval History', id: 5 }
  ];

  const performanceData = [
    { month: 'Jan', students: 120, submissions: 450, grades: 420 },
    { month: 'Feb', students: 135, submissions: 520, grades: 485 },
    { month: 'Mar', students: 125, submissions: 480, grades: 465 },
    { month: 'Apr', students: 140, submissions: 580, grades: 550 },
    { month: 'May', students: 150, submissions: 620, grades: 590 },
    { month: 'Jun', students: 145, submissions: 595, grades: 570 }
  ];

  const discussions = [
    {
      user: 'Maya Thompson',
      class: 'Medieval History',
      time: '12 Minutes',
      message: 'Discussion about feudalism in medieval Europe...'
    },
    {
      user: 'John Doe', 
      class: 'Philosophy',
      time: '25 Minutes',
      message: 'Question regarding Aristotelian ethics...'
    }
  ];

  const announcements = [
    {
      type: 'Schedule Changes',
      author: 'System',
      date: 'September 4, 2024',
      title: 'Lecture rescheduled for September 10th due to conference',
      priority: 'high'
    },
    {
      type: 'Assignment Reminder',
      author: 'System', 
      date: 'September 3, 2024',
      title: '15 students have pending submissions in Medieval History',
      priority: 'medium'
    }
  ];

  return (
    <main className="p-6 overflow-y-auto bg-gray-50 min-h-screen ml-64">
      {/* Welcome Header Card */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 header-gradient rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <p className="text-blue-100 mb-2 text-sm font-medium">{currentDate}</p>
            <h1 className="text-3xl font-bold mb-2">Welcome Back 👋</h1>
            <h2 className="text-2xl font-semibold">{userName}</h2>
          </div>
          <div className="flex-shrink-0 relative">
            {/* 3D Professor Character */}
            <div className="w-48 h-48 flex items-center justify-center text-6xl relative">
              👨‍🏫
              {/* Floating academic elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-xl transform rotate-12">
                📊
              </div>
              <div className="absolute -bottom-2 -left-6 w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center text-lg transform -rotate-12">
                📝
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section - Courses and Calendar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Courses */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📚</span>
                <h3 className="text-lg font-semibold text-gray-800">Active Courses</h3>
              </div>
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Course</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {activeCourses.map((course, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{course.title}</h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>Started: {course.date}</span>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span className="font-medium">{course.enrollment}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{course.assignments}</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Recent Activity: {course.recentActivity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">Schedule</h3>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
              <div className="font-medium text-gray-400 py-2">Mon</div>
              <div className="font-medium text-gray-400 py-2">Tue</div>
              <div className="font-medium text-gray-400 py-2">Wed</div>
              <div className="font-medium text-gray-400 py-2">Thu</div>
              <div className="font-medium text-gray-400 py-2">Fri</div>
              <div className="font-medium text-gray-400 py-2">Sat</div>
              <div className="font-medium text-gray-400 py-2">Sun</div>
              
              <div className="py-2 px-1 rounded text-gray-700">16</div>
              <div className="py-2 px-1 rounded text-gray-700">17</div>
              <div className="py-2 px-1 rounded text-gray-700">18</div>
              <div className="py-2 px-1 rounded bg-blue-500 text-white font-medium">19</div>
              <div className="py-2 px-1 rounded text-gray-700">20</div>
              <div className="py-2 px-1 rounded text-gray-700">21</div>
              <div className="py-2 px-1 rounded text-gray-700">22</div>
            </div>

            <div className="space-y-3">
              {calendarEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-gray-600">{event.time}</div>
                    <div>
                      <p className="font-medium text-gray-800">{event.course}</p>
                      <p className="text-sm text-gray-600">{event.duration}</p>
                    </div>
                  </div>
                  <span className={`status-badge ${
                    event.status === 'In Progress' ? 'status-progress' : 'status-pending'
                  }`}>
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Performance Overview</h3>
              <button className="flex items-center space-x-1 text-blue-600">
                <span className="text-sm">This Month</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line 
                    type="monotone" 
                    dataKey="students" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="submissions" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="grades" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                    dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <div className="text-blue-600 font-semibold">150</div>
                <div className="text-xs text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-semibold">620</div>
                <div className="text-xs text-gray-600">Submissions</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-600 font-semibold">590</div>
                <div className="text-xs text-gray-600">Graded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Assignments and Students */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 card-shadow">
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">225</p>
                  <p className="text-sm text-gray-600">Total Students</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 card-shadow">
              <div className="flex items-center space-x-2">
                <FileText className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">38</p>
                  <p className="text-sm text-gray-600">Assignments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Assignments */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📋</span>
                <h3 className="text-lg font-semibold text-gray-800">Pending Review</h3>
              </div>
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Assignment</span>
              </button>
            </div>

            <div className="space-y-4">
              {assignments.map((assignment, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{assignment.type}</h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 014 0zM10 18a2 2 0 110-4 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{assignment.course}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Due: {assignment.dueDate}</span>
                    <span className="text-blue-600 font-medium">{assignment.submissions} submissions</span>
                  </div>
                  <span className={`status-badge mt-2 inline-block ${
                    assignment.status === 'Pending Grading' ? 'status-pending' : 'status-progress'
                  }`}>
                    {assignment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Students Activity */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              </div>
            </div>

            <div className="space-y-3">
              {students.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=4F88FF&color=fff&size=32`}
                      alt={student.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <span className="font-medium text-gray-800 text-sm">{student.name}</span>
                      <p className="text-xs text-gray-500">{student.course}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-green-600">{student.performance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Discussions */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">Recent Discussions</h3>
              </div>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(discussion.user)}&background=6366F1&color=fff&size=40`}
                    alt={discussion.user}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-800 text-sm">{discussion.user}</h4>
                      <span className="text-xs text-gray-500">{discussion.class}</span>
                      <span className="text-xs text-gray-400">({discussion.time})</span>
                    </div>
                    <p className="text-sm text-gray-600">{discussion.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfessorDashboardContent;
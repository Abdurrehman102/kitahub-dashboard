"use client";
import React, { useState } from 'react';
import { Plus, Calendar, Users, FileText, Eye, Edit, Trash2, Search, Filter } from 'lucide-react';

const ProfessorAssignmentsContent = ({ userRole = 'professor', userName = 'Prof. Jane Smith' }) => {
  const [activeTab, setActiveTab] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');

  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  const activeAssignments = [
    {
      id: 1,
      title: 'Medieval History Essay',
      course: 'Medieval History',
      dueDate: 'September 25, 2024',
      totalStudents: 140,
      submitted: 89,
      pending: 51,
      graded: 25,
      status: 'Active',
      type: 'Essay'
    },
    {
      id: 2,
      title: 'Philosophy Discussion Forum',
      course: 'Philosophy of The Person',
      dueDate: 'September 30, 2024',
      totalStudents: 85,
      submitted: 45,
      pending: 40,
      graded: 12,
      status: 'Active',
      type: 'Discussion'
    },
    {
      id: 3,
      title: 'Mathematics Problem Set 4',
      course: 'Mathematics III',
      dueDate: 'October 5, 2024',
      totalStudents: 95,
      submitted: 20,
      pending: 75,
      graded: 0,
      status: 'Active',
      type: 'Problem Set'
    }
  ];

  const draftAssignments = [
    {
      id: 4,
      title: 'Renaissance Art Analysis',
      course: 'Art History',
      createdDate: 'September 20, 2024',
      status: 'Draft',
      type: 'Analysis'
    },
    {
      id: 5,
      title: 'Physics Lab Report',
      course: 'Physics I',
      createdDate: 'September 18, 2024',
      status: 'Draft',
      type: 'Lab Report'
    }
  ];

  const completedAssignments = [
    {
      id: 6,
      title: 'Answer Writing Exercise',
      course: 'Medieval History',
      dueDate: 'August 20, 2024',
      totalStudents: 140,
      submitted: 140,
      graded: 140,
      averageGrade: '85%',
      status: 'Completed',
      type: 'Writing'
    },
    {
      id: 7,
      title: 'Question & Answer Session',
      course: 'Philosophy of The Person',
      dueDate: 'August 15, 2024',
      totalStudents: 85,
      submitted: 82,
      graded: 82,
      averageGrade: '88%',
      status: 'Completed',
      type: 'Q&A'
    }
  ];

  const pendingReview = [
    {
      student: 'Maya Thompson',
      assignment: 'Medieval History Essay',
      course: 'Medieval History',
      submittedDate: 'September 20, 2024',
      dueDate: 'September 25, 2024',
      status: 'Pending Review'
    },
    {
      student: 'John Davis',
      assignment: 'Philosophy Discussion',
      course: 'Philosophy of The Person',
      submittedDate: 'September 22, 2024',
      dueDate: 'September 30, 2024',
      status: 'Pending Review'
    },
    {
      student: 'Sarah Wilson',
      assignment: 'Mathematics Problem Set',
      course: 'Mathematics III',
      submittedDate: 'September 21, 2024',
      dueDate: 'October 5, 2024',
      status: 'Pending Review'
    }
  ];

  const renderActiveAssignments = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {activeAssignments.map((assignment) => (
        <div key={assignment.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{assignment.title}</h3>
              <p className="text-sm text-blue-600 mb-2">{assignment.course}</p>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Due: {assignment.dueDate}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Eye className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Edit className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Trash2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{assignment.submitted}</div>
              <div className="text-xs text-gray-600">Submitted</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-600">{assignment.pending}</div>
              <div className="text-xs text-gray-600">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">{assignment.graded}</div>
              <div className="text-xs text-gray-600">Graded</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-1" />
              <span>{assignment.totalStudents} students</span>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {assignment.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompletedAssignments = () => (
    <div className="space-y-4">
      {completedAssignments.map((assignment) => (
        <div key={assignment.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{assignment.title}</h3>
              <p className="text-sm text-blue-600 mb-2">{assignment.course}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Completed: {assignment.dueDate}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{assignment.totalStudents} students</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-green-600 mb-1">{assignment.averageGrade}</div>
              <div className="text-sm text-gray-600">Average Grade</div>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mt-2 inline-block">
                {assignment.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDraftAssignments = () => (
    <div className="space-y-4">
      {draftAssignments.map((assignment) => (
        <div key={assignment.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-dashed">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{assignment.title}</h3>
              <p className="text-sm text-blue-600 mb-2">{assignment.course}</p>
              <div className="text-sm text-gray-600">
                Created: {assignment.createdDate}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Continue Editing
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Trash2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="ml-64 pt-16 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <p className="text-purple-100 mb-2 text-sm font-medium">{currentDate}</p>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <h2 className="text-2xl font-semibold">{userName}</h2>
          </div>
          <div className="flex-shrink-0">
            <div className="w-32 h-32 flex items-center justify-center text-6xl">
              👨‍🏫
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">225</div>
              <div className="text-sm text-gray-600">Total Students</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">38</div>
              <div className="text-sm text-gray-600">Assignments</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Eye className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Pending Review</div>
                <div className="text-sm text-gray-600">{pendingReview.length} submissions</div>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              + New Assignment
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-8">
          {/* Assignments Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Manage Assignments</h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Create New Assignment</span>
              </button>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search assignments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4 text-gray-600" />
                <span>Filter</span>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('active')}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'active'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Active Assignments
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'completed'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Completed Assignments
              </button>
              <button
                onClick={() => setActiveTab('drafts')}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'drafts'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Drafts
              </button>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === 'active' && renderActiveAssignments()}
              {activeTab === 'completed' && renderCompletedAssignments()}
              {activeTab === 'drafts' && renderDraftAssignments()}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Pending Review */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Pending Review</h3>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {pendingReview.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{item.assignment}</h4>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Review
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    <strong>{item.student}</strong> - {item.course}
                  </div>
                  <div className="text-sm text-gray-500">
                    Submitted: {item.submittedDate}
                  </div>
                  <div className="text-xs text-blue-600 mt-2">
                    13 submissions pending
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Plus className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Create Assignment</div>
                  <div className="text-sm text-gray-600">Start a new assignment</div>
                </div>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Grade Submissions</div>
                  <div className="text-sm text-gray-600">Review pending work</div>
                </div>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">View Students</div>
                  <div className="text-sm text-gray-600">Manage class roster</div>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">New submission from Maya Thompson</div>
                  <div className="text-xs text-gray-500">Medieval History Essay • 2 hours ago</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Assignment published successfully</div>
                  <div className="text-xs text-gray-500">Philosophy Discussion • 5 hours ago</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">25 submissions graded</div>
                  <div className="text-xs text-gray-500">Mathematics Problem Set • 1 day ago</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Course material uploaded</div>
                  <div className="text-xs text-gray-500">Week 3 Lecture Slides • 2 days ago</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Discussion forum created</div>
                  <div className="text-xs text-gray-500">Philosophy of Mind Topic • 3 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorAssignmentsContent;
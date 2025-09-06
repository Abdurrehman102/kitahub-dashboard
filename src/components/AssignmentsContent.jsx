import React, { useState } from 'react';
import { Calendar, Clock, Filter, Plus, ChevronDown, Search } from 'lucide-react';

const AssignmentsContent = ({ userRole = 'student' }) => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedCourse, setSelectedCourse] = useState('all');

  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  const upcomingAssignments = [
    {
      course: 'Mathematics III',
      title: 'View Assignment Details',
      instructor: 'HD More',
      status: 'Submitted',
      dueDate: 'August 25, 2024',
      grade: null,
      icon: '📐'
    },
    {
      course: 'Medieval History',
      title: 'View Assignment Details',
      instructor: 'HD More',
      status: 'Submitted',
      dueDate: 'September 15, 2024',
      grade: null,
      icon: '🏛️'
    },
    {
      course: 'Medieval History',
      title: 'View Assignment Details',
      instructor: 'HD More',
      status: 'Submitted',
      dueDate: 'September 15, 2024',
      grade: null,
      icon: '🏛️'
    }
  ];

  const pastAssignments = [
    {
      course: 'Medieval History',
      title: 'Answer Writing',
      instructor: 'HD More',
      status: 'Graded',
      grade: '85%',
      feedback: 'Great job on the analysis! However, make sure to include all references correctly.',
      dueDate: 'August 20, 2024',
      icon: '🏛️'
    },
    {
      course: 'English Literature',
      title: 'Question & Answer',
      instructor: 'HD More',
      status: 'Graded',
      grade: '90%',
      feedback: 'Excellent presentation! Keep up the good work.',
      dueDate: 'August 15, 2024',
      icon: '📚'
    }
  ];

  const assignmentLinks = [
    {
      title: 'Medieval History Assignment',
      details: 'View Assignment Details',
      dueDate: 'September 25, 2024'
    },
    {
      title: 'Medieval History Assignment',
      details: 'View Assignment Details',
      dueDate: 'September 25, 2024'
    },
    {
      title: 'Medieval History Assignment',
      details: 'View Assignment Details',  
      dueDate: 'September 25, 2024'
    },
    {
      title: 'Medieval History Assignment',
      details: 'View Assignment Details',
      dueDate: 'September 25, 2024'
    }
  ];

  const renderAssignmentCard = (assignment, index) => (
    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{assignment.icon}</span>
          <div>
            <h3 className="font-semibold text-gray-800">{assignment.course}</h3>
            <p className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">{assignment.title}</p>
          </div>
        </div>
        <div className="text-right">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            assignment.status === 'Submitted' ? 'bg-green-100 text-green-800' :
            assignment.status === 'Graded' ? 'bg-blue-100 text-blue-800' :
            assignment.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {assignment.status}
          </span>
          {assignment.grade && (
            <p className="text-sm text-gray-600 mt-1">Grade: {assignment.grade}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
        <span>Instructor: {assignment.instructor}</span>
        <span>Due: {assignment.dueDate}</span>
      </div>
      
      {assignment.feedback && (
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Instructor Feedback:</span> {assignment.feedback}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="ml-64 pt-16 p-6 bg-gray-50 min-h-screen">
      {/* Welcome Header Card */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <p className="text-blue-100 mb-2 text-sm font-medium">{currentDate}</p>
            <h1 className="text-3xl font-bold mb-2">Class Code: 44553</h1>
            <h2 className="text-2xl font-semibold">Philosophy of The Person</h2>
          </div>
          <div className="flex-shrink-0 relative">
            {/* 3D Character at desk */}
            <div className="w-48 h-48 flex items-center justify-center text-6xl relative">
              👨‍💼
              {/* Desk and laptop illustration */}
              <div className="absolute bottom-0 w-32 h-4 bg-yellow-600 rounded-lg"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gray-800 rounded text-xs flex items-center justify-center">
                💻
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Section - Assignments */}
        <div className="xl:col-span-2 space-y-6">
          {/* Tabs */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📋</span>
                <h3 className="text-lg font-semibold text-gray-800">Assignments</h3>
              </div>
              {userRole === 'professor' && (
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>New Assignment</span>
                </button>
              )}
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'upcoming'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Upcoming Assignments
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'past'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Past Assignments
              </button>
              <button
                onClick={() => setActiveTab('links')}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'links'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Assignment Link
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === 'upcoming' && upcomingAssignments.map((assignment, index) => 
                renderAssignmentCard(assignment, index)
              )}
              {activeTab === 'past' && pastAssignments.map((assignment, index) => 
                renderAssignmentCard(assignment, index)
              )}
              {activeTab === 'links' && (
                <div className="space-y-4">
                  {assignmentLinks.map((link, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-800">{link.title}</h4>
                          <p className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">{link.details}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Due: {link.dueDate}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Instructor Info & Details */}
        <div className="space-y-6">
          {/* Instructor Information */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-lg">👨‍🏫</span>
              <h3 className="text-lg font-semibold text-gray-800">Instructor's Information</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="https://ui-avatars.com/api/?name=Dr+Jane+Doe&background=4F88FF&color=fff&size=48"
                  alt="Dr. Jane Doe"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">Dr. Jane Doe</h4>
                  <p className="text-sm text-gray-600">Professor of The Government University</p>
                  <p className="text-sm text-blue-600">+1 (123) 456-7890</p>
                  <p className="text-sm text-blue-600">jane.doe@university.edu</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <img
                  src="https://ui-avatars.com/api/?name=Prof+Emily+Davis&background=10B981&color=fff&size=48"
                  alt="Prof. Emily Davis"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">Prof. Emily Davis</h4>
                  <p className="text-sm text-gray-600">Professor of The Government University</p>
                  <p className="text-sm text-blue-600">+1 (123) 456-7890</p>
                  <p className="text-sm text-blue-600">emily.davis@university.edu</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <img
                  src="https://ui-avatars.com/api/?name=Dr+Michael+Smith&background=F59E0B&color=fff&size=48"
                  alt="Dr. Michael Smith"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">Dr. Michael Smith</h4>
                  <p className="text-sm text-gray-600">Professor of The Government University</p>
                  <p className="text-sm text-blue-600">+1 (123) 456-7890</p>
                  <p className="text-sm text-blue-600">michael.smith@university.edu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Assignment Details */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Assignment Details</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Medieval History Assignment</h4>
                <p className="text-sm text-gray-600 mb-2">The Rise and Fall of Feudalism</p>
                <p className="text-xs text-gray-500 mb-2">September 25, 2024</p>
                <p className="text-sm text-gray-700">
                  <strong>Instructions:</strong><br />
                  Write a 5-page essay analyzing the key factors that led to the
                  decline of feudalism in medieval Europe. Focus on
                  economic, political, and social factors. Include at least 5
                  scholarly sources and follow the MLA format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsContent;
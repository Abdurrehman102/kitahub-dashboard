"use client";
import React, { useState } from 'react';
import { Plus, Users, BookOpen, Calendar, TrendingUp, Clock, Star, MoreHorizontal } from 'lucide-react';

const ProfessorOverviewContent = ({ userRole = 'professor' }) => {
  const [selectedCourse, setSelectedCourse] = useState('all');

  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  const activeCourses = [
    {
      id: 1,
      title: 'Medieval History',
      instructor: 'Prof. Jane Smith',
      startDate: 'August 20, 2024',
      students: 140,
      assignments: 13,
      recentActivity: 'Discussion posted on August 14, 2024'
    },
    {
      id: 2,
      title: 'Philosophy of The Person',
      instructor: 'Prof. Jane Smith',
      startDate: 'September 4, 2024',
      students: 85,
      assignments: 8,
      recentActivity: 'New assignment posted on September 2, 2024'
    }
  ];

  return (
    <div className="ml-64 pt-16 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <p className="text-blue-100 mb-2 text-sm font-medium">{currentDate}</p>
            <h1 className="text-3xl font-bold mb-2">Welcome Back 👋</h1>
            <h2 className="text-2xl font-semibold">Prof. Jane Smith</h2>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="w-48 h-48 flex items-center justify-center text-8xl">
              👨‍🏫
            </div>
            <div className="absolute bottom-4 right-8 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              📊
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+2 this term</span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-gray-900">6</div>
            <div className="text-sm text-gray-600">Active Courses</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+15 this week</span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-gray-900">225</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm text-red-600 font-medium">5 due soon</span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-gray-900">38</div>
            <div className="text-sm text-gray-600">Assignments</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-purple-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+12%</span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-gray-900">87%</div>
            <div className="text-sm text-gray-600">Avg. Grade</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-8">
          {/* Active Courses */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">Active Courses</h3>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <Plus className="w-4 h-4" />
                <span>New Course</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeCourses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {course.title.split(' ').map(word => word[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{course.title}</h4>
                        <p className="text-sm text-gray-600">{course.instructor}</p>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreHorizontal className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-900">{course.students}</span>
                      <span className="text-sm text-gray-600">students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-900">{course.assignments}</span>
                      <span className="text-sm text-gray-600">assignments</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-3">
                    Started: {course.startDate}
                  </div>

                  <div className="text-sm text-gray-700 mb-4">
                    Recent Activity: {course.recentActivity}
                  </div>

                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-colors">
                    View Course Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Activity</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                <div className="p-2 bg-blue-500 rounded-full">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">New Assignment Created</div>
                  <div className="text-sm text-gray-600">Medieval History Essay posted to Medieval History class</div>
                  <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                <div className="p-2 bg-green-500 rounded-full">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Student Submissions</div>
                  <div className="text-sm text-gray-600">15 new submissions received for Philosophy Discussion</div>
                  <div className="text-xs text-gray-500 mt-1">5 hours ago</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                <div className="p-2 bg-yellow-500 rounded-full">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Grading Reminder</div>
                  <div className="text-sm text-gray-600">25 assignments pending review in Mathematics III</div>
                  <div className="text-xs text-gray-500 mt-1">1 day ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Plus className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Create Assignment</div>
                  <div className="text-sm text-gray-600">New assignment for your courses</div>
                </div>
              </button>

              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BookOpen className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Add Course Material</div>
                  <div className="text-sm text-gray-600">Upload resources for students</div>
                </div>
              </button>

              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">View Analytics</div>
                  <div className="text-sm text-gray-600">Student progress and insights</div>
                </div>
              </button>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Deadlines</h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Medieval History Essay</div>
                  <div className="text-sm text-gray-600">Due: September 25, 2024</div>
                  <div className="text-xs text-red-600">140 students enrolled</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Philosophy Discussion</div>
                  <div className="text-sm text-gray-600">Due: September 30, 2024</div>
                  <div className="text-xs text-yellow-600">85 students enrolled</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Math Problem Set</div>
                  <div className="text-sm text-gray-600">Due: October 5, 2024</div>
                  <div className="text-xs text-blue-600">95 students enrolled</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">This Week's Summary</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Assignments Graded</span>
                <span className="font-semibold text-gray-900">42</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">New Discussions</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Student Messages</span>
                <span className="font-semibold text-gray-900">23</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Course Materials Added</span>
                <span className="font-semibold text-gray-900">5</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Great job this week!</span>
              </div>
              <div className="text-sm text-green-700 mt-1">
                You're 15% ahead of your grading schedule.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorOverviewContent;
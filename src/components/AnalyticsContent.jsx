import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, BookOpen, Award, Calendar, Clock } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

const AnalyticsContent = () => {
  const performanceData = [
    { month: 'Jan', courses: 4, grades: 85, progress: 78 },
    { month: 'Feb', courses: 6, grades: 88, progress: 82 },
    { month: 'Mar', courses: 5, grades: 92, progress: 85 },
    { month: 'Apr', courses: 7, grades: 89, progress: 88 },
    { month: 'May', courses: 8, grades: 94, progress: 92 },
    { month: 'Jun', courses: 6, grades: 91, progress: 89 },
    { month: 'Jul', courses: 9, grades: 96, progress: 94 }
  ];

  const courseDistribution = [
    { name: 'Mathematics', value: 30, color: '#3b82f6' },
    { name: 'History', value: 25, color: '#f59e0b' },
    { name: 'Philosophy', value: 20, color: '#10b981' },
    { name: 'English', value: 15, color: '#ef4444' },
    { name: 'Science', value: 10, color: '#8b5cf6' }
  ];

  const statsCards = [
    {
      title: 'Total Courses',
      value: '12',
      change: '+2 this month',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'Average Grade',
      value: '92%',
      change: '+5% from last month',
      icon: Award,
      color: 'bg-green-500'
    },
    {
      title: 'Study Hours',
      value: '156',
      change: '+12 this week',
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      title: 'Assignments',
      value: '28',
      change: '8 pending',
      icon: Calendar,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="ml-64 pt-16 p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
        <p className="text-gray-600">Track your academic performance and progress</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Performance Trends</h3>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Line 
                  type="monotone" 
                  dataKey="grades" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="progress" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Grades</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Progress</span>
            </div>
          </div>
        </div>

        {/* Course Distribution */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Course Distribution</h3>
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                >
                  {courseDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {courseDistribution.map((course, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: course.color }}
                ></div>
                <span className="text-sm text-gray-600">{course.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Activity</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Bar dataKey="courses" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'Completed Assignment', course: 'Medieval History', time: '2 hours ago', status: 'success' },
            { action: 'Started Quiz', course: 'Mathematics III', time: '4 hours ago', status: 'progress' },
            { action: 'Joined Discussion', course: 'Philosophy of The Person', time: '1 day ago', status: 'info' },
            { action: 'Submitted Essay', course: 'English Literature', time: '2 days ago', status: 'success' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'progress' ? 'bg-blue-500' : 'bg-gray-500'
                }`}></div>
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.course}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsContent;
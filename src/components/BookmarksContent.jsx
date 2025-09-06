"use client";
import React, { useState } from 'react';
import { Bookmark, Search, Filter, Calendar, Book, FileText, Video, Link, Star, MoreHorizontal, Trash2 } from 'lucide-react';

const BookmarksContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const bookmarks = [
    {
      id: 1,
      title: 'Medieval History: The Rise and Fall of Feudalism',
      type: 'assignment',
      course: 'Medieval History',
      dateAdded: 'August 20, 2024',
      dueDate: 'September 25, 2024',
      icon: FileText,
      color: 'bg-blue-500',
      description: 'Final essay assignment on feudal systems',
      url: '/assignments/medieval-history-feudalism'
    },
    {
      id: 2,
      title: 'Mathematics III - Chapter 5: Calculus',
      type: 'lecture',
      course: 'Mathematics III',
      dateAdded: 'August 18, 2024',
      dueDate: null,
      icon: Video,
      color: 'bg-green-500',
      description: 'Introduction to differential calculus',
      url: '/lectures/math-calculus-ch5'
    },
    {
      id: 3,
      title: 'Philosophy Discussion: Nature of Consciousness',
      type: 'discussion',
      course: 'Philosophy of The Person',
      dateAdded: 'August 15, 2024',
      dueDate: null,
      icon: Book,
      color: 'bg-purple-500',
      description: 'Active discussion on consciousness theories',
      url: '/discussions/consciousness-debate'
    },
    {
      id: 4,
      title: 'English Literature: Shakespeare Analysis',
      type: 'resource',
      course: 'English Literature',
      dateAdded: 'August 12, 2024',
      dueDate: null,
      icon: Link,
      color: 'bg-orange-500',
      description: 'External resource for Hamlet analysis',
      url: 'https://shakespeare-analysis.edu'
    },
    {
      id: 5,
      title: 'Medieval History Quiz Review',
      type: 'assignment',
      course: 'Medieval History',
      dateAdded: 'August 10, 2024',
      dueDate: 'August 25, 2024',
      icon: FileText,
      color: 'bg-red-500',
      description: 'Midterm quiz preparation materials',
      url: '/assignments/medieval-quiz-review'
    },
    {
      id: 6,
      title: 'Mathematics III Problem Set 4',
      type: 'assignment',
      course: 'Mathematics III',
      dateAdded: 'August 8, 2024',
      dueDate: 'August 30, 2024',
      icon: FileText,
      color: 'bg-blue-500',
      description: 'Advanced calculus problem solving',
      url: '/assignments/math-problem-set-4'
    }
  ];

  const filteredBookmarks = bookmarks.filter(bookmark => {
    const matchesSearch = bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          bookmark.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || bookmark.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const filterOptions = [
    { value: 'all', label: 'All Bookmarks', count: bookmarks.length },
    { value: 'assignment', label: 'Assignments', count: bookmarks.filter(b => b.type === 'assignment').length },
    { value: 'lecture', label: 'Lectures', count: bookmarks.filter(b => b.type === 'lecture').length },
    { value: 'discussion', label: 'Discussions', count: bookmarks.filter(b => b.type === 'discussion').length },
    { value: 'resource', label: 'Resources', count: bookmarks.filter(b => b.type === 'resource').length }
  ];

  return (
    <div className="ml-64 pt-16 p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bookmarks</h1>
        <p className="text-gray-600">Keep track of important resources and assignments</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookmarks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              {filterOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map(option => (
            <button
              key={option.value}
              onClick={() => setFilterType(option.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterType === option.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {option.label} ({option.count})
            </button>
          ))}
        </div>
      </div>

      {/* Bookmarks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBookmarks.map(bookmark => (
          <div key={bookmark.id} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Card Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-3 rounded-lg ${bookmark.color}`}>
                  <bookmark.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreHorizontal className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {bookmark.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {bookmark.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-600 font-medium">{bookmark.course}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  bookmark.type === 'assignment' ? 'bg-blue-100 text-blue-800' :
                  bookmark.type === 'lecture' ? 'bg-green-100 text-green-800' :
                  bookmark.type === 'discussion' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {bookmark.type.charAt(0).toUpperCase() + bookmark.type.slice(1)}
                </span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-lg">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Added {bookmark.dateAdded}</span>
                </div>
                {bookmark.dueDate && (
                  <div className="flex items-center text-red-600">
                    <span>Due {bookmark.dueDate}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Open Resource
                </button>
                <button className="p-1 hover:bg-gray-200 rounded text-gray-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredBookmarks.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center border border-gray-100">
          <Bookmark className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No bookmarks found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || filterType !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'Start bookmarking important resources and assignments to keep them organized'
            }
          </p>
          {(searchTerm || filterType !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          )}
        </div>
      )}

      {/* Stats Summary */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Bookmark Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filterOptions.slice(1).map(option => (
            <div key={option.value} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{option.count}</div>
              <div className="text-sm text-gray-600">{option.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookmarksContent;
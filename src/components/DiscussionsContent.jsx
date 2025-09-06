import React, { useState, useEffect } from 'react';
import { Search, Filter, Plus, Pin, MessageCircle, ChevronDown, ThumbsUp, MessageSquare, Heart, Home, BookOpen, Users, User, Bookmark, Settings, BarChart3, LogOut } from 'lucide-react';

const DiscussionsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Most Recent');
  const [activeNav, setActiveNav] = useState('Discussions');

  // Navigation items
  const navItems = [
    { name: 'Dashboard', icon: Home, active: false },
    { name: 'Assignments', icon: BookOpen, active: false },
    { name: 'Discussions', icon: MessageCircle, active: true },
    { name: 'Profile', icon: User, active: false },
    { name: 'Bookmarks', icon: Bookmark, active: false },
    { name: 'Settings', icon: Settings, active: false },
    { name: 'Courses Overview', icon: BarChart3, active: false }
  ];

  // Character avatar URLs - you can replace these with your actual character images
  const characterAvatars = {
    'Scott Maxwell': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Scott&backgroundColor=4F88FF&clothesColor=262e33&eyebrowType=default&eyeType=default&hairColor=4a4a4a&mouthType=default&skinColor=f2d2a7',
    'Prof. Jane Smith': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane&backgroundColor=10B981&clothesColor=5199e4&eyebrowType=default&eyeType=default&hairColor=724133&mouthType=smile&skinColor=fdbcb4',
    'Student Name': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Student&backgroundColor=F59E0B&clothesColor=ff488e&eyebrowType=default&eyeType=wink&hairColor=2c1b18&mouthType=default&skinColor=d08b5b',
    'Another Student': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Another&backgroundColor=8B5CF6&clothesColor=25557c&eyebrowType=default&eyeType=default&hairColor=f59797&mouthType=smile&skinColor=ae5d29',
    'Maya Thompson': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya&backgroundColor=6366F1&clothesColor=3c4f5c&eyebrowType=default&eyeType=default&hairColor=000&mouthType=smile&skinColor=ffdbac'
  };

  const pinnedDiscussions = [
    {
      id: 1,
      title: 'Welcome!',
      content: 'This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels. In order to have a result that is...',
      author: 'Scott Maxwell',
      category: 'General',
      timeAgo: '4h',
      replies: 5,
      likes: 8,
      isPinned: true
    }
  ];

  const weeklyDiscussions = [
    {
      id: 2,
      title: 'Medieval History.',
      content: 'This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels. In order to have a result that is...',
      author: 'Scott Maxwell',
      category: 'General',
      timeAgo: '4h',
      replies: 5,
      likes: 8,
      isCompleted: true
    },
    {
      id: 3,
      title: 'Medieval History.',
      content: 'This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels. In order to have a result that is...',
      author: 'Scott Maxwell',
      category: 'General',
      timeAgo: '4h',
      replies: 8,
      likes: 0,
      isCompleted: true
    },
    {
      id: 4,
      title: 'Medieval History.',
      content: 'This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels. In order to have a result that is...',
      author: 'Scott Maxwell',
      category: 'General',
      timeAgo: '4h',
      replies: 8,
      likes: 0,
      isCompleted: true
    }
  ];

  const questionAnswers = [
    {
      id: 5,
      question: 'What is the value of 8+(3+5)-12+48 \\times (3 + 5) - 12 \\div 48+(3+5)-12+4?',
      author: 'Prof. Jane Smith',
      course: 'Lectures - Ert3',
      timeAgo: '34 Min Ago',
      markedByInstructor: true,
      tags: ['Good', 'Not Good'],
      answers: [
        {
          author: 'Prof. Jane Smith',
          course: 'Lectures - Ert3',
          content: '8+8-12+4\n64-364 - 364-3\n616161',
          timeAgo: '34 Min Ago',
          likes: 3,
          replies: 0
        },
        {
          author: 'Student Name',
          course: 'Lectures - Ert3',
          content: '8+8-12+4\n64-364 - 364-3\n616161',
          timeAgo: '34 Min Ago',
          likes: 5,
          replies: 0
        },
        {
          author: 'Another Student',
          course: 'Lectures - Ert3',
          content: '8+8-12+4\n64-364 - 364-3\n616161',
          timeAgo: '34 Min Ago',
          likes: 5,
          replies: 0
        }
      ]
    }
  ];

  const getCharacterAvatar = (name) => {
    return characterAvatars[name] || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=random`;
  };

  const DiscussionCard = ({ discussion }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4 hover:shadow-md transition-shadow">
      {discussion.isPinned && (
        <div className="flex items-center space-x-2 mb-3">
          <Pin className="w-4 h-4 text-red-500" />
          <span className="text-sm font-medium text-red-500">Pinned</span>
        </div>
      )}
      
      <div className="flex items-start space-x-3">
        <img
          src={getCharacterAvatar(discussion.author)}
          alt={discussion.author}
          className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-medium text-gray-800">{discussion.title}</h4>
            {discussion.isCompleted && (
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            )}
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-medium">{discussion.category}</span>
          </div>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{discussion.content}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="font-medium">{discussion.author}</span>
            <span>{discussion.timeAgo}</span>
            <div className="flex items-center space-x-1">
              <MessageSquare className="w-4 h-4" />
              <span>{discussion.replies}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4" />
              <span>{discussion.likes}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
    </div>
  );

  const QuestionCard = ({ question }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3 flex-1">
          <img
            src={getCharacterAvatar(question.author)}
            alt={question.author}
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-medium text-gray-800">{question.author}</h4>
              <span className="text-sm text-gray-500">{question.course}</span>
              <span className="text-sm text-gray-400">{question.timeAgo}</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Question: 01</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">{question.question}</p>
            {question.markedByInstructor && (
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs text-gray-500 font-medium">Marked by Instructor</span>
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Instructor&backgroundColor=10B981&clothesColor=3c4f5c&eyebrowType=default&eyeType=default&hairColor=000&mouthType=smile&skinColor=ffdbac"
                  alt="Instructor"
                  className="w-5 h-5 rounded-full border border-white"
                />
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded font-medium">Good</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex space-x-2 flex-shrink-0">
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded font-medium">Good</span>
          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded font-medium">Not Good</span>
        </div>
      </div>

      {/* Answer Section */}
      <div className="border-t border-gray-100 pt-4">
        <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <span>5 Answer</span>
        </h4>
        
        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <div key={index} className="border-l-4 border-blue-100 pl-4">
              <div className="flex items-start space-x-3 mb-3">
                <img
                  src={getCharacterAvatar(answer.author)}
                  alt={answer.author}
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h5 className="font-medium text-gray-800 text-sm">Question: 01</h5>
                    <span className="text-xs text-gray-500">{answer.course}</span>
                    <span className="text-xs text-gray-400">{answer.timeAgo}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">{answer.content}</pre>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{answer.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span>{answer.replies}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-indigo-600 to-purple-700 flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded transform rotate-12"></div>
            </div>
            <span className="text-white text-xl font-bold">KITAHUB</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => setActiveNav(item.name)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      item.name === activeNav
                        ? 'bg-white bg-opacity-20 text-white'
                        : 'text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Log Out */}
        <div className="p-4">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Search Bar */}
            <div className="flex items-center space-x-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-1 rounded">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-yellow-500 hover:bg-gray-100 rounded-lg">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </button>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={getCharacterAvatar('Maya Thompson')}
                  alt="Maya Thompson"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <div className="font-semibold text-gray-800">Maya Thompson</div>
                  <div className="text-sm text-gray-500">Student</div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden">
          <div className="flex h-full">
            {/* Left Panel - Discussions List */}
            <div className="w-1/2 bg-white border-r border-gray-200 overflow-y-auto">
              <div className="p-6">
                {/* Pinned Section */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Pin className="w-4 h-4 text-red-500" />
                    <span className="font-medium text-red-500">Pinned</span>
                  </div>
                  {pinnedDiscussions.map((discussion) => (
                    <DiscussionCard key={discussion.id} discussion={discussion} />
                  ))}
                </div>

                {/* This Week Section */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">This Week</h2>
                  <div className="space-y-4">
                    {weeklyDiscussions.map((discussion) => (
                      <DiscussionCard key={discussion.id} discussion={discussion} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Question Detail */}
            <div className="w-1/2 bg-gray-50 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm font-medium">
                    <span>Most Recent</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  {questionAnswers.map((question) => (
                    <QuestionCard key={question.id} question={question} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionsPage;
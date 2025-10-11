import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, Plus, Pin, MessageCircle, ChevronDown, ThumbsUp, Calendar as CalendarIcon, Bell, MessageSquare, Heart, Home, BookOpen, Users, User, Bookmark, Settings, BarChart3, LogOut, MoreVertical, Edit2, Trash2, X, Menu } from 'lucide-react';

const DiscussionsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [leftSearchQuery, setLeftSearchQuery] = useState('');
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ tags: [], sortBy: 'Most Recent' });
  const [contextMenu, setContextMenu] = useState({ show: false, id: null, x: 0, y: 0 });
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [discussions, setDiscussions] = useState([]);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const filterPanelRef = useRef(null);
  const contextMenuRef = useRef(null);

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(8);
  const [commentCount, setCommentCount] = useState(5);
  const [showMenu, setShowMenu] = useState(false);

  const [answer1Liked, setAnswer1Liked] = useState(false);
  const [answer1Likes, setAnswer1Likes] = useState(3);
  const [answer1Comments, setAnswer1Comments] = useState(5);
  const [showAnswerMenu1, setShowAnswerMenu1] = useState(false);

  const [answer2Liked, setAnswer2Liked] = useState(false);
  const [answer2Likes, setAnswer2Likes] = useState(5);
  const [answer2Comments, setAnswer2Comments] = useState(8);
  const [showAnswerMenu2, setShowAnswerMenu2] = useState(false);

  const [answer3Liked, setAnswer3Liked] = useState(false);
  const [answer3Likes, setAnswer3Likes] = useState(5);
  const [answer3Comments, setAnswer3Comments] = useState(8);
  const [showAnswerMenu3, setShowAnswerMenu3] = useState(false);

  useEffect(() => {
    setDiscussions([
      {
        id: 2,
        title: 'Medieval History.',
        content: 'This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels. In order to have a result that is...',
        author: 'Scott Maxwell',
        category: 'General',
        timeAgo: '4h',
        replies: 5,
        likes: 8,
        liked: false,
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
        liked: false,
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
        liked: false,
        isCompleted: true
      }
    ]);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterPanelRef.current && !filterPanelRef.current.contains(event.target)) {
        setShowFilterPanel(false);
      }
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        setContextMenu({ show: false, id: null, x: 0, y: 0 });
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowFilterPanel(false);
        setContextMenu({ show: false, id: null, x: 0, y: 0 });
        setShowDeleteConfirm(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSearchSubmit = (e, query) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  const handleFilterToggle = () => {
    setShowFilterPanel(!showFilterPanel);
  };

  const handleApplyFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({ tags: [], sortBy: 'Most Recent' });
  };

  const handleToggleLike = (id) => {
    setDiscussions(prev => prev.map(d => 
      d.id === id 
        ? { ...d, liked: !d.liked, likes: d.liked ? d.likes - 1 : d.likes + 1 }
        : d
    ));
  };

  const handleContextMenu = (e, id) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setContextMenu({
      show: true,
      id,
      x: rect.left - 120,
      y: rect.bottom + 5
    });
  };

  const handleEdit = (id) => {
    const discussion = discussions.find(d => d.id === id);
    if (discussion) {
      setEditingId(id);
      setEditContent(discussion.content);
      setContextMenu({ show: false, id: null, x: 0, y: 0 });
    }
  };

  const handleSaveEdit = (id) => {
    setDiscussions(prev => prev.map(d => 
      d.id === id ? { ...d, content: editContent } : d
    ));
    setEditingId(null);
    setEditContent('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditContent('');
  };

  const handleDelete = (id) => {
    setShowDeleteConfirm(id);
    setContextMenu({ show: false, id: null, x: 0, y: 0 });
  };

  const handleConfirmDelete = (id) => {
    setDiscussions(prev => prev.filter(d => d.id !== id));
    setShowDeleteConfirm(null);
  };

  const filteredDiscussions = discussions.filter(d => 
    d.title.toLowerCase().includes(leftSearchQuery.toLowerCase()) ||
    d.content.toLowerCase().includes(leftSearchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header with Sidebar Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4" style={{
        background: 'linear-gradient(0deg, #D620FF 0%, #0D6CFF 100%)'
      }}>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
            <span className="text-purple-900 font-bold text-2xl">K</span>
          </div>
          <span className="font-bold text-lg text-white">KITAHUB</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition-colors"
        >
          {isMobileSidebarOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full w-64 text-white transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(0deg, #D620FF 0%, #0D6CFF 100%)'
        }}
      >
        {/* Sidebar Header */}
        <div className="py-8 px-6 border-b border-white border-opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
              <span className="text-purple-900 font-bold text-2xl">K</span>
            </div>
            <span className="font-bold text-lg">KITAHUB</span>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="px-6 pt-4 overflow-y-auto h-[calc(100%-120px)]">
          <a href="#" className="flex items-center px-4 py-3 mb-2 rounded-lg bg-white text-purple-900">
            <Home className="mr-3 text-xl" />
            <span className="font-medium text-sm">Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 mb-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20">
            <BookOpen className="mr-3 text-xl" />
            <span className="font-medium text-sm">Assignments</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 mb-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20">
            <MessageCircle className="mr-3 text-xl" />
            <span className="font-medium text-sm">Discussions</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 mb-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20">
            <User className="mr-3 text-xl" />
            <span className="font-medium text-sm">Profile</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 mb-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20">
            <Bookmark className="mr-3 text-xl" />
            <span className="font-medium text-sm">Bookmarks</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 mb-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20">
            <Settings className="mr-3 text-xl" />
            <span className="font-medium text-sm">Settings</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 mb-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20">
            <LogOut className="mr-3 text-xl" />
            <span className="font-medium text-sm">Log Out</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-16 lg:pt-0 lg:ml-60 mt-16">
        <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] lg:h-screen">
          
          {/* Left Panel - Discussions List */}
          <div className={`${showRightPanel ? 'hidden lg:block' : 'block'} w-full lg:w-1/2 bg-gray-50 border-r border-gray-200 overflow-y-auto`}>
            <div className="p-4 sm:p-6">
              
              {/* Search Bar */}
              <form onSubmit={(e) => handleSearchSubmit(e, leftSearchQuery)} className="relative mb-4 sm:mb-6">
                <input
                  type="text"
                  placeholder="Search"
                  value={leftSearchQuery}
                  onChange={(e) => setLeftSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-sm"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>

              {/* Filter Button */}
              <div className="flex justify-end mb-4 sm:mb-6 relative">
                <button 
                  onClick={handleFilterToggle}
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-lg transition-colors border border-gray-300"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="3" width="12" height="2" rx="1" fill="currentColor"/>
                    <rect x="4" y="7" width="8" height="2" rx="1" fill="currentColor"/>
                    <rect x="6" y="11" width="4" height="2" rx="1" fill="currentColor"/>
                  </svg>
                  <span className="font-semibold text-sm">Filter</span>
                </button>
                
                {/* Filter Panel */}
                {showFilterPanel && (
                  <div 
                    ref={filterPanelRef}
                    className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-800">Filters</h3>
                        <button 
                          onClick={() => setShowFilterPanel(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                          <select 
                            value={selectedFilters.sortBy}
                            onChange={(e) => handleApplyFilter('sortBy', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          >
                            <option>Most Recent</option>
                            <option>Most Popular</option>
                            <option>Oldest First</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                          <div className="space-y-2">
                            {['General', 'Questions', 'Announcements'].map(tag => (
                              <label key={tag} className="flex items-center">
                                <input 
                                  type="checkbox" 
                                  className="mr-2 rounded"
                                  checked={selectedFilters.tags.includes(tag)}
                                  onChange={(e) => {
                                    const newTags = e.target.checked
                                      ? [...selectedFilters.tags, tag]
                                      : selectedFilters.tags.filter(t => t !== tag);
                                    handleApplyFilter('tags', newTags);
                                  }}
                                />
                                <span className="text-sm text-gray-700">{tag}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <button 
                          onClick={handleClearFilters}
                          className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                        >
                          Clear Filters
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pinned Section */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                  <Pin className="w-4 h-4 text-red-500 fill-red-500" />
                  <span className="font-bold text-gray-900 text-sm">Pinned</span>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-3 sm:p-4 shadow-sm border border-blue-100 mb-4 relative">
                  <Pin className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500 absolute top-3 sm:top-4 right-3 sm:right-4" />
        
                  <div className="flex items-start space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1 flex items-center space-x-2">
                        <span>Welcome!</span>
                        <span className="text-base sm:text-lg">👋</span>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2 sm:mb-3 leading-relaxed">This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels. In order to have a result that is...</p>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3"> 
                        <span className="px-2 sm:px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-semibold">General</span>
                        <span className="text-xs text-gray-600 font-medium bg-white px-2 sm:px-2.5 py-1 sm:py-1.5">Scott Maxwell</span>
                        <div className="flex items-center space-x-1 text-xs text-gray-500 bg-white px-2 sm:px-2.5 py-1 sm:py-1.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                            <path strokeWidth="2" d="M12 6v6l4 2"/>
                          </svg>
                          <span>4h</span>
                        </div>
                      </div>   
                    </div>
                  </div>
                </div>
              </div>

              {/* This Week Section */}
              <div>
                <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4">This Week</h2>
                <div className="space-y-3 sm:space-y-4">
                  {filteredDiscussions.map((discussion) => (
                    <div 
                      key={discussion.id} 
                      className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200 relative cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setShowRightPanel(true)}
                    >
                      {discussion.isCompleted && (
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                      
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 font-bold text-base sm:text-lg bg-white shadow-sm flex-shrink-0">
                          ?
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{discussion.title}</h4>
                          
                          {editingId === discussion.id ? (
                            <div className="mb-2 sm:mb-3">
                              <textarea
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                                rows="3"
                              />
                              <div className="flex space-x-2 mt-2">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSaveEdit(discussion.id);
                                  }}
                                  className="px-2 sm:px-3 py-1 bg-blue-500 text-white rounded text-xs sm:text-sm hover:bg-blue-600"
                                >
                                  Save
                                </button>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCancelEdit();
                                  }}
                                  className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs sm:text-sm hover:bg-gray-300"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <p className="text-xs text-gray-600 mb-2 sm:mb-3 leading-relaxed line-clamp-2">{discussion.content}</p>
                          )}
                          
                          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-blue-100 text-blue-700 text-xs font-semibold">{discussion.category}</span>
                            <span className="text-xs text-gray-600 font-medium px-2 sm:px-2.5 py-0.5 sm:py-1.5" style={{ backgroundColor: '#ECF3FF' }}>{discussion.author}</span>
                            <div className="flex items-center space-x-1 text-xs text-gray-500 px-2 sm:px-2.5 py-0.5 sm:py-1.5" style={{ backgroundColor: '#ECF3FF' }}>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                <path strokeWidth="2" d="M12 6v6l4 2"/>
                              </svg>
                              <span>{discussion.timeAgo}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-end space-x-3 sm:space-x-4 text-xs text-gray-500">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setDiscussions(prev => prev.map(d => 
                                  d.id === discussion.id 
                                    ? { ...d, replies: d.replies + 1 }
                                    : d
                                ));
                              }}
                              className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                            >
                              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{discussion.replies}</span>
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleLike(discussion.id);
                              }}
                              className={`flex items-center space-x-1 transition-colors ${
                                discussion.liked ? 'text-red-500' : 'hover:text-red-500'
                              }`}
                            >
                              <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${discussion.liked ? 'fill-current' : ''}`} />
                              <span>{discussion.likes}</span>
                            </button>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContextMenu(e, discussion.id);
                          }}
                          className="text-gray-400 hover:text-gray-600 p-1 flex-shrink-0"
                        >
                          <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Discussion Details */}
          <div className={`${showRightPanel ? 'block' : 'hidden lg:block'} w-full lg:w-1/2 bg-gray-50 overflow-y-auto relative`}>
            
            {/* Mobile Back Button */}
            <button
              onClick={() => setShowRightPanel(false)}
              className="lg:hidden sticky top-0 left-0 z-10 bg-white border-b border-gray-200 w-full px-4 py-3 flex items-center space-x-2 text-gray-700 hover:bg-gray-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Discussions</span>
            </button>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              
              {/* Main Question Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6 relative">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-start space-x-2 sm:space-x-3 flex-1 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold flex-shrink-0">
                      JS
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Prof. Jane Smith</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">Lectures - Ert3</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs text-gray-500">34 Min Ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2 flex-shrink-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] text-gray-600 hidden sm:inline">Only for Instructor ⓘ</span>
                      <button 
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                    
                    {showMenu && (
                      <div className="absolute right-4 sm:right-6 top-14 sm:top-16 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-[120px]">
                        <button
                          onClick={() => {
                            console.log('Edit clicked');
                            setShowMenu(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                        >
                          <Edit2 className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => {
                            console.log('Delete clicked');
                            setShowMenu(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                    
                    <div className="flex space-x-2">
                      <span className="px-2 py-0.5 sm:py-1 bg-green-600 text-white text-xs rounded font-medium">Good</span>
                      <span className="px-2 py-0.5 sm:py-1 bg-red-600 text-white text-xs rounded font-medium">Not Good</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Question: 01</h3>
                <p className="text-xs text-gray-700 mb-3 sm:mb-4">What is the value of 8×(3+5)-12÷4?</p>
                
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center space-x-3 sm:space-x-4 text-sm text-gray-500">
                    <button 
                      onClick={() => setCommentCount(commentCount + 1)}
                      className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{commentCount}</span>
                    </button>
                    <button 
                      onClick={() => {
                        setIsLiked(!isLiked);
                        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
                      }}
                      className={`flex items-center space-x-1 transition-colors ${isLiked ? 'text-red-500' : 'hover:text-red-500'}`}
                    >
                      <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{likeCount}</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] sm:text-[10.5px] text-gray-500 mb-1">Marked by Instructor</span>
                      <div className="flex items-center -space-x-2">
                        <div className="w-4 h-4 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-purple-400"></div>
                        <div className="w-4 h-4 rounded-full border-2 border-white bg-gradient-to-br from-pink-400 to-orange-400"></div>
                        <div className="w-4 h-4 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-teal-400"></div>
                        <div className="w-4 h-4 rounded-full border-2 border-white bg-gradient-to-br from-yellow-400 to-red-400"></div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded font-medium">Good</span>
                  </div>
                </div>
              </div>
              
              {/* Answers Section */}
              <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">5 Answer</h4>
                </div>
                
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  
                  {/* Answer 1 */}
                  <div className="bg-white rounded-lg p-3 sm:p-4 relative">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <div className="flex items-start space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold flex-shrink-0 text-xs">
                          JS
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-gray-900 text-xs sm:text-sm">Question: 01</h5>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-500">Lectures - Ert3</span>
                            <span className="text-xs text-gray-400">34 Min Ago</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setShowAnswerMenu1(!showAnswerMenu1)}
                        className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                      >
                        <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      
                      {showAnswerMenu1 && (
                        <div className="absolute right-4 top-12 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-[120px]">
                          <button
                            onClick={() => {
                              console.log('Edit Answer 1');
                              setShowAnswerMenu1(false);
                            }}
                            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                          >
                            <Edit2 className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => {
                              console.log('Delete Answer 1');
                              setShowAnswerMenu1(false);
                            }}
                            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-xs sm:text-sm text-gray-800 mb-2 sm:mb-3">
                      <div>8+8-12+4</div>
                      <div>64-364 - 364-3</div>
                      <div>616161</div>
                    </div>
                    
                    <div className="flex items-center justify-end space-x-3 sm:space-x-4 text-sm text-gray-500">
                      <button 
                        onClick={() => {
                          setAnswer1Liked(!answer1Liked);
                          setAnswer1Likes(answer1Liked ? answer1Likes - 1 : answer1Likes + 1);
                        }}
                        className={`flex items-center space-x-1 transition-colors ${answer1Liked ? 'text-blue-600' : 'hover:text-blue-600'}`}
                      >
                        <ThumbsUp className={`w-3 h-3 sm:w-4 sm:h-4 ${answer1Liked ? 'fill-current' : ''}`} />
                        <span className="text-xs">{answer1Likes}</span>
                      </button>
                      <button 
                        onClick={() => setAnswer1Comments(answer1Comments + 1)}
                        className="flex items-center space-x-1 hover:text-blue-600"
                      >
                        <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs">{answer1Comments}</span>
                      </button>
                    </div>
                  </div>

                  {/* Answer 2 - Nested */}
                  <div className="ml-8 sm:ml-24">
                    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 relative">
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="flex items-start space-x-2 sm:space-x-3 flex-1 min-w-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white font-bold flex-shrink-0 text-xs">
                            MP
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-gray-900 text-xs sm:text-sm">Question: 01</h5>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-xs text-gray-500">Lectures - Ert3</span>
                              <span className="text-xs text-gray-400">34 Min Ago</span>
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => setShowAnswerMenu2(!showAnswerMenu2)}
                          className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                        >
                          <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        
                        {showAnswerMenu2 && (
                          <div className="absolute right-4 top-12 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-[120px]">
                            <button
                              onClick={() => {
                                console.log('Edit Answer 2');
                                setShowAnswerMenu2(false);
                              }}
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                            >
                              <Edit2 className="w-4 h-4" />
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => {
                                console.log('Delete Answer 2');
                                setShowAnswerMenu2(false);
                              }}
                              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span>Delete</span>
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-xs sm:text-sm text-gray-800 mb-2 sm:mb-3">
                        <div>8+8-12+4</div>
                        <div>64-364 - 364-3</div>
                        <div>616161</div>
                      </div>
                      
                      <div className="flex items-center justify-end space-x-3 sm:space-x-4 text-sm text-gray-500">
                        <button 
                          onClick={() => {
                            setAnswer2Liked(!answer2Liked);
                            setAnswer2Likes(answer2Liked ? answer2Likes - 1 : answer2Likes + 1);
                          }}
                          className={`flex items-center space-x-1 transition-colors ${answer2Liked ? 'text-blue-600' : 'hover:text-blue-600'}`}
                        >
                          <ThumbsUp className={`w-3 h-3 sm:w-4 sm:h-4 ${answer2Liked ? 'fill-current' : ''}`} />
                          <span className="text-xs">{answer2Likes}</span>
                        </button>
                        <button 
                          onClick={() => setAnswer2Comments(answer2Comments + 1)}
                          className="flex items-center space-x-1 hover:text-blue-600"
                        >
                          <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs">{answer2Comments}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Answer 3 */}
                  <div className="bg-white rounded-lg p-3 sm:p-4 relative">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <div className="flex items-start space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white font-bold flex-shrink-0 text-xs">
                          ST
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-gray-900 text-xs sm:text-sm">Question: 01</h5>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-500">Lectures - Ert3</span>
                            <span className="text-xs text-gray-400">34 Min Ago</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setShowAnswerMenu3(!showAnswerMenu3)}
                        className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                      >
                        <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      
                      {showAnswerMenu3 && (
                        <div className="absolute right-4 top-12 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-[120px]">
                          <button
                            onClick={() => {
                              console.log('Edit Answer 3');
                              setShowAnswerMenu3(false);
                            }}
                            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                          >
                            <Edit2 className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => {
                              console.log('Delete Answer 3');
                              setShowAnswerMenu3(false);
                            }}
                            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-xs sm:text-sm text-gray-800 mb-2 sm:mb-3">
                      <div>8+8-12+4</div>
                      <div>64-364 - 364-3</div>
                      <div>616161</div>
                    </div>
                    
                    <div className="flex items-center justify-end space-x-3 sm:space-x-4 text-sm text-gray-500">
                      <button 
                        onClick={() => {
                          setAnswer3Liked(!answer3Liked);
                          setAnswer3Likes(answer3Liked ? answer3Likes - 1 : answer3Likes + 1);
                        }}
                        className={`flex items-center space-x-1 transition-colors ${answer3Liked ? 'text-blue-600' : 'hover:text-blue-600'}`}
                      >
                        <ThumbsUp className={`w-3 h-3 sm:w-4 sm:h-4 ${answer3Liked ? 'fill-current' : ''}`} />
                        <span className="text-xs">{answer3Likes}</span>
                      </button>
                      <button 
                        onClick={() => setAnswer3Comments(answer3Comments + 1)}
                        className="flex items-center space-x-1 hover:text-blue-600"
                      >
                        <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs">{answer3Comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Context Menu */}
      {contextMenu.show && (
        <div
          ref={contextMenuRef}
          style={{ top: contextMenu.y, left: contextMenu.x }}
          className="fixed bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 min-w-[140px]"
        >
          <button
            onClick={() => handleEdit(contextMenu.id)}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
          >
            <Edit2 className="w-4 h-4" />
            <span>Edit</span>
          </button>
          <button
            onClick={() => handleDelete(contextMenu.id)}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-md w-full shadow-xl">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Delete Discussion</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Are you sure you want to delete this discussion? This action cannot be undone.</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-3 sm:px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirmDelete(showDeleteConfirm)}
                className="px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscussionsPage;
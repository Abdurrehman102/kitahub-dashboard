"use client";
import React, { useState } from 'react';
import { Search, MessageCircle, Plus, Calendar, Download, ChevronDown, User, Phone, Mail } from 'lucide-react';

const CourseContent = () => {
    const [activeAssignmentTab, setActiveAssignmentTab] = useState('upcoming');
    const [activeResourceTab, setActiveResourceTab] = useState('lecture');

    const currentDate = new Date().toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });

    const discussions = [
        {
            id: 1,
            user: 'Maya Thompson',
            time: '12 Min Ago',
            message: 'You: List the most recent or active discussion...',
            avatar: 'MT'
        },
        {
            id: 2,
            user: 'Maya Thompson',
            time: '32 Min Ago',
            message: 'You: List the most recent or active discussion...',
            avatar: 'MT'
        },
        {
            id: 3,
            user: 'Maya Thompson',
            time: '02 Hours Ago',
            message: 'You: List the most recent or active discussion...',
            avatar: 'MT'
        }
    ];

    const upcomingAssignments = [
        {
            date: 'August 25, 2024',
            course: 'Mathematics III',
            status: 'Submitted',
            instructor: 'HD More'
        },
        {
            date: 'September 1, 2024',
            course: 'Medieval History',
            status: 'Submitted',
            instructor: 'HD More'
        },
        {
            date: 'September 15, 2024',
            course: 'Medieval History',
            status: 'Submitted',
            instructor: 'HD More'
        }
    ];

    const pastAssignments = [
        {
            title: 'Answer Writing',
            course: 'Mathematics III',
            grade: '95%',
            feedback: 'Great job on the analysis! However, make sure to include all references correctly.',
            instructor: 'HD More'
        },
        {
            title: 'Question & Answer',
            course: 'Medieval History', 
            grade: '90%',
            feedback: 'Excellent presentation! Keep up the good work.',
            instructor: 'HD More'
        }
    ];

    const assignmentDetails = {
        title: 'Medieval History Assignment',
        subtitle: 'The Rise and Fall of Feudalism',
        dueDate: 'September 25, 2024',
        instructions: 'Write a 5-page essay analyzing the key factors that led to the decline of feudalism in medieval Europe. Focus on economic, political, and social factors. Include at least 5 scholarly sources and follow the MLA format.'
    };

    const instructors = [
        {
            name: 'Dr. Jane Doe',
            title: 'Professor of The Government University',
            phone: '+1 (123) 456-7890',
            email: 'jane.doe@university.edu',
            avatar: 'https://ui-avatars.com/api/?name=Dr+Jane+Doe&background=4F88FF&color=fff&size=48'
        },
        {
            name: 'Prof. Emily Davis',
            title: 'Professor of The Government University', 
            phone: '+1 (123) 456-7890',
            email: 'jane.doe@university.edu',
            avatar: 'https://ui-avatars.com/api/?name=Prof+Emily+Davis&background=10B981&color=fff&size=48'
        },
        {
            name: 'Prof. Jane Smith',
            title: 'Professor of The Government University',
            phone: '+1 (123) 456-7890', 
            email: 'jane.doe@university.edu',
            avatar: 'https://ui-avatars.com/api/?name=Prof+Jane+Smith&background=F59E0B&color=fff&size=48'
        },
        {
            name: 'Dr. Jane Doe',
            title: 'Professor of The Government University',
            phone: '+1 (123) 456-7890',
            email: 'jane.doe@university.edu', 
            avatar: 'https://ui-avatars.com/api/?name=Dr+Jane+Doe&background=EF4444&color=fff&size=48'
        }
    ];

    const announcements = [
        {
            date: 'August 30, 2024',
            instructor: 'Prof. Jane Smith',
            title: 'Assignment Updates',
            content: 'The deadline for Assignment 3 has been extended toThe deadline for extended toThe deadline for Assignment...',
            likes: 40
        },
        {
            date: 'August 30, 2024', 
            instructor: 'Prof. Jane Smith',
            title: 'Assignment Updates',
            content: 'The deadline for Assignment 3 has been extended toThe deadline for extended toThe deadline for Assignment...',
            likes: 40
        }
    ];

    const lectureSlides = [
        {
            week: 'Week 1: Aug 7, 2024',
            title: 'Introduction to Medieval History',
            downloadable: true
        },
        {
            week: 'Week 2: Aug 14, 2024',
            title: 'Introduction to Medieval History', 
            downloadable: true
        },
        {
            week: 'Week 2: Aug 14, 2024',
            title: 'Introduction to Medieval History',
            downloadable: true
        }
    ];

    return (
        <div className="ml-64 pt-16 p-6 bg-gray-50 min-h-screen">
            {/* Back to Main Dashboard Button */}
            <div className="mb-6">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-600 transition-colors">
                    <span>←</span>
                    <span>Main Student Dashboard</span>
                </button>
            </div>

            {/* Header Card */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <p className="text-blue-100 mb-2 text-sm font-medium">{currentDate}</p>
                        <p className="text-lg font-medium mb-2">Class Code: 44553</p>
                        <h1 className="text-3xl font-bold">Philosophy of The Person</h1>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 flex items-center justify-center relative">
                            <div className="text-8xl">🧑‍💻</div>
                            <div className="absolute bottom-0 w-32 h-4 bg-yellow-600 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Left Column */}
                <div className="col-span-8 space-y-6">
                    {/* Discussion Board */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                                <MessageCircle className="w-5 h-5 text-gray-600" />
                                <h3 className="text-lg font-semibold text-gray-800">Discussion Board</h3>
                            </div>
                            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                                <Plus className="w-4 h-4" />
                                <span>New Discussion</span>
                            </button>
                        </div>

                        <div className="mb-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search Discussions..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-sm text-gray-600"></span>
                                <button className="flex items-center space-x-1 text-sm text-gray-600">
                                    <span>Most Recent</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {discussions.map(discussion => (
                                <div key={discussion.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                        {discussion.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <span className="font-medium text-gray-900">{discussion.user}</span>
                                            <span className="text-sm text-gray-500">{discussion.time}</span>
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <p className="text-gray-700">{discussion.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Assignments Section */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                                <span className="text-lg">📋</span>
                                <h3 className="text-lg font-semibold text-gray-800">Assignments</h3>
                            </div>
                            <button className="text-blue-600 hover:text-blue-700 font-medium">
                                View All
                            </button>
                        </div>

                        {/* Assignment Tabs */}
                        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
                            <button
                                onClick={() => setActiveAssignmentTab('upcoming')}
                                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                    activeAssignmentTab === 'upcoming'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                Upcoming Assignments
                            </button>
                            <button
                                onClick={() => setActiveAssignmentTab('past')}
                                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                    activeAssignmentTab === 'past'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                Past Assignments
                            </button>
                            <button
                                onClick={() => setActiveAssignmentTab('details')}
                                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                    activeAssignmentTab === 'details'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                Details
                            </button>
                        </div>

                        {/* Assignment Content */}
                        <div className="space-y-4">
                            {activeAssignmentTab === 'upcoming' && (
                                <div className="space-y-3">
                                    {upcomingAssignments.map((assignment, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div>
                                                <div className="font-medium text-gray-900">{assignment.course}</div>
                                                <div className="text-sm text-blue-600">View Assignment Details</div>
                                                <div className="text-sm text-gray-600">Instructor: {assignment.instructor}</div>
                                            </div>
                                            <div className="text-right">
                                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                                    {assignment.status}
                                                </span>
                                                <div className="text-sm text-gray-600 mt-1">{assignment.date}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeAssignmentTab === 'past' && (
                                <div className="space-y-3">
                                    {pastAssignments.map((assignment, index) => (
                                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="font-medium text-gray-900">{assignment.title}</div>
                                                <span className="text-lg font-bold text-green-600">{assignment.grade}</span>
                                            </div>
                                            <div className="text-sm text-gray-600 mb-2">{assignment.course}</div>
                                            <div className="text-sm text-gray-700">
                                                <span className="font-medium">Instructor Feedback:</span> {assignment.feedback}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeAssignmentTab === 'details' && (
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">{assignmentDetails.title}</h4>
                                    <p className="text-gray-700 mb-2">{assignmentDetails.subtitle}</p>
                                    <p className="text-sm text-gray-600 mb-3">Due: {assignmentDetails.dueDate}</p>
                                    <div className="text-sm text-gray-700">
                                        <span className="font-medium">Instructions:</span><br />
                                        {assignmentDetails.instructions}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-800">Resources</h3>
                            <button className="text-blue-600 hover:text-blue-700 font-medium">
                                View All
                            </button>
                        </div>

                        {/* Resource Tabs */}
                        <div className="flex space-x-4 mb-6 border-b">
                            <button
                                onClick={() => setActiveResourceTab('lecture')}
                                className={`pb-2 font-medium ${
                                    activeResourceTab === 'lecture'
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                Lecture Slides
                            </button>
                            <button
                                onClick={() => setActiveResourceTab('notes')}
                                className={`pb-2 font-medium ${
                                    activeResourceTab === 'notes'
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                Notes
                            </button>
                            <button
                                onClick={() => setActiveResourceTab('materials')}
                                className={`pb-2 font-medium ${
                                    activeResourceTab === 'materials'
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                Materials
                            </button>
                        </div>

                        <div className="space-y-4">
                            {activeResourceTab === 'lecture' && lectureSlides.map((slide, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <div className="font-medium text-gray-900">{slide.week}</div>
                                        <div className="text-gray-600">{slide.title}</div>
                                        <div className="text-sm text-gray-500 mt-1">
                                            Note: Be sure to regularly check this section for updates and newly added materials to support your studies.
                                        </div>
                                    </div>
                                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                                        <Download className="w-4 h-4" />
                                        <span>Download Slides</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-span-4 space-y-6">
                    {/* Instructor Information */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-2 mb-6">
                            <User className="w-5 h-5 text-gray-600" />
                            <h3 className="text-lg font-semibold text-gray-800">Instructor's Information</h3>
                        </div>
                        
                        <div className="space-y-4">
                            {instructors.map((instructor, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <img
                                        src={instructor.avatar}
                                        alt={instructor.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900">{instructor.name}</h4>
                                        <p className="text-sm text-gray-600">{instructor.title}</p>
                                        <div className="flex items-center space-x-1 text-sm text-blue-600 mt-1">
                                            <Phone className="w-3 h-3" />
                                            <span>{instructor.phone}</span>
                                        </div>
                                        <div className="flex items-center space-x-1 text-sm text-blue-600">
                                            <Mail className="w-3 h-3" />
                                            <span>{instructor.email}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Announcements */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                                <span className="text-lg">📢</span>
                                <h3 className="text-lg font-semibold text-gray-800">Announcements</h3>
                            </div>
                            <button className="text-blue-600 hover:text-blue-700 font-medium">
                                View All
                            </button>
                        </div>

                        <div className="space-y-4">
                            {announcements.map((announcement, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-900">{announcement.instructor}</span>
                                        <span className="text-xs text-gray-500">{announcement.date}</span>
                                    </div>
                                    <h4 className="font-medium text-gray-900 mb-2">{announcement.title}</h4>
                                    <p className="text-sm text-gray-700 mb-3">{announcement.content}</p>
                                    <div className="flex items-center justify-between">
                                        <button className="text-sm text-blue-600 hover:text-blue-700">Read More</button>
                                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                                            <span>👍</span>
                                            <span>{announcement.likes} More</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseContent;
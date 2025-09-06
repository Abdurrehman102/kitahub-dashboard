"use client";
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CourseContent from '../../components/CourseContent';

const CoursesPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar currentPage="courses-overview" userRole="student" />
            <div className="flex-1 flex flex-col">
                <Header userRole="student" userName="Maya Thompson" />
                <div className="flex-1 overflow-auto">
                    <CourseContent userRole="student" userName="Maya Thompson" />
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
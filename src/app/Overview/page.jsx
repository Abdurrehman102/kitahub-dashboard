"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CourseContent from '../../components/CourseContent'; // Student dashboard
import ProfessorOverviewContent from '../../components/ProfessorOverviewContent'; // Professor dashboard

const OverviewPage = () => {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'professor'; // Default to professor for overview
    
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar userType={role} />
            <div className="flex-1 flex flex-col">
                <Header userRole={role} userName={role === 'student' ? 'Maya Thompson' : 'Prof. Jane Smith'} />
                <div className="flex-1 overflow-auto">
                    {role === 'student' ? (
                        <CourseContent userRole="student" />
                    ) : (
                        <ProfessorOverviewContent userRole="professor" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;
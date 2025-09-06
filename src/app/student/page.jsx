"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import ProfessorSidebar from '../../components/ProfessorSidebar';
import Header from '../../components/Header';
// Import Error404Page or create a simple placeholder
import Error404Page from '../../components/404Page';

const StudentsPage = () => {
    const searchParams = useSearchParams();
    const isProfessor = searchParams.get('role') === 'professor';
    
    return (
        <div className="flex min-h-screen bg-gray-50">
            {isProfessor ? (
                <ProfessorSidebar userType="professor" />
            ) : (
                <Sidebar userType="student" />
            )}
            <div className="flex-1 flex flex-col">
                <Header 
                    userRole={isProfessor ? 'professor' : 'student'} 
                    userName={isProfessor ? 'Prof. Jane Smith' : 'Maya Thompson'} 
                    userType={isProfessor ? 'Professor' : 'Student'} 
                />
                <div className="flex-1 overflow-auto">
                    {/* Show 404 since StudentsContent doesn't exist yet */}
                    <Error404Page />
                </div>
            </div>
        </div>
    );
};

export default StudentsPage;
"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import ProfessorSidebar from '../../components/ProfessorSidebar';
import Header from '../../components/Header';
import DiscussionsContent from '../../components/DiscussionsContent';

const DiscussionsPage = () => {
    const searchParams = useSearchParams();
    const isProfessor = searchParams.get('role') === 'professor';
    
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Always show the correct sidebar based on role */}
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
                    <DiscussionsContent 
                        userRole={isProfessor ? 'professor' : 'student'} 
                        userName={isProfessor ? 'Prof. Jane Smith' : 'Maya Thompson'} 
                    />
                </div>
            </div>
        </div>
    );
};

export default DiscussionsPage;
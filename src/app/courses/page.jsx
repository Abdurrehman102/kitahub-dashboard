"use client";
import React, { Suspense } from 'react'; // Suspense import kiya
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import ProfessorSidebar from '../../components/ProfessorSidebar';
import Header from '../../components/Header';
import Error404Page from '../../components/404Page';

// 1. Logic ko alag component mein nikal liya
const ResourcesContent = () => {
    const searchParams = useSearchParams();
    const isProfessor = searchParams.get('role') === 'professor';
    
    return (
        <div className="flex min-h-screen bg-gray-50 w-full">
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
                    <Error404Page />
                </div>
            </div>
        </div>
    );
};

// 2. Main page sirf boundary provide karega
const ResourcesPage = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen font-bold">Loading Resources...</div>}>
            <ResourcesContent />
        </Suspense>
    );
};

export default ResourcesPage;
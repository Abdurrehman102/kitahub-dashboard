"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
// Line 6 hata di kyunke CourseContent file nahi hai
import ProfessorOverviewContent from '../../components/ProfessorOverviewContent.jsx';
import DashboardContent from '../../components/DashboardContent'; // Isay backup ke liye use kar len

const OverviewPage = () => {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'professor';

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar userType={role} />
            <div className="flex-1 flex flex-col">
                <Header userRole={role} userName={role === 'student' ? 'Maya Thompson' : 'Prof. Jane Smith'} />
                <div className="flex-1 overflow-auto p-4">
                    {role === 'student' ? (
                        /* CourseContent ki jagah ye likh den */
                        <DashboardContent userRole="student" /> 
                    ) : (
                        <ProfessorOverviewContent userRole="professor" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;
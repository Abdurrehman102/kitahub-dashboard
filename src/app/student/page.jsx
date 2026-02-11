"use client";
import React, { Suspense } from 'react'; // Suspense lazmi hai
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import DashboardContent from '../../components/DashboardContent';

// 1. UI ko alag component mein nikalen
const StudentDashboardContent = () => {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'student';

    return (
        <div className="flex-1 flex flex-col">
            <Header userRole={role} userName="Maya Thompson" userType="Student" />
            <div className="flex-1 overflow-auto">
                <DashboardContent userRole="student" userName="Maya Thompson" />
            </div>
        </div>
    );
};

// 2. Main page par Suspense boundary lagayen
const StudentPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar currentPage="dashboard" userRole="student" />
            <Suspense fallback={<div className="p-10 font-bold">Loading Student Dashboard...</div>}>
                <StudentDashboardContent />
            </Suspense>
        </div>
    );
};

export default StudentPage;
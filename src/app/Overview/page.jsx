"use client";
import React, { Suspense } from 'react'; // Suspense import kiya
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import DashboardContent from '../../components/DashboardContent';
import ProfessorOverviewContent from '../../components/ProfessorOverviewContent.jsx';

// Ek chota component banayen jo search params ko handle kare
const OverviewContent = () => {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'professor';

    return (
        <div className="flex-1 flex flex-col">
            <Header userRole={role} userName={role === 'student' ? 'Maya Thompson' : 'Prof. Jane Smith'} />
            <div className="flex-1 overflow-auto p-4">
                {role === 'student' ? (
                    <DashboardContent userRole="student" />
                ) : (
                    <ProfessorOverviewContent userRole="professor" />
                )}
            </div>
        </div>
    );
};

// Main page component jo Suspense boundary provide karega
const OverviewPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar ko Suspense se bahar rakh sakte hain kyunki wo hook use nahi kar raha */}
            <Sidebar userType="professor" /> 
            
            <Suspense fallback={<div>Loading...</div>}>
                <OverviewContent />
            </Suspense>
        </div>
    );
};

export default OverviewPage;
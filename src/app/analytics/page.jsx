"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import AnalyticsContent from '../../components/AnalyticsContent';

// 1. Content ko alag component mein nikalen
const AnalyticsPageContent = () => {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'professor';

    return (
        <div className="flex-1 flex flex-col">
            <Header userRole={role} userName={role === 'student' ? 'Maya Thompson' : 'Prof. Jane Smith'} />
            <main className="flex-1 overflow-auto p-4">
                <AnalyticsContent userRole={role} />
            </main>
        </div>
    );
};

// 2. Main page par Suspense wrap karen
const AnalyticsPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar userType="professor" />
            <Suspense fallback={<div className="p-10">Loading Analytics...</div>}>
                <AnalyticsPageContent />
            </Suspense>
        </div>
    );
};

export default AnalyticsPage;
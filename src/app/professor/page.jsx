"use client";
import React from 'react';
import ProfessorSidebar from '../../components/ProfessorSidebar';
import Header from '../../components/Header';
import ProfessorDashboardContent from '../../components/ProfessorDashboardContent';

const ProfessorPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <ProfessorSidebar userType="professor" />
            <div className="flex-1 flex flex-col">
                <Header userRole="professor" userName="Prof. Jane Smith" userType="Professor" />
                <div className="flex-1 overflow-auto">
                    <ProfessorDashboardContent userRole="professor" userName="Prof. Jane Smith" />
                </div>
            </div>
        </div>
    );
};

export default ProfessorPage;
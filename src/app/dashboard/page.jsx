"use client";
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import DashboardContent from '../../components/DashboardContent';

const DashboardPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar currentPage="dashboard" userRole="student" />
            <div className="flex-1 flex flex-col">
                <Header userRole="student" userName="Maya Thompson" userType="Student" />
                <div className="flex-1 overflow-auto">
                    <DashboardContent userRole="student" userName="Maya Thompson" />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
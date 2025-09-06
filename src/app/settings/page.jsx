"use client";
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import SettingsContent from '../../components/SettingsContent';

const SettingsPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar currentPage="settings" userRole="student" />
            <div className="flex-1 flex flex-col">
                <Header userRole="student" userName="Maya Thompson" />
                <div className="flex-1 overflow-auto">
                    <SettingsContent userRole="student" userName="Maya Thompson" />
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
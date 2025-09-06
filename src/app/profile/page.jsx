"use client";
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ProfileContent from '../../components/ProfileContent';

const ProfilePage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar currentPage="profile" userRole="student" />
            <div className="flex-1 flex flex-col">
                <Header userRole="student" userName="Maya Thompson" />
                <div className="flex-1 overflow-auto">
                    <ProfileContent userRole="student" userName="Maya Thompson" />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
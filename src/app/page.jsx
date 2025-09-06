"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProfessorSidebar from '../components/ProfessorSidebar';
import Header from '../components/Header';
import DashboardContent from '../components/DashboardContent';
import ProfessorDashboardContent from '../components/ProfessorDashboardContent';

export default function HomePage() {
  const [userType, setUserType] = useState('student');

  return (
    <div className="min-h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{__html: `
        body {
          font-family: 'Inter', sans-serif;
        }
      `}} />

      {/* User Type Switcher for Demo */}
      

      {/* Main Content with Sidebar and Header */}
      <div className="flex">
        {/* Conditional Sidebar Rendering */}
        {userType === 'student' ? (
          <Sidebar currentPage="dashboard" userRole="student" />
        ) : (
          <ProfessorSidebar currentPage="overview" />
        )}
        
        {/* Header with proper props */}
        <div className="flex-1 flex flex-col">
          <Header
            userName={userType === 'student' ? 'Maya Thompson' : 'Prof. Jane Smith'}
            userType={userType === 'student' ? 'Student' : 'Professor'}
            userRole={userType}
          />
          
          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            {userType === 'student' ? (
              <DashboardContent 
                userName="Maya Thompson"
                userRole="student"
              />
            ) : (
              <ProfessorDashboardContent 
                userName="Prof. Jane Smith"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
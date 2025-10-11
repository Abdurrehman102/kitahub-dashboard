'use client';

import { useSearchParams } from 'next/navigation';
import StudentSidebar from './Sidebar'; // Your original sidebar
import ProfessorSidebar from './ProfessorSidebar'; // Your new professor sidebar

const DashboardLayout = ({ children }) => {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'student'; // Default to student if no role

  return (
    <div className="flex min-h-screen">
      {/* Automatically show correct sidebar based on role */}
      {role === 'professor' ? (
        <ProfessorSidebar userType="professor" />
      ) : (
        <StudentSidebar userType="student" />
      )}

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-[238px]">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
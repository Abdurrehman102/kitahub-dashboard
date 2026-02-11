"use client";
import React, { Suspense } from 'react'; // Suspense import kiya
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import AssignmentsContent from '../../components/AssignmentsContent';
import ProfessorAssignmentsContent from '../../components/ProfessorAssignmentsContent';

// 1. Content ko alag component mein rakha taake searchParams safely use ho sakein
const AssignmentsPageContent = () => {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'student';
    
    return (
        <div className="flex-1 flex flex-col">
            <Header userRole={role} userName={role === 'student' ? 'Maya Thompson' : 'Prof. Jane Smith'} />
            <div className="flex-1 overflow-auto">
                {role === 'student' ? (
                    <AssignmentsContent userRole="student" userName="Maya Thompson" />
                ) : (
                    <ProfessorAssignmentsContent userRole="professor" userName="Prof. Jane Smith" />
                )}
            </div>
        </div>
    );
};

// 2. Main component mein Suspense boundary add ki
const AssignmentsPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar parameter mang raha hai, hum default role pass kar rahe hain ya static */}
            <Sidebar userType="student" /> 
            
            <Suspense fallback={<div className="p-10">Loading Assignments...</div>}>
                <AssignmentsPageContent />
            </Suspense>
        </div>
    );
};

export default AssignmentsPage;
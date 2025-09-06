"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import AssignmentsContent from '../../components/AssignmentsContent';
import ProfessorAssignmentsContent from '../../components/ProfessorAssignmentsContent';

const AssignmentsPage = () => {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'student';
    
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar userType={role} />
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
        </div>
    );
};

export default AssignmentsPage;
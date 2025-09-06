import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Error404Page from '../components/404Page';

const NotFound = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar currentPage="dashboard" userRole="student" />
            <div className="flex-1 flex flex-col">
                <Header userRole="student" userName="Maya Thompson" />
                <div className="flex-1 overflow-auto">
                    <Error404Page />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
"use client";
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import BookmarksContent from '../../components/BookmarksContent';

const BookmarksPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar currentPage="bookmarks" userRole="student" />
            <div className="flex-1 flex flex-col">
                <Header userRole="student" userName="Maya Thompson" />
                <div className="flex-1 overflow-auto">
                    <BookmarksContent userRole="student" userName="Maya Thompson" />
                </div>
            </div>
        </div>
    );
};

export default BookmarksPage;
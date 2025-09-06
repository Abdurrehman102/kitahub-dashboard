import React from 'react';
import Link from 'next/link';

const Error404Page = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center max-w-lg mx-auto">
        {/* Large "Opps" Text */}
        <div className="mb-8">
          <h1 className="text-8xl font-light text-blue-200 mb-4">Opps</h1>
          <h2 className="text-2xl font-medium text-gray-600">Page Not Found</h2>
        </div>

        {/* 404 Illustration */}
        <div className="mb-8 relative">
          <div className="flex items-center justify-center space-x-4">
            {/* Person carrying "4" */}
            <div className="relative">
              <div className="w-24 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white text-6xl font-bold transform -rotate-12">
                4
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-4xl">
                🚶‍♂️
              </div>
            </div>

            {/* Person carrying "0" */}
            <div className="relative">
              <div className="w-24 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                0
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-4xl">
                🚶‍♀️
              </div>
            </div>

            {/* Person carrying "4" */}
            <div className="relative">
              <div className="w-24 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white text-6xl font-bold transform rotate-12">
                4
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-4xl">
                🚶‍♂️
              </div>
            </div>
          </div>
        </div>

        {/* Go to Homepage Button */}
        <Link 
          href="/dashboard"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
        >
          Go To Homepage
        </Link>
      </div>
    </main>
  );
};

export default Error404Page;
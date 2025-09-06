import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faLock } from '@fortawesome/free-solid-svg-icons';

const SettingsContent = () => {
    return (
        <div className="p-8 ml-64 min-h-screen w-[calc(100%-16rem)]">
            <h1 className="text-3xl font-bold mb-8 text-text-primary">Settings</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* General Settings Card */}
                <div className="neumorphic-card p-6">
                    <div className="flex items-center space-x-4 mb-4">
                        <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-gray-500" />
                        <h2 className="text-xl font-semibold text-text-primary">General</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                className="neumorphic-input w-full" 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input 
                                type="email" 
                                placeholder="john.doe@example.com" 
                                className="neumorphic-input w-full" 
                            />
                        </div>
                        <button className="neumorphic-button bg-kita-secondary text-white px-4 py-2 w-full mt-2">
                            Update Profile
                        </button>
                    </div>
                </div>

                {/* Notifications Settings Card */}
                <div className="neumorphic-card p-6">
                    <div className="flex items-center space-x-4 mb-4">
                        <FontAwesomeIcon icon={faBell} className="w-6 h-6 text-gray-500" />
                        <h2 className="text-xl font-semibold text-text-primary">Notifications</h2>
                    </div>
                    <div className="space-y-4">
                        <label className="flex items-center space-x-2 text-gray-700">
                            <input type="checkbox" className="neumorphic-checkbox" defaultChecked />
                            <span>Email Notifications</span>
                        </label>
                        <label className="flex items-center space-x-2 text-gray-700">
                            <input type="checkbox" className="neumorphic-checkbox" defaultChecked />
                            <span>Push Notifications</span>
                        </label>
                        <label className="flex items-center space-x-2 text-gray-700">
                            <input type="checkbox" className="neumorphic-checkbox" />
                            <span>SMS Notifications</span>
                        </label>
                    </div>
                </div>

                {/* Security Settings Card */}
                <div className="neumorphic-card p-6">
                    <div className="flex items-center space-x-4 mb-4">
                        <FontAwesomeIcon icon={faLock} className="w-6 h-6 text-gray-500" />
                        <h2 className="text-xl font-semibold text-text-primary">Security</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Current Password</label>
                            <input 
                                type="password" 
                                placeholder="********" 
                                className="neumorphic-input w-full" 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">New Password</label>
                            <input 
                                type="password" 
                                placeholder="********" 
                                className="neumorphic-input w-full" 
                            />
                        </div>
                        <button className="neumorphic-button bg-kita-secondary text-white px-4 py-2 w-full mt-2">
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsContent;

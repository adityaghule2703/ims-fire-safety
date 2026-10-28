import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, X, Bell, User, ChevronDown, Settings, LogOut, HelpCircle, Shield, Building, Mail, Phone, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../config/Config';

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const profileRef = useRef(null);
  const notificationsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success && data.data) {
        setUserData(data.data);
        // Also store in localStorage for persistence
        localStorage.setItem('userData', JSON.stringify(data.data));
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // Clear all authentication data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    localStorage.removeItem('loginIdentifier');
    localStorage.removeItem('otpMethod');
    localStorage.removeItem('userRoles');
    localStorage.removeItem('isSuperAdmin');
    localStorage.removeItem('branchInfo');
    localStorage.removeItem('loginMethod');
    localStorage.removeItem('isInstitutionalUser');
    
    // Clear session storage
    sessionStorage.clear();
    
    // Navigate to login page
    navigate('/login');
    
    // Close profile dropdown if open
    setIsProfileOpen(false);
  };

  // Get user's primary role name
  const getUserRole = () => {
    if (!userData || !userData.roles || userData.roles.length === 0) return 'User';
    
    const roleNames = userData.roles.map(role => {
      // Format role name: replace underscores with spaces and capitalize
      return role.name.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
    });
    
    return roleNames[0]; // Return the first role
  };

  // Get user's display name
  const getDisplayName = () => {
    if (!userData) return 'User';
    return userData.name || userData.email?.split('@')[0] || 'User';
  };

  // Get user's email
  const getUserEmail = () => {
    if (!userData) return 'user@example.com';
    return userData.email || 'No email';
  };

  // Get user's mobile
  const getUserMobile = () => {
    if (!userData) return 'Not provided';
    return userData.mobile || 'Not provided';
  };

  // Get branch name
  const getBranchName = () => {
    if (!userData || !userData.branch) return 'No Branch Assigned';
    return userData.branch.name;
  };

  // Get user avatar initials
  const getUserInitials = () => {
    const name = getDisplayName();
    return name.charAt(0).toUpperCase();
  };

  const notifications = [
    { id: 1, title: 'New vehicle added', message: '2024 Tesla Model 3 added to inventory', time: '5 min ago', color: '#D32F2F' },
    { id: 2, title: 'Test drive scheduled', message: 'John Smith requested test drive', time: '1 hour ago', color: '#FF6F00' },
    { id: 3, title: 'Sale completed', message: 'Toyota Camry sold for $28,500', time: '3 hours ago', color: '#4CAF50' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 h-16 z-20"
        style={{ 
          background: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}
      >
        <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Section - Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          {/* Logo Section - Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <img src="/images/logo1.png" alt="AutoDeal" className="h-8 w-auto" />
          </div>

          {/* Logo Section - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <img src="/images/logo1.png" alt="AutoDeal" className="h-10 w-auto" />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 focus-within:shadow-md" style={{ 
            background: '#F9FAFB',
            border: '1px solid #E5E7EB'
          }}>
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search vehicles, customers, reports..."
              className="bg-transparent text-sm outline-none w-80 text-gray-700 placeholder:text-gray-400"
            />
            <span className="text-xs px-2 py-0.5 rounded-md font-mono text-gray-500 bg-gray-100">⌘K</span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Help Button */}
            <button className="hidden sm:flex p-2 rounded-lg transition-all duration-200 hover:bg-gray-100">
              <HelpCircle className="w-4 h-4 text-gray-600" />
            </button>

            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
              >
                <Bell className="w-4 h-4 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-600 ring-2 ring-white"></span>
              </button>

              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border overflow-hidden z-30 animate-slideDown"
                  style={{ borderColor: '#E5E7EB' }}
                >
                  <div className="px-4 py-3 border-b flex items-center justify-between bg-gray-50" style={{ borderColor: '#E5E7EB' }}>
                    <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
                    <button className="text-[10px] text-red-600 hover:text-red-700 transition-colors">Mark all read</button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div key={notif.id} className="px-4 py-3 border-b hover:bg-gray-50 transition-colors cursor-pointer" style={{ borderColor: '#F3F4F6' }}>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-1.5" style={{ background: notif.color }}></div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-800">{notif.title}</p>
                            <p className="text-xs mt-0.5 text-gray-500">{notif.message}</p>
                            <p className="text-[10px] mt-1 font-mono text-red-600">{notif.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 text-center border-t bg-gray-50" style={{ borderColor: '#E5E7EB' }}>
                    <button className="text-xs text-gray-600 hover:text-red-600 transition-colors w-full py-1">View all notifications</button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3 transition-all duration-200 hover:opacity-80"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-gray-800">{getDisplayName()}</p>
                  <p className="text-[10px] font-mono text-red-600">{getUserRole()}</p>
                </div>
                <div className="relative group">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{ 
                      background: 'linear-gradient(135deg, #D32F2F, #B71C1C)',
                    }}
                  >
                    {!loading && userData ? (
                      <span className="text-white font-semibold text-sm">
                        {getUserInitials()}
                      </span>
                    ) : (
                      <User className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex items-center justify-center bg-green-500 border-2 border-white"
                  ></div>
                </div>
                <ChevronDown className="w-3 h-3 hidden sm:block text-gray-400" />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border overflow-hidden z-30 animate-slideDown"
                  style={{ borderColor: '#E5E7EB' }}
                >
                  {/* User Info Header */}
                  <div className="px-4 py-4 border-b bg-gradient-to-r from-gray-50 to-white" style={{ borderColor: '#E5E7EB' }}>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #D32F2F, #B71C1C)' }}
                      >
                        {!loading && userData ? (
                          <span className="text-white font-bold text-xl">
                            {getUserInitials()}
                          </span>
                        ) : (
                          <User className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">{getDisplayName()}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Award className="w-3 h-3 text-red-600" />
                          <p className="text-xs text-red-600 font-medium">{getUserRole()}</p>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <p className="text-[9px] font-mono text-gray-500">Active</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="px-4 py-3 border-b bg-gray-50" style={{ borderColor: '#E5E7EB' }}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{getUserEmail()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{getUserMobile()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Building className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{getBranchName()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                   
                    <div className="border-t my-1 mx-2 border-gray-100"></div>
                    <button 
                      onClick={handleLogout}
                      className="w-full px-4 py-2.5 text-sm text-left hover:bg-red-50 transition-colors flex items-center gap-3 text-red-600"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div
            className="fixed top-16 left-0 right-0 bg-white p-4 shadow-lg z-20 md:hidden animate-slideDown"
            style={{ borderBottom: '1px solid #E5E7EB' }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{ 
                background: '#F9FAFB',
                border: '1px solid #E5E7EB'
              }}
            >
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent text-sm outline-none text-gray-700"
                autoFocus
              />
              <button onClick={() => setIsSearchOpen(false)} aria-label="Close search">
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
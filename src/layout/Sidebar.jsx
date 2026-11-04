import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isMobileOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navGroups = [
    {
      section: 'Overview',
      items: [
        {
          label: 'Dashboard',
          path: '/dashboard',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-3a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z" />
            </svg>
          ),
          badge: null
        },
      ],
    },
    {
      section: 'Sales',
      items: [
        {
          label: 'Booking Management List',
          path: '/book-mng-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ),
          badge: null
        },
      ],
    },
  ];

  const sidebarContent = (
    <aside
      className="h-full flex flex-col overflow-y-auto"
      style={{
        background: '#0A1A0F',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <style>{`
        aside::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg"
            style={{ background: 'linear-gradient(135deg, #D32F2F, #B71C1C)' }}
          >
            <svg width={16} height={16} fill="white" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="7" cy="17" r="2" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="17" cy="7" r="2" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <span className="font-bold text-white text-sm">AutoDeal</span>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <svg width={20} height={20} fill="none" stroke="rgba(255,255,255,0.6)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`
          nav::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {navGroups.map((group) => (
          <div key={group.section} className="mb-6">
            <p
              className="text-[9px] font-bold uppercase tracking-wider px-3 mb-2"
              style={{
                color: '#EF5350',
                letterSpacing: '0.16em',
                fontSize: '9px'
              }}
            >
              {group.section}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = activeItem === item.label;

                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => {
                      setActiveItem(item.label);
                      if (onClose && window.innerWidth < 1024) onClose();
                    }}
                    className="block relative"
                  >
                    <div
                      className={`
                        flex items-center gap-3 px-3 py-2.5 rounded-lg
                        transition-all duration-150 cursor-pointer
                        ${isActive
                          ? 'bg-white/10 text-white'
                          : 'text-white/40 hover:bg-white/5 hover:text-white/70'
                        }
                      `}
                      style={{
                        outline: isActive ? '1px solid rgba(239, 83, 80, 0.3)' : '1px solid transparent',
                      }}
                    >
                      {isActive && (
                        <span
                          className="absolute left-0 top-1/4 bottom-1/4 w-0.5 rounded-r"
                          style={{ background: '#EF5350', boxShadow: '0 0 8px #EF5350' }}
                        />
                      )}
                      <span className="shrink-0">{item.icon}</span>
                      <span className="flex-1 text-left text-sm font-medium">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span
                          className={`
                            text-[9px] font-semibold px-1.5 py-0.5 rounded-full
                            ${item.badge === 'NEW'
                              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                              : 'bg-white/10 text-white/70 border border-white/15'
                            }
                          `}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-3 pb-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 hover:bg-white/5 group"
          style={{ color: '#EF9A9A' }}
        >
          <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="text-sm font-medium group-hover:translate-x-0.5 transition-transform">Logout</span>
        </button>
      </div>
    </aside>
  );

  // Mobile: overlay drawer
  if (isMobileOpen !== undefined) {
    return (
      <>
        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={onClose}
            style={{ backdropFilter: 'blur(4px)' }}
          />
        )}
        <div
          className={`fixed top-0 left-0 bottom-0 w-72 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ boxShadow: '4px 0 20px rgba(0,0,0,0.3)' }}
        >
          {sidebarContent}
        </div>
      </>
    );
  }

  // Desktop: fixed sidebar
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-72 hidden lg:block z-10 shadow-2xl">
      {sidebarContent}
    </aside>
  );
};

export default Sidebar;
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
        { 
          label: 'Analytics', 
          path: '/analytics',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Reports', 
          path: '/reports',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: 'NEW' 
        },
      ],
    },
    {
      section: 'Stock Movement',
      items: [
        { 
          label: 'Stock Movement List', 
          path: '/stock-movement',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Stock Movement History', 
          path: '/stock-movement-history',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Stock Movement Requests', 
          path: '/stock-movement-requests',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Purchase',
      items: [
        { 
          label: 'Inward Stock', 
          path: '/inward-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Stock Verification', 
          path: '/stock-verification',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Stock Transfer', 
          path: '/stock-transfer',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Upload Challan', 
          path: '/upload-challan',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'RTO Chassis', 
          path: '/rto-chassis',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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
          label: 'New Booking', 
          path: '/new-booking',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'All Booking', 
          path: '/booking-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Self Insurance', 
          path: '/self-insurance',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Delivery Challan', 
          path: '/delivery-challan',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'TAX Invoice', 
          path: '/invoice',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Proforma Invoice', 
          path: '/dummy-invoice',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Helmet Invoice', 
          path: '/helmet-invoice',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Deal Form', 
          path: '/deal-form',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Upload Deal Form & Delivery Challan', 
          path: '/upload-deal',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Sales Report',
      items: [
        { 
          label: 'Sales Person Wise', 
          path: '/sales-report',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Periodic Report', 
          path: '/periodic-report',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Quotation',
      items: [
        { 
          label: 'Quotation', 
          path: '/quotation-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Account',
      items: [
        { 
          label: 'Dashboard', 
          path: '/account-dashboard',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-3a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Receipts', 
          path: '/account/receipt',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Debit Note', 
          path: '/debit-note',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Refund', 
          path: '/refund',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M6 14h6m-6 4h12" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Cancelled Booking', 
          path: '/cancelled-booking',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'All Receipts', 
          path: '/account/all-receipt',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Ledgers', 
          path: '/view-ledgers',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Exchange Ledger', 
          path: '/exchange-ledgers',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Broker Payment Verification', 
          path: '/broker-payment',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'DP Receipt', 
          path: '/downpayment-receipt',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Report', 
          path: '/receipt-report',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Insurance',
      items: [
        { 
          label: 'Dashboard', 
          path: '/insurance-dashboard',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-3a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Insurance Details', 
          path: '/insurance-details',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'RTO',
      items: [
        { 
          label: 'Dashboard', 
          path: '/rto-dashboard',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-3a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'RTO Invoice', 
          path: '/rto-invoice',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Application', 
          path: '/rto/application',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'RTO Paper', 
          path: '/rto/rto-paper',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'RTO Tax', 
          path: '/rto/rto-tax',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'HSRP Ordering', 
          path: '/rto/hsrp-ordering',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'HSRP Installation', 
          path: '/rto/hsrp-installation',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'RC Confirmation', 
          path: '/rto/rc-confirmation',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'HSRP Update On Vahan Portal', 
          path: '/rto/vahanportal',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Report', 
          path: '/rto/rto-report',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Fund Management',
      items: [
        { 
          label: 'Cash Voucher', 
          path: '/cash-voucher',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Contra Voucher', 
          path: '/contra-voucher',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Contra Approval', 
          path: '/contra-approval',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Workshop Cash Receipt', 
          path: '/workshop-receipt',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'All Cash Receipt', 
          path: '/cash-receipt',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Cash Book', 
          path: '/cash-book',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Day Book', 
          path: '/day-book',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Report', 
          path: '/fund-report',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Masters',
      items: [
        { 
          label: 'Location', 
          path: '/branch/branch-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Branch Audit List', 
          path: '/branchauditlist/branch-audit-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Headers', 
          path: '/headers/headers-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Vehicles', 
          path: '/model/model-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Minimum Booking Amount', 
          path: '/minimumbookingamount/minimum-booking-amount-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Template List', 
          path: '/templateform/template-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Accessories', 
          path: '/accessories/accessories-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Colour', 
          path: '/color/color-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Documents', 
          path: '/documents/documents-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Terms & Conditions', 
          path: '/conditions/conditions-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Offer', 
          path: '/offers/offer-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Attachments', 
          path: '/attachments/attachments-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Declaration', 
          path: '/declaration-master',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'RTO', 
          path: '/rto/rto-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Financer', 
          path: '/financer/financer-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Finance Rates', 
          path: '/financer-rates/rates-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Insurance Providers', 
          path: '/insurance-provider/provider-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Brokers', 
          path: '/broker/broker-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Broker Commission Range', 
          path: '/broker/commission-range',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Vertical Masters', 
          path: '/vertical-master/vertical-master-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Branch Stock Audit',
      items: [
        { 
          label: 'Branch Stock Audit', 
          path: '/branch-stock-audit',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Fund Master',
      items: [
        { 
          label: 'Cash Account Master', 
          path: '/cash-master',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Bank Account Master', 
          path: '/bank-master',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Payment Mode', 
          path: '/payment-mode',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Expense Master', 
          path: '/expense',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Add Opening Balance', 
          path: '/opening-balance',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Accessories Billing',
      items: [
        { 
          label: 'Accessories Billing', 
          path: '/accessories-billing',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Customers',
      items: [
        { 
          label: 'Customers', 
          path: '/all-customers',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Subdealer',
      items: [
        { 
          label: 'Subdealer Stock Audit', 
          path: '/stock-audit-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Subdealer - Master',
      items: [
        { 
          label: 'Subdealer List', 
          path: '/subdealer-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Subdealer Audit List', 
          path: '/subdealer-audit-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Subdealer Commission', 
          path: '/subdealer-commission',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Calculate Commission', 
          path: '/subdealer/calculate-commission',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Subdealer - Booking',
      items: [
        { 
          label: 'New Booking', 
          path: '/subdealer-booking',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'All Booking', 
          path: '/subdealer-all-bookings',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Delivery Challan', 
          path: '/subdealer/delivery-challan',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Subdealer - Account',
      items: [
        { 
          label: 'Add Balance', 
          path: '/subdealer-account/add-balance',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'OnAccount Balance', 
          path: '/subdealer-account/onaccount-balance',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Add Amount', 
          path: '/subdealer-account/add-amount',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Finance Payment', 
          path: '/subdealer-account/receipt',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Payment Verification', 
          path: '/subdealer/payment-verification',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Subdealer Commission', 
          path: '/subdealer/payment',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Payment Summary', 
          path: '/subdealer/payment-summary',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Subdealer Ledger', 
          path: '/subdealer-ledger',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Customer Ledger', 
          path: '/subdealer/customer-ledger',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Summary', 
          path: '/subdealer/summary',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'User Management',
      items: [
        { 
          label: 'Create Role', 
          path: '/roles/create-role',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'All Role', 
          path: '/roles/all-role',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Add User', 
          path: '/users/add-user',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'User List', 
          path: '/users/users-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Other',
      items: [
        { 
          label: 'Buffer Report', 
          path: '/buffer/buffer-list',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          badge: null 
        },
        { 
          label: 'Manager Deviation', 
          path: '/manager-deviation',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          ),
          badge: null 
        },
      ],
    },
    {
      section: 'Authentication',
      items: [
        { 
          label: 'Login', 
          path: '/login',
          icon: (
            <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
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
                      {/* Active indicator */}
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

      {/* Storage / Stats */}
      <div className="mx-3 mb-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <svg width={12} height={12} fill="none" stroke="#EF5350" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
            <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Inventory Status</span>
          </div>
          <span className="text-[10px] font-mono" style={{ color: '#EF5350' }}>156/200</span>
        </div>
        <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <div 
            className="h-full rounded-full transition-all duration-300"
            style={{ width: '78%', background: 'linear-gradient(90deg, #D32F2F, #EF5350)' }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[8px] font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>78% capacity</p>
          <p className="text-[8px] font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>44 spots left</p>
        </div>
      </div>

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
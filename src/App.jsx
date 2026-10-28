import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";


// Protected Route Component
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!token || isLoggedIn !== "true") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Public Route Component - Redirects to dashboard if already logged in
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (token && isLoggedIn === "true") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes - No authentication needed */}
        {/* <Route 
          path="/login" 
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } 
        />
        <Route 
          path="/verify" 
          element={
            <PublicRoute>
              <VerifyOTP />
            </PublicRoute>
          } 
        /> */}

        {/* Protected Routes - Require authentication */}
        <Route
          path="/"
          element={
          
              <Layout />
           
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          
          {/* Add your other protected routes here as you build them */}
          {/* <Route path="/users/users-list" element={<Users />} />
          <Route path="/users/add-user" element={<AddUser />} /> */}
          {/* <Route path="dept-management" element={<DepartmentManagement />} /> */}
          {/* <Route path="domain-management" element={<DomainManagement />} /> */}
          {/* <Route path="holiday-management" element={<HolidayManagement />} /> */}
          {/* <Route path="batch-management" element={<BatchManagement />} /> */}
          {/* <Route path="student-management" element={<StudentManagement />} /> */}
          {/* <Route path="trainers" element={<Trainers />} /> */}
          {/* <Route path="attendance" element={<Attendance />} /> */}
          {/* <Route path="college-management" element={<CollegeManagement />} /> */}
          {/* <Route path="users" element={<Users />} /> */}
          {/* <Route path="roles" element={<Roles />} /> */}
          {/* <Route path="reports" element={<Reports />} /> */}
        </Route>

        {/* Catch all route - redirect to home (which will redirect to dashboard if authenticated or login if not) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
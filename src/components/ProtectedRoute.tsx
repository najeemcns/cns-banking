import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth";
import {Header} from "../components/Header"
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
    <Header />
    {children}
    </>
  );
};

export default ProtectedRoute;

import React, { useState } from "react";
import { Route, Routes, Outlet,Navigate } from "react-router-dom";
import MarketPlace from "../pages/MarketPlace";
import Oem from "../pages/Oem";
import Authentication from "../pages/Authentication";
import PrivateRoute from "../pages/PrivateRoute";

const AllRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
    
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<MarketPlace />} />

      {/* Authentication route */}
      <Route path="/auth" element={<Authentication />} />

      <Route path="/oem" element={<Oem />} />

      {/* Private route wrapped within a Route */}
      {/* <Route
        path="oem"
        element={
          isAuthenticated ? (
            <PrivateRoute>
              <Route path="/oem" element={<Oem />} />
            </PrivateRoute>
          ) : (
            <Navigate to="/auth" replace={true} />
          )
        }
      /> */}
    </Routes>
  

    </>
  );
};

export default AllRoutes;

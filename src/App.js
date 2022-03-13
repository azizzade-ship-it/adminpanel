import React from "react";
import "./App.css";
import TopBar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { routes } from "./routes";
import Home from "./pages/home/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import { PageContainer } from "./Pages.style.js";

function App() {
  const queryClient = new QueryClient();
  const accessToken = localStorage.getItem("user_hamrah");
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.type === "route")
        return accessToken ? (
          <Route
            key={route.name}
            path={route.route}
            element={route.component}
          />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        );
    });
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TopBar />
        <div className="container">
         {accessToken? <Sidebar getRoot={routes} />:""}
          <PageContainer>
            <Routes>
              {getRoutes(routes)}
              <Route path="/login" element={<Login />} />
            </Routes>
          </PageContainer>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import TopBar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { routes } from "./routes";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import { PageContainer } from "./Pages.style.js";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TopBar />
        <div className="container">
          <Sidebar getRoot={routes} />
          <PageContainer>
          <Routes>
            {routes.map((val) => {
              if (val.type === "route")
                return (
                  <Route
                    key={val.name}
                    path={val.route}
                    element={val.component}
                  />
                );
            })}
            <Route path="/login" element={<Login />} />
          </Routes>
          </PageContainer>
         
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

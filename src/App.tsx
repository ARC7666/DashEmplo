
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HRDashboard from "./pages/HRDashboard";
import Sidebar from "./components/Sidebar";

import { Toaster } from "@/components/ui/toaster";

const App = () => {
  const [showAddTaskModal, setShowAddTaskModal] = React.useState(false);

  const handleOpenAddTaskModal = () => {
    setShowAddTaskModal(true);
  };

  const handleCloseAddTaskModal = () => {
    setShowAddTaskModal(false);
  };

  return (
    <BrowserRouter>
      <div className="app flex min-h-screen bg-gray-50">
        <Sidebar handleOpenAddTaskModal={handleOpenAddTaskModal} />
        <main className="main-content flex-1 p-4 overflow-auto">
          <Routes>
            
            <Route path="/hr-dashboard" element={<HRDashboard />} />
          </Routes>
        </main>
       
        <Toaster />
      </div>
    </BrowserRouter>
  );
};

export default App;

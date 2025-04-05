
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import ProjectOverview from "./pages/ProjectOverview";
import Report from "./pages/Report";
import KanbanView from "./pages/KanbanView";
import Sidebar from "./components/Sidebar";
import AddTaskModal from "./components/AddTaskModal";

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
      <div className="app">
        <Sidebar handleOpenAddTaskModal={handleOpenAddTaskModal} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/project-overview" element={<ProjectOverview />} />
            <Route path="/kanban" element={<KanbanView />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </main>
        {showAddTaskModal && <AddTaskModal onClose={handleCloseAddTaskModal} />}
      </div>
    </BrowserRouter>
  );
};

export default App;

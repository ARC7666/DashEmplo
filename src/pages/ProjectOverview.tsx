
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import { ChartContainer } from "@/components/ui/chart";
import { Bar, Line, BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ProjectOverview = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' or 'kanban'
  
  // Calendar data with performance indicators
  const currentMonth = "April 2022";
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = [
    { day: 27, month: "previous" },
    { day: 28, month: "previous" },
    { day: 29, month: "previous" },
    { day: 30, month: "previous" },
    { day: 31, month: "previous" },
    { day: 1, month: "current", performance: "medium" }, // yellow
    { day: 2, month: "current", performance: "good" }, // green
    { day: 3, month: "current", performance: "good" }, // green
    { day: 4, month: "current", performance: "poor" }, // red
    { day: 5, month: "current", performance: "medium" }, // yellow
    { day: 6, month: "current", performance: "good" }, // green
    { day: 7, month: "current", performance: "good" }, // green
    { day: 8, month: "current", active: true, performance: "good" }, // green
    { day: 9, month: "current", performance: "medium" }, // yellow
    { day: 10, month: "current", performance: "medium" }, // yellow
    { day: 11, month: "current", performance: "poor" }, // red
    { day: 12, month: "current", performance: "good" }, // green
    { day: 13, month: "current", performance: "good" }, // green
    { day: 14, month: "current", performance: "medium" }, // yellow
    { day: 15, month: "current", performance: "good" }, // green
    { day: 16, month: "current", performance: "good" }, // green
    { day: 17, month: "current", performance: "medium" }, // yellow
    { day: 18, month: "current", performance: "good" }, // green
    { day: 19, month: "current", performance: "poor" }, // red
    { day: 20, month: "current" },
    { day: 21, month: "current" },
    { day: 22, month: "current" },
    { day: 23, month: "current" },
    { day: 24, month: "current" },
    { day: 25, month: "current" },
    { day: 26, month: "current" },
    { day: 27, month: "current" },
    { day: 28, month: "current" },
    { day: 29, month: "current" },
    { day: 30, month: "current" },
  ];

  // Team members
  const teamMembers = [
    { id: 1, name: "Dana R.", role: "Project manager", avatar: "/lovable-uploads/8ebb3fef-d232-4f86-b41a-94d580f66d89.png" },
    { id: 2, name: "Elon S.", role: "Key account plann.", avatar: "/lovable-uploads/0a9e6a1b-60a4-451d-b9e3-3d663db9557c.png" },
    { id: 3, name: "Nancy W.", role: "Account manager", avatar: "/lovable-uploads/799df5c3-1575-4783-9760-86f2cee17112.png" },
    { id: 4, name: "James M.", role: "Digital manager", avatar: "/lovable-uploads/a652ee74-1f34-40ea-843e-61d4cc71a443.png" },
  ];

  // Project progress data
  const projectTasks = [
    { id: 1, name: "Resources check", startMonth: "January", endMonth: "February" },
    { id: 2, name: "Participants", startMonth: "February", endMonth: "March" },
    { id: 3, name: "SWOT analysis", startMonth: "April", endMonth: "May" },
    { id: 4, name: "Design research", startMonth: "April", endMonth: "June" }
  ];

  // Tasks by user
  const userTasks = [
    {
      id: 1,
      user: "Dana",
      tasks: [
        { id: 101, name: "Research check-in", date: "Today", status: "Not started", priority: "High priority" },
        { id: 102, name: "Survey design", date: "Tomorrow", status: "In progress", priority: "Medium priority" },
        { id: 103, name: "Idea sprint", date: "Friday", status: "In progress", priority: "High priority" },
      ]
    },
    {
      id: 2,
      user: "Elon",
      tasks: [
        { id: 201, name: "Market analysis", date: "Today", status: "Not started", priority: "High priority" },
        { id: 202, name: "Surveys evaluation", date: "Thursday", status: "In progress", priority: "Medium priority" },
        { id: 203, name: "B2B Research", date: "Friday", status: "Paused", priority: "Low priority" },
      ]
    }
  ];

  // Monthly performance data for charts
  const monthlyPerformanceData = [
    { month: "Jan", completed: 32, total: 40, efficiency: 80 },
    { month: "Feb", completed: 28, total: 38, efficiency: 74 },
    { month: "Mar", completed: 36, total: 42, efficiency: 86 },
    { month: "Apr", completed: 30, total: 45, efficiency: 67 },
    { month: "May", completed: 42, total: 48, efficiency: 88 },
    { month: "Jun", completed: 38, total: 50, efficiency: 76 },
  ];

  // Task performance data
  const taskPerformanceData = [
    { category: "Research", onTime: 12, delayed: 3, efficiency: 80 },
    { category: "Design", onTime: 8, delayed: 1, efficiency: 89 },
    { category: "Development", onTime: 15, delayed: 4, efficiency: 79 },
    { category: "Testing", onTime: 10, delayed: 2, efficiency: 83 },
    { category: "Deployment", onTime: 5, delayed: 0, efficiency: 100 },
  ];

  const getPerformanceClass = (performance?: string) => {
    if (!performance) return "";
    
    switch(performance) {
      case "good": return "border-green-500";
      case "medium": return "border-yellow-500";
      case "poor": return "border-red-500";
      default: return "";
    }
  };

  const handleKanbanClick = () => {
    navigate('/kanban');
  };

  return (
    <div>
      <ProfileHeader />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Project overview / Market research 2024</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Calendar with Performance Indicators */}
        <div className="calendar">
          <div className="calendar-header">
            <h2 className="text-xl font-semibold">{currentMonth}</h2>
            <div className="flex">
              <button className="p-1 bg-gray-100 rounded-full mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="p-1 bg-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="calendar-days">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="font-semibold text-sm text-gray-600">
                {day}
              </div>
            ))}
            
            {dates.map((date, index) => (
              <div 
                key={index} 
                className={`calendar-day ${date.month !== 'current' ? 'text-gray-400' : ''} 
                  ${date.active ? 'active' : ''} 
                  ${date.performance ? 'border-2' : ''} 
                  ${getPerformanceClass(date.performance)}`}
              >
                {date.day}
              </div>
            ))}
          </div>
          
          <div className="mt-4 flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full border-2 border-green-500 mr-2"></div>
              <span className="text-sm">Good Performance</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full border-2 border-yellow-500 mr-2"></div>
              <span className="text-sm">Medium Performance</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full border-2 border-red-500 mr-2"></div>
              <span className="text-sm">Poor Performance</span>
            </div>
          </div>
        </div>
        
        {/* Project Progress */}
        <div className="chart-container">
          <h2 className="text-xl font-semibold mb-4">Project progress</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-6 gap-2">
              <div className="text-xs text-center font-medium text-gray-600">January</div>
              <div className="text-xs text-center font-medium text-gray-600">February</div>
              <div className="text-xs text-center font-medium text-gray-600">March</div>
              <div className="text-xs text-center font-medium text-gray-600">April</div>
              <div className="text-xs text-center font-medium text-gray-600">May</div>
              <div className="text-xs text-center font-medium text-gray-600">June</div>
            </div>
            
            {projectTasks.map(task => (
              <div key={task.id} className="flex items-center">
                <div className="w-1/4 pr-4 text-sm">{task.name}</div>
                <div className="w-3/4 h-6 relative">
                  {(() => {
                    const months = ["January", "February", "March", "April", "May", "June"];
                    const startIdx = months.indexOf(task.startMonth);
                    const endIdx = months.indexOf(task.endMonth);
                    const width = ((endIdx - startIdx + 1) / 6) * 100;
                    const marginLeft = (startIdx / 6) * 100;
                    
                    let bgColor = "bg-orange-200";
                    if (task.name === "Participants") bgColor = "bg-blue-200";
                    if (task.name === "SWOT analysis") bgColor = "bg-green-200";
                    if (task.name === "Design research") {
                      if (task.startMonth === "April") bgColor = "bg-yellow-200";
                      if (task.endMonth === "June") bgColor = "bg-purple-200";
                    }
                    
                    return (
                      <div 
                        className={`absolute h-full ${bgColor} rounded-md`}
                        style={{ width: `${width}%`, left: `${marginLeft}%` }}
                      ></div>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Monthly Performance Analysis */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Monthly Performance Analysis</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyPerformanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" name="Tasks Completed" fill="#82ca9d" />
                <Bar dataKey="total" name="Total Tasks" fill="#8884d8" />
                <Line type="monotone" dataKey="efficiency" name="Efficiency %" stroke="#ff7300" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Task Performance Analysis */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Task Performance Analysis</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={taskPerformanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="onTime" name="Tasks On Time" fill="#4CAF50" />
                <Bar dataKey="delayed" name="Tasks Delayed" fill="#F44336" />
                <Line type="monotone" dataKey="efficiency" name="Efficiency %" stroke="#2196F3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Team Directory */}
        <div className="project-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Team directory</h2>
            <button className="text-blue-500 text-sm font-medium flex items-center">
              See more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map(member => (
              <div key={member.id} className="text-center">
                <img src={member.avatar} alt={member.name} className="team-member-pic mx-auto" />
                <p className="font-medium">{member.name}</p>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Task by User */}
        <div className="project-card">
          <h2 className="text-xl font-semibold mb-4">Task by user</h2>
          
          {userTasks.map(userTask => (
            <div key={userTask.id} className="mb-6">
              <div className="flex items-center mb-2">
                <img 
                  src={userTask.user === "Dana" ? "/lovable-uploads/8ebb3fef-d232-4f86-b41a-94d580f66d89.png" : "/lovable-uploads/0a9e6a1b-60a4-451d-b9e3-3d663db9557c.png"}
                  alt={userTask.user} 
                  className="w-8 h-8 rounded-full mr-2" 
                />
                <h3 className="font-medium">{userTask.user}'s responsibilities</h3>
              </div>
              
              {userTask.tasks.map(task => (
                <div key={task.id} className="mb-2">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-4 h-5 w-5 rounded-full" />
                    
                    <div className="flex-1">
                      <p>{task.name}</p>
                    </div>
                    
                    <div className="mx-2 text-rose-500 font-medium">
                      {task.date}
                    </div>
                    
                    <div className={`mx-2 status-badge ${
                      task.status === "In progress" ? "status-in-progress" : 
                      task.status === "Not started" ? "status-not-started" : 
                      "status-paused"
                    }`}>
                      {task.status}
                    </div>
                    
                    <div className={`mx-2 priority-badge ${
                      task.priority === "High priority" ? "priority-high-badge" : 
                      task.priority === "Medium priority" ? "priority-medium-badge" : 
                      "priority-low-badge"
                    }`}>
                      {task.priority}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          
          <button className="mt-4 w-full py-2 text-center border border-gray-300 rounded" onClick={handleKanbanClick}>
            See Kanban view
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;


import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProjectOverview = () => {
  // Performance data
  const currentMonth = "April 2022";
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = [
    { day: 27, month: "previous" },
    { day: 28, month: "previous" },
    { day: 29, month: "previous" },
    { day: 30, month: "previous" },
    { day: 31, month: "previous" },
    { day: 1, month: "current", performance: "good" }, // green
    { day: 2, month: "current", performance: "average" }, // yellow
    { day: 3, month: "current", performance: "good" },
    { day: 4, month: "current", performance: "good" },
    { day: 5, month: "current", performance: "poor" }, // red
    { day: 6, month: "current", performance: "average" },
    { day: 7, month: "current", performance: "good" },
    { day: 8, month: "current", performance: "good", active: true },
    { day: 9, month: "current", performance: "average" },
    { day: 10, month: "current", performance: "good" },
    { day: 11, month: "current", performance: "good" },
    { day: 12, month: "current", performance: "poor" },
    { day: 13, month: "current", performance: "average" },
    { day: 14, month: "current", performance: "good" },
    { day: 15, month: "current", performance: "good" },
    { day: 16, month: "current", performance: "average" },
    { day: 17, month: "current", performance: "good" },
    { day: 18, month: "current", performance: "poor" },
    { day: 19, month: "current", performance: "average" },
    { day: 20, month: "current", performance: "good" },
    { day: 21, month: "current", performance: "good" },
    { day: 22, month: "current", performance: "average" },
    { day: 23, month: "current", performance: "good" },
    { day: 24, month: "current", performance: "good" },
    { day: 25, month: "current", performance: "poor" },
    { day: 26, month: "current", performance: "average" },
    { day: 27, month: "current", performance: "good" },
    { day: 28, month: "current", performance: "good" },
    { day: 29, month: "current", performance: "average" },
    { day: 30, month: "current", performance: "good" },
  ];

  // Monthly performance data for the graph
  const monthlyData = [
    { month: 'Jan', performance: 65, tasksCompleted: 18 },
    { month: 'Feb', performance: 75, tasksCompleted: 20 },
    { month: 'Mar', performance: 82, tasksCompleted: 24 },
    { month: 'Apr', performance: 78, tasksCompleted: 22 },
  ];

  // Task performance data
  const taskPerformanceData = [
    { category: 'Research', onTime: 12, delayed: 3 },
    { category: 'Strategy', onTime: 8, delayed: 1 },
    { category: 'Operations', onTime: 16, delayed: 4 },
    { category: 'Insights', onTime: 10, delayed: 2 },
  ];

  return (
    <div>
      <ProfileHeader />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Performance Overview</h1>
        <p className="text-xl text-gray-600">Track your work progress and performance</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {/* Performance Calendar */}
        <div className="chart-container">
          <h2 className="text-xl font-semibold mb-4">Performance Calendar</h2>
          
          <div className="flex items-center justify-end mb-4 gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full border-2 border-green-500 mr-2"></div>
              <span>Good</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full border-2 border-yellow-500 mr-2"></div>
              <span>Average</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full border-2 border-red-500 mr-2"></div>
              <span>Poor</span>
            </div>
          </div>
          
          <div className="calendar">
            <div className="calendar-header">
              <h3 className="text-lg font-semibold">{currentMonth}</h3>
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
              
              {dates.map((date, index) => {
                let borderClass = "";
                if (date.month === "current" && date.performance) {
                  if (date.performance === "good") borderClass = "border-2 border-green-500";
                  else if (date.performance === "average") borderClass = "border-2 border-yellow-500";
                  else if (date.performance === "poor") borderClass = "border-2 border-red-500";
                }
                
                return (
                  <div 
                    key={index} 
                    className={`calendar-day ${date.month !== 'current' ? 'text-gray-400' : ''} ${date.active ? 'active' : ''} ${borderClass} rounded-full`}
                  >
                    {date.day}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Monthly Performance Graph */}
        <div className="chart-container">
          <h2 className="text-xl font-semibold mb-4">Monthly Performance Analysis</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="performance" stroke="#ff9f56" strokeWidth={2} />
                <Line type="monotone" dataKey="tasksCompleted" stroke="#7e22ce" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Task Performance Graph */}
        <div className="chart-container">
          <h2 className="text-xl font-semibold mb-4">Task Completion Analysis</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={taskPerformanceData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="onTime" name="Completed On Time" fill="#15803d" />
                <Bar dataKey="delayed" name="Delayed" fill="#dc2626" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;


import { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";

const Tasks = () => {
  // Task state management
  const [taskStates, setTaskStates] = useState<{[key: number]: 'not_started' | 'in_progress' | 'paused' | 'completed'}>({});

  // Handle start task
  const handleStartTask = (taskId: number) => {
    setTaskStates(prev => ({
      ...prev,
      [taskId]: 'in_progress'
    }));
  };

  // Handle pause task
  const handlePauseTask = (taskId: number) => {
    setTaskStates(prev => ({
      ...prev,
      [taskId]: 'paused'
    }));
  };

  // Handle submit task
  const handleSubmitTask = (taskId: number) => {
    setTaskStates(prev => ({
      ...prev,
      [taskId]: 'completed'
    }));
  };

  // Task data
  const taskGroups = [
    {
      id: 1,
      title: "Today",
      tasks: [
        { 
          id: 1, 
          name: "Finish monthly reporting", 
          date: "Today", 
          status: "In progress", 
          priority: "High priority", 
          department: "Marketing Q2",
          assignees: ["/lovable-uploads/ff1b51dd-a272-4e94-b67d-5035cc5cca51.png"] 
        },
        { 
          id: 2, 
          name: "Contract signing", 
          date: "Today", 
          status: "In progress", 
          priority: "Medium priority", 
          department: "Operations",
          assignees: ["/lovable-uploads/0a9e6a1b-60a4-451d-b9e3-3d663db9557c.png", "/lovable-uploads/8ebb3fef-d232-4f86-b41a-94d580f66d89.png"] 
        },
        { 
          id: 3, 
          name: "Market overview keynote", 
          date: "Today", 
          status: "In progress", 
          priority: "High priority", 
          department: "Customer Care",
          assignees: ["/lovable-uploads/ff1b51dd-a272-4e94-b67d-5035cc5cca51.png"] 
        },
      ]
    },
    {
      id: 2,
      title: "Tomorrow",
      tasks: [
        { 
          id: 4, 
          name: "Brand proposal", 
          date: "Tomorrow", 
          status: "Not started", 
          priority: "High priority", 
          department: "Marketing Q2",
          assignees: ["/lovable-uploads/0a9e6a1b-60a4-451d-b9e3-3d663db9557c.png", "/lovable-uploads/924be514-d335-4305-87b9-6cfc2974e705.png"] 
        },
        { 
          id: 5, 
          name: "Social media review", 
          date: "Tomorrow", 
          status: "In progress", 
          priority: "Medium priority", 
          department: "Operations",
          assignees: ["/lovable-uploads/ff1b51dd-a272-4e94-b67d-5035cc5cca51.png"] 
        },
        { 
          id: 6, 
          name: "Report - Week 30", 
          date: "Tomorrow", 
          status: "Not started", 
          priority: "Low priority", 
          department: "Operations",
          assignees: ["/lovable-uploads/ff1b51dd-a272-4e94-b67d-5035cc5cca51.png"] 
        },
      ]
    },
    {
      id: 3,
      title: "This week",
      tasks: [
        { 
          id: 7, 
          name: "Order check-ins", 
          date: "Wednesday", 
          status: "Not started", 
          priority: "Medium priority", 
          department: "Retail",
          assignees: ["/lovable-uploads/0a9e6a1b-60a4-451d-b9e3-3d663db9557c.png", "/lovable-uploads/8ebb3fef-d232-4f86-b41a-94d580f66d89.png"] 
        },
        { 
          id: 8, 
          name: "HR reviews", 
          date: "Wednesday", 
          status: "In progress", 
          priority: "Medium priority", 
          department: "People",
          assignees: ["/lovable-uploads/ff1b51dd-a272-4e94-b67d-5035cc5cca51.png"],
          count: 4
        },
        { 
          id: 9, 
          name: "Plug-in implementations", 
          date: "Friday", 
          status: "In progress", 
          priority: "Low priority", 
          department: "Development",
          assignees: ["/lovable-uploads/ff1b51dd-a272-4e94-b67d-5035cc5cca51.png"] 
        },
      ]
    }
  ];

  const getStatusClass = (status: string) => {
    switch(status) {
      case "In progress": return "status-in-progress";
      case "Not started": return "status-not-started";
      case "Paused": return "status-paused";
      default: return "";
    }
  };

  const getPriorityClass = (priority: string) => {
    switch(priority) {
      case "High priority": return "priority-high-badge";
      case "Medium priority": return "priority-medium-badge";
      case "Low priority": return "priority-low-badge";
      default: return "";
    }
  };

  // Render task action buttons based on task state
  const renderTaskActions = (taskId: number) => {
    const taskState = taskStates[taskId] || 'not_started';
    
    if (taskState === 'completed') {
      return (
        <div className="flex items-center ml-2">
          <span className="text-green-600 font-medium">Completed</span>
        </div>
      );
    }
    
    return (
      <div className="flex items-center space-x-2 ml-2">
        {(taskState === 'not_started' || taskState === 'paused') && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleStartTask(taskId);
            }}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm"
          >
            Start
          </button>
        )}
        
        {taskState === 'in_progress' && (
          <>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handlePauseTask(taskId);
              }}
              className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
            >
              Pause
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleSubmitTask(taskId);
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
            >
              Submit
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      <ProfileHeader />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold">My tasks</h1>
      </div>
      
      {taskGroups.map(group => (
        <div key={group.id} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{group.title}</h2>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {group.tasks.map(task => (
              <div key={task.id} className="p-4 border-b border-gray-100 flex items-center">
                <input type="checkbox" className="mr-4 h-5 w-5 rounded-full" />
                
                <div className="flex-1">
                  <h3 className="font-medium">{task.name}</h3>
                </div>
                
                <div className="mx-2 text-rose-500 font-medium">
                  {task.date}
                </div>
                
                <div className={`mx-2 status-badge ${getStatusClass(task.status)}`}>
                  {task.status}
                </div>
                
                <div className={`mx-2 priority-badge ${getPriorityClass(task.priority)}`}>
                  {task.priority}
                </div>
                
                <div className="mx-2 min-w-[120px]">
                  {task.department}
                </div>
                
                <div className="flex items-center">
                  {task.assignees.map((assignee, idx) => (
                    <img 
                      key={idx} 
                      src={assignee} 
                      alt="Assignee" 
                      className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0" 
                    />
                  ))}
                  {task.count && (
                    <div className="ml-2 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      {task.count}
                    </div>
                  )}
                </div>
                
                {renderTaskActions(task.id)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;

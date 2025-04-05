
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Calendar data
  const currentMonth = "April 2022";
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = [
    { day: 27, month: "previous" },
    { day: 28, month: "previous" },
    { day: 29, month: "previous" },
    { day: 30, month: "previous" },
    { day: 31, month: "previous" },
    { day: 1, month: "current" },
    { day: 2, month: "current" },
    { day: 3, month: "current" },
    { day: 4, month: "current" },
    { day: 5, month: "current" },
    { day: 6, month: "current" },
    { day: 7, month: "current" },
    { day: 8, month: "current", active: true },
    { day: 9, month: "current" },
    { day: 10, month: "current" },
    { day: 11, month: "current" },
    { day: 12, month: "current" },
    { day: 13, month: "current" },
    { day: 14, month: "current" },
    { day: 15, month: "current" },
    { day: 16, month: "current" },
    { day: 17, month: "current" },
    { day: 18, month: "current" },
    { day: 19, month: "current" },
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

  // Urgent tasks
  const urgentTasks = [
    { id: 1, name: "Finish monthly reporting", date: "Today" },
    { id: 2, name: "Report signing", date: "Today" },
    { id: 3, name: "Market overview keynote", date: "Today" },
  ];

  // Projects
  const projects = [
    { id: 1, name: "Market research 2024", team: ["user1", "user2"] },
    { id: 2, name: "New proposals", team: ["user3"] },
    { id: 3, name: "Brand sprints", team: ["user1", "user2"] },
    { id: 4, name: "Customer experience Q3", team: ["user4", "user2", "user3"] },
    { id: 5, name: "Market research 2024", team: ["user3"] },
  ];

  // Comments
  const comments = [
    { 
      id: 1, 
      user: "Elon S.", 
      project: "Market research 2024", 
      comment: "Find my keynote attached in the...",
      avatar: "/lovable-uploads/0a9e6a1b-60a4-451d-b9e3-3d663db9557c.png" 
    },
    { 
      id: 2, 
      user: "Dana R.", 
      project: "Market research 2024", 
      comment: "I've added some new data. Let's...",
      avatar: "/lovable-uploads/8ebb3fef-d232-4f86-b41a-94d580f66d89.png" 
    }
  ];

  // Tags
  const tags = [
    { id: 1, name: "Research", color: "tag-research", content: "Survey design" },
    { id: 2, name: "Strategy", color: "tag-strategy", content: "SWOT analysis" },
    { id: 3, name: "Operations", color: "tag-operations", content: "Structure design" }
  ];

  // Team members
  const teamMembers = [
    { id: 1, name: "Dana R.", role: "Project Manager", avatar: "/lovable-uploads/8ebb3fef-d232-4f86-b41a-94d580f66d89.png" },
    { id: 2, name: "Elon S.", role: "Key Account Plann.", avatar: "/lovable-uploads/0a9e6a1b-60a4-451d-b9e3-3d663db9557c.png" },
    { id: 3, name: "Nancy W.", role: "Account Manager", avatar: "/lovable-uploads/799df5c3-1575-4783-9760-86f2cee17112.png" },
    { id: 4, name: "James M.", role: "Digital Manager", avatar: "/lovable-uploads/a652ee74-1f34-40ea-843e-61d4cc71a443.png" },
  ];

  const handleUrgentTaskClick = () => {
    navigate('/tasks');
  };

  return (
    <div>
      <ProfileHeader />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Welcome, Juliana!</h1>
        <p className="text-xl text-gray-600">Here is your agenda for today</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Calendar */}
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
                className={`calendar-day ${date.month !== 'current' ? 'text-gray-400' : ''} ${date.active ? 'active' : ''}`}
                onClick={() => navigate('/calendar')}
              >
                {date.day}
              </div>
            ))}
          </div>
        </div>
        
        {/* Urgent Tasks */}
        <div className="urgent-tasks">
          <h2 className="text-xl font-semibold mb-4">Urgent tasks</h2>
          
          {urgentTasks.map(task => (
            <div key={task.id} className="task-item" onClick={handleUrgentTaskClick}>
              <div className="task-checkbox"></div>
              <div className="flex-1">
                <p>{task.name}</p>
              </div>
              <div className="date-badge">
                {task.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Directory */}
        <div className="project-card">
          <h2 className="text-xl font-semibold mb-4">Project directory</h2>
          
          {projects.map(project => (
            <div key={project.id} className="project-item" onClick={() => navigate('/project-overview')}>
              <div className="project-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="flex-1">
                <p>{project.name}</p>
              </div>
              <div className="flex -space-x-2">
                {project.team.map((user, idx) => (
                  <div key={idx} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
              </div>
            </div>
          ))}
          
          <button className="mt-4 text-gray-500 font-medium flex items-center justify-center w-full py-2">
            + Add more
          </button>
        </div>
        
        {/* Comments */}
        <div className="project-card">
          <h2 className="text-xl font-semibold mb-4">New comments</h2>
          
          {comments.map(comment => (
            <div key={comment.id} className="mb-6">
              <div className="flex items-center mb-2">
                <img src={comment.avatar} alt={comment.user} className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <p className="font-medium">{comment.user} in {comment.project}</p>
                </div>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600">{comment.comment}</p>
            </div>
          ))}
          
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map(tag => (
              <div key={tag.id} className="mb-4">
                <p className={`tag ${tag.color}`}>#{tag.name}</p>
                <div className="flex items-center justify-between mt-2 p-3 bg-gray-50 rounded">
                  <p>{tag.content}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Team Directory */}
        <div className="project-card">
          <h2 className="text-xl font-semibold mb-4">Team directory</h2>
          
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
      </div>
    </div>
  );
};

export default Dashboard;

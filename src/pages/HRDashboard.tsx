
import React, { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  BarChart2, 
  CheckCheck, 
  RotateCcw,
  FileText,
  Users,
  PlusCircle
} from "lucide-react";

const HRDashboard = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [feedback, setFeedback] = useState("");
  
  // Sample data for employees
  const employees = [
    { id: 1, name: "John Doe", role: "Frontend Developer", tasks: 5, completed: 3, pending: 2 },
    { id: 2, name: "Jane Smith", role: "UI/UX Designer", tasks: 8, completed: 7, pending: 1 },
    { id: 3, name: "Mark Johnson", role: "Backend Developer", tasks: 4, completed: 2, pending: 2 },
    { id: 4, name: "Sara Williams", role: "Project Manager", tasks: 10, completed: 8, pending: 2 },
  ];
  
  // Sample data for tasks that need verification
  const pendingTasks = [
    { 
      id: 1, 
      employeeId: 1,
      employeeName: "John Doe",
      name: "Finish monthly reporting", 
      date: "April 8, 2022", 
      status: "completed", 
      priority: "high",
      tag: "research"
    },
    { 
      id: 2, 
      employeeId: 2,
      employeeName: "Jane Smith",
      name: "UX research results", 
      date: "April 8, 2022", 
      status: "completed", 
      priority: "high",
      tag: "design"
    },
    { 
      id: 3, 
      employeeId: 3,
      employeeName: "Mark Johnson",
      name: "API integration", 
      date: "April 8, 2022", 
      status: "completed", 
      priority: "medium",
      tag: "development"
    },
    { 
      id: 4, 
      employeeId: 4,
      employeeName: "Sara Williams",
      name: "Sprint planning", 
      date: "April 10, 2022", 
      status: "completed", 
      priority: "low",
      tag: "management"
    },
  ];
  
  const handleOpenTaskReview = (task) => {
    setSelectedTask(task);
    setOpenSheet(true);
  };
  
  const handleOpenEmployeeReview = (employee) => {
    setSelectedEmployee(employee);
    setSelectedTask(null);
    setOpenSheet(true);
  };
  
  const handleVerifyTask = () => {
    // Here you would update the task status in a real application
    alert(`Task "${selectedTask.name}" has been verified with feedback: ${feedback}`);
    setOpenSheet(false);
    setFeedback("");
  };
  
  const handleReassignTask = () => {
    // Here you would update the task status in a real application
    alert(`Task "${selectedTask.name}" has been reassigned with feedback: ${feedback}`);
    setOpenSheet(false);
    setFeedback("");
  };
  
  const handleAssignNewTask = () => {
    // Here you would open a form to assign a new task in a real application
    alert(`Assign new task to ${selectedEmployee.name}`);
  };
  
  return (
    <div className="p-6">
      <ProfileHeader />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold">HR Dashboard</h1>
        <p className="text-xl text-gray-600">Manage employees and review tasks</p>
      </div>
      
      <Tabs defaultValue="tasks" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="tasks" className="flex items-center gap-2">
            <FileText size={18} />
            Tasks for Review
          </TabsTrigger>
          <TabsTrigger value="employees" className="flex items-center gap-2">
            <Users size={18} />
            Employees
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="tasks" className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Tasks Pending Verification</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Employee</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Tag</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingTasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.name}</TableCell>
                    <TableCell>{task.employeeName}</TableCell>
                    <TableCell>{task.date}</TableCell>
                    <TableCell>
                      <span className={`priority-badge priority-${task.priority}-badge`}>
                        {task.priority}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`tag tag-${task.tag}`}>{task.tag}</span>
                    </TableCell>
                    <TableCell>
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleOpenTaskReview(task)}
                      >
                        Review
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="employees" className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Employee Directory</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Total Tasks</TableHead>
                  <TableHead>Completed</TableHead>
                  <TableHead>Pending</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.role}</TableCell>
                    <TableCell>{employee.tasks}</TableCell>
                    <TableCell>{employee.completed}</TableCell>
                    <TableCell>{employee.pending}</TableCell>
                    <TableCell className="flex gap-2">
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleOpenEmployeeReview(employee)}
                      >
                        Review
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Sheet for task review and employee review */}
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>
              {selectedTask ? "Task Review" : selectedEmployee ? "Employee Performance" : ""}
            </SheetTitle>
            <SheetDescription>
              {selectedTask 
                ? `Review task submitted by ${selectedTask.employeeName}`
                : selectedEmployee 
                  ? `Review performance of ${selectedEmployee.name}`
                  : ""
              }
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-8 space-y-6">
            {selectedTask && (
              <>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Task Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Task Name</p>
                      <p>{selectedTask.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Date</p>
                      <p>{selectedTask.date}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Priority</p>
                      <p className="capitalize">{selectedTask.priority}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Category</p>
                      <p className="capitalize">{selectedTask.tag}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Feedback</h3>
                  <Textarea 
                    placeholder="Enter your feedback for this task..." 
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </div>
                
                <div className="flex justify-end gap-4 mt-4">
                  <button 
                    className="btn btn-success flex items-center gap-2"
                    onClick={handleVerifyTask}
                  >
                    <CheckCheck size={18} />
                    Verify
                  </button>
                  <button 
                    className="btn btn-warning flex items-center gap-2"
                    onClick={handleReassignTask}
                  >
                    <RotateCcw size={18} />
                    Reassign
                  </button>
                </div>
              </>
            )}
            
            {selectedEmployee && !selectedTask && (
              <>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Employee Performance</h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Total Tasks</p>
                      <p className="text-2xl font-bold">{selectedEmployee.tasks}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Completed</p>
                      <p className="text-2xl font-bold text-green-600">{selectedEmployee.completed}</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-500">Pending</p>
                      <p className="text-2xl font-bold text-orange-600">{selectedEmployee.pending}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <h4 className="font-medium">Recent Activity</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Completed "UX research results" - 2 days ago</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock size={16} className="text-orange-500" />
                        <span>Started "Design system update" - 3 days ago</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <AlertCircle size={16} className="text-red-500" />
                        <span>Reassigned "Sprint planning" - 5 days ago</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <h4 className="font-medium">Performance Graph</h4>
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <BarChart2 size={32} className="text-gray-400" />
                      <span className="ml-2 text-gray-500">Performance data visualization</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <button 
                      className="btn btn-primary flex items-center gap-2"
                      onClick={handleAssignNewTask}
                    >
                      <PlusCircle size={18} />
                      Assign New Task
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HRDashboard;

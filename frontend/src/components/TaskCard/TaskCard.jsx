import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const TaskCard = ({ 
  title = "Sample Task", 
  status = "pending"
}) => {
  const isCompleted = status === "completed";
  
  const statusConfig = {
    completed: {
      icon: CheckCircle2,
      text: "Completed",
      iconColor: "text-emerald-400",
      bgGlow: "bg-emerald-500/10",
      borderGlow: "border-emerald-500/20"
    },
    pending: {
      icon: Circle,
      text: "Pending",
      iconColor: "text-slate-400",
      bgGlow: "bg-slate-500/5",
      borderGlow: "border-slate-500/20"
    }
  };
  
  const currentStatus = statusConfig[status] || statusConfig.pending;
  const StatusIcon = currentStatus.icon;
  
  return (
    <div className={`hover-grid group relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] cursor-pointer overflow-hidden ${
      isCompleted ? 'opacity-75' : ''
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${isCompleted ? 'bg-emerald-400/50' : 'bg-slate-400/30'} transition-all duration-300 group-hover:h-1 ${isCompleted ? 'group-hover:bg-emerald-400' : 'group-hover:bg-emerald-300/50'}`} />
      
      <div className="relative flex items-start gap-4">
        <div className={`flex-shrink-0 rounded-lg p-2 ${currentStatus.bgGlow} border ${currentStatus.borderGlow} transition-all duration-300 group-hover:scale-110 ${isCompleted ? 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]' : ''}`}>
          <StatusIcon className={`w-5 h-5 ${currentStatus.iconColor} transition-all duration-300 ${isCompleted ? 'group-hover:text-emerald-300' : 'group-hover:text-emerald-400'}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`text-base font-semibold leading-relaxed transition-all duration-300 mb-2 ${
            isCompleted 
              ? 'line-through text-slate-500 group-hover:text-slate-400' 
              : 'text-white group-hover:text-emerald-200'
          }`}>
            {title}
          </h3>
          
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-[0.12em] font-bold transition-all duration-300 ${
              isCompleted 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/40' 
                : 'bg-slate-500/10 text-slate-400 border border-slate-500/20 group-hover:bg-slate-500/15 group-hover:text-slate-300'
            }`}>
              <div className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-emerald-400' : 'bg-slate-400'} ${isCompleted ? 'animate-pulse' : ''}`} />
              {currentStatus.text}
            </span>
          </div>
        </div>
      </div>
      
      
      {isCompleted && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
      )}
    </div>
  );
};

const TaskCardDemo = () => {
  const sampleTasks = [
    {
      title: "Design user authentication flow",
      status: "completed"
    },
    {
      title: "Implement API integration",
      status: "pending"
    },
    {
      title: "Write unit tests for components",
      status: "pending"
    },
    {
      title: "Update documentation",
      status: "completed"
    },
    {
      title: "Code review for PR #234",
      status: "pending"
    },
    {
      title: "Optimize database queries",
      status: "completed"
    },
    {
      title: "Refactor component structure",
      status: "pending"
    },
    {
      title: "Add accessibility features",
      status: "pending"
    }
  ];
  
  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">All Listed Tasks</h2>
          <p className="text-sm text-slate-400">Track and manage your daily workflow</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sampleTasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              status={task.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCardDemo;
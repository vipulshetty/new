import { Clock, DollarSign, Users } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const progress = (project.currentAmount / project.goalAmount) * 100;
  const daysLeft = Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
            {project.category}
          </span>
          <span className={`text-sm font-medium ${
            project.status === 'active' ? 'text-green-600' : 'text-gray-600'
          }`}>
            {project.status}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="space-y-4">
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${Math.min(progress, 100)}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
              />
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-gray-500 mr-1" />
              <span className="font-medium">${project.currentAmount.toLocaleString()}</span>
              <span className="text-gray-500 ml-1">raised</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-gray-500 mr-1" />
              <span className="font-medium">{daysLeft}</span>
              <span className="text-gray-500 ml-1">days left</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm text-gray-500">
                {project.rewards.reduce((acc, r) => acc + r.currentBackers, 0)} backers
              </span>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Back this project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
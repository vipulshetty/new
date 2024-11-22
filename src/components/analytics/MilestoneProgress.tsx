import { CheckCircle, Circle } from 'lucide-react';
import type { Milestone } from '../../types';

interface MilestoneProgressProps {
  milestones: Milestone[];
}

export default function MilestoneProgress({ milestones }: MilestoneProgressProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Milestones</h3>
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative">
            {index !== milestones.length - 1 && (
              <div className="absolute left-3.5 top-8 w-0.5 h-full bg-gray-200" />
            )}
            <div className="flex items-start">
              {milestone.completed ? (
                <CheckCircle className="h-7 w-7 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="h-7 w-7 text-gray-300 flex-shrink-0" />
              )}
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">{milestone.title}</h4>
                <p className="mt-1 text-sm text-gray-500">{milestone.description}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span className="font-medium text-gray-900">
                    ${milestone.targetAmount.toLocaleString()}
                  </span>
                  <span className="mx-2">•</span>
                  <span>Due {new Date(milestone.dueDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
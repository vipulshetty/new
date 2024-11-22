import FundingChart from './FundingChart';
import MilestoneProgress from './MilestoneProgress';
import DemographicsChart from './DemographicsChart';
import type { Project } from '../../types';

interface ProjectAnalyticsProps {
  project: Project;
}

export default function ProjectAnalytics({ project }: ProjectAnalyticsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FundingChart data={project.analytics.dailyFunding} />
        <DemographicsChart data={project.analytics.backerDemographics} />
      </div>
      <MilestoneProgress milestones={project.milestones} />
    </div>
  );
}
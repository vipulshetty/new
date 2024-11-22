export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'entrepreneur' | 'backer' | 'admin';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  creatorId: string;
  goalAmount: number;
  currentAmount: number;
  endDate: string;
  category: string;
  imageUrl: string;
  rewards: Reward[];
  status: 'draft' | 'active' | 'funded' | 'expired';
  milestones: Milestone[];
  analytics: ProjectAnalytics;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  amount: number;
  maxBackers?: number;
  currentBackers: number;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  completed: boolean;
  dueDate: string;
}

export interface ProjectAnalytics {
  dailyFunding: DailyFunding[];
  backerDemographics: BackerDemographic[];
  socialMetrics: SocialMetrics;
}

export interface DailyFunding {
  date: string;
  amount: number;
  backers: number;
}

export interface BackerDemographic {
  category: string;
  percentage: number;
}

export interface SocialMetrics {
  shares: number;
  likes: number;
  comments: number;
}
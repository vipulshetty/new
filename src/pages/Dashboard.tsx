import { useState } from 'react';
import { BarChart3, Users, Rocket, TrendingUp } from 'lucide-react';
import ProjectAnalytics from '../components/analytics/ProjectAnalytics';

const MOCK_PROJECT = {
  id: '1',
  title: 'EcoFlow: Sustainable Energy Solution',
  description: 'A revolutionary portable power station that harnesses solar energy for sustainable, off-grid living.',
  creatorId: 'user1',
  goalAmount: 50000,
  currentAmount: 32500,
  endDate: '2024-05-01',
  category: 'Technology',
  imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  rewards: [
    {
      id: 'r1',
      title: 'Early Bird',
      description: 'Get the EcoFlow at 30% off retail price',
      amount: 299,
      currentBackers: 156
    }
  ],
  status: 'active',
  milestones: [
    {
      id: 'm1',
      title: 'Initial Prototype',
      description: 'Complete the first working prototype',
      targetAmount: 10000,
      completed: true,
      dueDate: '2024-03-15'
    },
    {
      id: 'm2',
      title: 'Manufacturing Setup',
      description: 'Set up manufacturing partnerships and tooling',
      targetAmount: 25000,
      completed: false,
      dueDate: '2024-04-15'
    },
    {
      id: 'm3',
      title: 'Production & Delivery',
      description: 'Begin mass production and prepare for shipping',
      targetAmount: 50000,
      completed: false,
      dueDate: '2024-05-15'
    }
  ],
  analytics: {
    dailyFunding: [
      { date: '2024-02-01', amount: 5000, backers: 20 },
      { date: '2024-02-15', amount: 15000, backers: 45 },
      { date: '2024-03-01', amount: 25000, backers: 89 },
      { date: '2024-03-15', amount: 32500, backers: 156 }
    ],
    backerDemographics: [
      { category: 'Outdoor Enthusiasts', percentage: 45 },
      { category: 'Tech Early Adopters', percentage: 30 },
      { category: 'Environmentalists', percentage: 15 },
      { category: 'Others', percentage: 10 }
    ],
    socialMetrics: {
      shares: 1200,
      likes: 3500,
      comments: 450
    }
  }
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Raised
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">$32,500</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Backers
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">156</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Funding Progress
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">65%</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Rocket className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Days Remaining
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">45</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <ProjectAnalytics project={MOCK_PROJECT} />
          </div>
        </div>
      </div>
    </div>
  );
}
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const FEATURED_PROJECTS = [
  {
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
    status: 'active'
  },
  {
    id: '2',
    title: 'ArtVerse: Digital Art Gallery',
    description: 'An immersive digital art platform connecting artists and collectors through blockchain technology.',
    creatorId: 'user2',
    goalAmount: 25000,
    currentAmount: 18750,
    endDate: '2024-04-15',
    category: 'Art',
    imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    rewards: [
      {
        id: 'r2',
        title: 'Collector Edition',
        description: 'Exclusive access to limited digital art pieces',
        amount: 199,
        currentBackers: 94
      }
    ],
    status: 'active'
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <a className="flex items-center text-indigo-600 hover:text-indigo-500">
            View all projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
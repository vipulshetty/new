import { create } from 'zustand';
import type { Project } from '../types';

interface ProjectStore {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  updateProjectMilestone: (projectId: string, milestoneId: string, completed: boolean) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
  updateProjectMilestone: (projectId, milestoneId, completed) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              milestones: project.milestones.map((milestone) =>
                milestone.id === milestoneId
                  ? { ...milestone, completed }
                  : milestone
              ),
            }
          : project
      ),
    })),
}));
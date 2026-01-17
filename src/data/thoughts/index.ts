export type { Thought } from './types';
import type { Thought } from './types';
// import { thought1 } from './thought1';
// Import more thoughts here:
// import { thought2 } from './thought-2';
// import { thought3 } from './thought-3';

// Export all thoughts as an array
export const allThoughts: Thought[] = [
//   thought1,
  // Add more thoughts here:
  // thought2,
  // thought3,
];

// Helper function to get a thought by ID
export const getThoughtById = (id: string): Thought | undefined => {
  if (allThoughts.length === 0) {
    const comingSoon: Thought = {
      id: 'coming-soon',
      title: 'Coming Soon',
      date: 'Upcoming',
      category: 'Preview',
      excerpt: 'More thoughts coming soon...',
      content: 'More thoughts coming soon. Stay tuned!'
    };
    return comingSoon;
  }
  return allThoughts.find(thought => thought.id === id);
};

// Helper function to get all thoughts sorted by date (newest first)
export const getThoughtsSorted = (): Thought[] => {
  return [...allThoughts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

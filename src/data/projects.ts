export type Project = {
  id: string; // JSON çeviri anahtarı ile aynı olmalı
  githubLink: string;
  demoLink: string | null;
  techStack: string[];
  color: string;
  emoji: string;
  featured: boolean; 
};

export const projectsData: Project[] = [
  {
    id: 'ticket',
    githubLink: 'https://github.com/Buraktalhaa/ticket',
    demoLink: null,
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    color: 'from-blue-500 to-cyan-500',
    emoji: '🎫',
    featured: true 
  },
  {
    id: 'foodRoulette',
    githubLink: 'https://github.com/Buraktalhaa/food-roulette',
    demoLink: null,
    techStack: ['React Native', 'Expo', 'JavaScript'],
    color: 'from-orange-400 to-red-600',
    emoji: '🍕',
    featured: true
  },
  // İleride ekleyeceğin küçük projeler için featured: false yapabilirsin
];
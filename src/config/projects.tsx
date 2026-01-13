import { Ticket, Pizza } from "lucide-react";

export const projectsData = [
  {
    id: "ticketApp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    links: { 
      github: "https://github.com/Buraktalhaa", // Buraya gerçek linklerini koyarsın
      live: "https://ticket-app-demo.com" 
    },
    icon: <Ticket className="w-12 h-12 text-purple-500" />,
  },
  {
    id: "foodRoulette", 
    tags: ["React Native", "Expo", "JavaScript", "Mobile Development"],
    links: { 
      github: "https://github.com/Buraktalhaa", 
      live: "#" 
    },
    icon: <Pizza className="w-12 h-12 text-orange-500" />,
  },
];
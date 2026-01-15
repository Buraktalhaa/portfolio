import { Code2, Globe, Database, Layers, LayoutTemplate } from "lucide-react";

export const mainSkills = [
  {
    id: "programming",
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
    color: "blue"
  },
  {
    id: "web",
    icon: <Globe className="w-8 h-8 text-orange-400" />,
    skills: ["React", "Next.js", "Node.js", "NestJS", "React Native", "Expo", "Tailwind CSS", "HTML/CSS"],
    color: "orange"
  }
];

export const subSkills = [
  {
    id: "software",
    icon: <LayoutTemplate className="w-8 h-8 text-green-400" />,
    skills: ["OOP", "Design Patterns", "Clean Code", "Microservices", "REST API"],
    color: "green"
  },
  {
    id: "database",
    icon: <Database className="w-8 h-8 text-cyan-400" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "SQL"],
    color: "cyan"
  },
  {
    id: "tools",
    icon: <Layers className="w-8 h-8 text-pink-400" />,
    skills: ["Git", "Docker", "Linux", "Postman", "Figma", "Jira"],
    color: "pink"
  }
];
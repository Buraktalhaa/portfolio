import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Socials() {
  const socialItems = [
    {
      name: 'Github',
      href: siteConfig.links.github,
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      href: siteConfig.links.linkedin,
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: 'Email',
      href: siteConfig.links.email,
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex items-center gap-6">
      {socialItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target={item.name === 'Email' ? '_self' : '_blank'}
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
          aria-label={item.name}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
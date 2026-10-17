import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { FaDiscord } from 'react-icons/fa';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Usercue Documentation',
    },
    githubUrl: "https://github.com/Paddlewheel-Inc/usercue",
    links: [
        {
            icon: <FaDiscord />,
            text: "Discord",
            url: "https://discord.gg/7e4jd9Mcaa"
        }
    ]
  };
}

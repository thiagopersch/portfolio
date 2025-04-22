import { ProjectCardProps } from '@/components/ProjectCard';

export const projectData = (): ProjectCardProps[] => [
  {
    title: 'ERP de Igreja',
    description:
      'O ERP de Igreja é um sistema de gestão desenvolvido para atender às necessidades administrativas e financeiras de instituições religiosas. Ele organiza processos como controle de membros, gestão de dízimos e ofertas, planejamento de eventos, contabilidade e relatórios financeiros, promovendo transparência, eficiência e suporte às atividades ministeriais e comunitárias.',
    tags: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'PHP'],
    imageUrl: '/storage/church.webp',
    delay: 0.1,
    type: 'private',
  },
  {
    title: 'Integração com TOTVS RM',
    description:
      'O projeto de Integração com TOTVS RM é uma solução que conecta o sistema ERP TOTVS RM a outras plataformas, utilizando endpoints como read view, read record e save record para acessar e manipular dados. Executa consultas SQL personalizadas, realiza backups automáticos dessas consultas e oferece funcionalidades CRUD (criar, ler, atualizar e deletar) para gestão de clientes, usuários e tabelas customizadas (TBC). Essa integração otimiza processos, garante segurança de dados e aumenta a eficiência operacional em setores como finanças, RH e gestão empresarial.',
    tags: [
      'React',
      'Shadcn/ui',
      'NestJs',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Zod',
      'Tailwind',
      'Docker',
      'Vercel',
      'React Hook Form',
      'React Query',
    ],
    type: 'public',
    imageUrl: '/storage/integration-totvs.webp',
    githubUrl: 'https://github.com/thiagopersch/integracao-totvs',
    demoUrl: 'https://integracao-totvs.vercel.app/',
    delay: 0.2,
  },
  {
    title: 'XML Creator',
    description:
      'Aplicativo desenvolvido para facilitar a criação de arquivos XML, permitindo que os usuários gerem e editem esses arquivos de forma intuitiva. Com uma interface amigável e recursos avançados, o XML Creator simplifica o processo de manipulação de dados em formato XML, tornando-o acessível tanto para desenvolvedores quanto para usuários não técnicos, tudo isso com o uso de React, Material UI e Vercel, voltado para o desenvolvimento do jogo Tibia.',
    tags: ['React', 'Material UI', 'Vercel'],
    type: 'public',
    imageUrl: '/storage/xml-creator.webp',
    githubUrl: 'https://github.com/thiagopersch/xml-creator',
    demoUrl: 'https://xml-creator.vercel.app/',
    delay: 0.2,
  },
  {
    title: 'Servidor de Tibia',
    description:
      'Servidor de Tibia é um projeto que visa criar uma plataforma de jogo online, permitindo que os jogadores se conectem e joguem juntos em um ambiente virtual. O servidor é desenvolvido com foco na personalização e na experiência do usuário, utilizando tecnologias modernas para garantir desempenho e escalabilidade.',
    tags: ['XML', 'PHP', 'MySQL', 'HTML', 'CSS', 'Lua', 'C++', 'C'],
    type: 'public',
    imageUrl: '/storage/tibia.webp',
    githubUrl: 'https://github.com/thiagopersch/server-tibia',
    delay: 0.2,
  },
];

export const skillsData = [
  {
    stack: 'Front-end',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Angular',
      'Tailwind CSS',
      'Styled Components',
      'Shadcn/ui',
      'Material UI',
      'React Query',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    stack: 'Back-end',
    skills: [
      'Node.js',
      'Express',
      'NestJS',
      'Laravel',
      'PHP (básico)',
      'MySQL',
      'PostgreSQL',
      'SQL Server',
      'Prisma',
      'Docker',
    ],
  },
  {
    stack: 'Ferramentas',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'Insomnia'],
  },
  {
    stack: 'Outras Tecnologias',
    skills: ['Lua', 'C++', 'C', 'TOTVS RM'],
  },
];

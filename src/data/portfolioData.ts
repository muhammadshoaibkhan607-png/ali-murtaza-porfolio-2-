export interface Project {
  id: string;
  title: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  image: string;
  stars?: number;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'Languages' | 'Tools & Workflows';
  level: number; // 0-100
  experience: string;
  iconName: string;
  description: string;
  color: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  tags: string[];
}

export const PERSONAL_INFO = {
  name: 'Ali Murtaza',
  shortName: 'AM',
  tagline: 'Engineering High-Performance Modern Web Apps with Next.js, React & TypeScript',
  bio: 'Passionate and detail-oriented Full Stack & Frontend Developer specializing in creating modern, responsive, and blazing-fast digital experiences. Proven track record building interactive web games, bespoke e-commerce platforms, and scalable Next.js applications with sleek glassmorphism UI.',
  phone: '03282305470',
  formattedPhone: '+92 328 2305470',
  whatsappUrl: 'https://wa.me/923282305470?text=Hello%20Ali,%20I%20saw%20your%20developer%20portfolio%20and%20would%20like%20to%20connect!',
  email: 'muhammadshoaibkhan607@gmail.com',
  github: 'https://github.com/muhammadshoaibkhan607-png',
  vercel: 'https://vercel.com/muhammadshoaibkhan607-png',
  location: 'Pakistan (Available Globally / Remote)',
  availability: 'Open to Full-Time, Remote & High-Impact Contracts',
  yearsExperience: '2+',
  projectsCompleted: '15+',
  githubRepos: '10+',
  profilePhoto: '/ali.png',
};

export const TYPING_ROLES = [
  'Frontend Developer',
  'Full Stack & AI Developer',
  'Next.js Developer',
  'Generative AI Web Engineer',
  'React & TypeScript Developer',
  'UI/UX Developer'
];

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 92,
    experience: 'Production Ready',
    iconName: 'Layers',
    description: 'Server Components, App Router, SSR/SSG, Dynamic API routes, Edge middleware',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'React',
    category: 'Frontend',
    level: 95,
    experience: 'Expert',
    iconName: 'Atom',
    description: 'Hooks, custom hooks, context, state optimization, concurrent rendering',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'Generative AI & LLMs',
    category: 'Backend & Cloud',
    level: 91,
    experience: 'Production Ready',
    iconName: 'Sparkles',
    description: 'Gemini API, AI agents, prompt engineering, streaming responses, structured outputs',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    level: 90,
    experience: 'Advanced',
    iconName: 'Code2',
    description: 'Strong typing, generics, interfaces, strict mode compiler architecture',
    color: 'from-sky-500 to-blue-700'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Languages',
    level: 96,
    experience: 'Mastery',
    iconName: 'Sparkles',
    description: 'Asynchronous flows, event loops, DOM manipulation, functional patterns',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 95,
    experience: 'Advanced',
    iconName: 'Palette',
    description: 'Modern utility-first CSS, custom design systems, glassmorphism, responsive grid',
    color: 'from-teal-400 to-cyan-500'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Languages',
    level: 98,
    experience: 'Expert',
    iconName: 'FileCode2',
    description: 'Semantic markups, accessibility (a11y), CSS variables, 3D transforms, keyframe animations',
    color: 'from-orange-500 to-rose-500'
  },
  {
    name: 'UI / UX Design',
    category: 'Frontend',
    level: 88,
    experience: 'High Fidelity',
    iconName: 'Layout',
    description: 'Glassmorphism, mobile-first responsive interfaces, interactive micro-animations',
    color: 'from-fuchsia-500 to-purple-600'
  },
  {
    name: 'Node.js & Express',
    category: 'Backend & Cloud',
    level: 84,
    experience: 'Intermediate',
    iconName: 'Server',
    description: 'RESTful API development, authentication tokens, server middlewares, backend routing',
    color: 'from-emerald-500 to-green-600'
  },
  {
    name: 'Git & GitHub',
    category: 'Tools & Workflows',
    level: 92,
    experience: 'Daily Workflow',
    iconName: 'GitBranch',
    description: 'Version control, branch management, collaborative pull requests, release tagging',
    color: 'from-red-500 to-orange-600'
  },
  {
    name: 'Vercel Deployment',
    category: 'Tools & Workflows',
    level: 94,
    experience: 'Production Deployment',
    iconName: 'CloudLightning',
    description: 'CI/CD pipeline, serverless functions, environment configuration, custom domains',
    color: 'from-violet-500 to-purple-700'
  },
  {
    name: 'Motion & Animations',
    category: 'Frontend',
    level: 89,
    experience: 'Advanced',
    iconName: 'Compass',
    description: 'Framer Motion springs, gestures, layout animations, exit transitions',
    color: 'from-pink-500 to-rose-600'
  },
  {
    name: 'LocalStorage & Client State',
    category: 'Tools & Workflows',
    level: 94,
    experience: 'Expert',
    iconName: 'Database',
    description: 'Resilient client-side caching, preference storage, offline form state',
    color: 'from-amber-500 to-yellow-600'
  }
];

export const REAL_PROJECTS: Project[] = [
  {
    id: 'ali-fragrance',
    title: 'Ali Fragrance - Luxury Perfume Store',
    name: 'Ali-fragrance',
    category: 'E-Commerce & AI',
    description: 'Bespoke luxury perfume and fragrance web application featuring interactive scent profiles, dynamic cart, and responsive elegance.',
    longDescription: 'A premier digital storefront designed for luxury fragrances. Features interactive olfactory notes breakdown (top, heart, base notes), elegant glass bottle showcases, AI scent recommendation advisor, live cart management, search filtering, and responsive mobile-first checkout UI.',
    technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Vercel', 'AI Scent Advisor'],
    githubUrl: 'https://github.com/muhammadshoaibkhan607-png/Ali-fragrance',
    liveUrl: 'https://ali-fragrance-five.vercel.app',
    featured: true,
    image: '/src/assets/images/project_fragrance_preview_1790591247987.jpg',
    highlights: [
      'Interactive olfactory notes breakdown and AI scent advisor',
      'Instant responsive cart & state management',
      'Ultra smooth glassmorphism styling and mobile layouts'
    ]
  },
  {
    id: 'uniq-glasses',
    title: 'Uniq Glasses - Designer Eyewear Boutique',
    name: 'uniq-glasses',
    category: 'Showcase & 3D Store',
    description: 'Modern optical and sunglasses catalog with 3D product view aesthetics, frame color customizers, and quick checkout flow.',
    longDescription: 'High-end eyewear showroom web app crafted with clean TypeScript and modern responsive styling. Features interactive filter by frame shape (Aviator, Wayfarer, Round), UV protection specs, face shape recommendations, and seamless order generation.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vercel Deployment', 'Responsive Grid'],
    githubUrl: 'https://github.com/muhammadshoaibkhan607-png/uniq-glasses',
    liveUrl: 'https://aliglasses.vercel.app',
    featured: true,
    image: '/src/assets/images/project_glasses_preview_1790591260567.jpg',
    highlights: [
      'Dynamic frame color and prescription selector',
      'Clean modern product cards with glass hover effects',
      'Fully responsive across smartphones and large monitors'
    ]
  },
  {
    id: 'shoes-hub',
    title: 'Shoes Hub - Sneaker & Footwear Platform',
    name: 'shoes',
    category: 'Full Stack & Commerce',
    description: 'Interactive athletic footwear showcase with dynamic color switching, size picker, and high-energy modern design.',
    longDescription: 'High-performance footwear web application built with TypeScript and Tailwind CSS. Demonstrates fast client-side filtering, interactive footwear preview, size selector with stock feedback, and smooth shopping interactions.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vercel', 'Modern State'],
    githubUrl: 'https://github.com/muhammadshoaibkhan607-png/shoes',
    liveUrl: 'https://shoes-five-nu.vercel.app',
    featured: true,
    image: '/src/assets/images/project_shoes_preview_1790591278573.jpg',
    highlights: [
      'Interactive size and color variation selector',
      'Instant search and tag-based filtering',
      'High contrast dark & neon sporty aesthetic'
    ]
  },
  {
    id: 'upgrade-chess-game',
    title: 'Master Chess Engine & AI Web Game',
    name: 'upgrade-chess-game',
    category: 'AI & Game Engines',
    description: 'Feature-packed browser chess application with move validation, captured pieces rack, game timers, and AI opponent / local play.',
    longDescription: 'A complete chess engine and web interface built from scratch in TypeScript. Handles legal move calculations, check and checkmate detection, AI opponent evaluation engine, turn clock timers, and smooth piece movement animations on a digital glass board.',
    technologies: ['TypeScript', 'React', 'AI Engine Heuristics', 'Canvas / DOM', 'Tailwind CSS'],
    githubUrl: 'https://github.com/muhammadshoaibkhan607-png/upgrade-chess-game',
    liveUrl: 'https://chess-game-mocha-ten.vercel.app',
    featured: true,
    image: '/src/assets/images/project_chess_preview_1790591296698.jpg',
    highlights: [
      'Accurate board logic and AI opponent move evaluation',
      'Real-time timer clocks and move notation history',
      'Visual piece highlight indicators and audio feedback'
    ]
  },
  {
    id: 'ludo-king-web',
    title: 'Ludo King - Multiplayer Board Experience',
    name: 'ludo-king',
    category: 'Multiplayer & Board Logic',
    description: 'Digital adaptation of the classic Ludo game with 4-player color tokens, animated 3D dice rolls, and safe-zone rules.',
    longDescription: 'A web-based recreation of the classic Ludo board game. Implements complete game rules including animated 3D dice generation, token capture mechanics, star safe-house logic, multi-color turn management, and victory detection.',
    technologies: ['TypeScript', 'React', 'Multiplayer Logic', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/muhammadshoaibkhan607-png/ludo-king',
    liveUrl: 'https://ludokingmurtaza.vercel.app',
    featured: true,
    image: '/src/assets/images/project_ludo_preview_1790837325640.jpg',
    highlights: [
      'Up to 4 local/remote players with turn tracking',
      'Physics-based 3D dice rolling animation and sound',
      'Rule-accurate token movement and collision'
    ]
  },
  {
    id: 'tom-gold-run',
    title: 'Tom Gold Run 3D Web Runner',
    name: 'tom-gold-run-',
    category: 'Canvas 3D & Physics',
    description: 'Fast-paced endless runner game running in the browser with obstacle navigation, coin collecting, and physics.',
    longDescription: 'Vibrant action runner game ported for the web utilizing HTML5 Canvas, modern TypeScript, and dynamic game loops. Features obstacle collision detection, gold collection streak scoring, and responsive touch/keyboard inputs.',
    technologies: ['TypeScript', 'HTML5 Canvas', 'Game Loop Physics', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/muhammadshoaibkhan607-png/tom-gold-run-',
    liveUrl: 'https://tomgoldrun.vercel.app',
    featured: true,
    image: '/src/assets/images/project_runner_preview_1790837337491.jpg',
    highlights: [
      '60 FPS smooth game loop execution with zero stutter',
      'Keyboard and touch swipe responsiveness',
      'High-score persistence with LocalStorage'
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full Stack & Generative AI Web Engineer',
    company: 'Independent Software Developer & Client Solutions',
    period: '2024 - Present',
    location: 'Remote / Global',
    type: 'Full-time / Client Engagements',
    description: [
      'Architected and deployed 10+ production-grade web applications integrating Generative AI (Gemini API & LLMs) for natural language search, intelligent fragrance matching, and conversational assistants.',
      'Engineered interactive web game engines and AI opponent heuristics (including Master Chess engine evaluation) running at 60 FPS in modern browsers.',
      'Implemented streaming AI completion pipelines, type-safe server actions, and edge caching using Next.js App Router and React 19.',
      'Designed responsive glassmorphism UI/UX design systems with Tailwind CSS, achieving 98+ Google Lighthouse scores across all viewports.',
      'Built automated continuous delivery workflows connecting GitHub repositories directly to Vercel production edge servers.'
    ],
    technologies: ['Next.js', 'Generative AI (Gemini)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Git']
  },
  {
    id: 'exp-2',
    role: 'AI-Assisted Frontend & UI/UX Specialist',
    company: 'Modern Web Solutions',
    period: '2023 - 2024',
    location: 'Pakistan',
    type: 'Contract / Collaborative',
    description: [
      'Integrated conversational AI widgets, smart search autocompletes, and dynamic content generators across modern client web applications.',
      'Constructed modular atomic component libraries with adaptive AI-driven layouts and responsive glassmorphism styling.',
      'Collaborated closely on client requirements to transform Figma mockups into pixel-perfect, accessible, and performant web portals.',
      'Optimized client-side rendering workflows and integrated LocalStorage caching to deliver instant load times without server lag.'
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'AI APIs', 'Tailwind CSS', 'HTML5', 'CSS3', 'Figma', 'LocalStorage']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Computer Science & Software Development',
    institution: 'Higher Education Institute',
    period: '2022 - 2026',
    location: 'Pakistan',
    highlights: [
      'Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Web Technologies, Software Engineering',
      'Specialized focus on Modern Frontend Systems, Full-Stack Architecture, and Interactive Computing',
      'Consistent top-tier project evaluations for technical creativity and clean coding standards'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Full-Stack Web Engineering Certification',
    institution: 'Online Specialized Track',
    period: '2023',
    location: 'Online',
    highlights: [
      'Comprehensive mastery of React ecosystem, Next.js Server Components, TypeScript compilation, and RESTful APIs',
      'Created and successfully deployed multiple real-world consumer applications to Vercel'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Building Modern Full-Stack Applications with Next.js & React',
    slug: 'modern-nextjs-react-fullstack',
    category: 'Engineering',
    readTime: '5 min read',
    date: 'Sep 2026',
    summary: 'A deep dive into combining React 19 features, Next.js App Router, and server actions to build blazing fast, SEO-optimized web products.',
    content: [
      'Next.js and the modern React ecosystem have fundamentally transformed how web applications are architected. By taking advantage of Server Components, we can reduce client bundle sizes drastically while delivering instant first-contentful paint.',
      'When building e-commerce and interactive catalogs like Ali-Fragrance and Uniq-Glasses, keeping client JavaScript lightweight is paramount. Combining Tailwind CSS with modern component primitives gives you the speed of utility styling alongside clean component boundaries.',
      'Key Takeaways: Always leverage TypeScript for robust type checking, utilize edge caching on Vercel, and structure your state around clear unidirectional data flows.'
    ],
    tags: ['Next.js', 'React', 'Full Stack', 'Performance']
  },
  {
    id: 'post-2',
    title: 'The Art of Glassmorphism: Creating Tactile, Premium Web UIs',
    slug: 'art-of-glassmorphism-tailwind',
    category: 'UI/UX Design',
    readTime: '4 min read',
    date: 'Aug 2026',
    summary: 'How to implement multi-layered glass cards, reflections, and soft glowing lighting in Tailwind CSS without degrading frame rates.',
    content: [
      'Glassmorphism is more than just applying a backdrop-filter blur. To feel genuinely tactile and high-end like modern Apple iOS interfaces, it requires careful manipulation of translucent borders, multi-stop linear gradients, and subtle noise textures.',
      'In this portfolio, every glassy element features a 1px border with varying alpha levels (e.g., rgba(255, 255, 255, 0.1) on dark mode and subtle slate borders on light mode) coupled with a smooth 16px backdrop blur.',
      'Performance tip: Avoid stacking multiple heavy backdrop-filter elements on top of each other, and ensure hardware acceleration is triggered using transform-gpu.'
    ],
    tags: ['Tailwind CSS', 'Glassmorphism', 'Design Systems', 'CSS']
  },
  {
    id: 'post-3',
    title: 'Architecting Browser Games & Logic Engines in TypeScript',
    slug: 'browser-games-typescript-logic',
    category: 'Game Dev',
    readTime: '6 min read',
    date: 'Jul 2026',
    summary: 'Lessons learned building interactive chess engines and runner games with strict TypeScript state management and canvas rendering.',
    content: [
      'Developing games like Upgrade Chess Game and Tom Gold Run in the browser provides an incredible lesson in software engineering discipline.',
      'For chess, separating pure mathematical game logic (board array, move validation, check/pin vectors) from visual presentation components ensures zero UI stutter and makes unit testing effortless.',
      'For canvas runners, keeping the main requestAnimationFrame loop lean and pooling objects prevents garbage collection freezes, ensuring a silky-smooth 60 FPS experience.'
    ],
    tags: ['TypeScript', 'Game Dev', 'Algorithms', 'Web Apps']
  }
];

export const RADAR_DATA = [
  { subject: 'Next.js & React', score: 95, fullMark: 100 },
  { subject: 'TypeScript', score: 92, fullMark: 100 },
  { subject: 'Tailwind & UI', score: 96, fullMark: 100 },
  { subject: 'Full Stack & APIs', score: 86, fullMark: 100 },
  { subject: 'State & Caching', score: 90, fullMark: 100 },
  { subject: 'Git & Deployment', score: 94, fullMark: 100 }
];

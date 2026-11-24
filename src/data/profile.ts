export const profile = {
  name: 'S Dhigvijay',
  shortName: 'Dhigvijay',
  role: 'Full Stack Developer',
  tagline:
    'Building recruitment platforms, AI search systems, and production-ready web apps end to end.',
  location: 'Hyderabad, Telangana, India',
  phone: '6300365757',
  email: 'dhigvijaysilveri14121@gmail.com',
  linkedin: 'https://www.linkedin.com/in/silveri-dhigvijay/',
  noticePeriod: '1 Month',
  preferredRoles: [
    'Full Stack Developer',
    'React.js Developer',
    'Frontend Developer',
    'Backend Developer',
  ],
  summary:
    'Full Stack Developer with 2+ years of experience developing, deploying, and maintaining web applications using React.js, TypeScript, Node.js, Express.js, and Python. Hands-on with RESTful APIs, databases, Apache Solr, Redis, Qdrant, AI resume parsing, and local LLM integrations. Comfortable owning Linux servers, Docker deployments, and production troubleshooting.',
}

export const highlights = [
  { value: '2+', label: 'Years Experience' },
  { value: '3', label: 'Production Platforms' },
  { value: 'AI + Search', label: 'Hybrid Retrieval' },
  { value: 'E2E', label: 'Deploy & Maintain' },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Material UI', 'Redux Toolkit'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Auth'],
  },
  {
    title: 'Data & Search',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Apache Solr', 'Qdrant', 'Redis'],
  },
  {
    title: 'AI & LLMs',
    items: ['Ollama', 'Qwen', 'Llama', 'Vector Embeddings', 'Resume Parsing', 'Hybrid Search'],
  },
  {
    title: 'DevOps',
    items: ['Linux', 'Docker', 'Nginx', 'PM2', 'Git', 'Cloudflare'],
  },
]

export const experience = {
  title: 'Full Stack Developer',
  company: 'D3E Studio (formerly Nitya Software Solutions)',
  period: 'October 2024 – Present',
  location: 'Hyderabad, Telangana, India',
  overview:
    'Working on recruitment platforms and enterprise web apps with end-to-end ownership spanning UI, APIs, databases, AI search, server admin, deployment, and production support.',
  buckets: [
    {
      title: 'Frontend',
      points: [
        'Built responsive React.js apps with TypeScript, Material UI, and reusable component systems.',
        'Managed complex state with Redux Toolkit for dashboards, filters, tables, and dynamic forms.',
        'Migrated React apps toward Next.js for stronger SEO and architecture.',
      ],
    },
    {
      title: 'Backend & Data',
      points: [
        'Designed REST APIs with Node.js and Express.js, including JWT auth and error handling.',
        'Worked across MySQL, PostgreSQL, and MongoDB with SQL for filtering and CRUD workflows.',
        'Debugged production API issues and improved existing business workflows.',
      ],
    },
    {
      title: 'AI & Search',
      points: [
        'Implemented Apache Solr search for jobs and candidates with filters and structured retrieval.',
        'Integrated Qdrant semantic search and hybrid ranking with Reciprocal Rank Fusion concepts.',
        'Built Python FastAPI resume parsing with local LLMs via Ollama (Qwen, Llama).',
      ],
    },
    {
      title: 'DevOps & Production',
      points: [
        'Deployed containerized apps with Docker Compose, Nginx reverse proxies, and PM2.',
        'Managed Ubuntu servers, Solr cores, DNS/Cloudflare, and production incident response.',
        'Owned Git workflows, service restarts, log analysis, and deployment recovery.',
      ],
    },
  ],
}

export const projects = [
  {
    name: 'JobsNProfiles',
    type: 'Recruitment Platform',
    stack: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'Solr',
      'Qdrant',
      'FastAPI',
      'Ollama',
    ],
    overview:
      'Recruitment platform connecting seekers, recruiters, and employers with AI resume processing, hybrid search, and full hiring workflows.',
    contributions: [
      'End-to-end frontend and backend feature ownership',
      'Solr + Qdrant hybrid job/candidate search',
      'AI resume parsing and structured extraction',
      'Resume Builder, Hotlist, and bulk email modules',
    ],
  },
  {
    name: 'BenchSales',
    type: 'Candidate Marketing',
    stack: [
      'React.js',
      'TypeScript',
      'Redux',
      'Material UI',
      'Node.js',
      'Express.js',
      'MySQL',
      'Apache Solr',
    ],
    overview:
      'US IT staffing platform for bench candidate management, marketing, recruiter activity, and submissions.',
    contributions: [
      'Candidate and recruiter management flows',
      'Solr-powered search and filtering',
      'Submission and marketing workflows',
      'REST API and database integrations',
    ],
  },
  {
    name: 'JobFair Platform',
    type: 'Event Recruitment',
    stack: ['React.js', 'Material UI', 'Redux', 'REST APIs'],
    overview:
      'Job fair management experience supporting live interactions between seekers, recruiters, and employers.',
    contributions: [
      'Responsive React interfaces and reusable components',
      'Dynamic forms and data presentation',
      'API-driven candidate and recruiter workflows',
      'Ongoing UI fixes and maintainability improvements',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Electronics and Communication Engineering',
  school: "St. Peter's Engineering College",
  year: '2023',
  cgpa: '6.7 / 10',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

import {
  Project,
  SkillCategory,
  ExperienceItem,
  EngineeringHighlight,
  Capability,
  EngineeringStep,
  ValueProposition
} from '../types';
import profileAvatarImg from '../assets/images/Mathan.jpg';

export const developerInfo = {
  name: 'Mathan V',
  role: 'Full Stack Developer',
  company: 'Hyperready Technology',
  email: 'marimathan1998@gmail.com',
  githubUrl: 'https://github.com/Mathan-V',
  linkedinUrl: 'https://www.linkedin.com/in/mathan-v-a16a482a6',
  location: 'Coimbatore,Tamil Nadu, India',
  yearsOfExperience: '3+ Years',
  avatarUrl: profileAvatarImg,
  bioHeadline: 'Full Stack Developer Building Scalable Enterprise Applications',
  bioSubheadline:
    'I build reliable, scalable and user-focused applications using Python, Frappe, React, PostgreSQL and modern web technologies.',
  aboutFull:
    'I’m a Full Stack Developer with 3+ years of experience building business applications using Frappe and Python, along with hands-on experience in React. My work focuses on transforming complex business requirements into scalable, maintainable and user-friendly software solutions.\n\nI have worked on reporting platforms, ERP integrations, KYC workflows, manufacturing and stock modules, database-driven applications and dashboard systems. I enjoy solving complex technical problems, improving application performance and delivering reliable solutions to production.',
  quickStats: [
    { label: 'Frappe & Python', value: '3+ Years' },
    { label: 'React Ecosystem', value: '1+ Year' },
    { label: 'Core Specialization', value: 'ERP & BI Platforms' },
    { label: 'System Uptime Focus', value: 'Production Grade' }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Frameworks',
    description: 'Server architecture, business logic automation, and robust REST APIs.',
    skills: [
      {
        name: 'Python',
        iconName: 'Code',
        category: 'Backend',
        level: 'Core Expertise',
        focus: 'Data processing, async jobs, enterprise business logic & custom tooling'
      },
      {
        name: 'Frappe Framework',
        iconName: 'Layers',
        category: 'Backend',
        level: 'Core Expertise',
        focus: 'DocTypes, Server Scripts, Whitelisted APIs, hooks, workflow automation'
      },
      {
        name: 'REST APIs',
        iconName: 'Network',
        category: 'Backend',
        level: 'Enterprise',
        focus: 'API design, authentication headers, rate-limiting, error schemas'
      },
      {
        name: 'ERPNext Internals',
        iconName: 'Server',
        category: 'Backend',
        level: 'Production',
        focus: 'Stock, Accounts, Buying, Selling, and Manufacturing module extensions'
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern, reactive interfaces with component-driven architectures.',
    skills: [
      {
        name: 'React',
        iconName: 'Atom',
        category: 'Frontend',
        level: 'Production',
        focus: 'Custom hooks, state management, interactive data tables, modular UI'
      },
      {
        name: 'JavaScript (ES6+)',
        iconName: 'FileCode',
        category: 'Frontend',
        level: 'Advanced',
        focus: 'Async/await, DOM manipulation, client-side data transformations'
      },
      {
        name: 'HTML5 & Semantic Web',
        iconName: 'Globe',
        category: 'Frontend',
        level: 'Advanced',
        focus: 'Accessible layouts, standard form controls, responsive structures'
      },
      {
        name: 'CSS3 & Tailwind CSS',
        iconName: 'Palette',
        category: 'Frontend',
        level: 'Advanced',
        focus: 'Modern responsive layouts, Flexbox, Grid, custom styling tokens'
      }
    ]
  },
  {
    id: 'database',
    title: 'Database & Data Layer',
    description: 'Relational data modeling, query optimization, and structured storage.',
    skills: [
      {
        name: 'PostgreSQL',
        iconName: 'Database',
        category: 'Database',
        level: 'Production',
        focus: 'Schema design, complex joins, views, indexing, role permissions'
      },
      {
        name: 'SQL & Query Tuning',
        iconName: 'Cpu',
        category: 'Database',
        level: 'Production',
        focus: 'Analytical reporting queries, aggregations, performance optimization'
      },
      {
        name: 'Data Modeling',
        iconName: 'GitMerge',
        category: 'Database',
        level: 'Advanced',
        focus: 'Normalized relational schemas for ERP and transactional workflows'
      }
    ]
  },
  {
    id: 'bi',
    title: 'BI & Analytics',
    description: 'Interactive business insights, custom charting, and executive dashboards.',
    skills: [
      {
        name: 'Apache Superset',
        iconName: 'BarChart3',
        category: 'BI & Analytics',
        level: 'Enterprise Integration',
        focus: 'Embedded SDK, guest token authentication, chart slicing, dataset SQL'
      },
      {
        name: 'Dashboard Integration',
        iconName: 'LayoutDashboard',
        category: 'BI & Analytics',
        level: 'Production',
        focus: 'Seamless React embedding, row-level security (RLS), custom filtering'
      },
      {
        name: 'Reporting Systems',
        iconName: 'PieChart',
        category: 'BI & Analytics',
        level: 'Production',
        focus: 'Dynamic drill-downs, export pipelines, centralized enterprise insights'
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Tooling',
    description: 'Containerization, Linux administration, version control, and web servers.',
    skills: [
      {
        name: 'Docker & Docker Compose',
        iconName: 'Box',
        category: 'DevOps',
        level: 'Production',
        focus: 'Containerizing multi-service stacks (Frappe, Redis, DB, Superset)'
      },
      {
        name: 'Linux (Ubuntu/Debian)',
        iconName: 'Terminal',
        category: 'DevOps',
        level: 'Production',
        focus: 'Server configuration, cron scheduling, permissions, systemd services'
      },
      {
        name: 'Nginx',
        iconName: 'ShieldCheck',
        category: 'DevOps',
        level: 'Production',
        focus: 'Reverse proxy configuration, SSL termination, static asset routing'
      },
      {
        name: 'Git & GitHub',
        iconName: 'GitBranch',
        category: 'DevOps',
        level: 'Advanced',
        focus: 'Branching strategies, code reviews, semantic versioning, CI workflows'
      }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Hyperready Technology',
    period: 'Feb 2025 — Present',
    location: 'Coimbatore, India',
    type: 'Full-time',
    summary: 'Custom Application Development and ERPNext Customization within the Frappe framework, enhancing functionality and integrating RESTful APIs.',
    responsibilities: [
      'Developed and maintained custom applications within the Frappe framework, enhancing functionality and user experience.',
      'Customized ERPNext modules to fit business processes, including workflow automation, data validation, and custom scripting.',
      'Developed and customized HR modules within Frappe framework, streamlining employee management processes.',
      'Designed and integrated material management solutions for inventory control and supply chain management.',
      'Created and integrated RESTful APIs to facilitate communication between Frappe-based applications and external systems.',
      'Designed and optimized database schemes in MariaDB for efficient data storage and retrieval.',
      'Collaborated with cross-functional teams in an Agile environment for sprint planning and feature delivery.'
    ],
    technologies: [
      'Frappe',
      'Python',
      'React',
      'MariaDB',
      'REST APIs'
    ],
    keyWins: [
      'ERP 360 – Centralized ERP Built on ERPNext integrating multiple external systems.',
      'Frappe CRM – React + Vite Frontend with Exotel Integration for lead tracking and calls.',
      'ClearTax Integration – Automated GST Filing in ERPNext reducing errors by 80%.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Nxweb',
    period: 'Sep 2022 — Jan 2025',
    location: 'Coimbatore, India',
    type: 'Full-time',
    summary: 'Led API integrations and ERPNext-to-Tally sync workflows, alongside KYC and gallery solutions.',
    responsibilities: [
      'Integrated CashFree API for secure and automated KYC verification processes.',
      'Created an interactive timeline and image gallery management for construction projects.',
      'Designed ERPNext-to-Tally Import Solution mapping data structures and ensuring smooth transfer.',
      'Built APIs and XML templates for importing purchase, sales, ledgers, and stock into Tally.',
      'Addressed mismatch issues and achieved reliable data integrity.',
      'Enabled features such as overwriting vouchers with duplicate GUIDs to streamline import.'
    ],
    technologies: [
      'Frappe',
      'Python',
      'Tally',
      'CashFree API',
      'XML'
    ],
    keyWins: [
      'KYC Verification System reducing onboarding time.',
      'ERPNEXT to Tally Integration automating accounting data transfer.',
      'Construction Timeline and Image Gallery visualizations.'
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'erp-360',
    title: 'ERP 360 – Centralized ERP',
    category: 'Enterprise Integration',
    tagline: 'Centralized ERP solution integrating multiple external ERP systems',
    description: 'Developed a centralized ERP solution using ERPNext to integrate multiple external ERP systems into a unified platform. Consolidated key modules like Selling, Buying, Accounting, and Stock into one system for real-time visibility across multiple companies.',
    keyContributions: [
      'Developed REST API integrations to sync data from third-party ERP systems into ERPNext.',
      'Built robust background jobs and schedulers to handle real-time or periodic data synchronization.',
      'Developed custom scripts for data transformation and compatibility.',
      'Automated creation of Sales Orders, Purchase Invoices, and Stock Entries.',
      'Ensured data accuracy and integrity with validation and exception handling.'
    ],
    technologies: ['Frappe', 'ERPNext', 'Python', 'REST APIs'],
    highlights: [
      'Unified data from multiple companies into one platform.',
      'Real-time automated syncing of critical business documents.',
      'Seamless API integration with legacy external systems.'
    ],
    architectureOverview: {
      frontend: 'Standard ERPNext Workspace & Desk',
      backend: 'Frappe background jobs and automated scheduled scripts',
      database: 'MariaDB',
      integration: 'External ERP APIs',
      flow: [
        'External ERP generates new record',
        'Background job fetches from REST API',
        'Payload validated and transformed',
        'ERPNext DocType created automatically'
      ]
    },
    metrics: [
      { label: 'Integration', value: 'Multi-system' },
      { label: 'Automation', value: '100% Sync' }
    ],
    featured: true
  },
  {
    id: 'frappe-crm',
    title: 'Frappe CRM – React + Vite',
    category: 'Frontend & Integration',
    tagline: 'Custom CRM with Exotel Integration for Lead Management',
    description: 'Developed a custom CRM solution with React (Vite + Doppio) as the frontend and Frappe as the backend. Tailored for lead management and communication automation, featuring deep Exotel API integration for call tracking.',
    keyContributions: [
      'Built a modern, responsive UI in React with Vite + Doppio for seamless lead tracking.',
      'Integrated Exotel API for real-time call initiation, tracking, and status updates directly from the CRM.',
      'Implemented automatic call log creation and lead follow-up scheduling based on calls.',
      'Displayed live call details using custom Frappe DocTypes.',
      'Secured all API interactions with token-based authentication and logging.'
    ],
    technologies: ['React', 'Vite', 'Frappe', 'Python', 'Exotel API'],
    highlights: [
      'Real-time Exotel call tracking embedded in CRM.',
      'Automated call log and follow-up generation.',
      'Modern, highly responsive React UI.'
    ],
    architectureOverview: {
      frontend: 'React SPA built with Vite and Doppio',
      backend: 'Frappe server-side scripts and webhooks',
      database: 'MariaDB',
      integration: 'Exotel API via Token Auth',
      flow: [
        'User initiates call from React UI',
        'Frappe triggers Exotel API to bridge call',
        'Exotel webhook updates call status in Frappe',
        'React UI displays live call info'
      ]
    },
    metrics: [
      { label: 'Productivity', value: 'Enhanced' },
      { label: 'Tracking', value: 'Real-time' }
    ],
    featured: true
  },
  {
    id: 'kj-reporting-system',
    title: 'KJ Reporting System',
    category: 'Enterprise Reporting & Business Intelligence',
    tagline: 'Centralized enterprise BI analytics and real-time dashboard platform',
    description:
      'KJ Reporting System is a web-based business intelligence and reporting application designed to provide interactive business insights through centralized dashboards. The system connects to SQL and PostgreSQL databases, processes business data, and integrates Apache Superset dashboards into a modern React application. The backend is powered by Frappe and Python, handling secure APIs, authentication, and role-based access control.',
    keyContributions: [
      'React frontend development with intuitive navigation & custom chart drilldowns',
      'Apache Superset dashboard integration via guest tokens and embedded SDK',
      'Frappe backend development with custom controller methods and data parsers',
      'Python API development for authentication, report configs, and session states',
      'Granular Role-Based Access Control (RBAC) securing confidential financial datasets',
      'PostgreSQL database integration and complex analytical SQL reporting queries',
      'Interactive dashboard features with multi-filter caching and instant exports',
      'Production bug fixing, query tuning, and zero-downtime deployment pipelines'
    ],
    technologies: ['React', 'Python', 'Frappe', 'PostgreSQL', 'SQL', 'Apache Superset', 'Docker', 'Linux'],
    highlights: [
      'Centralized multi-department reporting into a single authenticated portal',
      'Embedded Superset dashboards with custom React wrapper controls',
      'Role-based data filtering ensuring users only access authorized metrics',
      'High-performance SQL query views optimized for heavy analytical workloads'
    ],
    architectureOverview: {
      frontend: 'React SPA with custom filter panels, theme integration & embedded Superset iframe SDK',
      backend: 'Frappe Framework / Python microservices for token provisioning & metadata',
      database: 'PostgreSQL relational database with analytical indexes and aggregation views',
      integration: 'Apache Superset embedded guest-token authentication bridge',
      flow: [
        'User logs into React app via Frappe JWT/Session auth',
        'Backend validates RBAC permissions & requests scoped guest token from Apache Superset',
        'React embeds Superset dashboard securely with automated filter synchronization',
        'PostgreSQL executes optimized analytical queries for real-time reporting'
      ]
    },
    metrics: [
      { label: 'Data Latency', value: '< 300ms' },
      { label: 'Security Layer', value: 'Strict RBAC' },
      { label: 'Stack Depth', value: 'Full Stack' }
    ],
    featured: true
  },
  {
    id: 'erpnext-tally-integration',
    title: 'ERPNext → Tally Integration',
    category: 'Enterprise Integration',
    tagline: 'Automated data synchronization between ERPNext and Tally accounting software',
    description:
      'Developed integration workflows between ERPNext and Tally to streamline business data synchronization and eliminate error-prone manual accounting data entry. The solution processes sales invoices, purchase records, ledger entries, and master data with automated transformations and robust retry mechanisms.',
    keyContributions: [
      'ERP data integration pipeline connecting Frappe DocTypes with Tally XML/API endpoints',
      'Custom Python API endpoints for scheduled batch sync and real-time webhook triggers',
      'Bidirectional data transformation handling custom accounting ledger mappings',
      'Comprehensive error handling, failure logging, and automatic retry queues',
      'Business workflow integration ensuring full auditability and balance reconciliation'
    ],
    technologies: ['Python', 'Frappe', 'ERPNext', 'REST APIs', 'SQL', 'XML/JSON Engine'],
    highlights: [
      'Eliminated manual double-entry for invoices and accounting ledgers',
      'Built transaction audit trails with instant sync status indicators',
      'Handles schema mismatch gracefully with customizable field mapping'
    ],
    architectureOverview: {
      frontend: 'ERPNext desk integration with sync status monitors and action buttons',
      backend: 'Python background worker queue in Frappe with automated XML payload generation',
      database: 'MariaDB / PostgreSQL ledger transaction tables with sync timestamps',
      integration: 'Direct HTTP XML/JSON integration with local/cloud Tally service endpoints',
      flow: [
        'ERPNext sales/purchase invoice submitted and validated',
        'Frappe doc event triggers asynchronous Python sync worker',
        'Payload converted to Tally-compliant XML schema with validated ledger accounts',
        'Tally responds with voucher ID; sync status logged in ERP for full traceability'
      ]
    },
    metrics: [
      { label: 'Manual Effort', value: '-95% Reduction' },
      { label: 'Sync Accuracy', value: '100% Reconciled' },
      { label: 'Latency', value: 'Near Real-Time' }
    ],
    featured: true
  },
  {
    id: 'cleartax-integration',
    title: 'ClearTax Integration',
    category: 'API Integration',
    tagline: 'Seamless tax compliance, e-Invoicing, and GST verification workflows',
    description:
      'Worked on ClearTax integration workflows to connect enterprise business applications with external government-mandated tax and compliance services. Designed reliable API pipelines for automated e-Invoice generation, e-Way bill sync, and error handling.',
    keyContributions: [
      'Enterprise API integration with ClearTax sandbox and production endpoints',
      'Rigorous pre-flight data validation ensuring compliance with GST tax rules',
      'Secure request/response handling with digital signature & IRN token management',
      'Detailed error reporting surfacing tax portal rejection reasons to finance operators',
      'Backend development in Python/Frappe integrated directly into invoice workflows'
    ],
    technologies: ['Python', 'Frappe', 'REST APIs', 'JSON Schema', 'PostgreSQL'],
    highlights: [
      'Automated IRN (Invoice Reference Number) generation on invoice submission',
      'QR code & digital signature storage for compliance documentation',
      'Defensive error handling preventing invalid payload submission'
    ],
    architectureOverview: {
      frontend: 'Embedded e-Invoice action panel inside ERP invoice view',
      backend: 'Frappe server scripts & Python API client with exponential backoff retry',
      database: 'PostgreSQL tax transaction audit log with IRN and ACK numbers',
      integration: 'ClearTax GSTN / NIC e-Invoicing API Gateway',
      flow: [
        'Finance team submits validated invoice in enterprise system',
        'Backend constructs tax-compliant JSON payload adhering to NIC schema',
        'ClearTax API processes request and returns signed QR code & IRN',
        'System updates invoice record and attaches compliance metadata'
      ]
    },
    metrics: [
      { label: 'Compliance', value: '100% Validated' },
      { label: 'Automation', value: 'One-Click IRN' }
    ],
    featured: false
  },
  {
    id: 'kyc-verification-system',
    title: 'KYC Verification System',
    category: 'Business Automation',
    tagline: 'Streamlined customer onboarding with automated document verification workflows',
    description:
      'Worked on KYC verification functionality designed to streamline customer identity verification workflows and improve data processing efficiency for enterprise applications. Built structured approval hierarchies and secure document handling.',
    keyContributions: [
      'End-to-end verification workflows with multi-tier approval states',
      'Backend REST APIs for document upload, metadata extraction, and status checks',
      'Strict data validation and security sanitization for sensitive identity records',
      'Business logic implementing state machines for pending, approved, and rejected cases',
      'Seamless user workflows with status tracking and notification triggers'
    ],
    technologies: ['Python', 'Frappe', 'REST APIs', 'PostgreSQL', 'JavaScript'],
    highlights: [
      'Reduced customer onboarding turnaround time significantly',
      'Auditable verification log with timestamped reviewer actions',
      'Secure storage and access permissions for confidential KYC files'
    ],
    architectureOverview: {
      frontend: 'Clean verification dashboard with document preview and quick actions',
      backend: 'Frappe DocType workflow engine with custom Python validation logic',
      database: 'PostgreSQL with encrypted file reference tables and status history',
      integration: 'RESTful verification service hooks',
      flow: [
        'Customer submits identity documents and details',
        'Backend performs format validation and assigns verification ticket',
        'Reviewer inspects documents through verified portal with automated checks',
        'Workflow transitions state and triggers notification to client'
      ]
    },
    metrics: [
      { label: 'Processing Speed', value: '4x Faster' },
      { label: 'Auditability', value: 'Full History' }
    ],
    featured: false
  },
  {
    id: 'manufacturing-stock-modules',
    title: 'Manufacturing & Stock Modules',
    category: 'ERP / Business Applications',
    tagline: 'Enterprise production planning, Bill of Materials (BOM), and stock management',
    description:
      'Developed and enhanced manufacturing and inventory-related modules for enterprise business applications. Designed robust business logic for multi-level BOMs, work orders, stock transfers, and automated inventory valuation.',
    keyContributions: [
      'Manufacturing workflow enhancements covering work orders, job cards, and scrap tracking',
      'Real-time stock management with multi-warehouse tracking and valuation updates',
      'Custom business logic in Python for automated material allocation and shortages',
      'Optimized database operations for high-concurrency stock ledger entries',
      'ERP functionality expansion with custom client scripts and print formats',
      'Production bug fixing, ledger reconciliation, and performance enhancements'
    ],
    technologies: ['Frappe', 'Python', 'JavaScript', 'PostgreSQL', 'SQL'],
    highlights: [
      'Handled complex multi-level Bill of Materials calculations effortlessly',
      'Prevented negative stock discrepancies with atomic database transactions',
      'Accelerated inventory reconciliation reporting for plant managers'
    ],
    architectureOverview: {
      frontend: 'Custom Frappe / JS forms with dynamic BOM item selectors',
      backend: 'Python stock ledger controller handling atomic inventory transactions',
      database: 'PostgreSQL with indexed stock ledger and serial/batch tracking tables',
      integration: 'Internal ERP workflow event listeners and notifications',
      flow: [
        'Work order submitted by production supervisor',
        'System verifies raw material availability across designated warehouses',
        'Job cards generated and tracked across production stages',
        'Finished goods received and stock balances updated with accurate valuation'
      ]
    },
    metrics: [
      { label: 'Inventory Drift', value: 'Zero Discrepancy' },
      { label: 'BOM Handling', value: 'Multi-Level' }
    ],
    featured: false
  }
];

export const recentEngineeringWork: EngineeringHighlight[] = [
  {
    id: 'naming-series-fix',
    title: 'Report Folder Naming-Series Fix & Production Rollout',
    category: 'Production Reliability',
    impact: 'Eliminated naming collisions and duplicate folder errors in active tenant environments',
    details:
      'Diagnosed a critical concurrency conflict in report folder naming-series generation under multi-user access. Refactored the naming controller in Frappe to use atomic lock-safe database counters, verified through staging regression tests, and successfully deployed to live production without system downtime.',
    status: 'Deployed to Production',
    tags: ['Frappe Core', 'Database Locks', 'Production Fix']
  },
  {
    id: 'recent-folders-project',
    title: 'Project-Based Recent Folders Architecture',
    category: 'Feature Engineering',
    impact: 'Reduced navigation time for enterprise users managing hundreds of document folders',
    details:
      'Engineered an intelligent project-scoped "Recent Folders" tracking mechanism. Stores user access patterns in high-speed cached query views, allowing users to jump directly to active workspace folders based on their current assigned project context.',
    status: 'Live & Active',
    tags: ['React UI', 'PostgreSQL Views', 'UX Optimization']
  },
  {
    id: 'project-favorites',
    title: 'Project-Based Favorites & Quick-Access Engine',
    category: 'System Enhancement',
    impact: 'Enhanced user productivity by enabling customized quick-access bookmarks across modules',
    details:
      'Designed and integrated a polymorphic Favorites data model in the Frappe backend with dynamic React front-end pin/unpin micro-interactions. Includes instant state synchronization and permission-aware visibility checks.',
    status: 'Live & Active',
    tags: ['State Sync', 'REST API', 'Frappe DocType']
  },
  {
    id: 'production-bugfixes',
    title: 'Enterprise Production Bug Triage & Resolution',
    category: 'System Stability',
    impact: 'Maintained 99.9% business operation continuity across daily ERP and reporting usage',
    details:
      'Routinely investigated edge-case production tickets spanning ledger calculation roundings, API timeout handling, token expiry refreshes, and database index locks. Implemented defensive code patterns and regression tests.',
    status: 'Continuous Delivery',
    tags: ['Debugging', 'Performance Tuning', 'Zero Downtime']
  },
  {
    id: 'testing-deployment',
    title: 'Automated Testing & Containerized Deployments',
    category: 'DevOps & QA',
    impact: 'Streamlined release cycles with consistent staging and production container environments',
    details:
      'Configured Docker Compose environments for multi-service parity (Frappe backend, React build, PostgreSQL, Redis, Nginx reverse proxy), enabling rapid local verification before rolling out production releases.',
    status: 'Operational Standard',
    tags: ['Docker', 'Nginx', 'Linux CI']
  }
];

export const whatIDoData: Capability[] = [
  {
    id: 1,
    title: 'Full Stack Development',
    description:
      'Build scalable, responsive web applications with clean React frontends and high-performance Python/Frappe backends.',
    iconName: 'Layers',
    features: [
      'Component-driven modern React architectures',
      'High-throughput Python backend services',
      'End-to-end type safety and clean interfaces',
      'Robust state management and real-time updates'
    ],
    stack: ['React', 'Python', 'Frappe', 'JavaScript']
  },
  {
    id: 2,
    title: 'Enterprise Application Development',
    description:
      'Develop business-critical applications tailored to real-world operational workflows, compliance, and multi-user collaboration.',
    iconName: 'Building2',
    features: [
      'Custom ERP modules (Inventory, Accounts, Manufacturing)',
      'Granular Role-Based Access Control (RBAC)',
      'Multi-stage approval workflows & state machines',
      'Audit logging and compliance tracking'
    ],
    stack: ['Frappe Framework', 'Python', 'PostgreSQL', 'RBAC']
  },
  {
    id: 3,
    title: 'API & System Integration',
    description:
      'Connect ERP systems, accounting software, and third-party SaaS platforms using secure, fault-tolerant REST APIs.',
    iconName: 'Network',
    features: [
      'ERPNext to Tally automated accounting sync',
      'ClearTax e-Invoicing & GST compliance pipelines',
      'Webhook listeners and background retry queues',
      'JSON/XML payload validation & normalization'
    ],
    stack: ['REST APIs', 'Webhooks', 'Tally XML', 'ClearTax API']
  },
  {
    id: 4,
    title: 'Business Intelligence',
    description:
      'Build comprehensive reporting solutions and embed interactive Apache Superset dashboards directly into web applications.',
    iconName: 'BarChart3',
    features: [
      'Apache Superset guest token embedding SDK',
      'Interactive executive BI dashboards & drill-downs',
      'Row-level security (RLS) dataset filtering',
      'Dynamic multi-format export pipelines (CSV/PDF)'
    ],
    stack: ['Apache Superset', 'SQL Analytics', 'React Embed SDK']
  },
  {
    id: 5,
    title: 'Database Development',
    description:
      'Design normalized relational schemas, write high-performance SQL queries, and optimize database operations.',
    iconName: 'Database',
    features: [
      'PostgreSQL schema design and normalization',
      'Complex analytical queries, views, and CTEs',
      'Index optimization and query execution plan tuning',
      'Transactional integrity and race condition prevention'
    ],
    stack: ['PostgreSQL', 'SQL', 'Frappe ORM', 'Query Tuning']
  },
  {
    id: 6,
    title: 'Production Engineering',
    description:
      'Debug, optimize, containerize, and deploy applications to Linux production environments with zero downtime.',
    iconName: 'ServerCrash',
    features: [
      'Docker and Docker Compose orchestration',
      'Linux server management and systemd services',
      'Nginx reverse proxy and SSL configuration',
      'Root-cause analysis and live production debugging'
    ],
    stack: ['Docker', 'Linux', 'Nginx', 'Git', 'CI/CD']
  }
];

export const engineeringApproachSteps: EngineeringStep[] = [
  {
    step: '01',
    name: 'Understand',
    subtitle: 'Business Requirements & Domain Modeling',
    description:
      'Deeply analyze the domain context, operational bottlenecks, user roles, and compliance requirements before writing any code. Clear requirements prevent technical debt.',
    deliverables: ['Requirement breakdown', 'Data entity mapping', 'Scope & timeline alignment'],
    iconName: 'Search'
  },
  {
    step: '02',
    name: 'Design',
    subtitle: 'Architecture, Schemas & API Contracts',
    description:
      'Design clean relational schemas in PostgreSQL, structure Frappe DocTypes, define strict API request/response contracts, and plan frontend component hierarchies.',
    deliverables: ['DB schema models', 'API contract specifications', 'System architecture blueprint'],
    iconName: 'DraftingCompass'
  },
  {
    step: '03',
    name: 'Develop',
    subtitle: 'Clean Code & Robust Implementation',
    description:
      'Write modular, readable, and maintainable code in Python, Frappe, and React. Adhere to strict coding standards, DRY principles, and defensive programming.',
    deliverables: ['Modular components', 'Frappe DocType controllers', 'Secure REST endpoints'],
    iconName: 'Code2'
  },
  {
    step: '04',
    name: 'Test',
    subtitle: 'Validation, Edge Cases & Data Integrity',
    description:
      'Validate edge cases, test role-based security boundaries, verify data integrity across transactions, and ensure smooth UX under unexpected inputs.',
    deliverables: ['Edge-case validation', 'RBAC permission checks', 'API payload stress testing'],
    iconName: 'CheckCircle2'
  },
  {
    step: '05',
    name: 'Deploy',
    subtitle: 'Containerization & Production Rollout',
    description:
      'Package services into Docker containers, configure Nginx reverse proxies, run database migrations safely, and deploy to production with zero disruption.',
    deliverables: ['Docker orchestration', 'Nginx SSL reverse proxy', 'Smooth production deployment'],
    iconName: 'Rocket'
  },
  {
    step: '06',
    name: 'Improve',
    subtitle: 'Monitoring, Optimization & Iteration',
    description:
      'Monitor production performance, analyze query bottlenecks, triage live feedback, and continuously refine software for long-term scalability.',
    deliverables: ['Query optimization', 'Feedback-driven enhancements', 'System reliability tuning'],
    iconName: 'TrendingUp'
  }
];

export const whyWorkWithMePoints: ValueProposition[] = [
  {
    title: 'Real-World Enterprise Experience',
    description:
      'Hands-on track record building production applications that real businesses and enterprise teams rely on every day.',
    iconName: 'Briefcase'
  },
  {
    title: 'Strong Frappe & Python Backend',
    description:
      '3+ years of deep expertise with the Frappe ecosystem: DocTypes, Server Scripts, Whitelisted APIs, and complex business logic.',
    iconName: 'TerminalSquare'
  },
  {
    title: 'Modern React Frontend Skills',
    description:
      'Ability to build clean, responsive, fast-loading user interfaces that turn complex backend datasets into intuitive workflows.',
    iconName: 'Layout'
  },
  {
    title: 'Databases & BI Reporting Expertise',
    description:
      'Skilled in PostgreSQL, complex analytical SQL queries, and embedding Apache Superset dashboards for executive intelligence.',
    iconName: 'Database'
  },
  {
    title: 'Complex API & ERP Integrations',
    description:
      'Proven experience connecting disparate systems like ERPNext, Tally accounting software, and ClearTax regulatory APIs.',
    iconName: 'Workflow'
  },
  {
    title: 'Production Debugging & Reliability',
    description:
      'Experienced in investigating critical production bugs, analyzing database locks, and deploying zero-downtime hotfixes.',
    iconName: 'ShieldAlert'
  },
  {
    title: 'Business-Focused Problem Solving',
    description:
      'I don’t just write code — I understand the business workflow and deliver solutions that save time and eliminate friction.',
    iconName: 'Target'
  },
  {
    title: 'Continuous Learning & Growth',
    description:
      'Committed to modern software engineering best practices, containerized infrastructure, and staying at the cutting edge.',
    iconName: 'Sparkles'
  }
];

export const resumeData = {
  name: 'Mathan V',
  title: 'Full Stack Developer',
  email: 'marimathan1998@gmail.com',
  phone: '+91 9629810613',
  location: 'Coimbatore, Tamil Nadu',
  summary: 'Dedicated Full Stack Developer with 3+ years of professional experience specializing in Frappe Framework, Python, React, PostgreSQL/MariaDB. Proven track record in architecting enterprise business applications, third-party integrations (Tally, ClearTax, Exotel), and custom application development. Passionate about writing clean, reliable code that drives real business efficiency.',
  education: [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Maharani Arts and Science College - Dharapuram',
      period: 'June 2016 — April 2019',
      details: 'Focus on Information Technology fundamentals and programming.'
    },
    {
      degree: 'Python Full Stack Developer',
      institution: 'Yuva Sakthi Academy - Coimbatore',
      period: 'May 2022 — August 2022',
      details: 'Intensive training in Python, Web Development, and backend frameworks.'
    }
  ],
  coreCompetencies: [
    'Frappe Framework & ERPNext Customization',
    'Python Backend & RESTful API Architecture',
    'React & Modern JavaScript (ES6+)',
    'Database Management (MariaDB, PostgreSQL)',
    'Enterprise Integration (Tally, ClearTax, Exotel)',
    'Agile Practices & Team Collaboration',
    'Linux, Git/GitHub, Postman'
  ]
};

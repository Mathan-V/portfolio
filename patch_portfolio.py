import re

with open('src/data/portfolioData.ts', 'r') as f:
    content = f.read()

# Replace developerInfo
content = re.sub(
    r"email:\s*'[^']+',",
    "email: 'marimathan1998@gmail.com',",
    content
)
content = re.sub(
    r"githubUrl:\s*'[^']+',",
    "githubUrl: 'https://github.com/Mathan-V',",
    content
)
content = re.sub(
    r"linkedinUrl:\s*'[^']+',",
    "linkedinUrl: 'https://www.linkedin.com/in/mathan-v-a16a482a6',",
    content
)

# Replace experienceData
new_experience = """export const experienceData: ExperienceItem[] = [
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
    company: 'NXWEB | LINK',
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
];"""

content = re.sub(
    r"export const experienceData: ExperienceItem\[\] = \[.*?\];",
    new_experience,
    content,
    flags=re.DOTALL
)

# Insert new projects ERP 360 and Frappe CRM to projectsData (after kj-reporting-system to keep kj first or just before it)
new_projects = """
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
  },"""

# insert after "export const projectsData: Project[] = ["
content = content.replace("export const projectsData: Project[] = [", "export const projectsData: Project[] = [" + new_projects)

# Replace resumeData
new_resume_data = """export const resumeData = {
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
};"""

content = re.sub(
    r"export const resumeData = \{.*?\};",
    new_resume_data,
    content,
    flags=re.DOTALL
)

with open('src/data/portfolioData.ts', 'w') as f:
    f.write(content)

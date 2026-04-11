export const personal = {
  name: 'PRATIK PANCHAL',
  title: 'Principal Architect',
  subtitle: 'AI/ML-Native Systems | Data Engineering | Cloud-Native Architecture',
  email: 'pnchlprtk@gmail.com',
  phone: '+91 8793374591',
  linkedin: 'linkedin.com/in/pratikpanchal4472',
  linkedinUrl: 'https://linkedin.com/in/pratikpanchal4472',
  location: 'Ahmedabad, Gujarat, India',
  summary:
    'Principal Architect with 13+ years designing AI/ML-native, cloud-native, and data engineering systems at scale. Deep expertise in AWS, Apache Flink/Kafka streaming, privacy-preserving ML, and agentic AI workflows.',
}

export const stats = [
  { value: 13, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '', label: 'Industries' },
  { value: 10, suffix: 'M+', label: 'Records Processed' },
  { value: 60, suffix: '%', label: 'Cost Reduction' },
]

export const skills = [
  {
    category: 'Cloud & ML',
    color: '#60a5fa',
    items: ['AWS Clean Rooms', 'SageMaker', 'EKS', 'MSK', 'Glue', 'Redshift', 'Bedrock', 'Lambda', 'CDK', 'Terraform'],
  },
  {
    category: 'Data Engineering',
    color: '#34d399',
    items: ['Apache Flink', 'Apache Kafka', 'Apache Spark', 'Apache Airflow', 'Temporal', 'Apache Doris', 'dbt', 'ETL/ELT'],
  },
  {
    category: 'AI/ML & Vectors',
    color: '#a78bfa',
    items: ['Milvus', 'pgvector', 'HNSW', 'FAISS', 'ONNX', 'PyTorch', 'Semantic Embeddings', 'LLM Integration', 'n8n', 'Spring AI'],
  },
  {
    category: 'Backend',
    color: '#60a5fa',
    items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Go (Gin)', 'Node.js', 'Supabase', 'Microservices', 'Event-Driven Architecture'],
  },
  {
    category: 'Frontend',
    color: '#34d399',
    items: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'Redux Toolkit', 'Recoil'],
  },
  {
    category: 'DevOps & IaC',
    color: '#a78bfa',
    items: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'GitHub Actions (OIDC)', 'Jenkins', 'Karpenter', 'LocalStack'],
  },
]

export const experience = [
  {
    company: 'Armakuni Private Limited',
    role: 'Principal Architect',
    period: 'Jan 2025 – Present',
    location: 'Ahmedabad, Gujarat, India',
    highlights: [
      'Led privacy-first identity resolution using AWS Clean Rooms + Milvus — cosine similarity >0.99 on 10M+ records, zero PII egress',
      'Redesigned legacy batch system to event-driven streaming — 60% cost reduction, 10-min end-to-end SLA',
      'Architected 4-layer IaC: CDK, Terraform, EKS + Milvus (Karpenter), ArgoCD GitOps; 9 GitHub Actions workflows with OIDC',
    ],
  },
  {
    company: 'Crest Data Systems',
    role: 'Engineering Technical Lead',
    period: 'Apr 2022 – Oct 2024',
    location: 'Ahmedabad, Gujarat, India',
    highlights: [
      'Scaled Python microservices to 20K events/second for Abstract Security integration',
      "Implemented org's first Go RESTful API microservices using the Gin framework",
      'Delivered full Splunk UBA 5.2.0 release — earned CAP Award for outstanding contribution',
    ],
  },
  {
    company: 'Malbek Solutions LLP',
    role: 'Principal Engineer',
    period: 'Feb 2017 – Apr 2022',
    location: 'Ahmedabad, Gujarat, India',
    highlights: [
      'Founding engineer — drove CLM SaaS platform from greenfield to production with enterprise customers',
      'Integrated Salesforce CRM and DocuSign/Adobe ESign for contract lifecycle management',
      'Engineered Angular UX for templates, forms, workflows, and contract lifecycle processes',
    ],
  },
  {
    company: 'Revitas (now ModeIN)',
    role: 'Software Engineer',
    period: 'Dec 2015 – Jan 2017',
    location: 'Ahmedabad, Gujarat, India',
    highlights: [
      'Designed CLM front-end with AngularJS for workflow and template management',
      'Integrated Salesforce CRM with Apache Camel and Spring Boot',
    ],
  },
  {
    company: 'Accenture',
    role: 'Senior → Associate Software Engineer',
    period: 'Oct 2012 – Dec 2015',
    location: 'Mumbai & Pune, India',
    highlights: [
      'Built retail banking features for Barclays — Account Opening and Mortgage Rate Switch',
      'Developed J2EE Servlet APIs and JSP interfaces for Wealth Management / Premier Banking',
    ],
  },
]

export const projects = [
  {
    title: 'Privacy-Preserving Identity Resolution',
    tags: ['AWS Clean Rooms', 'SageMaker', 'Milvus', 'EKS'],
    metric: 'Cosine similarity >0.99 on 10M+ records — zero PII exposure',
    description:
      'Two-engine architecture: air-gapped SageMaker container converts PII to 768-dim vectors; EKS-hosted Milvus runs sub-millisecond HNSW similarity search inside Clean Rooms boundary.',
    color: '#60a5fa',
  },
  {
    title: 'RynoTrax Streaming Modernisation',
    tags: ['Apache Flink', 'Temporal', 'Kafka'],
    metric: '60% cost reduction vs. Glue batch · 10-min SLA',
    description:
      'Redesigned legacy batch Call Processing into event-driven streaming. Replaced Airflow DAGs with Temporal for reliability and observability.',
    color: '#34d399',
  },
  {
    title: 'Abstract Security Event Processing',
    tags: ['Python', 'Microservices', 'Event Streaming'],
    metric: '20K events/second · zero downtime',
    description:
      'Scaled Python microservices to efficiently process high-volume security events with full observability.',
    color: '#a78bfa',
  },
  {
    title: 'Splunk UBA 5.2.0 Release',
    tags: ['Splunk', 'Security', 'Python'],
    metric: 'Full release on time · CAP Award recipient',
    description:
      'Upgraded system dependencies and enhanced threat detection features. Delivered complete release scope on schedule.',
    color: '#60a5fa',
  },
  {
    title: 'Malbek CLM Platform',
    tags: ['Angular', 'Spring Boot', 'Salesforce'],
    metric: 'Greenfield → production SaaS with enterprise customers',
    description:
      'Founding engineer for a Contract Lifecycle Management SaaS. Built document processing, e-sign integrations, and workflow engine.',
    color: '#34d399',
  },
]

export const certifications = [
  { name: 'Amazon Connect Complete Training', issuer: 'Udemy', date: 'Mar 2026' },
  { name: 'Complete N8N and AI Automation Masterclass', issuer: 'Udemy', date: 'Feb 2026' },
  { name: 'Claude Code in Action', issuer: 'Anthropic', date: 'Feb 2026' },
  { name: 'Apache Flink | Real Time & Hands-On', issuer: 'Udemy', date: 'Aug 2025' },
  { name: 'Spring AI: Beginner to Guru', issuer: 'Udemy', date: 'Jul 2024' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'AWS', date: '' },
  { name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org', date: '' },
]

export const awards = [
  'CAP Award — Splunk UBA 5.2.0 Release Support',
  'Outstanding Contributor Award',
  'High Performer of the Month',
  'Client Delivery Champion',
  'Team Award for Zero Defect Code Delivery',
]

// Positions and colors for floating 3D tech cards in the Hero scene
export const heroTechCards = [
  { label: 'AWS',    color: '#FF9900', position: [-3.2,  1.5, -2.5] },
  { label: 'Kafka',  color: '#60a5fa', position: [ 2.8,  2.0, -3.0] },
  { label: 'Flink',  color: '#34d399', position: [-2.2, -1.5, -1.8] },
  { label: 'ML/AI',  color: '#a78bfa', position: [ 3.2, -1.0, -2.5] },
  { label: 'K8s',    color: '#326CE5', position: [ 0.5,  2.8, -2.8] },
  { label: 'React',  color: '#61DAFB', position: [-3.5,  0.2, -1.5] },
  { label: 'Python', color: '#FFD43B', position: [ 1.8, -2.5, -2.0] },
  { label: 'Go',          color: '#00ACD7', position: [-1.0,  2.5, -3.2] },
  { label: 'Java',        color: '#f89820', position: [ 2.5,  0.8, -1.8] },
  { label: 'Spring Boot', color: '#6db33f', position: [-2.8,  2.2, -3.0] },
]

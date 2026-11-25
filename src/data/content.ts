export const personal = {
  name: "Mohammed Awais",
  role: "NetSuite Developer — 5 years",
  tagline:
    "SuiteScript 2.1 · Map/Reduce · RESTlets · SuiteTalk. Integrations: SAP, OpenAir, SFTP. ZATCA (Saudi e-invoicing) compliance.",
  location: "Malegaon, Maharashtra",
  email: "asharawais04@gmail.com",
  // Single source of truth: nothing else in the app may hardcode a profile URL.
  linkedin: "https://www.linkedin.com/in/mohammed-awais-882395200/",
  github: "https://github.com/eli-shane-001",
  availability: "Open to NetSuite developer and integration roles — remote, or Pune.",
  summary:
    "NetSuite developer building customisations, approvals and integrations — SAP, OpenAir and SFTP — for finance and operations teams. Specialises in Saudi ZATCA e-invoicing compliance.",
  highlights: [
    "Map/Reduce bulk processing with governance-safe batching",
    "OAuth 2.0 / token-based auth against SuiteTalk REST",
    "Saudi ZATCA e-invoicing compliance",
    "Approval workflows with multi-stage routing",
  ],
  // Use relative path so it works with GitHub Pages basePath
  resumeHref: "Mohammed_Awais_resume.pdf",
};

export const experiences = [
  {
    company: "Rite Software",
    role: "NetSuite Technical Consultant",
    period: "Dec 2021 – Apr 2025",
    bullets: [
      "Automated two-way SFTP exchange with scheduled SuiteScript — saved search → CSV upload, records → JSON upload, and inbound JSON parsed into NetSuite records — removing manual file handling.",
      "Customised forms, transaction and entity fields with sourcing and filtering, and auto-populated fields using Client Script conditional defaults.",
      "Auto-created and updated related records on submit with User Event scripts, replacing manual follow-up entry.",
      "Generated records from SuiteScript rules and conditions instead of manual creation.",
    ],
  },
  {
    company: "WNS",
    role: "NetSuite Developer",
    period: "Apr 2025 – Current",
    bullets: [
      "Built third-party integrations against the NetSuite REST API, connecting external systems to NetSuite records.",
      "Delivered SuiteScript customisations and automations for day-to-day business requirements.",
    ],
  },
];

export type Project = {
  name: string;
  role: string;
  bullets: string[];
  link?: string;
  evidence?: string;
};

export const projects: Project[] = [
  {
    name: "ZATCA e-invoicing compliance (Saudi Arabia)",
    role: "NetSuite implementation",
    bullets: [
      "Met Saudi ZATCA e-invoicing requirements for invoices raised in NetSuite.",
      "Added the mandated invoice fields and validation, and generated the QR code and XML payload ZATCA requires.",
      "SuiteScript 2.1, custom records, saved searches.",
    ],
  },
  {
    name: "Sparkhound",
    role: "NetSuite Technical Consultant",
    bullets: [
      "Designed new processes on NetSuite standard functionality plus customisation, and supported both new implementations and changes to live systems.",
      "Auto-populated location, class and department with a Client Script PostSourcing combo, removing manual field entry on every transaction line.",
      "Implemented two-level approvals for transactions: email approval routing and native NetSuite approval.",
      "Auto-created projects once an internal opportunity was approved, using SuiteScript.",
      "Integrated OpenAir with NetSuite via RESTlet to pass approved invoices into NetSuite.",
    ],
  },
  {
    name: "Sri Energy",
    role: "NetSuite Technical Consultant",
    bullets: [
      "Integrated SAP and NetSuite, exchanging records between the two systems.",
      "Added an extra Purchase Order approval stage in SuiteScript on top of the standard flow.",
      "Backfilled historical records with Map/Reduce in governance-safe batches, replacing a manual update.",
      "Built an Outbound Shipment flow in SuiteScript 2.1 with custom records for multi-sales-order selection.",
      "Implemented a custom Quote approval procedure in SuiteScript 2.1.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Business Administration (Computer Applications)",
    school: "M.S.G College",
    period: "Apr 2020",
    detail: "64.79%",
  },
  {
    degree: "Master of Computer Application",
    school: "LPU",
    period: "Mar 2025",
    detail: "7.26 CGPA",
  },
];

export const skills = [
  "NetSuite",
  "SuiteScript 2.1",
  "Map/Reduce",
  "RESTlets",
  "SuiteTalk / REST APIs",
  "OAuth 2.0 / TBA",
  "Integrations (SAP, OpenAir)",
  "SFTP automation",
  "Approval workflows",
  "Saved Searches / SuiteAnalytics",
  "JavaScript",
  "TypeScript",
  "Python",
];

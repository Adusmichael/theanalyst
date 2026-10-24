/* ==========================================================================
   PORTFOLIO CONTENT — EDIT THIS FILE TO UPDATE YOUR WEBSITE
   --------------------------------------------------------------------------
   Almost everything you see on the site comes from this one file.
   - Change text between the quotes "like this".
   - Keep the commas at the end of lines.
   - Leave a value as "" (empty) to HIDE that item on the site.
   - Search this file for "TODO" to find information still to be added.
   ========================================================================== */

window.portfolioData = {

  /* ---------------------------------------------------------------- PROFILE */
  name: "Michael Solomon",
  alsoKnownAs: "Adus Michael",
  title: "Healthcare Business Analyst | HealthTech Professional | Process Improvement & Digital Transformation",
  location: "Liverpool, United Kingdom",
  tagline: "I help healthcare organisations improve processes, implement digital solutions and make data-driven decisions — through evidence-based business analysis.",
  heroIntro:
    "Through evidence-based business analysis — bringing together healthcare knowledge, stakeholder engagement, requirements engineering and data-driven thinking.",
  photo: "assets/images/profile.jpg",
  photoAlt: "Portrait of Michael Solomon",

  /* ---- HERO ANIMATIONS ----
     heroStatus: text in the pill with the pulsing green dot (leave "" to hide it)
     typedPrefix + typedPhrases: the typewriter line cycles through each phrase
     heroTags: the three small labels floating around the photo
     marquee: words in the scrolling strip under the hero */
  heroStatus: "Open to opportunities",
  typedPrefix: "I help healthcare organisations",
  typedPhrases: ["improve processes.", "implement digital solutions.", "make data-driven decisions."],
  heroTags: ["Healthcare BA", "HealthTech", "Process Improvement"],
  marquee: [
    "Requirements Engineering", "Stakeholder Analysis", "Process Mapping", "AS-IS / TO-BE",
    "Gap Analysis", "Business Case Development", "UAT Support", "Information Governance",
    "Digital Transformation", "Healthcare IT", "Agile & Scrum", "BPMN"
  ],

  /* Small stats shown in the hero */
  heroStats: [
    { value: "3+", label: "Years of experience" },
    { value: "6", label: "Portfolio projects" },
    { value: "NHS", label: "Healthcare background" }
  ],

  /* ----------------------------------------------------------------- CONTACT */
  email: "adusmichael@gmail.com",
  phone: "", // optional — leave "" to hide
  linkedin: "https://www.linkedin.com/in/michael-adus-solomon/",
  github: "https://github.com/Adusmichael/theanalyst",

  /* ------------------------------------------------------------------ RESUME */
  resume: "assets/documents/Michael-Solomon-CV.pdf",
  resumeButtonText: "View CV",

  /* ---------------------------------------------------------------- FORMSPREE */
  formspreeEndpoint: "https://formspree.io/f/xdeekkqa",

  /* -------------------------------------------------------- FEATURED HIGHLIGHTS */
  highlights: [
    "Healthcare Professional",
    "HealthTech Business Analyst",
    "6 Portfolio Projects",
    "Digital Transformation Enthusiast",
    "Information Governance Experience",
    "10Alytics Healthcare Business Analysis Program"
  ],

  /* -------------------------------------------------------------------- ABOUT */
  aboutShort:
    "I am a HealthTech Business Analyst with a healthcare background and a growing portfolio in business analysis, digital transformation, process improvement, and healthcare technology. I focus on understanding complex business challenges, analysing processes, identifying gaps, and designing practical solutions that improve operational efficiency and user experience.",
  aboutLong: [
    "My professional journey began in healthcare, where I supported patient services, information governance, and operational processes. Through this experience, I became increasingly interested in understanding how business processes, technology, data, and people work together to deliver better outcomes.",
    "Today, I am building expertise in Healthcare Business Analysis, Digital Transformation, HealthTech, Process Improvement, Requirements Engineering, and Data Analysis.",
    "I enjoy translating business needs into clear requirements, analysing workflows, facilitating stakeholder conversations, and identifying opportunities for improvement.",
    "My ambition is to contribute to healthcare transformation initiatives that improve patient outcomes, operational performance, and service delivery through the effective use of technology and business analysis."
  ],
  aboutPillars: [
    { title: "Grounded in healthcare", text: "Frontline experience in NHS mental health services — I understand patient pathways and multidisciplinary teams from the inside." },
    { title: "Governance-minded", text: "Practical exposure to information governance, confidentiality and records management in regulated environments." },
    { title: "Requirements & process", text: "Trained in requirements engineering, AS-IS / TO-BE mapping, gap analysis and business case development." }
  ],

  /* --------------------------------------------------------- CORE COMPETENCIES
     Add "(Learning)" to the end of a skill to show a small "learning" tag. */
  competencies: [
    {
      category: "Business Analysis",
      skills: ["Requirements Gathering", "Requirements Elicitation", "Requirements Documentation", "Stakeholder Analysis", "Stakeholder Management", "Process Mapping", "AS-IS Analysis", "TO-BE Analysis", "Gap Analysis", "Root Cause Analysis", "User Stories", "Acceptance Criteria", "UAT Support", "Business Case Development", "SDLC"]
    },
    {
      category: "Data & Analytics",
      skills: ["Microsoft Excel", "Data Analysis", "KPI Analysis", "Reporting", "Dashboard Requirements", "Data Interpretation", "Business Insights", "Process Metrics", "Data Validation"]
    },
    {
      category: "Tools",
      skills: ["Microsoft Excel", "Microsoft Office 365", "Jira (Learning)", "Confluence (Learning)", "Lucidchart", "Draw.io", "PowerPoint", "Microsoft Teams", "WordPress", "GitHub"]
    },
    {
      category: "Methodologies",
      skills: ["Agile", "Scrum", "Waterfall", "SDLC", "BPMN", "Business Process Management", "Continuous Improvement", "Lean Thinking"]
    },
    {
      category: "Other Skills",
      skills: ["Information Governance", "Healthcare Operations", "Healthcare IT", "Digital Transformation", "Communication", "Leadership", "Workshop Facilitation", "Problem Solving", "Documentation", "Research"]
    }
  ],

  /* ------------------------------------------------- CAPABILITY MATRIX (TABLE) */
  capabilityMatrix: [
    { area: "Business Analysis", items: ["Requirements Engineering", "Stakeholder Analysis", "Gap Analysis", "Process Mapping", "UAT"] },
    { area: "Healthcare", items: ["Healthcare Workflows", "Information Governance", "Healthcare Operations", "Patient Pathways"] },
    { area: "Technology", items: ["Healthcare IT", "EMR/EHR Concepts", "Interoperability", "HealthTech"] },
    { area: "Productivity", items: ["Microsoft 365", "Teams", "SharePoint", "WordPress", "GitHub"] }
  ],

  /* --------------------------------------------------------------- EXPERIENCE
     start / end: e.g. "Jun 2024" and "Present". Leave "" to hide dates. */
  journey: ["Healthcare Professional", "Information Governance", "Business Analysis Training", "Leadership & Mentoring", "Health Business Analyst"],

  experience: [
    {
      company: "Amdari Inc",
      role: "Health Business Analyst",
      location: "United Kingdom",
      start: "May 2026",
      end: "Present",
      summary: "Gathering and documenting healthcare requirements, analysing healthcare data, building KPI dashboards and leading UAT for healthcare systems and digital transformation projects.",
      highlights: [
        "Collaborated with healthcare stakeholders, clinical teams, and operational departments to gather, analyse, and document business requirements in BRDs and PRDs using Confluence, improving requirement clarity and reducing project rework by 30%.",
        "Utilised Excel, SQL, and Power BI to analyse healthcare and operational datasets, develop performance reports, and generate actionable insights that supported evidence-based decision-making across multidisciplinary stakeholder groups.",
        "Designed and maintained interactive Power BI dashboards to monitor healthcare KPIs, service delivery metrics, patient outcomes, resource utilisation, and project performance, improving visibility and reducing reporting preparation time by 35%.",
        "Developed and maintained RACI matrices and stakeholder engagement plans to ensure clear accountability, effective governance, and successful execution of healthcare transformation projects.",
        "Conducted business process mapping, workflow analysis, and gap assessments using Lucidchart and Visio to identify inefficiencies, streamline healthcare operations, and improve service delivery effectiveness.",
        "Led User Acceptance Testing (UAT) activities for healthcare systems and digital transformation projects, creating test scenarios, managing defects, and validating solutions to ensure compliance with business and clinical requirements."
      ],
      skills: ["BRD / PRD", "Requirements Gathering", "Power BI", "SQL", "Excel", "Confluence", "RACI Matrix", "Process Mapping", "Gap Analysis", "UAT", "Lucidchart", "Visio"]
    },
    {
      company: "Mersey Care NHS Foundation Trust",
      role: "Support Time and Recovery (STR) Mental Health Support Worker",
      location: "",   // TODO: add location
      start: "",      // TODO: add start date
      end: "",        // TODO: add end date or "Present"
      summary: "Supported service users within mental health services, collaborated with multidisciplinary teams, maintained care records, and contributed to patient-centred care delivery.",
      highlights: [
        "Worked with multiple stakeholders including service users, nurses, clinicians, social workers, and care teams.",
        "Collaborated with multidisciplinary teams.",
        "Maintained accurate documentation and records.",
        "Identified and escalated issues impacting service delivery.",
        "Supported care planning and recovery-focused interventions.",
        "Contributed to operational processes and effective communication across care teams."
      ],
      skills: ["Stakeholder Engagement", "Documentation", "Communication", "Information Gathering", "Problem Solving", "Process Adherence"]
    },
    {
      company: "NHS",
      role: "Information Governance & Records Management Experience",
      location: "",
      start: "",
      end: "",
      summary: "Developed practical knowledge of healthcare information governance, confidentiality, records management, and data protection principles within regulated healthcare environments.",
      highlights: [
        "Managed sensitive information in accordance with governance policies.",
        "Supported records management and information handling processes.",
        "Reviewed documentation for compliance and accuracy.",
        "Worked within regulatory and policy frameworks."
      ],
      skills: ["Information Governance", "Process Compliance", "Risk Awareness", "Data Quality", "Regulatory Understanding", "Documentation Management"]
    },
    {
      company: "10Alytics",
      role: "Healthcare Business Analysis Trainee",
      location: "",
      start: "",
      end: "",
      summary: "Completed practical Healthcare Business Analysis training focused on analysing business problems, mapping processes, gathering requirements, developing business cases, and supporting digital transformation initiatives.",
      highlightsTitle: "Portfolio deliverables",
      highlights: [
        "Northlake Specimen Tracking Project",
        "OPD Registration Digital Transformation",
        "Appointment Booking Process Improvement",
        "Healthcare IT Ecosystem Analysis",
        "Digital Patient Consent Transformation",
        "Change Management & Adoption Project"
      ],
      skills: ["Requirements Engineering", "Stakeholder Analysis", "Process Mapping", "AS-IS / TO-BE Analysis", "Gap Analysis", "SDLC", "UAT", "Business Case Development"]
    },
    {
      company: "10Alytics Cohort Community",
      role: "Pod Leader / Assistant Pod Leader",
      location: "",
      start: "",
      end: "",
      summary: "Supported fellow cohort members through peer learning, knowledge sharing, mentoring, weekly challenges, and collaborative study sessions.",
      highlights: [
        "Coordinated learning activities and facilitated peer learning.",
        "Created BA challenges and built discussion and engagement.",
        "Shared BA knowledge resources and supported members with coursework and concepts.",
        "Encouraged knowledge sharing, consistent participation, and accountability."
      ],
      skills: ["Leadership", "Facilitation", "Stakeholder Management", "Communication", "Knowledge Sharing", "Team Collaboration"]
    }
  ],

  /* ----------------------------------------------------------------- PROJECTS
     Each project gets its own case-study page automatically:
       projects/case-study.html?id=THE-ID
     Fill in the "caseStudy" sections to complete each write-up. Empty
     sections are hidden. Do not add results or numbers you cannot evidence. */
  projects: [
    {
      id: "northlake-specimen-tracking",
      featured: true,
      title: "Northlake Community Hospital – Safer Specimen Identification & Laboratory Tracking",
      shortTitle: "Safer Specimen Identification & Lab Tracking",
      category: "Healthcare Business Analysis",
      context: "10Alytics Healthcare Business Analysis Program",
      image: "assets/images/project-01.svg",
      summary: "Healthcare business analysis case study on safer specimen identification and laboratory tracking at Northlake Community Hospital — from stakeholder analysis and process mapping through to requirements and the business case.",
      skills: ["Stakeholder Analysis", "AS-IS Mapping", "TO-BE Design", "Gap Analysis", "Requirements Engineering", "Business Case", "SDLC"],
      tools: [],          // TODO: e.g. ["Lucidchart", "Excel"]
      role: "",           // TODO: your role
      methodology: "",    // TODO
      dataSource: "",     // TODO
      caseStudy: {
        problem: "",          // TODO: BUSINESS PROBLEM
        objective: "",        // TODO: OBJECTIVE
        approach: "",         // TODO: APPROACH
        analysis: [],         // TODO: ["...", "..."]
        findings: [],         // TODO: KEY FINDINGS
        recommendations: [],  // TODO
        outcome: "",          // TODO
        impact: ""            // TODO: only real, evidenced impact
      },
      links: { document: "", github: "", dashboard: "" }
    },
    {
      id: "opd-registration",
      featured: true,
      title: "OPD Registration Digital Transformation",
      category: "Process Improvement",
      context: "10Alytics Healthcare Business Analysis Program",
      image: "assets/images/project-02.svg",
      summary: "Process improvement case study on moving outpatient department (OPD) registration to a digital process, using process mapping, gap analysis and stakeholder analysis.",
      skills: ["Process Mapping", "Digital Transformation", "Gap Analysis", "Stakeholder Analysis"],
      tools: [], role: "", methodology: "", dataSource: "",
      caseStudy: { problem: "", objective: "", approach: "", analysis: [], findings: [], recommendations: [], outcome: "", impact: "" },
      links: { document: "", github: "", dashboard: "" }
    },
    {
      id: "appointment-booking",
      featured: true,
      title: "Appointment Booking Process Improvement",
      category: "Healthcare Operations",
      context: "10Alytics Healthcare Business Analysis Program",
      image: "assets/images/project-03.svg",
      summary: "Healthcare operations case study analysing the appointment booking workflow, comparing the AS-IS and TO-BE processes to identify gaps and define requirements.",
      skills: ["Workflow Optimisation", "AS-IS / TO-BE", "Gap Analysis", "Requirements Engineering"],
      tools: [], role: "", methodology: "", dataSource: "",
      caseStudy: { problem: "", objective: "", approach: "", analysis: [], findings: [], recommendations: [], outcome: "", impact: "" },
      links: { document: "", github: "", dashboard: "" }
    },
    {
      id: "healthcare-it-ecosystem",
      title: "Healthcare IT Ecosystem Analysis",
      category: "HealthTech",
      context: "10Alytics Healthcare Business Analysis Program",
      image: "assets/images/project-04.svg",
      summary: "HealthTech analysis of how healthcare systems connect — mapping systems, data flows and interoperability across a healthcare IT ecosystem.",
      skills: ["Systems Analysis", "Interoperability", "Healthcare Technology", "Data Flow Analysis"],
      tools: [], role: "", methodology: "", dataSource: "",
      caseStudy: { problem: "", objective: "", approach: "", analysis: [], findings: [], recommendations: [], outcome: "", impact: "" },
      links: { document: "", github: "", dashboard: "" }
    },
    {
      id: "digital-patient-consent",
      title: "Digital Patient Consent & Information Governance Transformation",
      category: "Information Governance",
      context: "10Alytics Healthcare Business Analysis Program",
      image: "assets/images/project-05.svg",
      summary: "Information governance case study on digitising patient consent, analysing GDPR and compliance requirements for a digital consent process.",
      skills: ["GDPR", "Compliance", "Digital Transformation", "Requirements Analysis"],
      tools: [], role: "", methodology: "", dataSource: "",
      caseStudy: { problem: "", objective: "", approach: "", analysis: [], findings: [], recommendations: [], outcome: "", impact: "" },
      links: { document: "", github: "", dashboard: "" }
    },
    {
      id: "change-management-adoption",
      title: "Healthcare Change Management & Staff Adoption Programme",
      category: "Change Management",
      context: "10Alytics Healthcare Business Analysis Program",
      image: "assets/images/project-06.svg",
      summary: "Change management case study on staff adoption of new healthcare technology — stakeholder engagement, communication planning and benefits realisation.",
      skills: ["Stakeholder Engagement", "Change Management", "Benefits Realisation", "Communication Planning"],
      tools: [], role: "", methodology: "", dataSource: "",
      caseStudy: { problem: "", objective: "", approach: "", analysis: [], findings: [], recommendations: [], outcome: "", impact: "" },
      links: { document: "", github: "", dashboard: "" }
    }
  ],

  /* --------------------------------------------------- DOWNLOADABLE ARTEFACTS
     Put each PDF in assets/documents/artefacts/ and write its path in "file".
     While "file" is "", the card shows "Coming soon" instead of a button. */
  artefactsProject: "Northlake Community Hospital – Specimen Tracking",
  artefacts: [
    { title: "Stakeholder Register", text: "Who is affected, their interests, influence and engagement approach.", file: "assets/documents/artefacts/01-Stakeholder-Register.pdf" },
    { title: "Power-Interest Matrix", text: "Stakeholders mapped by power and interest to plan engagement.", file: "assets/documents/artefacts/02-Power-Interest-Matrix.pdf" },
    { title: "AS-IS Process Map", text: "The current specimen identification and tracking process.", file: "assets/documents/artefacts/03-AS-IS-Process-Map.pdf" },
    { title: "TO-BE Process Map", text: "The proposed future-state process.", file: "assets/documents/artefacts/04-TO-BE-Process-Map.pdf" },
    { title: "Business Case", text: "The case for change: options, benefits, costs and risks.", file: "assets/documents/artefacts/05-Business-Case.pdf" },
    { title: "SDLC Overview", text: "How the solution moves from requirements to delivery.", file: "assets/documents/artefacts/06-SDLC-Overview.pdf" }
  ],

  /* ---------------------------------------------- HOW I SOLVE PROBLEMS (5Q) */
  approach: [
    { step: "Clarify", text: "Understand the real problem." },
    { step: "Understand", text: "Identify stakeholders and needs." },
    { step: "Explore", text: "Investigate root causes and options." },
    { step: "Assess", text: "Evaluate benefits, risks, and feasibility." },
    { step: "Recommend", text: "Recommend evidence-based solutions." }
  ],

  /* ------------------------------------------- CERTIFICATIONS & LEARNING */
  education: [
    { title: "Data Science and Business Analytics", issuer: "University of Texas at Austin", date: "Nov 2022" }
  ],
  learning: [
    {
      group: "Healthcare Business Analysis",
      items: [
        { title: "10Alytics Healthcare Business Analysis Program", note: "" }, // TODO: "In progress" or "Completed"
        { title: "Healthcare Business Analysis Lifecycle", note: "" },
        { title: "Healthcare Systems and Digital Health Technology", note: "" },
        { title: "Requirements Engineering for Healthcare Systems", note: "" },
        { title: "Healthcare Process Mapping and Optimisation", note: "" },
        { title: "Stakeholder Management in Healthcare Projects", note: "" },
        { title: "Data-Driven Healthcare Problem Solving", note: "" }
      ]
    },
    {
      group: "Information Governance",
      items: [
        { title: "NHS Information Governance Training", note: "" },
        { title: "Data Protection Training", note: "" }
      ]
    },
    {
      group: "Healthcare",
      items: [
        { title: "CACHE Level 3 Award in Health and Social Care (RQF)", note: "" },
        { title: "Diploma of Counselling and Psychology", note: "" },
        { title: "Cognitive Behavioural Therapy Diploma", note: "" }
      ]
    },
    {
      group: "Digital",
      items: [
        { title: "ECDL Level 1 and 2", note: "" }
      ]
    }
  ],
  roadmap: [
    "BCS Foundation Certificate in Business Analysis",
    "ECBA (IIBA)",
    "Agile Business Analyst",
    "Power BI Certification"
  ]
};

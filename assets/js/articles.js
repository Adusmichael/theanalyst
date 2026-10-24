/* ==========================================================================
   INSIGHTS & THOUGHT LEADERSHIP — ARTICLES
   --------------------------------------------------------------------------
   Each article appears as a card on the home page and opens at:
     insights/article.html?id=THE-ID
   Body format:
     "Plain text"                -> a paragraph
     { h: "Heading" }            -> a sub-heading
     { ul: ["item", "item"] }    -> a bullet list
     { quote: "text" }           -> a highlighted pull-quote
   date: e.g. "Oct 2026" (leave "" to hide)
   linkedin: link to the matching LinkedIn post (leave "" to hide)
   NOTE: These are first drafts. Review and edit each one so it says
   exactly what you think before you publish.
   ========================================================================== */

window.portfolioArticles = [
  {
    "id": "what-does-a-healthcare-ba-do",
    "category": "Healthcare Business Analysis",
    "title": "What Does a Healthcare Business Analyst Do?",
    "excerpt": "The role sits between clinical reality and the systems meant to support it. Here is what the work actually involves.",
    "date": "",
    "linkedin": "",
    "body": [
      "When people hear \"business analyst\", they often picture someone in a corporate office building spreadsheets. In healthcare, the role looks different. A healthcare business analyst sits between the people who deliver care and the processes, systems and data that are supposed to support them.",
      "At its simplest, the job is to make sure that when an organisation changes something — a system, a pathway, a form, a way of working — the change solves the right problem and works for the people who have to live with it.",
      {
        "h": "Understanding the problem before the solution"
      },
      "Healthcare is full of proposed solutions. A new system will fix the delays. A new form will fix the errors. A business analyst slows that conversation down long enough to ask what the problem really is, who it affects, and what evidence we have. Very often the presenting problem is a symptom of something further upstream.",
      {
        "h": "Working with stakeholders who see the world differently"
      },
      "A single change in a hospital can touch clinicians, nurses, administrators, IT, information governance, finance and — most importantly — patients. Each group has different priorities, language and pressures. A big part of the role is identifying these stakeholders, understanding what each needs, and helping them reach a shared understanding.",
      {
        "h": "Mapping how work really happens"
      },
      "Policies describe how work should happen. Process mapping shows how it actually happens. Mapping the current state (AS-IS) — the hand-offs, workarounds and waiting — usually reveals where time, quality and safety are lost. From there, the analyst works with the team to design a better future state (TO-BE).",
      {
        "h": "Turning needs into clear requirements"
      },
      "Once the problem and the future state are understood, the analyst translates them into requirements that a supplier, developer or project team can act on: user stories, acceptance criteria, process rules and data needs. In healthcare, these must also respect clinical safety, confidentiality and regulation.",
      {
        "h": "Supporting delivery and adoption"
      },
      "The work does not stop at a document. Analysts support testing (including user acceptance testing), help plan for change, and check whether the expected benefits are being realised. A system that is delivered but not adopted has not solved anything.",
      {
        "h": "Why healthcare experience matters"
      },
      "Coming from a frontline background, I have seen how a poorly designed process lands on a busy ward or in a crisis assessment. That perspective makes it easier to ask the right questions, earn trust with clinical colleagues, and keep the patient at the centre of the conversation.",
      {
        "quote": "The best healthcare business analysis makes the right thing the easy thing — for staff and for patients."
      },
      {
        "h": "What a typical week can involve"
      },
      {
        "ul": [
          "Running a short workshop with a ward team to walk through how referrals arrive and where they get stuck.",
          "Drafting user stories and acceptance criteria for a change to a booking or registration screen.",
          "Checking a proposed data flow with the information governance lead.",
          "Reviewing test scripts with clinical colleagues before user acceptance testing.",
          "Updating the stakeholder register after a sponsor changes or a new team is affected."
        ]
      },
      "None of these tasks is glamorous on its own. Together, they are what keeps a change connected to the people it is meant to help.",
      "If I had to sum up the role in one sentence: a healthcare business analyst helps organisations change the right things, in the right way, for the people who depend on them."
    ]
  },
  {
    "id": "5q-framework",
    "category": "Healthcare Business Analysis",
    "title": "The 5Q Framework: How Business Analysts Investigate Problems",
    "excerpt": "Clarify, Understand, Explore, Assess, Recommend — the five questions I use to move from a vague complaint to an evidence-based recommendation.",
    "date": "",
    "linkedin": "",
    "body": [
      "Most problems arrive in a messy state. \"The booking system is rubbish.\" \"Results keep going missing.\" \"Staff won't use the new form.\" A business analyst's first job is to turn that kind of statement into something that can be investigated and solved.",
      "I use a simple structure I call the 5Q Framework. Each stage answers one question before moving on to the next.",
      {
        "h": "1. Clarify — what is the real problem?"
      },
      "Before anything else, I want a clear problem statement. What is happening, where, to whom, and how do we know? I separate the problem from the proposed solution, because they are often bundled together. \"We need a new system\" is a solution; \"appointments are being double-booked\" is a problem.",
      {
        "h": "2. Understand — who is involved and what do they need?"
      },
      "Next comes the people. Who is affected? Who has influence? Who will have to change how they work? Stakeholder analysis at this stage prevents the classic failure of designing something that works for one group and frustrates another.",
      {
        "h": "3. Explore — why is it happening, and what are the options?"
      },
      "This is where process mapping and root cause analysis come in. I map the current process, look for hand-offs, delays, duplication and workarounds, and keep asking \"why?\" until I reach causes we can act on. Then I explore options — not just one favoured solution, but several, including doing nothing.",
      {
        "h": "4. Assess — which option makes the most sense?"
      },
      "Each option is assessed for benefits, risks, cost, feasibility and impact on people and patients. In healthcare, that includes clinical safety and information governance. This stage is where a business case starts to take shape.",
      {
        "h": "5. Recommend — what should we do, and why?"
      },
      "Finally, I make an evidence-based recommendation that stakeholders can understand and challenge. A good recommendation shows its working: the problem, the evidence, the options considered and the reasons for the choice.",
      {
        "h": "Why a framework helps"
      },
      {
        "ul": [
          "It stops me jumping to solutions too early.",
          "It gives stakeholders a clear picture of where we are in the investigation.",
          "It makes my reasoning visible and easy to challenge.",
          "It works for a small process fix or a large transformation."
        ]
      },
      {
        "quote": "A clear problem is half solved. The other half is evidence."
      },
      {
        "h": "The framework in a real conversation"
      },
      "Imagine a manager says: \"We need a new referral system.\" Using the 5Q Framework, my first response is not to look at products. I ask what is going wrong today (Clarify), who sends, receives and manages referrals (Understand), and where in the current process referrals are delayed or lost (Explore). Only then do we compare options — process changes, configuration of existing systems, or a new product — against benefits, risks and cost (Assess), before agreeing a recommendation the team can stand behind (Recommend).",
      "Sometimes the answer is still a new system. Often, it is a smaller and cheaper change that fixes the real cause. Either way, the decision is made on evidence rather than assumption, and everyone involved can see how it was reached.",
      "The 5Q Framework is not complicated, and that is the point. Structure creates clarity, and clarity is what busy healthcare teams need most from a business analyst."
    ]
  },
  {
    "id": "stakeholder-analysis-healthcare",
    "category": "Healthcare Business Analysis",
    "title": "Stakeholder Analysis in Healthcare Projects",
    "excerpt": "In healthcare, the people affected by a change rarely sit in the same room. Stakeholder analysis is how you make sure none of them are forgotten.",
    "date": "",
    "linkedin": "",
    "body": [
      "Healthcare projects rarely fail because of technology alone. They fail because the right people were not involved, were involved too late, or were never really listened to. Stakeholder analysis is the discipline that helps prevent this.",
      {
        "h": "Who counts as a stakeholder?"
      },
      "Anyone who is affected by the change, can influence it, or has knowledge we need. In a hospital project that might include:",
      {
        "ul": [
          "Patients, carers and service users",
          "Clinicians, nurses and allied health professionals",
          "Ward clerks, receptionists and administrative teams",
          "Laboratory, pharmacy and diagnostic services",
          "IT, digital and clinical systems teams",
          "Information governance and clinical safety leads",
          "Managers, finance and executive sponsors",
          "External suppliers and partner organisations"
        ]
      },
      "Some stakeholders are obvious. Others only appear once you map the process end to end — the porter who moves specimens, the night-shift team who use the system differently, the community team who receive the discharge letter.",
      {
        "h": "Building a stakeholder register"
      },
      "A stakeholder register records who each stakeholder is, their role, their interest in the change, their level of influence, their likely attitude and how we plan to engage them. It is a living document, updated as the project moves forward.",
      {
        "h": "Using a power-interest matrix"
      },
      "A power-interest matrix places stakeholders into four groups: those to manage closely (high power, high interest), keep satisfied (high power, lower interest), keep informed (lower power, high interest) and monitor. It is a simple tool, but it forces useful conversations about where to spend limited time.",
      {
        "h": "What makes healthcare different"
      },
      "Healthcare stakeholders work under real pressure. Clinicians may not have time for long workshops. Frontline staff may have lived through previous changes that did not deliver what was promised. Patients may not be represented at all unless someone makes the effort. Good stakeholder analysis respects these realities: shorter, well-prepared sessions; going to where people work; and making sure the patient voice is heard.",
      {
        "quote": "The stakeholder you forget at the start is the one who stops the project at the end."
      },
      {
        "h": "Stakeholder analysis is ongoing"
      },
      "Influence and attitudes change. A sceptical consultant can become a champion once they see their concerns addressed. A supportive sponsor can move on. Revisiting the analysis at each stage keeps engagement honest and targeted.",
      {
        "h": "Questions I ask every stakeholder"
      },
      {
        "ul": [
          "What does a good outcome look like for you and your team?",
          "What worries you most about this change?",
          "What do you currently rely on that we must not break?",
          "Who else should I be speaking to?",
          "How do you prefer to be kept informed?"
        ]
      },
      "These questions are simple, but the answers shape everything that follows: the requirements, the risks we track, and the communication plan. The question \"Who else should I be speaking to?\" in particular has saved more projects than any template.",
      "A final point: stakeholder analysis is not a box-ticking exercise to complete before the real work begins. It is the real work. Every requirement, risk and design decision ultimately traces back to the people who raised it, need it, or will live with it.",
      "In my experience working in multidisciplinary teams, the most valuable thing a business analyst can do early is listen widely. The register and the matrix are tools; the real outcome is trust."
    ]
  },
  {
    "id": "as-is-vs-to-be",
    "category": "Healthcare Business Analysis",
    "title": "AS-IS vs TO-BE: Why Process Understanding Matters",
    "excerpt": "You cannot improve a process you have not understood. Why mapping the current state comes before designing the future one.",
    "date": "",
    "linkedin": "",
    "body": [
      "One of the most common mistakes in change projects is designing the future before understanding the present. AS-IS and TO-BE analysis exists to prevent that.",
      {
        "h": "AS-IS: how work happens today"
      },
      "The AS-IS process describes the current state — not how the policy says work should happen, but how it actually does. That includes the workarounds, the phone calls, the sticky notes, the paper forms that \"temporarily\" became permanent.",
      "To build an accurate AS-IS map, I talk to the people doing the work, observe where possible, and walk the process step by step. I look for:",
      {
        "ul": [
          "Hand-offs between people, teams or systems",
          "Waiting and delays",
          "Duplicate data entry",
          "Manual checks that exist because a system cannot be trusted",
          "Points where errors or safety risks can occur",
          "Steps that add no value for the patient"
        ]
      },
      {
        "h": "TO-BE: how work should happen"
      },
      "The TO-BE process describes the desired future state. It should solve the problems identified in the AS-IS, align with the project objectives, and be realistic for the people who will work with it. A TO-BE map is not a wish list; it is a design that can be tested with stakeholders.",
      {
        "h": "The gap between them"
      },
      "Comparing AS-IS and TO-BE reveals the gap — the changes needed in people, process, technology and data to move from one to the other. That gap becomes the basis for requirements, the business case and the change plan.",
      {
        "h": "A healthcare example"
      },
      "Consider specimen handling. The AS-IS might show a sample labelled by hand at the bedside, logged on paper, transported in batches and manually registered on arrival at the laboratory. Each hand-off is a chance for misidentification or delay. A TO-BE design might introduce positive patient identification and electronic tracking so that every step is recorded. The value of the AS-IS map is that it shows exactly where the risks sit — so the TO-BE can target them.",
      {
        "quote": "The AS-IS map is where the real problems become visible. The TO-BE map is where the solution becomes testable."
      },
      {
        "h": "Why it matters"
      },
      {
        "h": "Tips for mapping well"
      },
      {
        "ul": [
          "Map one clear scenario first — the common case — before adding exceptions.",
          "Use the language staff use, not system or project jargon.",
          "Show who does each step, not just what happens, using swimlanes.",
          "Mark pain points directly on the map so they are visible in discussion.",
          "Validate the map with the people who do the work before using it to design anything."
        ]
      },
      "A simple map that staff recognise is far more valuable than a detailed one nobody trusts. Notations such as BPMN are useful for precision, but the first goal is shared understanding.",
      "In my own training projects, the AS-IS map has consistently been the moment the conversation changes. Once people can see their process laid out end to end, the discussion shifts from opinions about what is wrong to shared evidence about where the problems sit.",
      "Skipping the AS-IS leads to solutions that automate a broken process, or that ignore the workarounds staff rely on. Taking the time to understand the current state builds credibility with frontline teams, because they can see their reality reflected back to them. That credibility makes the future state far easier to adopt."
    ]
  },
  {
    "id": "gap-analysis-healthcare",
    "category": "Healthcare Business Analysis",
    "title": "Gap Analysis Explained with Healthcare Examples",
    "excerpt": "Where are we now, where do we need to be, and what is missing? A practical guide to gap analysis in a healthcare setting.",
    "date": "",
    "linkedin": "",
    "body": [
      "Gap analysis answers three simple questions: where are we now, where do we need to be, and what stands between the two? It is one of the most practical tools a business analyst has, and it fits naturally after AS-IS and TO-BE mapping.",
      {
        "h": "The four dimensions I check"
      },
      "I find it useful to look at gaps across four dimensions:",
      {
        "ul": [
          "People — skills, roles, capacity and confidence",
          "Process — steps, hand-offs, rules and responsibilities",
          "Technology — systems, functionality and integration",
          "Data & governance — data quality, access, consent and compliance"
        ]
      },
      {
        "h": "Example 1: outpatient registration"
      },
      "Current state: patients complete paper registration forms, which reception staff then re-type into the system. Desired state: patients register digitally before arrival, with details validated automatically. Gaps might include a patient-facing digital channel, integration with the patient administration system, a validation process for incomplete submissions, a non-digital route for patients who need it, and staff training on the new workflow.",
      {
        "h": "Example 2: patient consent"
      },
      "Current state: consent recorded on paper and scanned, sometimes days later. Desired state: consent captured digitally at the point of care and immediately available to the care team. Gaps might include a digital consent tool, governance approval for electronic signatures, an audit trail, accessibility for patients with additional needs, and clarity on how consent is withdrawn.",
      {
        "h": "Making gaps actionable"
      },
      "A list of gaps is only useful if it leads somewhere. For each gap I try to record:",
      {
        "ul": [
          "What the gap is and evidence for it",
          "Its impact on patients, staff or the organisation",
          "Its priority",
          "Options to close it",
          "Who owns it"
        ]
      },
      "Those gaps then feed directly into requirements, the business case and the implementation plan.",
      {
        "quote": "A gap analysis turns 'this needs to be better' into a list of specific things that must change."
      },
      {
        "h": "Common pitfalls"
      },
      "The biggest pitfall is focusing only on technology gaps. A new system will not close a gap in training, ownership or trust. The second is defining the future state so vaguely that no gaps can be measured. A precise TO-BE makes for a precise gap analysis.",
      {
        "h": "A simple gap analysis template"
      },
      "For smaller pieces of work, I use a straightforward table with one row per gap and these columns: current state, desired state, gap description, dimension (people, process, technology or data), impact, priority, proposed action and owner. It fits on a page, it is easy for stakeholders to review, and it creates a clear bridge between analysis and delivery.",
      "For larger programmes, the same structure can be grouped by workstream or by stage of the patient journey. The principle stays the same: every gap should be specific, evidenced, prioritised and owned — otherwise it is just a list of frustrations.",
      "Finally, revisit the gap analysis as delivery progresses. Some gaps close faster than expected, others turn out to be bigger, and new ones appear once people start using the new process. Treating it as a living document keeps the work honest and focused on outcomes.",
      "In healthcare, where change competes with daily clinical pressure, a clear and prioritised gap analysis helps leaders decide where to focus first."
    ]
  },
  {
    "id": "healthcare-it-bigger-than-ehr",
    "category": "Healthcare IT",
    "title": "Healthcare IT Is Bigger Than EHR",
    "excerpt": "Electronic health records get the headlines, but they are one part of a much larger ecosystem that keeps care running.",
    "date": "",
    "linkedin": "",
    "body": [
      "When people talk about digital health, the conversation often begins and ends with the electronic health record (EHR). The EHR matters enormously, but it is only one part of a much larger healthcare IT ecosystem.",
      {
        "h": "The systems behind a single patient journey"
      },
      "Follow one patient through a hospital and you will touch many systems:",
      {
        "ul": [
          "A patient administration system for registration, appointments and admissions",
          "The electronic patient record for clinical notes and care plans",
          "Laboratory and radiology information systems for tests and imaging",
          "Electronic prescribing and pharmacy systems",
          "Bed management and patient flow tools",
          "Referral, discharge and correspondence systems",
          "Patient-facing apps and portals",
          "Reporting and data warehouse platforms"
        ]
      },
      "Behind those sit identity and access management, networks, devices, cyber security and the integration engines that move data between systems.",
      {
        "h": "Where the problems really live"
      },
      "Many of the issues staff experience are not inside a single system — they live between systems. A result that does not flow back to the requesting clinician. A discharge summary that has to be re-typed. A patient's details that differ across two records. These are interoperability and process problems, and they are exactly where business analysis adds value.",
      {
        "h": "Why this matters for business analysts"
      },
      "If you only understand the EHR, you will only see part of the picture. A healthcare business analyst needs to understand how systems connect, what data flows between them, who owns each part, and how a change in one system ripples into others.",
      {
        "quote": "In healthcare IT, the hardest problems are often in the gaps between systems, not inside them."
      },
      {
        "h": "Data and governance run through everything"
      },
      "Every system holds patient data, which means information governance, confidentiality and data quality apply across the whole ecosystem. Understanding where data is created, how it moves and who can access it is as important as understanding the features of any single product.",
      {
        "h": "Thinking in ecosystems"
      },
      "When I analyse a healthcare IT problem, I start by mapping the ecosystem around it: the systems involved, the data flows, the people and the hand-offs. That broader view helps avoid fixing one system while creating a new problem elsewhere.",
      {
        "h": "A practical way to start mapping an ecosystem"
      },
      {
        "ul": [
          "Pick one patient journey, such as an outpatient appointment from referral to follow-up.",
          "List every system touched along the way and who uses it.",
          "Draw the data that moves between systems — and where it is re-typed by hand.",
          "Note who owns and supports each system.",
          "Mark where problems are reported most often."
        ]
      },
      "This exercise rarely takes long, yet it consistently reveals where the real friction sits — and which teams need to be involved in fixing it.",
      "For anyone moving into healthcare IT, this is also a useful learning approach. Rather than trying to understand every product, learn how a few common journeys flow across systems. That knowledge transfers between organisations far better than familiarity with any single vendor's screens.",
      "The EHR is the centre of gravity for clinical information, but healthcare IT is bigger. Seeing the whole ecosystem is what allows us to improve the whole journey."
    ]
  },
  {
    "id": "four-pillars-healthcare-it",
    "category": "Healthcare IT",
    "title": "The 4 Pillars of Healthcare IT",
    "excerpt": "A simple way to make sense of a complex landscape: clinical systems, operational systems, data and analytics, and the infrastructure that connects them.",
    "date": "",
    "linkedin": "",
    "body": [
      "Healthcare IT can feel overwhelming when you are new to it. There are hundreds of products, acronyms and standards. I find it helpful to group the landscape into four pillars. Each one supports care in a different way, and each one creates different kinds of business analysis work.",
      {
        "h": "Pillar 1: Clinical systems"
      },
      "These are the systems used directly in the delivery of care: electronic patient records, electronic prescribing, clinical decision support, and diagnostic systems for pathology and imaging. Business analysis here focuses on clinical workflows, patient safety and usability for busy clinicians.",
      {
        "h": "Pillar 2: Operational and administrative systems"
      },
      "These keep the organisation running: patient administration, scheduling and booking, bed management, workforce and rostering, finance and procurement. Problems here often show up as delays, duplicate work and poor patient experience. Process mapping and workflow optimisation are central.",
      {
        "h": "Pillar 3: Data and analytics"
      },
      "Data from clinical and operational systems feeds reporting, performance monitoring, population health and research. This pillar depends on data quality at source, clear definitions and good governance. Business analysts help define reporting requirements, KPIs and the data needed to answer real questions.",
      {
        "h": "Pillar 4: Infrastructure, integration and security"
      },
      "Underneath everything sit the networks, devices, identity and access management, cyber security and integration that connect systems together. Interoperability standards allow information to move safely between systems and organisations. This pillar is often invisible to staff — until it fails.",
      {
        "h": "Governance runs across all four"
      },
      "Information governance, clinical safety and regulatory compliance are not a separate pillar. They run across all four, shaping how every system is designed, implemented and used.",
      {
        "quote": "Every healthcare IT problem sits in at least one pillar — and the difficult ones sit across several."
      },
      {
        "h": "Using the pillars in practice"
      },
      "When I look at a new problem, I ask which pillars it touches. A missed test result might involve a clinical system, an integration failure and a process gap at the same time. Naming the pillars helps make sure the right people are in the room and that the solution addresses the whole problem, not just the most visible part.",
      {
        "h": "What each pillar means for a business analyst"
      },
      {
        "ul": [
          "Clinical systems — work closely with clinicians, prioritise safety and usability, and involve clinical safety leads early.",
          "Operational systems — focus on process efficiency, hand-offs and patient experience; process maps are your strongest tool.",
          "Data and analytics — agree definitions before building reports, and trace data back to where it is captured.",
          "Infrastructure and integration — understand dependencies and interfaces, and make sure non-functional requirements such as availability and security are captured."
        ]
      },
      "Thinking in pillars also helps when building a career in healthcare IT: each pillar has its own teams, vocabulary and opportunities, and understanding all four makes you a more effective analyst in any of them.",
      "Whatever model you use, the aim is the same: make the landscape understandable enough that you can ask good questions. In healthcare IT, good questions asked early save far more time than clever answers found late.",
      "This is a simplification, of course — but simple models are what make complex environments navigable."
    ]
  },
  {
    "id": "healthcare-it-career-paths",
    "category": "Healthcare IT",
    "title": "Healthcare IT Career Paths for Healthcare Professionals",
    "excerpt": "Clinical and care experience is a genuine advantage in digital health. Here are routes that build on it.",
    "date": "",
    "linkedin": "",
    "body": [
      "Many healthcare professionals assume a move into healthcare IT means starting from zero. It does not. Experience on the frontline — understanding patients, pathways, documentation and multidisciplinary working — is exactly what many digital health teams are missing.",
      {
        "h": "Why your background matters"
      },
      "Healthcare professionals already understand how care is delivered, where processes break down, and what it feels like when a system gets in the way. They speak the language of clinical teams and can earn trust quickly. That combination is hard to teach.",
      {
        "h": "Routes worth exploring"
      },
      {
        "ul": [
          "Healthcare Business Analyst — understanding problems, mapping processes and defining requirements for change.",
          "Clinical Systems Trainer — helping staff learn and adopt new systems.",
          "Clinical Systems or Application Support — maintaining and improving systems in day-to-day use.",
          "Digital Transformation or Change roles — planning and supporting the adoption of new ways of working.",
          "Data and Information Analyst — turning healthcare data into reports and insights.",
          "Information Governance roles — protecting patient information and ensuring compliance.",
          "Clinical Safety or Digital Clinical roles — for registered clinicians, ensuring systems are safe to use.",
          "Product roles in HealthTech companies — representing user needs in product development."
        ]
      },
      {
        "h": "Skills to build"
      },
      "Whichever route you choose, a few foundations travel well: process mapping, requirements writing, stakeholder engagement, data literacy (Excel is a strong start), an understanding of information governance, and familiarity with Agile ways of working. Structured training and recognised certifications help translate frontline experience into language employers recognise.",
      {
        "h": "Translate, do not discard, your experience"
      },
      "The key is reframing what you already do. Maintaining accurate care records is documentation and data quality. Escalating issues is risk identification. Working with nurses, social workers and families is stakeholder management. Coordinating follow-up care is process and pathway management.",
      {
        "quote": "You are not leaving healthcare. You are bringing healthcare with you."
      },
      {
        "h": "Build evidence"
      },
      "Employers want to see what you can do. A portfolio of case studies, process maps and requirements documents — even from training projects — shows how you think. Writing about what you are learning, as I do here, builds visibility and clarifies your own understanding.",
      {
        "h": "A practical first 90 days"
      },
      {
        "ul": [
          "Choose one target route rather than trying to prepare for all of them.",
          "Learn the core business analysis toolkit: process mapping, requirements, stakeholder analysis and gap analysis.",
          "Complete two or three portfolio case studies based on healthcare scenarios.",
          "Rewrite your CV so your healthcare experience is described in the language of the target role.",
          "Connect with people already doing the job and ask about their day-to-day work.",
          "Share what you learn publicly — it builds both confidence and visibility."
        ]
      },
      "Progress compounds. A small portfolio and a clear story about why you are moving often matter more than a long list of courses.",
      "Above all, be patient with yourself. Moving into a new field while working in demanding frontline roles is hard. Consistent, visible progress — one case study, one article, one conversation at a time — adds up faster than it feels at the beginning.",
      "The move is very achievable. It takes structure, consistency and a willingness to show your work."
    ]
  },
  {
    "id": "staying-relevant-age-of-ai",
    "category": "Future BA",
    "title": "Staying Relevant in the Age of AI",
    "excerpt": "AI can draft documents and summarise meetings. It cannot build trust with a sceptical ward manager. Where the BA's value is moving.",
    "date": "",
    "linkedin": "",
    "body": [
      "AI tools can now draft user stories, summarise workshop notes, generate process diagrams and analyse data in seconds. It is reasonable for business analysts to ask what this means for the profession.",
      "My view: AI changes how we work, but it raises the value of the parts of the role that are most human.",
      {
        "h": "What AI does well"
      },
      {
        "ul": [
          "Producing first drafts of documents and requirements",
          "Summarising large volumes of text",
          "Suggesting structures, questions and checklists",
          "Speeding up routine analysis"
        ]
      },
      "Used well, these capabilities free analysts from repetitive work and give more time for thinking.",
      {
        "h": "What AI cannot do for you"
      },
      "AI does not know which stakeholder is quietly blocking a project. It does not see the workaround a nurse uses because the system does not fit the shift pattern. It cannot sit with a frightened team going through change and build trust. It does not carry accountability for a recommendation that affects patient safety.",
      "Those are the parts of business analysis that matter most in healthcare: judgement, context, relationships and responsibility.",
      {
        "h": "How I am adapting"
      },
      {
        "ul": [
          "Using AI as an assistant for drafting, never as the final author.",
          "Checking everything — AI can be confidently wrong.",
          "Never putting patient-identifiable or confidential information into tools that are not approved for it.",
          "Investing more time in facilitation, problem framing and stakeholder relationships.",
          "Learning enough about AI to analyse AI-enabled solutions properly."
        ]
      },
      {
        "quote": "AI can generate requirements. Only an analyst can make sure they are the right requirements."
      },
      {
        "h": "A new area of work"
      },
      "AI also creates new work for business analysts. Organisations need help deciding where AI is genuinely useful, defining requirements for AI-enabled systems, assessing risks, and designing processes where people and AI work together safely. That is business analysis.",
      {
        "h": "Skills I think will matter more, not less"
      },
      {
        "ul": [
          "Problem framing — deciding what question is worth answering in the first place.",
          "Facilitation — helping groups with different priorities reach agreement.",
          "Critical evaluation — spotting when an output is plausible but wrong.",
          "Domain knowledge — understanding healthcare workflows, risks and regulation.",
          "Ethics and governance — knowing where the boundaries are and why they exist.",
          "Communication — explaining complex trade-offs simply to decision-makers."
        ]
      },
      "None of these are new to business analysis. What is new is that they are becoming the main part of the job rather than the part we get to after the documentation is done. That is a change worth welcoming.",
      "The analysts who thrive will be those who treat AI as a capable assistant while keeping ownership of the thinking, the relationships and the responsibility.",
      "For me, this means continuing to strengthen the fundamentals while learning the new tools — not choosing one over the other.",
      "Staying relevant is not about competing with AI. It is about being the person who knows what problem is worth solving, and how to solve it responsibly."
    ]
  },
  {
    "id": "ai-risks-regulated-sectors",
    "category": "Future BA",
    "title": "AI Risks in Regulated Sectors",
    "excerpt": "In healthcare, an AI error is not just a bug. What business analysts should look for when AI enters a regulated environment.",
    "date": "",
    "linkedin": "",
    "body": [
      "AI promises a lot for healthcare: faster administration, better triage, earlier detection. But healthcare is a regulated sector for good reason. When AI is introduced, the risks are not just technical — they affect patients, staff and public trust.",
      "Business analysts are well placed to surface these risks early, because we sit where requirements, processes and people meet.",
      {
        "h": "Key risks to examine"
      },
      {
        "ul": [
          "Data protection — is personal and health data processed lawfully, minimised and kept secure?",
          "Bias — was the model trained on data that represents the population it will serve?",
          "Accuracy and reliability — how often is it wrong, and what happens when it is?",
          "Transparency — can staff and patients understand how an output was produced?",
          "Accountability — who is responsible for a decision informed by AI?",
          "Over-reliance — will staff stop questioning outputs over time?",
          "Clinical safety — could the tool contribute to harm if it fails or is misused?"
        ]
      },
      {
        "h": "Questions I would ask in requirements"
      },
      {
        "ul": [
          "What decision does the AI support, and who makes the final call?",
          "What data does it use, where does it come from, and who can see it?",
          "How will performance be monitored after go-live?",
          "What is the fallback process when the tool is unavailable or wrong?",
          "How will staff be trained to use it critically?",
          "How will patients be informed?"
        ]
      },
      {
        "h": "Governance is a requirement, not an afterthought"
      },
      "In the UK, organisations already work within data protection law, information governance standards and clinical safety processes for health IT. AI does not replace these obligations — it adds to them. Treating governance as a set of requirements from the start is far cheaper than discovering gaps after deployment.",
      {
        "quote": "In regulated sectors, 'it works in the demo' is never enough."
      },
      {
        "h": "The human in the loop"
      },
      "Many safe uses of AI keep a human in control of the final decision. But a human in the loop only helps if the process gives them the time, information and confidence to challenge the tool. Designing that process is business analysis work.",
      {
        "h": "A short risk checklist for AI requirements"
      },
      "When I review an AI-enabled proposal, I find it useful to confirm that the following have been considered and documented: the intended use and its limits; the data sources and their lawful basis; known limitations of the model; how outputs are presented to users; monitoring and incident reporting after go-live; the fallback process; training for staff; and who signs off on clinical and information governance risk.",
      "If any of these are missing, that is not necessarily a reason to stop — but it is a gap that needs an owner and a plan before the solution goes anywhere near patients.",
      "This is not about being against innovation. Careful analysis is what allows innovation to be adopted with confidence. A well-governed AI tool that staff trust will deliver far more value than an impressive one that nobody is comfortable using.",
      "AI can bring real benefits to healthcare. The business analyst's role is to make sure those benefits are delivered safely, fairly and in a way people can trust."
    ]
  },
  {
    "id": "agentic-ai-future-ba",
    "category": "Future BA",
    "title": "Agentic AI and the Future Business Analyst",
    "excerpt": "AI is moving from answering questions to taking actions. That shift turns process design into a frontline concern.",
    "date": "",
    "linkedin": "",
    "body": [
      "Most people's experience of AI is conversational: you ask a question and get an answer. Agentic AI goes further. An AI agent can plan a sequence of steps, use tools and systems, and carry out tasks with a degree of independence — booking, updating, sending, checking.",
      "For business analysts, this is significant. When AI starts taking actions inside a process, the design of that process matters more than ever.",
      {
        "h": "Why this is a business analysis problem"
      },
      "An agent is only as good as the process, rules and data it works with. If the process is unclear, the agent will be unclear. If the data is poor, its actions will be poor. If responsibilities are not defined, no one will be sure who is accountable when something goes wrong.",
      "These are exactly the questions business analysts already ask.",
      {
        "h": "New questions for the analyst"
      },
      {
        "ul": [
          "Which steps can an agent safely perform, and which must remain with a person?",
          "What permissions should the agent have, and what must it never be able to do?",
          "Where are the approval points?",
          "How are the agent's actions recorded and audited?",
          "How do we detect and recover from mistakes?",
          "How do staff stay in control and keep their skills?"
        ]
      },
      {
        "h": "Process mapping becomes even more important"
      },
      "To decide where an agent fits, you need a clear AS-IS and a carefully designed TO-BE. Agentic AI makes hidden steps and informal workarounds visible — because an agent cannot rely on tacit knowledge the way a person can.",
      {
        "quote": "Before you automate a process with an agent, make sure you understand the process well enough to explain it to a new colleague."
      },
      {
        "h": "In healthcare, caution is a strength"
      },
      "Healthcare should adopt agentic AI carefully: starting with lower-risk administrative tasks, keeping humans in control of clinical decisions, and building governance in from the start. Analysts who understand both healthcare workflows and these technologies will be valuable in shaping that adoption.",
      {
        "h": "The future analyst"
      },
      {
        "h": "Where to start safely"
      },
      "For organisations exploring agents, I would look first at well-defined, repetitive administrative tasks with clear rules and low clinical risk: gathering information for a referral, preparing a draft letter for review, checking that a form is complete, or reconciling data between two systems. In each case, a person reviews the outcome before it has an effect.",
      "Starting there builds understanding of how agents behave in real workflows, what governance is needed and how staff respond — evidence that should inform any decision to go further.",
      "For business analysts, the opportunity is to be in the room early — mapping processes, defining boundaries and writing requirements that make agents safe and useful, rather than discovering problems after they have been deployed.",
      "I see the future business analyst as a designer of human-AI workflows: clear on the problem, skilled with stakeholders, rigorous about rules and data, and thoughtful about risk. The fundamentals of the profession do not disappear. They become the foundation that safe automation depends on."
    ]
  },
  {
    "id": "brain-based-stakeholder-management",
    "category": "Future BA",
    "title": "Brain-Based Stakeholder Management",
    "excerpt": "Change triggers threat responses. Understanding that helps you design engagement that people can actually hear.",
    "date": "",
    "linkedin": "",
    "body": [
      "Stakeholder management is often described in terms of tools: registers, matrices, communication plans. Those tools matter. But underneath them is something more human — how people's brains respond to change.",
      "My background in mental health services and therapeutic approaches has shaped how I think about this. People do not resist change because they are difficult. Often, they resist because change feels like a threat.",
      {
        "h": "Change can feel like a threat"
      },
      "When people sense uncertainty, loss of control or unfairness, they can become defensive. In that state, it is harder to listen, reason or collaborate. A rushed announcement about a new system can trigger exactly this response — before anyone has heard the benefits.",
      {
        "h": "Five things people need during change"
      },
      "David Rock's SCARF model offers a useful lens. It describes five social needs that, when threatened, can trigger defensiveness — and, when met, support engagement:",
      {
        "ul": [
          "Certainty — clear information about what is changing, when, and what it means for them.",
          "Autonomy — a genuine voice and some control over how the change affects their work.",
          "Status — respect for their expertise and experience.",
          "Relatedness — feeling part of the change, not on the receiving end of it.",
          "Fairness — transparent decisions and consistent treatment."
        ]
      },
      {
        "h": "What this looks like in practice"
      },
      {
        "ul": [
          "Sharing what is known and being honest about what is not yet known.",
          "Involving frontline staff in mapping the AS-IS — they are the experts in it.",
          "Asking for input before decisions are made, not after.",
          "Acknowledging concerns rather than trying to argue them away.",
          "Explaining the reasons behind decisions.",
          "Following up on what you promised."
        ]
      },
      {
        "quote": "People rarely resist being heard. They resist being surprised."
      },
      {
        "h": "Why it matters in healthcare"
      },
      "Healthcare staff work under significant pressure, and many have experienced change that added work without adding value. Engagement that respects their expertise and gives them some control is far more likely to lead to adoption — and adoption is where the benefits of any change are actually realised.",
      {
        "h": "Applying it in a workshop"
      },
      "Before a workshop, I send a short note explaining the purpose, what will and will not be decided, and how input will be used — that addresses certainty and fairness. In the room, I start by asking participants to describe how the work happens today, positioning them as the experts — that respects status and autonomy. I close by summarising what I heard and what happens next, and then I follow up as promised — that builds relatedness and trust.",
      "Small habits like these change the tone of engagement. They turn stakeholders from an audience to be managed into partners in designing the change.",
      "This approach draws directly on what I learned supporting people in mental health services: people engage when they feel safe, respected and heard. The same is true in a project meeting room.",
      "Brain-based stakeholder management is not about manipulation. It is about understanding people well enough to involve them properly. That, in the end, is what good business analysis has always been about."
    ]
  }
];

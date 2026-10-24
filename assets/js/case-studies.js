/* ==========================================================================
   CASE STUDY CONTENT — one entry per project (keyed by the project "id"
   in data.js). Each entry builds the full case-study page.
   --------------------------------------------------------------------------
   Sections (leave any list empty [] to hide that section):
     summary, problem, problemStats, objectives, stakeholders, asis,
     approach, timeline, findings, tobe, fr, nfr, recommendations,
     outcomes, risks, kpis, lifecycle, deliverables, skillGroups
   Stakeholder quadrant "q": mc = Manage closely, ks = Keep satisfied,
                             ki = Keep informed,  mo = Monitor
   KPI "dir": "down" (reduce) or "up" (increase)
   Only use numbers you can evidence. Northlake figures are case-study data.
   ========================================================================== */

window.caseStudies = {

  /* ===================================================================== 1 */
  "northlake-specimen-tracking": {
    summary: "Business analysis engagement for Northlake Community Hospital to reduce specimen identification errors and strengthen patient safety. Analysis of the end-to-end specimen journey traced repeat collections, delayed results and near misses to manual labelling and verification. The recommended solution — a CAD 18,500 barcode-enabled specimen tracking pilot — introduces wristband scanning, automatic matching, exception logging and chain-of-custody tracking.",
    problem: "Northlake Community Hospital experienced repeated specimen identification issues resulting in laboratory delays, repeat specimen collections, patient complaints and near-miss patient safety incidents. The existing process relied heavily on paper requisitions, manual verification and inconsistent specimen tracking.",
    problemStats: [
      { v: "52", k: "Specimen identification exceptions" },
      { v: "23", k: "Delayed laboratory results" },
      { v: "11", k: "Repeat collections per month" },
      { v: "2", k: "Wrong-patient near misses" },
      { v: "18", k: "Patient complaints" }
    ],
    objectives: [
      "Reduce specimen identification errors.",
      "Improve patient safety.",
      "Reduce repeat specimen collections.",
      "Improve laboratory turnaround time.",
      "Create a reliable audit trail."
    ],
    stakeholders: [
      { name: "Laboratory Reception Staff", interest: "Reduce manual verification", power: "High", int: "High", q: "mc" },
      { name: "Nurses & Phlebotomists", interest: "Faster workflow, fewer errors", power: "Medium", int: "High", q: "mc" },
      { name: "Quality & Patient Safety Team", interest: "Reduced patient safety risks", power: "High", int: "High", q: "mc" },
      { name: "Hospital Management", interest: "Return on investment", power: "High", int: "High", q: "mc" },
      { name: "IT Department", interest: "Clear requirements", power: "High", int: "Medium", q: "ks" },
      { name: "Laboratory Technologists", interest: "Accurate specimens", power: "Medium", int: "Medium", q: "ki" },
      { name: "Patients", interest: "Safe and timely results", power: "Low", int: "High", q: "ki" }
    ],
    asis: {
      intro: "Specimens move from the bedside to the laboratory through a paper-based, manually verified process. Identification errors are only detected at laboratory reception — after the specimen has left the ward.",
      steps: [
        { t: "Patient arrives" },
        { t: "Reception confirms identity" },
        { t: "Clinician orders test" },
        { t: "Paper requisition created", pain: "No audit trail" },
        { t: "Specimen collected" },
        { t: "Label applied manually", pain: "Manual labelling" },
        { t: "Specimen sent to lab" },
        { t: "Lab reception verifies label", pain: "Manual verification" },
        { t: "Mismatch → investigation & repeat collection", pain: "Delays & rework" }
      ],
      limitations: [
        "Manual labelling and manual verification",
        "No barcode validation",
        "No audit trail or digital chain of custody",
        "Inconsistent specimen identification",
        "Repeat collections and delayed results"
      ]
    },
    approach: [
      { name: "Stakeholder Analysis", how: "Built a stakeholder register and power–interest matrix to prioritise laboratory, safety and ward teams." },
      { name: "AS-IS Process Mapping", how: "Mapped the specimen journey from patient arrival to laboratory processing, marking each failure point." },
      { name: "Gap Analysis", how: "Compared current and desired states across labelling, verification, tracking and audit." },
      { name: "Risk Assessment", how: "Assessed patient-safety risk at each hand-off, including wrong-patient near misses." },
      { name: "Requirements Elicitation", how: "Translated stakeholder needs into functional and non-functional requirements." },
      { name: "TO-BE Process Design", how: "Designed a barcode-enabled workflow with automated verification and tracking." },
      { name: "Cost-Benefit Analysis", how: "Compared three options and costed the recommended pilot at CAD 18,500." }
    ],
    timeline: [
      { t: "Discovery & scoping", d: "Problem framing using the case-study incident data." },
      { t: "Stakeholder analysis", d: "Stakeholder register and power–interest matrix." },
      { t: "AS-IS mapping", d: "Current-state specimen journey and pain points." },
      { t: "Gap & risk analysis", d: "Root causes of mismatches; patient-safety risks." },
      { t: "TO-BE design", d: "Barcode-enabled future-state workflow." },
      { t: "Requirements", d: "Functional and non-functional requirements." },
      { t: "Business case", d: "Options assessment and recommendation." },
      { t: "Delivery plan", d: "SDLC phases and KPI framework." }
    ],
    findings: [
      "Manual specimen verification was the primary source of delays.",
      "No digital chain of custody existed.",
      "Lack of automated validation increased patient-safety risk.",
      "Staff spent significant time investigating mismatches."
    ],
    tobe: {
      intro: "A barcode-enabled workflow in which every specimen is positively matched to the patient at collection and tracked through to laboratory processing, with every scan recorded.",
      steps: [
        { t: "Digital patient identification", n: true },
        { t: "Clinician orders test" },
        { t: "Barcode generated", n: true },
        { t: "Wristband scanned", n: true },
        { t: "Specimen barcode scanned", n: true },
        { t: "Automatic verification", n: true },
        { t: "Transport tracking", n: true },
        { t: "Laboratory receipt scan & automatic matching", n: true },
        { t: "Laboratory processing" },
        { t: "Result released" }
      ]
    },
    fr: [
      { t: "Generate a unique barcode label for each specimen when the test is ordered.", p: "Must" },
      { t: "Require a patient wristband scan before specimen collection.", p: "Must" },
      { t: "Automatically verify the specimen barcode against the wristband and order, and block mismatches.", p: "Must" },
      { t: "Record the user and timestamp at every scan to create a chain of custody.", p: "Must" },
      { t: "Log exceptions with a reason code and alert laboratory reception.", p: "Must" },
      { t: "Automatically match specimens to orders on laboratory receipt.", p: "Must" },
      { t: "Show the transport status of each specimen.", p: "Should" },
      { t: "Provide exception and turnaround-time reporting for the Quality team.", p: "Should" }
    ],
    nfr: [
      { c: "Performance", t: "Scan verification result returned within 2 seconds." },
      { c: "Availability", t: "Documented downtime procedure with paper fallback." },
      { c: "Security", t: "Role-based access; all scans and overrides audit-logged." },
      { c: "Usability", t: "Handheld scanning usable at the bedside with minimal steps." },
      { c: "Interoperability", t: "Integrates with the laboratory information system." },
      { c: "Privacy", t: "Complies with applicable health-information privacy legislation." }
    ],
    recommendations: [
      "Implement a barcode-enabled specimen tracking pilot (Option 2, CAD 18,500).",
      "Introduce wristband scanning and barcode verification at the point of collection.",
      "Automate matching on laboratory receipt and log every exception.",
      "Track chain of custody from collection to processing.",
      "Measure the pilot against agreed KPIs before wider rollout."
    ],
    outcomes: [
      { t: "Reduced specimen errors", i: "shield" },
      { t: "Improved patient safety", i: "heart" },
      { t: "Faster result turnaround", i: "clock" },
      { t: "Reduced staff rework", i: "cycle" }
    ],
    risks: [
      { r: "Staff bypass scanning under time pressure", l: "High", m: "Involve nurses in design and UAT; ward champions; monitor overrides." },
      { r: "Integration with the laboratory system is complex", l: "Medium", m: "Early integration testing with the vendor in the Design phase." },
      { r: "Scanner or label printer failure", l: "Medium", m: "Downtime procedure, spare devices and label print standards." },
      { r: "Pilot exceeds budget", l: "Low", m: "Fixed pilot scope with a phase gate before wider rollout." }
    ],
    kpis: [
      { m: "Specimen error rate", base: "52 exceptions", target: "< 1%", dir: "down", how: "Exceptions ÷ specimens received" },
      { m: "Turnaround time", base: "23 delayed results", target: "≤ 2 hours", dir: "down", how: "Collection to result release" },
      { m: "Repeat collections", base: "11 per month", target: "Reduce by 50%", dir: "down", how: "Repeat draws per month" },
      { m: "On-time results", base: "—", target: "≥ 95%", dir: "up", how: "Results within target time" },
      { m: "Patient complaints", base: "18", target: "Reduce by 50%", dir: "down", how: "Specimen-related complaints" }
    ],
    lifecycle: { title: "SDLC overview", phases: [
      { n: "Planning", a: ["Scope & budget", "Stakeholders"] },
      { n: "Requirements", a: ["Interviews", "FR & NFR"] },
      { n: "Design", a: ["Barcode workflow", "Integration & alerts"] },
      { n: "Development", a: ["Configure solution", "Exception logging"] },
      { n: "Testing", a: ["System & integration", "UAT"] },
      { n: "Deployment", a: ["Staff training", "Go-live support"] },
      { n: "Maintenance", a: ["KPI monitoring", "Continuous improvement"] }
    ]},
    deliverables: [
      { t: "Stakeholder Register", file: "assets/documents/artefacts/01-Stakeholder-Register.pdf" },
      { t: "Power–Interest Matrix", file: "assets/documents/artefacts/02-Power-Interest-Matrix.pdf" },
      { t: "AS-IS Process Map", file: "assets/documents/artefacts/03-AS-IS-Process-Map.pdf" },
      { t: "TO-BE Process Map", file: "assets/documents/artefacts/04-TO-BE-Process-Map.pdf" },
      { t: "Business Case", file: "assets/documents/artefacts/05-Business-Case.pdf" },
      { t: "SDLC Overview", file: "assets/documents/artefacts/06-SDLC-Overview.pdf" },
      { t: "Requirements Catalogue", anchor: "requirements" }
    ],
    skillGroups: [
      { g: "Analysis", items: ["Stakeholder Analysis", "Process Mapping", "Gap Analysis", "Risk Assessment"] },
      { g: "Requirements & delivery", items: ["Requirements Engineering", "Business Case Development", "SDLC"] },
      { g: "Healthcare", items: ["Patient Safety", "Laboratory Workflows", "Chain of Custody"] }
    ]
  },

  /* ===================================================================== 2 */
  "opd-registration": {
    summary: "Process improvement analysis of an outpatient department's registration process. Manual, paper-based registration was creating long queues, repeated data capture and fragmented patient information. The recommended digital registration model — online pre-registration, self-service kiosks, digital queue management and automated appointment allocation — moves routine registration out of the queue and gives staff real-time visibility of patient flow.",
    problem: "The outpatient registration process relied on multiple manual activities, long queues, repeated data capture and fragmented patient information. These issues contributed to delays, increased administrative workload and a poor patient experience.",
    objectives: [
      "Reduce patient waiting time.",
      "Improve registration efficiency.",
      "Reduce duplicate data entry.",
      "Improve patient journey visibility.",
      "Support the organisation's digital transformation."
    ],
    stakeholders: [
      { name: "Hospital Administration", interest: "Efficient, scalable outpatient operations", power: "High", int: "High", q: "mc" },
      { name: "Registration Staff", interest: "Less manual data entry and queue pressure", power: "Medium", int: "High", q: "mc" },
      { name: "Doctors", interest: "Patients ready on time with accurate details", power: "High", int: "Medium", q: "ks" },
      { name: "IT Team", interest: "Clear, supportable requirements and integration", power: "High", int: "Medium", q: "ks" },
      { name: "Nurses", interest: "Predictable patient flow into clinics", power: "Medium", int: "Medium", q: "ki" },
      { name: "Patients", interest: "Shorter waits; give information once", power: "Low", int: "High", q: "ki" }
    ],
    asis: {
      intro: "Every patient registers in person at a single desk. Information is captured on paper, then re-keyed by staff, with no view of how many patients are waiting or where they are in the journey.",
      steps: [
        { t: "Patient arrives at OPD" },
        { t: "Joins registration queue", pain: "Long queues" },
        { t: "Completes paper form", pain: "Repeated information" },
        { t: "Staff re-key details into system", pain: "Duplicate data entry" },
        { t: "Existing record searched manually" },
        { t: "Clinic allocated manually" },
        { t: "Patient waits for clinic", pain: "No flow visibility" },
        { t: "Seen by clinician" }
      ],
      limitations: [
        "Patients repeat the same information at each visit",
        "Paper capture followed by manual re-keying",
        "No online or self-service registration option",
        "No real-time view of queues or patient flow"
      ]
    },
    approach: [
      { name: "Current State Assessment", how: "Reviewed the registration journey and the administrative effort at each step." },
      { name: "Process Mapping", how: "Mapped the AS-IS journey from arrival to consultation and designed the TO-BE flow." },
      { name: "Stakeholder Analysis", how: "Identified patient, staff, clinical and IT needs and their influence on the change." },
      { name: "Gap Analysis", how: "Compared current capability with a digital registration model across people, process and technology." },
      { name: "Requirements Definition", how: "Defined functional and non-functional requirements for the digital platform." }
    ],
    timeline: [
      { t: "Discovery", d: "Frame the registration problem and scope." },
      { t: "Stakeholder analysis", d: "Patient, staff, clinical and IT needs." },
      { t: "AS-IS mapping", d: "Current registration journey and pain points." },
      { t: "Gap analysis", d: "Current versus digital registration model." },
      { t: "TO-BE design", d: "Digital registration and queue model." },
      { t: "Requirements", d: "Functional and non-functional requirements." },
      { t: "Recommendation", d: "Digital registration platform proposal." }
    ],
    findings: [
      "Patients repeatedly provided the same information.",
      "Staff spent excessive time on manual data entry.",
      "The lack of online registration increased queues.",
      "There was no real-time visibility of patient flow."
    ],
    tobe: {
      intro: "Most patients complete registration before or on arrival through digital channels, records are matched automatically, and staff focus on exceptions and patients who need assistance.",
      steps: [
        { t: "Online pre-registration or kiosk check-in", n: true },
        { t: "Details matched to existing record", n: true },
        { t: "Digital queue ticket issued", n: true },
        { t: "Automated clinic allocation", n: true },
        { t: "Real-time patient flow dashboard", n: true },
        { t: "Staff handle exceptions & assisted registration" },
        { t: "Seen by clinician" }
      ]
    },
    fr: [
      { t: "Allow patients to pre-register and update their details online before the appointment.", p: "Must" },
      { t: "Provide self-service kiosk check-in on arrival.", p: "Must" },
      { t: "Match registrations to existing patient records to prevent duplicates.", p: "Must" },
      { t: "Issue a digital queue ticket and notify patients when they are called.", p: "Must" },
      { t: "Allocate patients to clinics automatically using configurable rules.", p: "Should" },
      { t: "Display a real-time patient flow dashboard for staff.", p: "Should" },
      { t: "Provide an assisted route for patients who cannot use digital channels.", p: "Must" }
    ],
    nfr: [
      { c: "Accessibility", t: "Online and kiosk interfaces meet WCAG 2.2 AA." },
      { c: "Performance", t: "Kiosk check-in completes in a few simple steps." },
      { c: "Security", t: "Personal data protected with secure transmission and role-based access." },
      { c: "Integration", t: "Updates the hospital's patient administration system." },
      { c: "Availability", t: "Desk registration remains available as a fallback." }
    ],
    recommendations: [
      "Introduce online pre-registration to move routine data capture out of the queue.",
      "Install self-service kiosks for check-in on arrival.",
      "Implement digital queue management with patient notifications.",
      "Automate appointment and clinic allocation.",
      "Keep an assisted registration route so no patient is excluded."
    ],
    outcomes: [
      { t: "Reduced queues", i: "clock" },
      { t: "Improved patient experience", i: "heart" },
      { t: "Increased operational efficiency", i: "trend" },
      { t: "Better patient flow visibility", i: "eye" }
    ],
    risks: [
      { r: "Digital exclusion of some patients", l: "High", m: "Assisted registration route, staff support at kiosks, accessible design." },
      { r: "Duplicate records created during matching", l: "Medium", m: "Clear matching rules and staff review of uncertain matches." },
      { r: "Integration issues with the patient administration system", l: "Medium", m: "Early technical assessment and integration testing." },
      { r: "Staff concern about role changes", l: "Medium", m: "Involve registration staff in design; redeploy time to patient support." }
    ],
    kpis: [
      { m: "Registration waiting time", target: "Reduce", dir: "down", how: "Arrival to registration complete" },
      { m: "Registration handling time", target: "Reduce", dir: "down", how: "Staff time per registration" },
      { m: "Duplicate records", target: "Reduce", dir: "down", how: "New duplicates per month" },
      { m: "Digital registrations", target: "Increase", dir: "up", how: "% online or kiosk" },
      { m: "Patient satisfaction", target: "Increase", dir: "up", how: "Post-visit survey" }
    ],
    lifecycle: { title: "SDLC overview", phases: [
      { n: "Planning", a: ["Scope & sponsor", "Stakeholders"] },
      { n: "Requirements", a: ["Journey workshops", "FR & NFR"] },
      { n: "Design", a: ["Registration flow", "Kiosk & queue design"] },
      { n: "Development", a: ["Configure platform", "PAS integration"] },
      { n: "Testing", a: ["Integration testing", "UAT with staff & patients"] },
      { n: "Deployment", a: ["Phased go-live", "Staff training"] },
      { n: "Maintenance", a: ["KPI monitoring", "Continuous improvement"] }
    ]},
    deliverables: [
      { t: "Stakeholder analysis", anchor: "stakeholders" },
      { t: "AS-IS process map", anchor: "asis" },
      { t: "TO-BE process design", anchor: "tobe" },
      { t: "Requirements catalogue", anchor: "requirements" },
      { t: "Risk register", anchor: "risks" },
      { t: "KPI framework", anchor: "kpis" }
    ],
    skillGroups: [
      { g: "Analysis", items: ["Process Mapping", "Gap Analysis", "Stakeholder Analysis"] },
      { g: "Requirements & delivery", items: ["Requirements Analysis", "SDLC"] },
      { g: "Transformation", items: ["Digital Transformation", "Patient Experience"] }
    ]
  },

  /* ===================================================================== 3 */
  "appointment-booking": {
    summary: "Workflow analysis of an appointment booking process in which patients attended the wrong appointment types and administrative teams spent significant time correcting bookings. Root causes were unclear appointment categories, inconsistent booking methods and unreliable reminders. The recommended model standardises categories and the booking workflow, and automates confirmations and reminders.",
    problem: "Patients frequently attended the wrong appointment types, experienced confusion about their bookings and relied on inconsistent communication. Administrative teams spent significant time correcting appointment-related issues.",
    objectives: [
      "Improve appointment accuracy.",
      "Reduce booking errors.",
      "Improve communication with patients.",
      "Reduce administrative workload."
    ],
    stakeholders: [
      { name: "Operations Managers", interest: "Accurate schedules and efficient clinics", power: "High", int: "High", q: "mc" },
      { name: "Reception Teams", interest: "A clear, consistent way to book correctly", power: "Medium", int: "High", q: "mc" },
      { name: "Clinicians", interest: "Right patient, right appointment type", power: "High", int: "Medium", q: "ks" },
      { name: "Patients", interest: "Clear, reliable booking information", power: "Low", int: "High", q: "ki" }
    ],
    asis: {
      intro: "Bookings depend on individual staff judgement. Appointment types are open to interpretation and confirmation and reminder practices vary, so errors often surface only when the patient arrives.",
      steps: [
        { t: "Booking request received" },
        { t: "Staff choose appointment type", pain: "Unclear categories" },
        { t: "Booking method varies by staff", pain: "Inconsistent process" },
        { t: "Appointment booked" },
        { t: "Confirmation sent (sometimes)", pain: "Inconsistent communication" },
        { t: "Reminder sent (sometimes)" },
        { t: "Patient attends wrong appointment type", pain: "Rework" },
        { t: "Admin corrects and rebooks" }
      ],
      limitations: [
        "Appointment categories open to interpretation",
        "No single standard booking workflow",
        "Confirmations and reminders inconsistent",
        "Errors found late, at the point of attendance"
      ]
    },
    approach: [
      { name: "Workflow Assessment", how: "Analysed how bookings are made in practice across reception staff." },
      { name: "AS-IS vs TO-BE Analysis", how: "Mapped the current booking journey and designed a standardised future state." },
      { name: "Gap Analysis", how: "Identified gaps in categorisation, workflow and patient communication." },
      { name: "Requirements Analysis", how: "Defined requirements for categories, workflow, confirmations and reminders." },
      { name: "Process Improvement Review", how: "Assessed improvement options against workload and patient impact." }
    ],
    timeline: [
      { t: "Discovery", d: "Frame booking errors and their impact." },
      { t: "Stakeholder analysis", d: "Patients, reception, clinicians, operations." },
      { t: "Workflow assessment", d: "How bookings are made in practice." },
      { t: "AS-IS vs TO-BE", d: "Current journey and standardised future state." },
      { t: "Requirements", d: "Categories, workflow, confirmations, reminders." },
      { t: "Recommendation", d: "Standardised booking model." }
    ],
    findings: [
      "Appointment classifications were unclear.",
      "Reminder processes were inconsistent.",
      "Booking methods varied between staff."
    ],
    tobe: {
      intro: "A single, standardised booking workflow supported by clear appointment categories and automated patient communication.",
      steps: [
        { t: "Booking request received" },
        { t: "Standard category selected via decision guide", n: true },
        { t: "Single standard booking workflow", n: true },
        { t: "Automated confirmation sent", n: true },
        { t: "Automated reminders sent", n: true },
        { t: "Patient confirms, cancels or reschedules", n: true },
        { t: "Patient attends correct appointment" }
      ]
    },
    fr: [
      { t: "Maintain a standard list of appointment categories with clear definitions.", p: "Must" },
      { t: "Guide staff to the correct category during booking.", p: "Must" },
      { t: "Send an automatic confirmation when an appointment is booked or changed.", p: "Must" },
      { t: "Send automated reminders before the appointment.", p: "Must" },
      { t: "Let patients confirm, cancel or request to reschedule from the reminder.", p: "Should" },
      { t: "Prevent double-booking and scheduling conflicts.", p: "Must" },
      { t: "Report booking errors and corrections for operations managers.", p: "Should" }
    ],
    nfr: [
      { c: "Usability", t: "Booking workflow consistent and quick for reception staff." },
      { c: "Accessibility", t: "Patient messages clear, plain-language and accessible." },
      { c: "Reliability", t: "Confirmations and reminders delivered automatically without manual steps." },
      { c: "Privacy", t: "Messages contain only the minimum personal information needed." }
    ],
    recommendations: [
      "Standardise appointment categories with clear definitions.",
      "Adopt one booking workflow for all reception staff.",
      "Automate confirmations for every booking and change.",
      "Introduce an enhanced, automated reminder system.",
      "Improve the scheduling workflow to prevent conflicts."
    ],
    outcomes: [
      { t: "Better appointment attendance", i: "check" },
      { t: "Improved patient communication", i: "heart" },
      { t: "Fewer administrative corrections", i: "cycle" },
      { t: "Reduced scheduling conflicts", i: "clock" }
    ],
    risks: [
      { r: "Staff continue old booking habits", l: "Medium", m: "Training, quick-reference guide and booking audits." },
      { r: "Category definitions too complex", l: "Medium", m: "Co-design categories with reception and clinicians; test before rollout." },
      { r: "Patient contact details out of date", l: "Medium", m: "Verify contact details at every booking." }
    ],
    kpis: [
      { m: "Booking error rate", target: "Reduce", dir: "down", how: "Wrong-type bookings ÷ total" },
      { m: "Did-not-attend rate", target: "Reduce", dir: "down", how: "Missed appointments ÷ booked" },
      { m: "Admin correction time", target: "Reduce", dir: "down", how: "Hours spent rebooking" },
      { m: "Confirmations sent", target: "Increase", dir: "up", how: "% bookings confirmed" },
      { m: "Scheduling conflicts", target: "Reduce", dir: "down", how: "Conflicts per month" }
    ],
    lifecycle: { title: "SDLC overview", phases: [
      { n: "Planning", a: ["Scope", "Stakeholders"] },
      { n: "Requirements", a: ["Workflow review", "FR & NFR"] },
      { n: "Design", a: ["Categories", "Message templates"] },
      { n: "Development", a: ["Configure booking system", "Automated messaging"] },
      { n: "Testing", a: ["Scenario testing", "UAT with reception"] },
      { n: "Deployment", a: ["Staff training", "Go-live"] },
      { n: "Maintenance", a: ["KPI monitoring", "Category review"] }
    ]},
    deliverables: [
      { t: "Stakeholder analysis", anchor: "stakeholders" },
      { t: "AS-IS process map", anchor: "asis" },
      { t: "TO-BE process design", anchor: "tobe" },
      { t: "Requirements catalogue", anchor: "requirements" },
      { t: "Risk register", anchor: "risks" },
      { t: "KPI framework", anchor: "kpis" }
    ],
    skillGroups: [
      { g: "Analysis", items: ["Workflow Optimisation", "AS-IS / TO-BE Analysis", "Gap Analysis"] },
      { g: "Requirements & delivery", items: ["Requirements Engineering", "SDLC"] },
      { g: "Healthcare", items: ["Healthcare Operations", "Patient Communication"] }
    ]
  },

  /* ===================================================================== 4 */
  "healthcare-it-ecosystem": {
    summary: "Systems analysis of a typical healthcare IT ecosystem — EHR/EMR, HIS/HMIS, LIS, RIS, PACS and analytics platforms — to understand how information flows between departments and where it breaks down. The analysis identified data silos, duplicate data entry and integration gaps, and recommends strengthening interoperability through HL7 and FHIR integration, shared data standards, automated data exchange and improved governance.",
    problem: "Healthcare organisations often operate multiple disconnected systems, resulting in fragmented information, duplicate data entry and limited visibility across departments.",
    problemStats: [],
    objectives: [
      "Understand the healthcare technology architecture.",
      "Identify interoperability gaps.",
      "Analyse healthcare data flows.",
      "Explore improvement opportunities."
    ],
    stakeholders: [
      { name: "Clinical Leadership", interest: "Complete information at the point of care", power: "High", int: "High", q: "mc" },
      { name: "IT & Integration Team", interest: "Maintainable, standards-based integration", power: "High", int: "High", q: "mc" },
      { name: "Executive Leadership", interest: "Digital maturity and value from systems", power: "High", int: "Medium", q: "ks" },
      { name: "Information Governance", interest: "Lawful, secure data sharing", power: "High", int: "Medium", q: "ks" },
      { name: "Departmental Teams (Lab, Radiology)", interest: "Fewer re-keyed orders and results", power: "Medium", int: "High", q: "ki" },
      { name: "Data & Analytics Team", interest: "Consistent, timely data for reporting", power: "Medium", int: "High", q: "ki" }
    ],
    asis: {
      intro: "Each department runs its own system. Orders and results are passed between systems by point-to-point interfaces or re-keyed by hand, and reporting relies on manual data extracts.",
      steps: [
        { t: "Patient registered in HIS / HMIS" },
        { t: "Clinical record in EHR / EMR" },
        { t: "Lab order re-keyed into LIS", pain: "Duplicate data entry" },
        { t: "Imaging request in RIS; images in PACS", pain: "Separate silos" },
        { t: "Results returned via separate routes", pain: "Limited visibility" },
        { t: "Data extracted manually for analytics", pain: "Inconsistent data" },
        { t: "Reports produced with gaps" }
      ],
      limitations: [
        "Data held in departmental silos",
        "Duplicate data entry between systems",
        "Integration gaps limit end-to-end visibility",
        "Information flow varies across departments"
      ]
    },
    systems: ["EHR / EMR", "HIS / HMIS", "LIS", "RIS", "PACS", "Analytics Platforms"],
    approach: [
      { name: "Systems Analysis", how: "Catalogued core clinical and administrative systems and their roles." },
      { name: "Data Flow Analysis", how: "Traced how patient, order and result data moves between systems." },
      { name: "Interoperability Assessment", how: "Assessed how systems exchange data and where standards are missing." },
      { name: "Gap Analysis", how: "Compared the current architecture with a standards-based, integrated target." },
      { name: "Stakeholder Analysis", how: "Mapped clinical, technical, governance and analytics interests." }
    ],
    timeline: [
      { t: "Discovery", d: "Define scope: systems, departments, data." },
      { t: "Systems inventory", d: "EHR, HIS, LIS, RIS, PACS, analytics." },
      { t: "Data flow analysis", d: "Trace orders, results and patient data." },
      { t: "Interoperability assessment", d: "Interfaces, standards and gaps." },
      { t: "Gap analysis", d: "Current versus integrated target state." },
      { t: "Recommendation", d: "Interoperability roadmap." }
    ],
    findings: [
      "Data silos reduced efficiency.",
      "Duplicate data entry increased errors.",
      "Integration challenges limited visibility.",
      "Information flow varied across departments."
    ],
    tobe: {
      intro: "A connected ecosystem in which a single patient identity is shared across systems, orders and results flow electronically using HL7 and FHIR, and analytics draws on standardised data under clear governance.",
      steps: [
        { t: "Single patient identity across systems", n: true },
        { t: "Orders sent electronically from EHR to LIS / RIS", n: true },
        { t: "Results returned automatically to EHR", n: true },
        { t: "PACS images linked in the patient record", n: true },
        { t: "Integration engine manages HL7 / FHIR messages", n: true },
        { t: "Analytics fed by standardised data", n: true },
        { t: "Governance and data standards oversight", n: true }
      ]
    },
    fr: [
      { t: "Route orders and results between systems through a central integration engine.", p: "Must" },
      { t: "Maintain a single patient identifier across connected systems.", p: "Must" },
      { t: "Exchange data using HL7 messaging and FHIR APIs.", p: "Must" },
      { t: "Return results to the requesting clinician's record automatically.", p: "Must" },
      { t: "Apply shared data standards and terminologies across systems.", p: "Should" },
      { t: "Alert the IT team when an interface message fails.", p: "Should" }
    ],
    nfr: [
      { c: "Interoperability", t: "HL7 and FHIR standards used for all new integrations." },
      { c: "Reliability", t: "Failed messages queued and retried, with monitoring." },
      { c: "Security", t: "Encrypted data exchange and audited access." },
      { c: "Scalability", t: "New systems connect through the integration layer, not point-to-point." },
      { c: "Governance", t: "Data sharing assessed and approved by Information Governance." }
    ],
    recommendations: [
      "Strengthen interoperability through HL7 and FHIR integration.",
      "Adopt shared data standards across systems.",
      "Automate data exchange to remove re-keying.",
      "Improve data governance with clear ownership and approval.",
      "Prioritise integrations by clinical risk and volume of re-keying."
    ],
    outcomes: [
      { t: "Improved information sharing", i: "cycle" },
      { t: "Better clinical decision-making", i: "heart" },
      { t: "Reduced administrative burden", i: "clock" },
      { t: "Improved digital maturity", i: "trend" }
    ],
    risks: [
      { r: "Legacy systems lack modern interfaces", l: "High", m: "Use the integration engine to bridge legacy formats; plan replacements." },
      { r: "Poor data quality spreads across systems", l: "High", m: "Data quality rules and cleansing before integration." },
      { r: "Vendor dependency slows delivery", l: "Medium", m: "Engage vendors early; require standards-based interfaces." },
      { r: "Data-sharing compliance concerns", l: "Medium", m: "Involve Information Governance from design; complete impact assessments." }
    ],
    kpis: [
      { m: "Electronic orders & results", target: "Increase", dir: "up", how: "% sent without re-keying" },
      { m: "Duplicate data entry points", target: "Reduce", dir: "down", how: "Re-keying steps per pathway" },
      { m: "Interface failures", target: "Reduce", dir: "down", how: "Failed messages per month" },
      { m: "Result availability time", target: "Reduce", dir: "down", how: "Result final to visible in EHR" },
      { m: "Digital maturity", target: "Increase", dir: "up", how: "Maturity assessment score" }
    ],
    lifecycle: { title: "SDLC overview", phases: [
      { n: "Planning", a: ["Scope systems", "Prioritise integrations"] },
      { n: "Requirements", a: ["Data flows", "Interface specs"] },
      { n: "Design", a: ["Integration architecture", "Data standards"] },
      { n: "Development", a: ["Build interfaces", "Patient identity matching"] },
      { n: "Testing", a: ["Interface testing", "End-to-end UAT"] },
      { n: "Deployment", a: ["Phased go-live", "Monitoring"] },
      { n: "Maintenance", a: ["Interface support", "Standards governance"] }
    ]},
    deliverables: [
      { t: "Systems inventory", anchor: "asis" },
      { t: "Data flow analysis", anchor: "asis" },
      { t: "Target integration design", anchor: "tobe" },
      { t: "Requirements catalogue", anchor: "requirements" },
      { t: "Risk register", anchor: "risks" },
      { t: "KPI framework", anchor: "kpis" }
    ],
    skillGroups: [
      { g: "Analysis", items: ["Systems Analysis", "Data Flow Analysis", "Gap Analysis"] },
      { g: "Technology", items: ["Interoperability", "HL7 / FHIR", "Healthcare Technology"] },
      { g: "Governance", items: ["Data Standards", "Information Governance"] }
    ]
  },

  /* ===================================================================== 5 */
  "digital-patient-consent": {
    summary: "Information governance analysis of a paper-based patient consent process that created compliance risk, retrieval delays and inconsistent audit trails. The recommended digital consent solution provides electronic signatures, secure digital storage, complete audit trails and automated retrieval — strengthening GDPR compliance while making consent records available when clinicians need them.",
    problem: "Patient consent was managed using paper-based processes that created compliance risks, retrieval delays and inconsistent audit trails. Staff had difficulty locating historical consent records.",
    objectives: [
      "Digitise patient consent.",
      "Improve compliance.",
      "Reduce retrieval time.",
      "Strengthen governance controls."
    ],
    stakeholders: [
      { name: "Information Governance Team", interest: "Compliant, auditable consent records", power: "High", int: "High", q: "mc" },
      { name: "Clinical Teams", interest: "Quick consent capture and retrieval", power: "High", int: "High", q: "mc" },
      { name: "Legal Team", interest: "Legally valid electronic consent", power: "High", int: "Medium", q: "ks" },
      { name: "IT Department", interest: "Secure, supportable solution", power: "Medium", int: "Medium", q: "ki" },
      { name: "Patients", interest: "Clear information and control over consent", power: "Low", int: "High", q: "ki" }
    ],
    asis: {
      intro: "Consent is captured on paper and filed in physical records. Finding a historical consent means a manual search, and there is no reliable way to show who accessed or changed a record.",
      steps: [
        { t: "Paper consent form printed" },
        { t: "Patient signs on paper" },
        { t: "Form filed in paper record", pain: "Governance risk" },
        { t: "Form sometimes scanned later", pain: "Missing documentation" },
        { t: "Retrieval needs a physical search", pain: "Retrieval delays" },
        { t: "Audit carried out manually", pain: "Limited audit visibility" }
      ],
      limitations: [
        "Consent documentation regularly missing",
        "Inefficient retrieval of historical consent",
        "Limited audit visibility",
        "Paper storage creates governance risk"
      ]
    },
    approach: [
      { name: "Information Governance Assessment", how: "Reviewed how consent records are created, stored, accessed and retained." },
      { name: "Compliance Review", how: "Assessed the process against GDPR and organisational policy." },
      { name: "Gap Analysis", how: "Compared the paper process with a compliant digital consent model." },
      { name: "Requirements Gathering", how: "Captured clinical, legal, IG and IT requirements." },
      { name: "Risk Assessment", how: "Identified compliance, legal and data-security risks and mitigations." }
    ],
    timeline: [
      { t: "Discovery", d: "Frame compliance and retrieval issues." },
      { t: "Stakeholder analysis", d: "Clinical, IG, legal, IT and patient needs." },
      { t: "IG & compliance review", d: "Current process against GDPR and policy." },
      { t: "Gap analysis", d: "Paper versus digital consent model." },
      { t: "Requirements & risks", d: "Requirements catalogue and risk register." },
      { t: "Recommendation", d: "Digital consent management solution." }
    ],
    findings: [
      "Missing consent documentation occurred regularly.",
      "Retrieval processes were inefficient.",
      "Audit visibility was limited.",
      "Paper storage created governance risk."
    ],
    tobe: {
      intro: "Consent is captured electronically at the point of care, stored securely against the patient record and retrievable in seconds, with every action recorded in an audit trail.",
      steps: [
        { t: "Digital consent form linked to patient & procedure", n: true },
        { t: "Information provided in accessible formats" },
        { t: "Electronic signature captured", n: true },
        { t: "Stored securely in the patient record", n: true },
        { t: "Retrieved instantly by authorised staff", n: true },
        { t: "Withdrawal and changes recorded", n: true },
        { t: "Complete audit trail and compliance reporting", n: true }
      ]
    },
    fr: [
      { t: "Generate consent forms linked to the patient and procedure.", p: "Must" },
      { t: "Capture electronic signatures from patients and clinicians.", p: "Must" },
      { t: "Store consent securely against the patient record.", p: "Must" },
      { t: "Retrieve consent records by patient or procedure.", p: "Must" },
      { t: "Record consent withdrawal and changes.", p: "Must" },
      { t: "Log every view, change and signature in an audit trail.", p: "Must" },
      { t: "Provide compliance reporting for the Information Governance team.", p: "Should" }
    ],
    nfr: [
      { c: "Compliance", t: "Meets GDPR and organisational retention policy." },
      { c: "Security", t: "Encryption in transit and at rest; role-based access." },
      { c: "Accessibility", t: "Consent information available in accessible formats." },
      { c: "Availability", t: "Paper fallback process during system downtime." },
      { c: "Auditability", t: "Audit trail cannot be altered by users." }
    ],
    recommendations: [
      "Implement a digital consent management solution.",
      "Use electronic signatures approved by the Legal team.",
      "Store consent securely with complete audit trails.",
      "Automate retrieval for authorised staff.",
      "Keep an accessible, assisted route for patients who need it."
    ],
    outcomes: [
      { t: "Improved GDPR compliance", i: "shield" },
      { t: "Faster consent retrieval", i: "clock" },
      { t: "Reduced governance risk", i: "check" },
      { t: "Improved patient confidence", i: "heart" }
    ],
    risks: [
      { r: "Legal validity of electronic consent questioned", l: "High", m: "Legal sign-off on signature method and form content before go-live." },
      { r: "Patients with additional needs excluded", l: "Medium", m: "Assisted capture and accessible formats; paper fallback." },
      { r: "Data security breach", l: "Medium", m: "Encryption, role-based access and a data protection impact assessment." },
      { r: "Low clinical uptake", l: "Medium", m: "Design with clinicians; training and visible benefits." }
    ],
    kpis: [
      { m: "Consent retrieval time", target: "Reduce", dir: "down", how: "Request to record available" },
      { m: "Missing consent incidents", target: "Reduce", dir: "down", how: "Incidents per month" },
      { m: "Digital consents", target: "Increase", dir: "up", how: "% captured electronically" },
      { m: "Audit compliance", target: "Increase", dir: "up", how: "Audit score" },
      { m: "Complete consent records", target: "Increase", dir: "up", how: "% procedures with valid consent" }
    ],
    lifecycle: { title: "SDLC overview", phases: [
      { n: "Planning", a: ["Scope", "IG & legal input"] },
      { n: "Requirements", a: ["Clinical & IG needs", "FR & NFR"] },
      { n: "Design", a: ["Consent forms", "Audit & access model"] },
      { n: "Development", a: ["Configure e-consent", "Record integration"] },
      { n: "Testing", a: ["Security testing", "UAT with clinicians"] },
      { n: "Deployment", a: ["Training", "Phased go-live"] },
      { n: "Maintenance", a: ["Compliance monitoring", "Form review"] }
    ]},
    deliverables: [
      { t: "Stakeholder analysis", anchor: "stakeholders" },
      { t: "AS-IS process map", anchor: "asis" },
      { t: "TO-BE process design", anchor: "tobe" },
      { t: "Requirements catalogue", anchor: "requirements" },
      { t: "Risk register", anchor: "risks" },
      { t: "KPI framework", anchor: "kpis" }
    ],
    skillGroups: [
      { g: "Governance", items: ["Information Governance", "GDPR", "Compliance"] },
      { g: "Requirements & delivery", items: ["Requirements Analysis", "Risk Assessment"] },
      { g: "Transformation", items: ["Digital Transformation"] }
    ]
  },

  /* ===================================================================== 6 */
  "change-management-adoption": {
    summary: "Change management analysis following the rollout of a new healthcare technology platform where adoption remained low and manual workarounds persisted. Root causes were limited training, unclear benefits and inconsistent communication. The recommended structured change programme — stakeholder engagement, a change champion network, role-based training, adoption monitoring and feedback loops — is designed to embed the platform and realise its expected benefits.",
    problem: "Following the implementation of a new healthcare technology platform, staff adoption remained low and manual workarounds persisted. The organisation struggled to realise the expected benefits from its technology investment.",
    objectives: [
      "Increase user adoption.",
      "Reduce resistance to change.",
      "Improve user confidence.",
      "Maximise solution benefits."
    ],
    stakeholders: [
      { name: "Operational Leadership", interest: "Return on the technology investment", power: "High", int: "High", q: "mc" },
      { name: "Clinical Staff", interest: "A system that saves time, not adds to it", power: "High", int: "High", q: "mc" },
      { name: "Change Champions", interest: "Support and time to help colleagues", power: "Medium", int: "High", q: "mc" },
      { name: "IT Department", interest: "Stable platform and fewer avoidable calls", power: "High", int: "Medium", q: "ks" },
      { name: "Administrative Teams", interest: "Clear processes and training", power: "Medium", int: "High", q: "ki" }
    ],
    asis: {
      intro: "The platform is live but under-used. Staff fall back on familiar manual processes, and adoption differs from one department to the next.",
      steps: [
        { t: "Platform goes live" },
        { t: "Limited training delivered", pain: "Low confidence" },
        { t: "Benefits not explained", pain: "Unclear value" },
        { t: "Inconsistent rollout communication", pain: "Mixed messages" },
        { t: "Manual workarounds persist", pain: "Low adoption" },
        { t: "Adoption varies by department" },
        { t: "Expected benefits not realised" }
      ],
      limitations: [
        "Limited training affected confidence",
        "Users did not clearly understand system benefits",
        "Communication during rollout was inconsistent",
        "Departments adopted changes differently"
      ]
    },
    approach: [
      { name: "Stakeholder Analysis", how: "Mapped staff groups by influence, interest and readiness for change." },
      { name: "Change Impact Assessment", how: "Assessed how the platform changes each role's daily work." },
      { name: "Training Needs Analysis", how: "Identified skills and confidence gaps by role and department." },
      { name: "Root Cause Analysis", how: "Traced low adoption to training, communication and benefit clarity." },
      { name: "Benefits Realisation Planning", how: "Linked expected benefits to measures, owners and timescales." }
    ],
    timeline: [
      { t: "Discovery", d: "Frame the adoption problem." },
      { t: "Stakeholder analysis", d: "Groups, influence and readiness." },
      { t: "Change impact assessment", d: "What changes for each role." },
      { t: "Root cause & training needs", d: "Why adoption is low; skills gaps." },
      { t: "Change programme design", d: "Champions, training, communications." },
      { t: "Benefits realisation plan", d: "Measures, owners and timescales." }
    ],
    findings: [
      "Limited training affected confidence.",
      "Users did not clearly understand system benefits.",
      "Communication during rollout was inconsistent.",
      "Departments adopted changes differently."
    ],
    tobe: {
      intro: "A structured change programme that builds confidence role by role, makes benefits visible and uses adoption data to target support where it is needed.",
      steps: [
        { t: "Stakeholder engagement & impact assessment", n: true },
        { t: "Change champion network in each department", n: true },
        { t: "Role-based training programme", n: true },
        { t: "Targeted communications on benefits", n: true },
        { t: "Adoption monitoring with usage data", n: true },
        { t: "Feedback loop and fixes", n: true },
        { t: "Benefits tracked and sustained", n: true }
      ]
    },
    fr: [
      { t: "Provide role-based training materials for each staff group.", p: "Must" },
      { t: "Report platform usage by department and role.", p: "Must" },
      { t: "Give staff a simple channel to raise issues and suggestions.", p: "Must" },
      { t: "Equip change champions with guides and escalation routes.", p: "Should" },
      { t: "Track benefits against agreed measures and owners.", p: "Must" }
    ],
    nfr: [
      { c: "Accessibility", t: "Training available across shifts and in short formats." },
      { c: "Usability", t: "Quick-reference guides available at the point of use." },
      { c: "Timeliness", t: "Adoption data reviewed regularly by leadership." },
      { c: "Inclusivity", t: "Communications tailored to clinical and administrative audiences." }
    ],
    recommendations: [
      "Run structured stakeholder engagement led by operational leadership.",
      "Establish a change champion network with protected time.",
      "Deliver a role-based training programme.",
      "Monitor adoption using platform usage data.",
      "Create feedback mechanisms and act visibly on feedback."
    ],
    outcomes: [
      { t: "Increased adoption rates", i: "trend" },
      { t: "Improved user experience", i: "heart" },
      { t: "Reduced manual workarounds", i: "cycle" },
      { t: "Realised business benefits", i: "check" }
    ],
    risks: [
      { r: "Clinical time pressure limits training attendance", l: "High", m: "Short, shift-friendly sessions and on-the-floor support." },
      { r: "Change champions lack time", l: "Medium", m: "Agree protected time with managers." },
      { r: "Leadership attention moves on", l: "Medium", m: "Regular benefits reporting to leadership." },
      { r: "Change fatigue", l: "Medium", m: "Clear priorities; show quick wins early." }
    ],
    kpis: [
      { m: "Active users", target: "Increase", dir: "up", how: "% of staff using the platform" },
      { m: "Manual workarounds", target: "Reduce", dir: "down", how: "Tasks done outside the system" },
      { m: "Training completion", target: "Increase", dir: "up", how: "% of staff trained by role" },
      { m: "User confidence", target: "Increase", dir: "up", how: "Pulse survey score" },
      { m: "Benefits realised", target: "Increase", dir: "up", how: "Benefits achieved vs plan" }
    ],
    lifecycle: { title: "Change delivery lifecycle", phases: [
      { n: "Assess", a: ["Stakeholders", "Change impact"] },
      { n: "Plan", a: ["Change strategy", "Benefits plan"] },
      { n: "Design", a: ["Training design", "Comms plan"] },
      { n: "Mobilise", a: ["Recruit champions", "Prepare materials"] },
      { n: "Deliver", a: ["Training", "Communications"] },
      { n: "Embed", a: ["Adoption monitoring", "Feedback loop"] },
      { n: "Sustain", a: ["Benefits tracking", "Continuous improvement"] }
    ]},
    deliverables: [
      { t: "Stakeholder analysis", anchor: "stakeholders" },
      { t: "Current adoption assessment", anchor: "asis" },
      { t: "Change programme design", anchor: "tobe" },
      { t: "Programme requirements", anchor: "requirements" },
      { t: "Risk register", anchor: "risks" },
      { t: "Benefits & KPI framework", anchor: "kpis" }
    ],
    skillGroups: [
      { g: "Change", items: ["Change Management", "Benefits Realisation", "Communication Planning"] },
      { g: "Analysis", items: ["Stakeholder Engagement", "Root Cause Analysis", "Training Needs Analysis"] }
    ]
  }
};

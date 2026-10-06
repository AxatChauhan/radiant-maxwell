export interface Publication {
  no: number;
  year: number;
  title: string;
  journal: string;
  theme: string;
  issn: string;
}

export interface Book {
  year: number;
  title: string;
  publisher: string;
  isbn: string;
  type: 'authored' | 'edited' | 'chapter';
  details?: string;
}

export interface Engagement {
  id: string;
  date: string;
  year: number;
  topic: string;
  event: string;
  level: 'State' | 'National' | 'International';
  category: 'lecture' | 'paper' | 'chair' | 'fdp';
  typeLabel?: string;
  duration?: string;
}

export interface Qualification {
  year: string;
  qualification: string;
  institution: string;
  details: string;
}

export interface Eligibility {
  year: string;
  examination: string;
  subject: string;
  body: string;
}

export interface Experience {
  period: string;
  position: string;
  institution: string;
}

export interface Membership {
  association: string;
  type: string;
  period: string;
}

export interface UpdateItem {
  date: string;
  title: string;
  category: 'News' | 'Events' | 'Achievements' | 'Announcements';
  details?: string;
}

export const PROFESSOR_INFO = {
  name: "Dr. Rajnikant S. Dodiya",
  title: "Assistant Professor – English Language Pedagogy & Education",
  institution: "H. M. Patel Institute of English Training & Research",
  location: "Vallabh Vidyanagar, Anand, Gujarat, India",
  positioningLine: "Teacher Educator | Researcher | Academic Leader | English Language Education",
  officialEmail: "rajnikantdodiya@hmpenglish.com",
  alternateEmail: "rajnikantdodiya2@gmail.com",
  instituteWebsite: "www.hmpenglish.com",
  photoUrl: "/dr-rajnikant-dodiya.jpg",
  phdDetails: {
    university: "Sardar Patel University, Vallabh Vidyanagar",
    year: "2018",
    thesis: "A Study of the Educational Thoughts as reflected in APJ Abdul Kalam’s Writings",
    guide: "Dr. Alkaben J. Macwan, Associate Professor, M.B. Patel College of Education, SPU",
    regNo: "784 (27 May 2014)",
    resultDeclared: "25 April 2018"
  },
  shortBio: `Dr. Rajnikant S. Dodiya is an Assistant Professor of English Language Pedagogy and Education at H. M. Patel Institute of English Training & Research, Vallabh Vidyanagar, Anand, Gujarat. He holds a Ph.D. in Education and has qualified UGC-NET and GSET in Education and English. His work spans English language education, teacher education, AI-integrated techno-pedagogy, multilingual pedagogy, NEP 2020 and institutional quality assurance. He has authored six books, edited four, and published 19 research papers, and has delivered 22 invited lectures. He serves as IQAC Coordinator and Coordinator of the Research & Development Cell and the Centre for Artificial Intelligence in English Language Education (CAIELE), and is Convener of the English Language Education Forum (ELEF).`,
  fullProfile: `Dr. Rajnikant S. Dodiya is an Assistant Professor specialising in English Language Pedagogy and Education, with extensive experience across higher education, teacher education, school education, educational leadership, research and institutional quality assurance. He holds a Ph.D. in Education and has qualified UGC-NET in Education and English as well as GSET in Education and English. His academic and research interests encompass English Language Education, Teacher Education, Artificial Intelligence in Education, Techno-Pedagogy, Digital Learning, Multilingual Pedagogy, Curriculum and Assessment, Higher Education, Research Methodology, NEP 2020 and Institutional Quality Assurance. His professional contributions include research publications, authored and edited books, invited academic lectures, conference presentations, curriculum development, research promotion, and leadership of institutional academic and quality-assurance initiatives.`,
  academicPhilosophy: `I see English language education as a context-sensitive, inclusive and learner-centred practice rather than the application of a single method. My work draws on post-method pedagogy and multilingual approaches, so that learners’ own languages and cultural contexts become resources for learning English. I believe that emerging technologies, including artificial intelligence, should serve sound pedagogy and be used thoughtfully, alongside the rich traditions of Indian knowledge systems and the aims of NEP 2020. As a teacher educator, I aim to prepare reflective teachers; as an academic leader, I work to build a culture of quality, research and continuous professional development in my institution.`,
  stats: [
    { label: "Ph.D.", value: "Education" },
    { label: "UGC-NET", value: "Education & English" },
    { label: "GSET", value: "Education & English" },
    { label: "Research Papers", value: "19" },
    { label: "Authored Books", value: "6" },
    { label: "Edited Books", value: "4" },
    { label: "Invited Lectures", value: "22" },
    { label: "Conference Papers", value: "12" },
    { label: "Session Chair", value: "9" },
    { label: "IQAC Coordinator", value: "Since June 2021" }
  ],
  researchProfiles: {
    orcid: "0009-0001-8558-4839",
    googleScholar: "X92BI1AAAAAJ",
    vidwan: "655426",
    researcherId: "PUF-7257-2026",
    researchGate: "Rajnikant Dodiya",
    linkedIn: "Rajnikant Dodiya, Ph.D.",
    verifiedDomain: "hmpenglish.com",
    metricsAsOf: "September 2026",
    scholarCitations: 21,
    scholarCitationsSince2021: 18,
    hIndex: 3,
    i10Index: 0,
    rgScore: 74.2,
    rgCitations: 15,
    rgResearchItems: 18
  }
};

export const QUALIFICATIONS: Qualification[] = [
  { year: "2018", qualification: "Ph.D. in Education", institution: "Sardar Patel University, Vallabh Vidyanagar", details: "Thesis: 'A Study of the Educational Thoughts as reflected in APJ Abdul Kalam’s Writings'" },
  { year: "2015", qualification: "M.A. in English", institution: "Dr Babasaheb Ambedkar Open University, Ahmedabad", details: "57%" },
  { year: "2007", qualification: "M.Ed.", institution: "Sardar Patel University, Vallabh Vidyanagar", details: "73.87%" },
  { year: "2006", qualification: "B.Ed. – English Methodology", institution: "Sardar Patel University, Vallabh Vidyanagar", details: "78.93%" },
  { year: "2004", qualification: "B.A. in English", institution: "Gujarat University, Ahmedabad", details: "61.38%" }
];

export const ELIGIBILITIES: Eligibility[] = [
  { year: "2020", examination: "UGC-NET", subject: "English", body: "University Grants Commission" },
  { year: "2019", examination: "GSET", subject: "Education", body: "The Maharaja Sayajirao University of Baroda" },
  { year: "2018", examination: "GSET", subject: "English", body: "The Maharaja Sayajirao University of Baroda" },
  { year: "2009", examination: "UGC-NET", subject: "Education", body: "University Grants Commission" }
];

export const EXPERIENCES: Experience[] = [
  { period: "July 2019 – Present", position: "Assistant Professor – Pedagogy of English / English Language Pedagogy & Education", institution: "H. M. Patel Institute of English Training & Research, Vallabh Vidyanagar" },
  { period: "April 2015 – June 2019", position: "Principal", institution: "Government Primary School, Dholka, District Ahmedabad" },
  { period: "Sept 2011 – March 2015", position: "Assistant Teacher of English", institution: "Government Primary School, Singarva, District Ahmedabad" },
  { period: "Sept 2009 – June 2011", position: "Lecturer – Pedagogy of English", institution: "Shri Umiya College of Education, Ahmedabad" },
  { period: "Aug 2008 – April 2009", position: "Lecturer – Pedagogy of English", institution: "Smt. K.C.M. Shah B.Ed. College, Godhra" },
  { period: "July 2007 – April 2008", position: "Lecturer – Pedagogy of English", institution: "Smt. J.N. Patel B.Ed. College, Lunawada" }
];

export const EXPERTISE_AREAS = [
  "English Language Education (ELE) & ELT",
  "Teacher Education",
  "Language Pedagogy",
  "Artificial Intelligence in Education",
  "AI-Integrated Techno-Pedagogy",
  "Digital Learning & EdTech",
  "Multilingual Education & Translanguaging",
  "Curriculum Development",
  "Assessment & Evaluation",
  "Higher Education",
  "Faculty Development & Capacity Building",
  "Research Methodology",
  "NEP 2020 · Indian Knowledge Systems",
  "Academic Leadership",
  "Institutional Quality Assurance"
];

export const MEMBERSHIPS: Membership[] = [
  { association: "All India Association for Educational Research (AIAER)", type: "Lifetime Member", period: "Since July 2026" },
  { association: "Council for Teacher Education (CTE), Gujarat Chapter", type: "Lifetime Member", period: "Since July 2026" },
  { association: "Association of English Teachers (AINET), affiliate of IATEFL – UK", type: "Short-term Member", period: "July 2026 – July 2029" },
  { association: "The English Language Teachers’ Association of India (ELTAI)", type: "Short-term Member", period: "August 2026 – August 2029" },
  { association: "Indian Society for Training & Development (ISTD)", type: "Lifetime Member", period: "Since July 2026" },
  { association: "Anand District Management Association (ADMA)", type: "Member", period: "Since August 2026" }
];

export const PUBLICATIONS: Publication[] = [
  { no: 1, year: 2026, title: "From Monolingualism to Multilingualism: Reimagining English Language Education in India under NEP 2020", journal: "ELT Quarterly", theme: "ELT & Multilingual Education", issn: "ISSN 0975-0258" },
  { no: 2, year: 2026, title: "Towards Context-Sensitive English Language Teaching: A Post-Method Perspective", journal: "International Journal of Literary Studies", theme: "ELT & Language Pedagogy", issn: "ISSN 2231-4652" },
  { no: 3, year: 2026, title: "Blended Learning: An Innovative Approach in English Language Teaching", journal: "Zankhana – International Peer Reviewed E-Journal, Vol. 12, Issue 10", theme: "ELT & EdTech", issn: "E-ISSN 2350-0271" },
  { no: 4, year: 2024, title: "Teachings from Literature on Pandemics", journal: "Research Guru – International Peer-Reviewed Journal, Vol. 17, Issue 4", theme: "Literature & Education", issn: "E-ISSN 2349-266X" },
  { no: 5, year: 2022, title: "Envisioning New Policy for Examination and Assessment in the Era of Uncertainty", journal: "Research Guru, Vol. 16, Issue 1", theme: "Assessment & Evaluation", issn: "E-ISSN 2349-266X" },
  { no: 6, year: 2021, title: "The Role of Education in the Problems of Emotional Adjustment in Adolescence", journal: "Zankhana, Vol. 8, Issue 1", theme: "Education & Society", issn: "E-ISSN 2350-0271" },
  { no: 7, year: 2020, title: "The Educational Imperatives Implied in Dr APJ Abdul Kalam’s Writings about National Development", journal: "Zankhana, Vol. 6, Issue 12", theme: "Kalam Studies", issn: "E-ISSN 2350-0271" },
  { no: 8, year: 2019, title: "The Contribution of Charles Lamb as an Essayist to the English Literature", journal: "Research Guru, Vol. 13, Issue 1", theme: "English Literature", issn: "E-ISSN 2349-266X" },
  { no: 9, year: 2019, title: "The Contribution of Daniel Defoe to the English Novel with Special Reference to Robinson Crusoe", journal: "Research Guru, Vol. 12, Issue 4", theme: "English Literature", issn: "E-ISSN 2349-266X" },
  { no: 10, year: 2018, title: "Teacher Education: Problems and Remedies", journal: "Research Guru, Vol. 12, Issue 1", theme: "Teacher Education", issn: "E-ISSN 2349-266X" },
  { no: 11, year: 2018, title: "The Developmental Concerns of Education as Expressed in the Reports of the Indian Education Commissions", journal: "JETIR, Vol. 5, Issue 5", theme: "Education Policy", issn: "E-ISSN 2349-5162" },
  { no: 12, year: 2018, title: "APJ Abdul Kalam’s Thoughts on Leadership in Education as Reflected in His Writings", journal: "IJRAR, Vol. 5, Issue 2", theme: "Kalam Studies", issn: "E-ISSN 2348-1269" },
  { no: 13, year: 2018, title: "Dr APJ Abdul Kalam’s Thoughts on Students as Reflected in His Writings", journal: "Vidyawarta, Vol. 8, Issue 22", theme: "Kalam Studies", issn: "ISSN 2319-9318" },
  { no: 14, year: 2018, title: "The Vision of Dr Ambedkar on Building Nation through Education", journal: "Research Guru, Vol. 11, Issue 4", theme: "Indian Thinkers", issn: "E-ISSN 2349-266X" },
  { no: 15, year: 2018, title: "The Factors Affecting the Education System of a Nation", journal: "IJRSML, Vol. 6, Issue 2", theme: "Education & Society", issn: "ISSN 2321-2853" },
  { no: 16, year: 2018, title: "APJ Abdul Kalam’s Thoughts on Education System as Reflected in His Writings", journal: "EduInspire Journal, Vol. 5, Issue 1", theme: "Kalam Studies", issn: "ISSN 2349-7076" },
  { no: 17, year: 2017, title: "Role of Education in Developing Peace and Harmony", journal: "International Education and Research Journal (IERJ), Vol. 3, Issue 5", theme: "Education & Society", issn: "ISSN 2454-9916" },
  { no: 18, year: 2017, title: "APJ Abdul Kalam’s Thoughts on Teacher as Reflected in His Writings", journal: "Social Impact Journal, Vol. 2, Issue 2", theme: "Kalam Studies", issn: "ISSN 2455-670X" },
  { no: 19, year: 2015, title: "The Educational Imperatives Implied in Dr APJ Abdul Kalam’s Writings about Social Development", journal: "Sorath Sudha – Peer-reviewed Journal, Vol. 1, Issue 10", theme: "Kalam Studies", issn: "ISSN 2394-5648" }
];

export const BOOKS: Book[] = [
  { year: 2018, title: "APJ Abdul Kalam on Education", publisher: "Madhuvan Store, Vallabh Vidyanagar", isbn: "978-81-937539-0-3", type: "authored" },
  { year: 2018, title: "Imperatives for Education in Views of APJ Abdul Kalam", publisher: "Madhuvan Store, Vallabh Vidyanagar", isbn: "978-81-937539-1-0", type: "authored" },
  { year: 2018, title: "Teaching of English Language", publisher: "WBG Publication, Ahmedabad", isbn: "978-93-85037-51-1", type: "authored" },
  { year: 2018, title: "Indian Thinkers with Educational Perspective", publisher: "WBG Publication, Ahmedabad", isbn: "978-93-85037-50-4", type: "authored" },
  { year: 2018, title: "Events in APJ Abdul Kalam’s Life", publisher: "Self-published", isbn: "978-93-5311-203-5", type: "authored" },
  { year: 2018, title: "The Key Factors and Concerns of Education", publisher: "Self-published", isbn: "978-93-5311-260-8", type: "authored" },

  { year: 2025, title: "Comparative Studies in Indian and Western Knowledge Systems", publisher: "H. M. Patel Institute of English Training & Research", isbn: "978-81-931777-6-1", type: "edited" },
  { year: 2024, title: "UGC NET English Literature", publisher: "Madhuvan Store, Vallabh Vidyanagar", isbn: "978-93-90256-27-3", type: "edited" },
  { year: 2022, title: "Current ELT Trends and Practices", publisher: "H. M. Patel Institute of English Training & Research", isbn: "978-81-931777-4-7", type: "edited" },
  { year: 2020, title: "Post-Method Pedagogy and its Reflections in ELT", publisher: "H. M. Patel Institute of English Training & Research", isbn: "978-81-931777-1-6", type: "edited" },

  { year: 2025, title: "Transforming Higher Education Through Digital Pedagogy and Resources", publisher: "Department of Education, Sardar Patel University", isbn: "978-93-6729-117-7", type: "chapter", details: "In '21st Century Higher Education: The Nexus of Technology, Pedagogy and Indian Ethos'" }
];

export const INVITED_TALKS: Engagement[] = [
  { id: "it-1", date: "24 Aug 2026", year: 2026, topic: "English Communication Skills for Future Teachers", event: "One-day Workshop on Basic English Language, Sardar Patel College of Education, Vallabh Vidyanagar", level: "State", category: "lecture" },
  { id: "it-2", date: "22 Aug 2026", year: 2026, topic: "English Beyond Graduation: Career Pathways for English Students", event: "Anand Arts College, Anand", level: "State", category: "lecture" },
  { id: "it-3", date: "21 Aug 2026", year: 2026, topic: "Hands-on FinTech Entrepreneurship", event: "World Entrepreneurship Day programme, Anand Commerce College & Infinity Wealth, Anand", level: "State", category: "lecture" },
  { id: "it-4", date: "03 Aug 2026", year: 2026, topic: "Developing Listening and Speaking Skills", event: "English Enrichment Course, Alumni Association, HMPIETR", level: "State", category: "lecture" },
  { id: "it-5", date: "10 Jul 2026", year: 2026, topic: "How to Succeed in B.Ed.: Study Skills, Time Management and Academic Excellence", event: "Waymade College of Education, The CVM University", level: "State", category: "lecture" },
  { id: "it-6", date: "05 May 2026", year: 2026, topic: "Effective Resume Writing", event: "G.J. Patel Institute of Ayurvedic Studies and Research, The CVM University", level: "State", category: "lecture" },
  { id: "it-7", date: "05 Feb 2026", year: 2026, topic: "Resume Writing Workshop", event: "P.G. Department of Education, Sardar Patel University", level: "State", category: "lecture" },
  { id: "it-8", date: "28 Jan 2026", year: 2026, topic: "Career Counselling", event: "Anand College of Education, Anand", level: "State", category: "lecture" },
  { id: "it-9", date: "22 Jan 2026", year: 2026, topic: "Preparation for Competitive Exams", event: "Waymade College of Education, The CVM University", level: "State", category: "lecture" },
  { id: "it-10", date: "23 Aug 2024", year: 2024, topic: "Communicative Approach and Post-CLT Scenario", event: "M.A. (ELT) Expert Session Series, ILSASS, Vallabh Vidyanagar", level: "State", category: "lecture" },
  { id: "it-11", date: "13 Aug 2024", year: 2024, topic: "Programme Evaluation – Course Design IV", event: "PGDHE Extended Contact Programme, IGNOU", level: "National", category: "lecture" },
  { id: "it-12", date: "06 Aug 2024", year: 2024, topic: "Communication Skills: Developing English Proficiency", event: "Orientation Programme, Birla Vishvakarma Mahavidyalaya (BVM)", level: "State", category: "lecture" },
  { id: "it-13", date: "11 Jul 2024", year: 2024, topic: "Language Skills", event: "Orientation Programme, ILSASS, Vallabh Vidyanagar", level: "State", category: "lecture" },
  { id: "it-14", date: "21 May 2024", year: 2024, topic: "Higher Education System", event: "Free Online NET Coaching Programme, Dept. of English, Sardar Patel University", level: "National", category: "lecture" },
  { id: "it-15", date: "21 Aug 2023", year: 2023, topic: "Productive and Receptive Skills", event: "English Enrichment Programme, Alumni Association, HMPIETR", level: "State", category: "lecture" },
  { id: "it-16", date: "10 Jan 2023", year: 2023, topic: "Listening & Speaking Skills", event: "Personality Development Programme – English Communication Skills, BJVM / HMP CDC", level: "State", category: "lecture" },
  { id: "it-17", date: "23 Sep 2022", year: 2022, topic: "Communication Skills", event: "Student Induction Programme, BVM Engineering College", level: "State", category: "lecture" },
  { id: "it-18", date: "19–25 May 2022", year: 2022, topic: "Basic Interpersonal Communication Skills (BICS) for Bilingual Teachers", event: "One-week Training Programme, HMPIETR", level: "State", category: "lecture" },
  { id: "it-19", date: "05 Jul 2021", year: 2021, topic: "Assessment and Evaluation in Education", event: "Ph.D. Course Work Sessions, Waymade College of Education", level: "State", category: "lecture" },
  { id: "it-20", date: "15 Jun 2021", year: 2021, topic: "Teaching of LSRW", event: "ELT Expert Sessions Series, HMPIETR", level: "State", category: "lecture" },
  { id: "it-21", date: "21–22 Sep 2020", year: 2020, topic: "UGC-NET Paper I: Teaching Aptitude and Major Topics", event: "UGC-NET Guidance Sessions, Dept. of English, M.K. Bhavnagar University", level: "National", category: "lecture" },
  { id: "it-22", date: "05, 08 & 10 Sep 2020", year: 2020, topic: "E-Book Design and Development (three sessions)", event: "Online Certificate Course on Multimedia in Education, IITE, Gandhinagar", level: "State", category: "lecture" }
];

export const CONFERENCE_PAPERS: Engagement[] = [
  { id: "cp-1", date: "09 Mar 2026", year: 2026, topic: "Digitizing Wisdom: Technology-Integrated Education Rooted in Indian Knowledge Systems for India-2026", event: "International Seminar 'India 2026: One Nation, One Destiny', N.H. Patel College of Education, Anand", level: "International", category: "paper" },
  { id: "cp-2", date: "07 Feb 2026", year: 2026, topic: "Effect of Translanguaging Pedagogy on English Reading Comprehension among Secondary School ESL Learners", event: "International Conference on Interdisciplinary Approaches to English, CLASS–CHARUSAT", level: "International", category: "paper" },
  { id: "cp-3", date: "29–31 Jan 2026", year: 2026, topic: "Postmethod Pedagogy in Indian Higher Education: Towards Context-Sensitive Classroom Practices", event: "National Seminar on Decolonizing ELT, Shri Govind Guru University, Godhra", level: "National", category: "paper" },
  { id: "cp-4", date: "23 Dec 2025", year: 2025, topic: "Digital Education as a Catalyst for Inclusive Nation Building: A Vision for Viksit Bharat 2047", event: "National Seminar, KCG & N.H. Patel College of Education, Anand", level: "National", category: "paper" },
  { id: "cp-5", date: "20 Feb 2025", year: 2025, topic: "Exploring the Synergy of Jain Philosophy and Indian Knowledge Systems in the Context of NEP 2020", event: "National Seminar, Sardar Patel University", level: "National", category: "paper" },
  { id: "cp-6", date: "08 Feb 2025", year: 2025, topic: "Digital Tools and Evolution of Indian Traditional Storytelling for Language Learning", event: "National Conference on Indian Knowledge Systems and Language Education, HMPIETR", level: "National", category: "paper" },
  { id: "cp-7", date: "25 Feb 2023", year: 2023, topic: "A Study of the Socio-cultural Dimensions of English Studies in Indian Classrooms", event: "International Conference on Sociocultural Dimensions of English Studies, HMPIETR", level: "International", category: "paper" },
  { id: "cp-8", date: "25–26 Feb 2022", year: 2022, topic: "Implementing Discourse-based Approaches in English Language Teaching in India", event: "National Conference on Discourse Oriented Pedagogy for Language Classroom, HMPIETR & ELTAI", level: "National", category: "paper" },
  { id: "cp-9", date: "19–21 Aug 2020", year: 2020, topic: "Media Tools for Effective English Language Teaching", event: "National Web-conference on English Studies in India, HMPIETR", level: "National", category: "paper" },
  { id: "cp-10", date: "27–28 Apr 2020", year: 2020, topic: "ICT Enabled Teaching-Learning Process Education in Era of Pandemic", event: "Online National Seminar, IITE, Gandhinagar", level: "National", category: "paper" },
  { id: "cp-11", date: "07–08 Feb 2020", year: 2020, topic: "Pedagogical Uses of Blogs in English Language Teaching Classroom", event: "National Conference on Post Method Pedagogy in English Classroom, HMPIETR & ELTAI", level: "National", category: "paper" },
  { id: "cp-12", date: "02–03 Dec 2018", year: 2018, topic: "Harmony through Education", event: "International Conference on Harmony Through Education & Inclusive Education, BAOU & GERA", level: "International", category: "paper" }
];

export const SESSION_CHAIRS: Engagement[] = [
  { id: "sc-1", date: "29–31 Jan 2026", year: 2026, topic: "Decolonizing ELT: A Postmethod Approach for Higher Education in India for effective Implementation of NEP 2020", event: "National Seminar, Shri Govind Guru University, Godhra", level: "National", category: "chair" },
  { id: "sc-2", date: "23 Dec 2025", year: 2025, topic: "Viksit Bharat 2047: The Role of Education in Nation Building", event: "National Seminar, KCG & N.H. Patel College of Education", level: "National", category: "chair" },
  { id: "sc-3", date: "08 Feb 2025", year: 2025, topic: "Indian Knowledge Systems and Language Education", event: "National Conference, HMPIETR", level: "National", category: "chair" },
  { id: "sc-4", date: "25 Feb 2023", year: 2023, topic: "Socio-cultural Dimensions of English Studies", event: "International Conference, HMPIETR / IAAR / Vedant Knowledge Systems", level: "International", category: "chair" },
  { id: "sc-5", date: "13–16 May 2022", year: 2022, topic: "Academic Studies Congress", event: "Osmaniye Korkut Ata University, Türkiye", level: "International", category: "chair" },
  { id: "sc-6", date: "25–26 Feb 2022", year: 2022, topic: "Discourse Oriented Pedagogy for Language Classroom", event: "National Conference, HMPIETR & ELTAI", level: "National", category: "chair" },
  { id: "sc-7", date: "28 Aug 2021", year: 2021, topic: "Teaching Science through Real Life Examples", event: "Science Symposium, Waymade College of Education", level: "State", category: "chair" },
  { id: "sc-8", date: "19–21 Aug 2020", year: 2020, topic: "English Studies in India: Challenges, Policies and Possibilities", event: "National Web-conference, HMPIETR", level: "National", category: "chair" },
  { id: "sc-9", date: "07–08 Feb 2020", year: 2020, topic: "Post Method Pedagogy in English Classroom", event: "National Conference, HMPIETR & ELTAI", level: "National", category: "chair" }
];

export const FDP_TRAININGS: Engagement[] = [
  { id: "fdp-1", date: "16–28 Feb 2026", year: 2026, topic: "Refresher Course on 'Teaching, Research and Technology' (Online)", event: "UGC-MMTTC, Central University of Kerala", level: "National", category: "fdp", typeLabel: "RC", duration: "2 weeks (12 days)" },
  { id: "fdp-2", date: "18–23 Aug 2025", year: 2025, topic: "Faculty Development Programme", event: "UGC-HRDC, Dept. of Education, Sardar Patel University", level: "State", category: "fdp", typeLabel: "FDP", duration: "1 week" },
  { id: "fdp-3", date: "01–06 Jul 2025", year: 2025, topic: "Faculty Development Programme", event: "H. M. Patel Institute of English Training & Research", level: "State", category: "fdp", typeLabel: "FDP", duration: "1 week" },
  { id: "fdp-4", date: "15 May–11 Jun 2025", year: 2025, topic: "Orientation Programme / Faculty Induction Programme", event: "UGC-MMTTC, Gujarat University, Ahmedabad", level: "State", category: "fdp", typeLabel: "OP/FIP", duration: "4 weeks" },
  { id: "fdp-5", date: "15–28 Apr 2025", year: 2025, topic: "Refresher Course on Research Methodology and Data Analysis", event: "UGC-MMTTC, Bhagat Phool Singh Mahila Vishwavidyalaya, Sonipat", level: "National", category: "fdp", typeLabel: "RC", duration: "2 weeks" },
  { id: "fdp-6", date: "17–21 Mar 2025", year: 2025, topic: "FDP on 'Enhancing Professional Skills and Capabilities of the Teaching Fraternity'", event: "Aspire Square & S.M. Patel College of Home Science", level: "State", category: "fdp", typeLabel: "FDP", duration: "1 week" },
  { id: "fdp-7", date: "24 Feb–03 Mar 2025", year: 2025, topic: "Short-Term Programme on 'Education and Indian Knowledge System'", event: "UGC-MMTTC, Indian Institute of Teacher Education, Gandhinagar", level: "State", category: "fdp", typeLabel: "STP", duration: "1 week" },
  { id: "fdp-8", date: "11–19 Mar 2024", year: 2024, topic: "NEP 2020 Orientation and Sensitization Programme", event: "Central University of Gujarat, UGC Malaviya Mission Teacher Training Programme", level: "National", category: "fdp", typeLabel: "STC", duration: "2 weeks" },
  { id: "fdp-9", date: "22 Jan–20 Feb 2024", year: 2024, topic: "Orientation Programme / Faculty Induction Programme", event: "Teaching Learning Centre, Ramanujan College, University of Delhi", level: "National", category: "fdp", typeLabel: "OP/FIP", duration: "4 weeks" },
  { id: "fdp-10", date: "04–14 Oct 2021", year: 2021, topic: "Online Faculty Development Programme on Education", event: "Knowledge Consortium of Gujarat, Government of Gujarat", level: "State", category: "fdp", typeLabel: "FDP", duration: "2 weeks" },
  { id: "fdp-11", date: "30 Mar–09 Apr 2021", year: 2021, topic: "Online General Faculty Development Programme", event: "Knowledge Consortium of Gujarat, Government of Gujarat", level: "State", category: "fdp", typeLabel: "FDP", duration: "2 weeks" },
  { id: "fdp-12", date: "05–10 Aug 2019", year: 2019, topic: "Faculty Development Programme", event: "H. M. Patel Institute of English Training & Research", level: "State", category: "fdp", typeLabel: "FDP", duration: "1 week" }
];

export const LATEST_UPDATES: UpdateItem[] = [
  { date: "24 Aug 2026", title: "Invited lecture: English Communication Skills for Future Teachers", category: "News", details: "Sardar Patel College of Education, Vallabh Vidyanagar" },
  { date: "22 Aug 2026", title: "Invited lecture: English Beyond Graduation: Career Pathways for English Students", category: "News", details: "Anand Arts College, Anand" },
  { date: "21 Aug 2026", title: "Invited lecture: Hands-on FinTech Entrepreneurship", category: "News", details: "World Entrepreneurship Day, Anand Commerce College & Infinity Wealth" },
  { date: "Aug 2026", title: "Joined ELTAI (2026–2029) and Anand District Management Association (ADMA)", category: "News" },
  { date: "Jul 2026", title: "Lifetime membership of AIAER, CTE Gujarat Chapter and ISTD; AINET membership 2026–2029", category: "News" },
  { date: "2026", title: "Three new research papers published in ELT Quarterly, IJLS, and Zankhana", category: "Achievements" },
  { date: "Mar 2026", title: "Presented paper at International Seminar 'India 2026: One Nation, One Destiny'", category: "News", details: "N.H. Patel College of Education, Anand" }
];

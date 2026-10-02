export interface StudyMaterial {
  id: string;
  title: string;
  subtitle: string;
  category: 'Exam Guides' | 'Annotated Classics' | 'Seminar Notes' | 'PhD Blueprints' | 'Syllabus Packs';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  pages: number;
  format: string;
  badge?: string;
  description: string;
  keyFeatures: string[];
  samplePreview: {
    chapterTitle: string;
    excerptText: string;
    annotations: { line: number; text: string }[];
  };
  fileSize: string;
  downloadFormat: string;
}

export interface Monograph {
  id: string;
  title: string;
  year: string;
  publisher: string;
  description: string;
  citation: string;
  isbn: string;
  linkUrl: string;
}

export interface LectureCourse {
  code: string;
  title: string;
  level: string;
  term: string;
  description: string;
  syllabusAvailable: boolean;
}

export interface TwainQuote {
  quote: string;
  context: string;
}

export const PROFESSOR_INFO = {
  name: "Dr. Rajnikant Dodiya, PhD",
  title: "Regius Chair of Comparative Literature & American Realism",
  institution: "Department of Humanities, Columbia University",
  degrees: "B.A. (Oxon), M.Phil (Yale), Ph.D. in Literature (Oxford)",
  office: "Hamilton Hall, Suite 408 • Columbia University",
  email: "dr.dodiya@columbia.edu",
  photoUrl: "/dr-rajnikant-dodiya.jpg",
  twainInspirationNote: "Inspired by Mark Twain’s fearless satire and insistence on intellectual honesty, Dr. Rajnikant Dodiya’s scholarship examines the moral conscience in 19th-century American and European literature.",
  bio: "Dr. Rajnikant Dodiya is the Regius Chair of Comparative Literature at Columbia University and a former Senior Fellow at Oxford. With over two decades of university teaching, he specializes in 19th-century American realism, Mark Twain's socio-political satire, and European narrative form. He has mentored over 40 doctoral candidates and published four seminal university press monographs.",
  stats: {
    booksPublished: 4,
    phdStudentsGraduated: 44,
    studyMaterialsSold: 3120,
    yearsTenure: 22
  }
};

export const MARK_TWAIN_QUOTES: TwainQuote[] = [
  {
    quote: "The man who does not read has no advantage over the man who cannot read.",
    context: "Framing Principle of Dr. Dodiya's Doctoral Seminar on Critical Hermeneutics"
  },
  {
    quote: "A 'classic' is a book which people praise and don't read.",
    context: "Opening Epigraph of 'Annotated Master Edition: American Satire'"
  },
  {
    quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    context: "Reflections on 19th-Century Moral Realism"
  },
  {
    quote: "Books are for people who wish they were somewhere else.",
    context: "Introductory Lecture: Narrative Space & Geographical Imagination"
  }
];

export const STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: "phd-exam-blueprint",
    title: "PhD Literature Comprehensive Exam Master Blueprint",
    subtitle: "Complete 50-Canon Reading Matrix & Oral Defense Playbook (2025/2026 Edition)",
    category: "Exam Guides",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.96,
    reviewsCount: 142,
    pages: 142,
    format: "PDF + Notion Master Workspace + Anki Flashcard Decks",
    badge: "Bestseller",
    description: "The definitive doctoral examination preparation guide for graduate scholars in Comparative Literature, American Realism, and Critical Theory. Authored by Dr. Rajnikant Dodiya. Includes condensed primary canon breakdowns, theory synthesis matrices, and 100 actual oral examination defense prompts.",
    keyFeatures: [
      "50 Master Reading Summaries (Classic to Post-Structuralism)",
      "Comparative Synthesis Tables mapping theoretical movements across centuries",
      "Oral Defense Strategy & Deconstruction Question Framework",
      "Printable High-Yield Flashcards + Pre-formatted Notion Database"
    ],
    samplePreview: {
      chapterTitle: "Chapter 3: The Moral Satire of Mark Twain & American Realism",
      excerptText: "Twain’s use of vernacular dialect in Huckleberry Finn is not merely stylistic realism; it represents an epistemological rebellion against the polite, hypocritical moral grammar of antebellum Southern aristocracy...",
      annotations: [
        { line: 1, text: "Compare Twain's vernacular voice with Walt Whitman’s democratic poetic syntax in Leaves of Grass." },
        { line: 3, text: "Key Exam Defense Tip (Dr. Dodiya): Be prepared to contrast Twain’s irony with Swift’s Gulliver’s Travels." }
      ]
    },
    fileSize: "18.4 MB",
    downloadFormat: "PDF & ZIP"
  },
  {
    id: "twain-huck-finn-annotated",
    title: "Mark Twain & The American Satire: Scholar’s Annotated Master Edition",
    subtitle: "Line-by-Line Vernacular Etymology, Historical Footnotes & Dialectic Analysis",
    category: "Annotated Classics",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.99,
    reviewsCount: 118,
    pages: 220,
    format: "Searchable Annotated PDF + Audio Pronunciation Guide",
    badge: "Essential",
    description: "Prepared for Dr. Rajnikant Dodiya’s senior seminar at Columbia. Features comprehensive margin commentary, historical context on 19th-century Mississippi River commerce, and textual variants across early manuscript printings.",
    keyFeatures: [
      "Line-by-line dialectical and historical annotations by Dr. Dodiya",
      "Over 500 margin notes detailing 19th-century social satire and idioms",
      "Structural maps of the Mississippi River journey as moral allegory",
      "Comprehensive bibliography of secondary criticism from Trilling to Ellison"
    ],
    samplePreview: {
      chapterTitle: "Chapter 16: The Fog & The Moral Crossroads on the River",
      excerptText: "It got to be brightness after a while, but it wasn't the sun. It was the river getting wide and deep... I got to feeling so mean and so miserable I most wished I was dead...",
      annotations: [
        { line: 1, text: "The river fog serves as a physical manifestation of Huck's moral disorientation between societal law and conscience." },
        { line: 2, text: "Mark Twain's manuscript note: 'Conscience takes up more room than all the rest of a person's insides.'" }
      ]
    },
    fileSize: "22.5 MB",
    downloadFormat: "PDF"
  },
  {
    id: "american-realism-notes",
    title: "19th-Century American Realism & Twain: Graduate Seminar Vault",
    subtitle: "14 Lecture Transcriptions, Vernacular Irony & European Parallels",
    category: "Seminar Notes",
    price: 19.99,
    rating: 4.91,
    reviewsCount: 76,
    pages: 105,
    format: "Annotated PDF + High-Res Manuscript Scans",
    description: "Transcribed from Dr. Rajnikant Dodiya’s acclaimed Columbia graduate lectures on Mark Twain, Henry James, Edith Wharton, and Stephen Crane. Explores how American writers forged a distinct national literature distinct from Victorian conventions.",
    keyFeatures: [
      "Complete lecture notes from Dr. Dodiya's ENGL 801 Doctoral Seminar",
      "Comparative analysis of Twain's humor vs. Henry James's psychological interiority",
      "Archival manuscript scans of Twain's speech notes and lectures",
      "Sample exam questions with high-scoring student essay responses"
    ],
    samplePreview: {
      chapterTitle: "Lecture 5: Humor as the Weapon of Conscience in Mark Twain",
      excerptText: "Twain understood that humor must not be merely light entertainment; true humor must be grounded in moral indignation against cruelty and religious hypocrisy...",
      annotations: [
        { line: 1, text: "Cross-reference with Twain's essay 'How to Tell a Story' (1895)." }
      ]
    },
    fileSize: "14.2 MB",
    downloadFormat: "PDF"
  },
  {
    id: "dissertation-blueprint",
    title: "Dissertation Architecture: Prospectus to University Monograph",
    subtitle: "Grant Writing Templates, Publisher Pitch Deck & JSTOR Workflow",
    category: "PhD Blueprints",
    price: 49.99,
    originalPrice: 79.99,
    rating: 5.0,
    reviewsCount: 95,
    pages: 180,
    format: "PDF + Editable Word/LaTeX Templates + Zotero Library Export",
    badge: "Must Have",
    description: "A comprehensive toolkit for humanities PhD candidates crafting their dissertation prospectus, organizing multi-year research archives, writing chapter drafts, and pitching university presses. Designed by Dr. Dodiya.",
    keyFeatures: [
      "Prospectus Template approved by Ivy League committee chairs",
      "Sample 5-Chapter Outline Architecture with page-budget calculators",
      "Complete University Press Pitch Letter (OUP, CUP, Harvard UP)",
      "Zotero/Mendeley Citation Taxonomy for Literature & Critical Theory"
    ],
    samplePreview: {
      chapterTitle: "Section 2: Writing the Literature Review Without Drowning in Secondary Sources",
      excerptText: "A dissertation literature review is not a summary of everything written on your topic; it is an arena where you position your thesis as the necessary key to an unexamined problem...",
      annotations: [
        { line: 1, text: "Use the 'Three-Pass Method' for reading monograph introductions to save 60% of research time." }
      ]
    },
    fileSize: "32.0 MB",
    downloadFormat: "ZIP (PDF, LaTeX, DOCX)"
  },
  {
    id: "gothic-poetics-syllabus",
    title: "Satire & The Gothic Sublime: Complete Syllabus & Essay Bundle",
    subtitle: "14-Week Curriculum, Primary/Secondary Pairings & Graded Model Essays",
    category: "Syllabus Packs",
    price: 29.99,
    rating: 4.94,
    reviewsCount: 64,
    pages: 110,
    format: "Editable PDF + Syllabus Word Doc",
    description: "Full course design for university instructors or independent scholars studying 19th-century satire, gothic romance, and social critique across American and European traditions.",
    keyFeatures: [
      "Week-by-week reading schedules and seminar discussion prompts",
      "Secondary source pairings (Trilling, Foucault, Bakhtin, Said)",
      "8 Grade-A Student Essays with detailed professor commentary",
      "Midterm & Final Examination papers with complete evaluation rubrics"
    ],
    samplePreview: {
      chapterTitle: "Week 7: The Carnivalesque in Mark Twain & Rabelais",
      excerptText: "Bakhtin’s theory of the carnivalesque provides a vital lens for understanding Twain’s irreverence toward established authority and ecclesiastical pomposity...",
      annotations: [
        { line: 1, text: "Compare with Bakhtin's Rabelais and His World (1965)." }
      ]
    },
    fileSize: "15.3 MB",
    downloadFormat: "PDF & DOCX"
  }
];

export const MONOGRAPHS: Monograph[] = [
  {
    id: "twain-moral-conscience",
    title: "The Irony of Conscience: Mark Twain & The Forging of American Realism",
    year: "2022",
    publisher: "Oxford University Press",
    description: "A definitive study by Dr. Rajnikant Dodiya examining how Mark Twain used vernacular humor and moral irony to challenge Gilded Age hypocrisy and redefine American literary identity.",
    citation: "Dodiya, Rajnikant. The Irony of Conscience: Mark Twain & The Forging of American Realism. Oxford University Press, 2022.",
    isbn: "978-0-19-987452-1",
    linkUrl: "https://global.oup.com"
  },
  {
    id: "satire-in-ruins",
    title: "Satire in Ruins: 19th-Century Social Critique in Transatlantic Literature",
    year: "2018",
    publisher: "Cambridge University Press",
    description: "Investigates how transatlantic writers from Twain to Dickens used satire to dismantle industrial greed and class rigidities.",
    citation: "Dodiya, Rajnikant. Satire in Ruins. Cambridge University Press, 2018.",
    isbn: "978-1-107-28319-2",
    linkUrl: "https://www.cambridge.org"
  },
  {
    id: "vernacular-sublime",
    title: "The Vernacular Sublime: Dialect as Resistance in Democratic Poetics",
    year: "2024",
    publisher: "PMLA (Publications of the Modern Language Association, Vol. 139, No. 2)",
    description: "Examines dialect and spoken vernacular as political resistance against elitist literary canons in 19th and 20th century fiction.",
    citation: "Dodiya, R. (2024). The Vernacular Sublime. PMLA, 139(2), 245-271.",
    isbn: "ISSN: 0030-8129",
    linkUrl: "https://www.mlajournals.org"
  }
];

export const COURSES: LectureCourse[] = [
  {
    code: "ENGL 801",
    title: "Advanced Critical Theory & American Realism",
    level: "Doctoral Seminar",
    term: "Fall Semester",
    description: "Rigorous doctoral study led by Dr. Rajnikant Dodiya covering American realism, vernacular poetics, and critical theory from Bakhtin and Trilling to contemporary hermeneutics.",
    syllabusAvailable: true
  },
  {
    code: "ENGL 412",
    title: "Mark Twain & The Moral Conscience of Satire",
    level: "Senior Undergraduate Seminar",
    term: "Spring Semester",
    description: "In-depth investigation of Mark Twain's major works, travel writing, personal correspondence, and socio-political essays.",
    syllabusAvailable: true
  },
  {
    code: "ENGL 305",
    title: "Comparative Satire: Swift, Twain, & Voltaire",
    level: "Undergraduate Core Curriculum",
    term: "Fall & Spring",
    description: "A cross-cultural examination of literary satire, moral irony, and social critique across Enlightenment and 19th-century masterpieces.",
    syllabusAvailable: true
  }
];

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from "jspdf";
import { 
  GraduationCap, 
  Globe, 
  BookOpen, 
  Cpu, 
  Briefcase, 
  Plane, 
  ShieldCheck, 
  Users,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ChevronDown,
  Youtube,
  Search,
  Filter,
  School,
  Languages,
  Clock,
  Award,
  Shield,
  Calendar,
  BriefcaseIcon,
  Laptop,
  Rocket,
  Target,
  Building2,
  Handshake,
  UserPlus,
  TrendingUp,
  DollarSign
} from 'lucide-react';

// --- Constants ---

const servicesData = [
  {
    id: "overseas-consultancy",
    icon: <Globe className="w-8 h-8" />,
    title: "Overseas Consultancy",
    desc: "Comprehensive guidance for admission to top foreign universities and colleges worldwide. We help you choose the right course and institution based on your profile and goals."
  },
  {
    id: "visa-facilitation",
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Visa Facilitation",
    desc: "Expert support for student visa applications, including meticulous documentation review, mock interview preparation, and guidance on financial requirements."
  },
  {
    id: "language-preparation",
    icon: <Languages className="w-8 h-8" />,
    title: "Language Preparation",
    desc: "Specialized training for English proficiency tests like IELTS, TOEFL, and PTE. Our expert instructors provide personalized feedback to help you achieve your target score."
  },
  {
    id: "academic-assistance",
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Academic Assistance",
    desc: "Tutoring, training facilitation, and curriculum support for all levels. We provide academic resources and guidance to ensure your success in your chosen field of study."
  },
  {
    id: "it-digital-learning",
    icon: <Cpu className="w-8 h-8" />,
    title: "IT & Digital Learning",
    desc: "Design and delivery of high-quality e-learning content, educational software, and IT support services to enhance the digital learning experience."
  },
  {
    id: "career-guidance",
    icon: <Briefcase className="w-8 h-8" />,
    title: "Career Guidance",
    desc: "Professional training, skill development, and career counseling services. We help you map out your career path and prepare for the global job market."
  }
];

const scholarshipsData = [
  {
    id: 1,
    slug: "chevening-scholarships",
    title: "Chevening Scholarships",
    country: "UK",
    amount: "Fully Funded",
    level: "Master's",
    desc: "The UK government's international awards program aimed at developing global leaders.",
    eligibility: "Applicants from Chevening-eligible countries with a minimum of two years' work experience.",
    link: "https://www.chevening.org/scholarships/",
    content: {
      overview: "Chevening is the UK government's international awards programme of the Foreign, Commonwealth & Development Office (FCDO) and partner organisations. The programme offers awards to study in the UK for one year on a fully funded master's degree course.",
      benefits: [
        "University tuition fees",
        "A monthly stipend",
        "Travel costs to and from the UK",
        "An arrival allowance",
        "A homeward departure allowance",
        "The cost of one visa application",
        "A travel grant to attend Chevening events in the UK"
      ],
      applicationProcess: "The application process for Chevening Scholarships takes approximately eight months from the application deadline to when applicants are conditionally selected for an award. Applications must be submitted through the Chevening online application system.",
      requirements: [
        "Be a citizen of a Chevening-eligible country or territory",
        "Return to your country of citizenship for a minimum of two years after your award has ended",
        "Have completed all components of an undergraduate degree",
        "Have at least two years (equivalent to 2,800 hours) of work experience",
        "Apply to three different eligible UK university courses and have received an unconditional offer from one of these choices"
      ]
    }
  },
  {
    id: 2,
    slug: "fulbright-foreign-student-program",
    title: "Fulbright Foreign Student Program",
    country: "USA",
    amount: "Fully Funded",
    level: "Master's/PhD",
    desc: "Enables graduate students, young professionals and artists from abroad to study and conduct research in the US.",
    eligibility: "Varies by country. Generally requires a strong academic background and leadership potential.",
    link: "https://foreign.fulbrightonline.org/about/foreign-student-program",
    content: {
      overview: "The Fulbright Foreign Student Program enables graduate students, young professionals and artists from abroad to study and conduct research in the United States. The Fulbright Foreign Student Program operates in more than 160 countries worldwide.",
      benefits: [
        "Tuition and fees",
        "Living stipend",
        "Health insurance",
        "Airfare",
        "Professional development opportunities"
      ],
      applicationProcess: "Application details and grant terms for the Fulbright Foreign Student Program vary by country of citizenship. Interested applicants should consult the website of the Fulbright Commission or the Public Affairs Section of the U.S. Embassy in their home country.",
      requirements: [
        "Varies by country",
        "Strong academic record",
        "English language proficiency",
        "Leadership potential",
        "Commitment to cultural exchange"
      ]
    }
  },
  {
    id: 3,
    slug: "australia-awards",
    title: "Australia Awards",
    country: "Australia",
    amount: "Fully Funded",
    level: "Bachelor's/Master's/PhD",
    desc: "Long-term awards administered by the Department of Foreign Affairs and Trade.",
    eligibility: "Citizens of participating countries in Asia, the Pacific, the Middle East and Africa.",
    link: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships",
    content: {
      overview: "Australia Awards Scholarships are long-term awards administered by the Department of Foreign Affairs and Trade. They aim to contribute to the development needs of Australia's partner countries in line with bilateral and regional agreements.",
      benefits: [
        "Full tuition fees",
        "Return air travel",
        "Establishment allowance",
        "Contribution to Living Expenses (CLE)",
        "Introductory Academic Program (IAP)",
        "Overseas Student Health Cover (OSHC)"
      ],
      applicationProcess: "Applications are typically open from February to April each year. Applicants must apply online through the OASIS system or via mail if online application is not possible in their country.",
      requirements: [
        "Be at least 18 years of age",
        "Be a citizen of a participating country",
        "Not be a citizen of Australia",
        "Satisfy the admission requirements of the institution",
        "Satisfy all requirements of the Department of Home Affairs"
      ]
    }
  },
  {
    id: 4,
    slug: "vanier-canada-graduate-scholarships",
    title: "Vanier Canada Graduate Scholarships",
    country: "Canada",
    amount: "$50,000 per year",
    level: "PhD",
    desc: "Aims to attract and retain world-class doctoral students and establish Canada as a global centre of excellence in research and higher learning.",
    eligibility: "Canadian and international students pursuing a doctoral degree at a Canadian university.",
    link: "https://vanier.gc.ca/en/home-accueil.html",
    content: {
      overview: "The Vanier Canada Graduate Scholarships (Vanier CGS) program was created to attract and retain world-class doctoral students and to establish Canada as a global centre of excellence in research and higher learning.",
      benefits: [
        "$50,000 per year for three years",
        "Prestige and recognition",
        "Networking opportunities",
        "Support for high-impact research"
      ],
      applicationProcess: "Candidates must be nominated by a Canadian institution with a quota to host Vanier scholars. Candidates should contact the faculty of graduate studies at their selected Canadian institution.",
      requirements: [
        "Be nominated by only one Canadian institution",
        "Be pursuing a first doctoral degree",
        "Intend to pursue full-time doctoral studies",
        "Have achieved a first-class average in each of the last two years of full-time study",
        "Demonstrate strong leadership skills and high standard of scholarly achievement"
      ]
    }
  },
  {
    id: 5,
    slug: "daad-scholarships",
    title: "DAAD Scholarships",
    country: "Germany",
    amount: "Monthly stipend + Travel",
    level: "Master's/PhD",
    desc: "Offers a wide range of scholarships for international students to study in Germany.",
    eligibility: "Graduates with at least two years' professional experience.",
    link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    content: {
      overview: "DAAD scholarships offer foreign graduates from development and newly industrialised countries from all disciplines and with at least two years' professional experience the chance to take a postgraduate or Master's degree at a state or state-recognised German university.",
      benefits: [
        "Monthly payments of 934 euros for graduates or 1,200 euros for doctoral candidates",
        "Payments towards health, accident and personal liability insurance cover",
        "Travel allowance",
        "One-off study allowance"
      ],
      applicationProcess: "Applications are submitted online through the DAAD portal. Deadlines vary depending on the chosen study program and the applicant's home country.",
      requirements: [
        "Bachelor's degree in an appropriate subject",
        "At least two years of professional experience",
        "Academic degrees should normally not be more than six years old",
        "English or German language skills depending on the program"
      ]
    }
  },
  {
    id: 6,
    slug: "erasmus-mundus-joint-masters",
    title: "Erasmus Mundus Joint Masters",
    country: "Europe",
    amount: "Fully Funded",
    level: "Master's",
    desc: "High-level integrated study programmes, at master level, delivered by an international partnership of higher education institutions.",
    eligibility: "Students from all over the world can apply.",
    link: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters",
    content: {
      overview: "Erasmus Mundus Joint Masters are high-level integrated study programmes, at master level, delivered by an international partnership of higher education institutions. They involve at least three institutions from at least three different countries.",
      benefits: [
        "Full scholarship covering tuition fees",
        "Insurance",
        "Travel costs",
        "Installation costs",
        "Monthly subsistence allowance"
      ],
      applicationProcess: "Students apply directly to the consortium delivering the programme. You can consult the online catalogue of Erasmus Mundus Master Programmes to find the one that interests you.",
      requirements: [
        "Have a first higher education degree or equivalent",
        "Not have already benefited from an EMJM scholarship",
        "English language proficiency",
        "Specific requirements set by the individual program consortium"
      ]
    }
  }
];

const ScholarshipDetailPage = ({ slug, onBack }: { slug: string, onBack: () => void }) => {
  const scholarship = scholarshipsData.find(s => s.slug === slug);

  if (!scholarship) return <div>Scholarship not found</div>;

  const handleDownload = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Header
    doc.setFillColor(220, 38, 38); // Red-600
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text("Band9 Edu", 20, 25);
    doc.setFontSize(12);
    doc.text("Your Gateway to Global Education", 20, 33);
    
    // Scholarship Title
    doc.setTextColor(31, 41, 55); // Gray-800
    doc.setFontSize(20);
    doc.text(scholarship.title, 20, 60);
    
    // Details
    doc.setFontSize(12);
    doc.setTextColor(75, 85, 99); // Gray-600
    doc.text(`Country: ${scholarship.country}`, 20, 70);
    doc.text(`Level: ${scholarship.level}`, 20, 77);
    doc.text(`Amount: ${scholarship.amount}`, 20, 84);
    
    // Overview
    doc.setFontSize(16);
    doc.setTextColor(31, 41, 55);
    doc.text("Overview", 20, 100);
    doc.setFontSize(11);
    doc.setTextColor(75, 85, 99);
    const overviewLines = doc.splitTextToSize(scholarship.content.overview, pageWidth - 40);
    doc.text(overviewLines, 20, 108);
    
    let currentY = 108 + (overviewLines.length * 5) + 10;
    
    // Benefits
    doc.setFontSize(16);
    doc.setTextColor(31, 41, 55);
    doc.text("Key Benefits", 20, currentY);
    doc.setFontSize(11);
    doc.setTextColor(75, 85, 99);
    currentY += 8;
    scholarship.content.benefits.forEach((benefit: string) => {
      doc.text(`• ${benefit}`, 25, currentY);
      currentY += 6;
    });
    
    currentY += 10;
    
    // Requirements
    doc.setFontSize(16);
    doc.setTextColor(31, 41, 55);
    doc.text("Requirements", 20, currentY);
    doc.setFontSize(11);
    doc.setTextColor(75, 85, 99);
    currentY += 8;
    scholarship.content.requirements.forEach((req: string, index: number) => {
      const reqLines = doc.splitTextToSize(`${index + 1}. ${req}`, pageWidth - 45);
      if (currentY + (reqLines.length * 5) > 260) {
        doc.addPage();
        currentY = 20;
      }
      doc.text(reqLines, 25, currentY);
      currentY += (reqLines.length * 5) + 2;
    });

    // Footer / Ads
    const footerY = doc.internal.pageSize.getHeight() - 30;
    doc.setFillColor(249, 250, 251); // Gray-50
    doc.rect(0, footerY, pageWidth, 30, 'F');
    doc.setTextColor(31, 41, 55);
    doc.setFontSize(10);
    doc.text("Contact Band9 Edu for expert scholarship guidance and visa facilitation.", pageWidth / 2, footerY + 12, { align: 'center' });
    doc.setTextColor(220, 38, 38);
    doc.text("www.band9edu.com | +880 1234 567890", pageWidth / 2, footerY + 20, { align: 'center' });
    
    doc.save(`${scholarship.slug}-guide.pdf`);
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Scholarships
        </button>

        <div className="mb-12">
          <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-6">
            {scholarship.country}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{scholarship.title}</h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-red-600" />
              <span className="font-medium">{scholarship.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-600" />
              <span className="font-bold text-gray-900">{scholarship.amount}</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                <BookOpen className="w-5 h-5" />
              </div>
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">{scholarship.content.overview}</p>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                <Award className="w-5 h-5" />
              </div>
              Key Benefits
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {scholarship.content.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                <Users className="w-5 h-5" />
              </div>
              Eligibility Requirements
            </h2>
            <div className="space-y-4">
              {scholarship.content.requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="w-6 h-6 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-gray-600">{req}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                <Calendar className="w-5 h-5" />
              </div>
              Application Process
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">{scholarship.content.applicationProcess}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open(scholarship.link, '_blank')}
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-100"
              >
                Apply on Official Website <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleDownload}
                className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                Download Guide
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar-like CTA */}
        <div className="mt-16 p-8 bg-gray-900 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Need help with your application?</h3>
            <p className="text-gray-400 mb-8">Our expert consultants provide personalized guidance for {scholarship.title} and other global scholarships.</p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScholarshipsPage = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (page: string, param?: string) => void }) => {
  const [filter, setFilter] = useState('All');
  const countries = ['All', 'UK', 'USA', 'Canada', 'Australia', 'Germany', 'Europe'];

  const filteredScholarships = filter === 'All' 
    ? scholarshipsData 
    : scholarshipsData.filter(s => s.country === filter);

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">International <span className="text-red-600">Scholarships</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore fully-funded and partial scholarships to support your global education journey.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setFilter(country)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === country 
                ? 'bg-red-600 text-white shadow-lg shadow-red-200' 
                : 'bg-white text-gray-600 border border-gray-200 hover:border-red-600 hover:text-red-600'
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScholarships.map((scholarship) => (
            <motion.div
              key={scholarship.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {scholarship.country}
                </div>
                <div className="text-gray-400">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                {scholarship.title}
              </h3>
              
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <GraduationCap className="w-4 h-4 text-red-600" />
                  <span className="font-medium">{scholarship.level}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span className="font-bold text-gray-900">{scholarship.amount}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mt-4">
                  {scholarship.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-50 mt-auto">
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">Eligibility</div>
                <p className="text-xs text-gray-500 mb-6 italic">
                  {scholarship.eligibility}
                </p>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => window.open(scholarship.link, '_blank')}
                    className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 group/btn shadow-lg shadow-red-100"
                  >
                    Apply Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => onNavigate('scholarship-detail', scholarship.slug)}
                    className="w-full bg-white text-gray-700 border border-gray-200 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 bg-red-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-4xl font-bold mb-6 relative z-10">Need Help with Scholarship Applications?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Our experts have helped thousands of students secure fully-funded scholarships. Get a free consultation today.
          </p>
          <button className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-2xl text-lg relative z-10">
            Talk with Scholarship Expert
          </button>
        </div>
      </div>
    </div>
  );
};

const courseDetailsData: Record<string, any> = {
  "Digital Marketing": {
    title: "Digital Marketing",
    icon: <Target className="w-12 h-12" />,
    desc: "Master SEO, SEM, and Social Media strategies to drive business growth in the digital age.",
    duration: "12 Weeks",
    level: "Intermediate",
    salaryRange: "$35,000 - $75,000 per year",
    modules: [
      "Introduction to Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Email Marketing & Automation",
      "Web Analytics & Reporting"
    ],
    outcomes: [
      "Develop comprehensive digital marketing strategies",
      "Optimize websites for search engines",
      "Manage successful paid advertising campaigns",
      "Build and engage social media communities",
      "Analyze marketing data to improve ROI"
    ],
    opportunities: ["SEO Specialist", "Social Media Manager", "Content Strategist", "Digital Marketing Executive", "PPC Expert"]
  },
  "Online MBA": {
    title: "Online MBA",
    icon: <GraduationCap className="w-12 h-12" />,
    desc: "Global business management and leadership program designed for working professionals.",
    duration: "24 Months",
    level: "Advanced",
    salaryRange: "$60,000 - $120,000 per year",
    modules: [
      "Leadership and Organizational Behavior",
      "Financial Management",
      "Marketing Management",
      "Strategic Management",
      "Operations and Supply Chain",
      "Entrepreneurship and Innovation",
      "Global Business Environment"
    ],
    outcomes: [
      "Develop strategic leadership skills",
      "Master financial decision-making",
      "Understand global market dynamics",
      "Build a strong professional network",
      "Enhance career prospects in management"
    ],
    opportunities: ["Business Development Manager", "Operations Manager", "Strategic Consultant", "Project Manager", "Marketing Director"]
  },
  "Web Development": {
    title: "Web Development",
    icon: <Laptop className="w-12 h-12" />,
    desc: "Full-stack development with modern frameworks and best practices.",
    duration: "16 Weeks",
    level: "Beginner to Intermediate",
    salaryRange: "$45,000 - $95,000 per year",
    modules: [
      "HTML5 & CSS3 Fundamentals",
      "Modern JavaScript (ES6+)",
      "React.js & State Management",
      "Node.js & Express Backend",
      "Database Design (SQL & NoSQL)",
      "API Development & Integration",
      "Deployment & Cloud Services"
    ],
    outcomes: [
      "Build responsive and interactive websites",
      "Develop full-stack web applications",
      "Master modern frontend frameworks",
      "Implement secure backend systems",
      "Understand web performance and SEO"
    ],
    opportunities: ["Frontend Developer", "Backend Developer", "Full-stack Engineer", "Web Architect", "Software Developer"]
  },
  "Graphic Design": {
    title: "Graphic Design",
    icon: <Award className="w-12 h-12" />,
    desc: "Visual storytelling and creative branding using industry-standard tools.",
    duration: "10 Weeks",
    level: "Beginner",
    salaryRange: "$30,000 - $65,000 per year",
    modules: [
      "Design Principles & Theory",
      "Adobe Photoshop Mastery",
      "Adobe Illustrator for Vector Art",
      "Typography & Color Theory",
      "Branding & Identity Design",
      "UI/UX Design Basics",
      "Portfolio Development"
    ],
    outcomes: [
      "Create professional visual content",
      "Design compelling brand identities",
      "Master industry-standard design tools",
      "Understand visual communication",
      "Build a professional design portfolio"
    ],
    opportunities: ["Graphic Designer", "Brand Identity Designer", "UI/UX Designer", "Creative Director", "Illustrator"]
  },
  "Data Analytics": {
    title: "Data Analytics",
    icon: <Search className="w-12 h-12" />,
    desc: "Mastering data visualization and insights to drive data-informed decisions.",
    duration: "14 Weeks",
    level: "Intermediate",
    salaryRange: "$50,000 - $100,000 per year",
    modules: [
      "Statistics for Data Analysis",
      "Excel for Data Professionals",
      "SQL for Data Extraction",
      "Python for Data Science",
      "Data Visualization with Tableau",
      "Machine Learning Basics",
      "Business Intelligence Reporting"
    ],
    outcomes: [
      "Analyze complex datasets for insights",
      "Create interactive data dashboards",
      "Master SQL and Python for data",
      "Communicate data-driven stories",
      "Apply statistical methods to business"
    ],
    opportunities: ["Data Analyst", "Business Intelligence Analyst", "Data Scientist", "Market Research Analyst", "Operations Analyst"]
  },
  "Cyber Security": {
    title: "Cyber Security",
    icon: <Shield className="w-12 h-12" />,
    desc: "Protecting digital assets and networks from evolving cyber threats.",
    duration: "20 Weeks",
    level: "Intermediate to Advanced",
    salaryRange: "$55,000 - $110,000 per year",
    modules: [
      "Network Security Fundamentals",
      "Ethical Hacking & Penetration Testing",
      "Cryptography & Data Protection",
      "Incident Response & Management",
      "Cloud Security Best Practices",
      "Security Compliance & Auditing",
      "Digital Forensics"
    ],
    outcomes: [
      "Identify and mitigate security risks",
      "Perform vulnerability assessments",
      "Secure network infrastructures",
      "Respond to cyber security incidents",
      "Understand global security standards"
    ],
    opportunities: ["Security Analyst", "Ethical Hacker", "Security Consultant", "Network Security Engineer", "Information Security Manager"]
  }
};

const languagePrepData = [
  {
    id: "ielts",
    title: "IELTS",
    fullName: "International English Language Testing System",
    desc: "The International English Language Testing System (IELTS) is one of the most trusted English language proficiency exams in the world. It is accepted by more than 11,000 universities, colleges, immigration departments, and professional organizations globally.",
    details: "If you want to study, work, or migrate to countries like the UK, Canada, Australia, or New Zealand, IELTS is often required.",
    types: [
      { name: "IELTS Academic", desc: "Required for university admission (undergraduate and postgraduate programs)" },
      { name: "IELTS General Training", desc: "Required for migration or work visa (not usually for university admission)" }
    ],
    format: [
      { section: "Listening", time: "30 Minutes", details: "4 recordings, 40 questions. Includes conversations and academic lectures." },
      { section: "Reading", time: "60 Minutes", details: "3 passages, 40 questions. Academic reading passages from books and journals." },
      { section: "Writing", time: "60 Minutes", details: "Task 1: Report writing (graph/chart/process). Task 2: Essay writing (opinion/discussion/problem)." },
      { section: "Speaking", time: "11–14 Minutes", details: "Face-to-face interview with examiner. 3 parts: Introduction, Cue Card, Discussion." }
    ],
    scoring: {
      range: "0–9 Band Score",
      details: "Each section scored separately. Final score = Average of 4 sections.",
      requirements: "Most universities require: 6.0 – 6.5 for Bachelor’s, 6.5 – 7.5 for Master’s."
    },
    advantages: [
      "Widely accepted worldwide",
      "Accepted for immigration",
      "Paper & computer options available",
      "Strong recognition in UK & Australia"
    ],
    validity: "Valid for 2 years"
  },
  {
    id: "toefl",
    title: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    desc: "The Test of English as a Foreign Language (TOEFL) is mainly accepted by universities in the United States and Canada. It measures your ability to use and understand English at university level.",
    details: "It is highly preferred by American institutions and provides a comprehensive measure of academic English proficiency.",
    format: [
      { section: "Reading", time: "35 Minutes", details: "Academic passages with multiple-choice questions." },
      { section: "Listening", time: "36 Minutes", details: "Lectures & conversations. Note-taking required." },
      { section: "Speaking", time: "16 Minutes", details: "4 tasks. Recorded responses through microphone." },
      { section: "Writing", time: "29 Minutes", details: "Integrated writing task and independent essay." }
    ],
    scoring: {
      range: "0–120",
      details: "Each section: 0–30. Total Time: Around 2 hours.",
      requirements: "Most universities require: 80–90 for Bachelor’s, 90–100+ for Master’s."
    },
    advantages: [
      "Highly preferred in USA",
      "Fully computer-based",
      "Academic-focused test",
      "Detailed score report"
    ],
    validity: "Valid for 2 years"
  },
  {
    id: "pte",
    title: "PTE",
    fullName: "Pearson Test of English",
    desc: "PTE (Pearson Test of English) is a fully computer-based English language test that uses AI scoring technology. It is becoming very popular among students applying to Australia, UK, and Canada.",
    details: "PTE Academic is known for its fast results and unbiased AI-based scoring system.",
    format: [
      { section: "Speaking & Writing", time: "Combined", details: "Read aloud, repeat sentence, describe image, essay writing." },
      { section: "Reading", time: "25-30 Minutes", details: "Fill in blanks, reorder paragraphs, multiple choice." },
      { section: "Listening", time: "30-40 Minutes", details: "Summarize spoken text, multiple choice, write from dictation." }
    ],
    scoring: {
      range: "10–90",
      details: "AI-based scoring. Total Duration: About 2 hours.",
      requirements: "Most universities require: 50–58 for Bachelor’s, 58–65+ for Master’s."
    },
    advantages: [
      "Fast results (within 48 hours)",
      "AI scoring (no human bias)",
      "Flexible test dates",
      "Popular for Australia PR"
    ],
    validity: "Valid for 2 years"
  },
  {
    id: "duolingo",
    title: "Duolingo",
    fullName: "Duolingo English Test",
    desc: "Duolingo English Test is an affordable and fully online English test that you can take from home. It became very popular during COVID-19 and is now accepted by many universities worldwide.",
    details: "A modern language proficiency tool designed for today's international students and institutions.",
    format: [
      { section: "Adaptive Test", time: "45 Minutes", details: "Questions change based on your level. Covers Reading, Listening, Speaking, Writing." },
      { section: "Video Interview", time: "10 Minutes", details: "Open-ended responses that are shared with institutions." }
    ],
    scoring: {
      range: "10–160",
      details: "Results in 2 days. Total Duration: Around 1 hour.",
      requirements: "Most universities require: 95–105 for Bachelor’s, 105–120+ for Master’s."
    },
    advantages: [
      "Can take from home",
      "Cheaper than IELTS/TOEFL",
      "Fast results (2 days)",
      "Short duration"
    ],
    validity: "Valid for 2 years"
  }
];

// --- Components ---

const CareerPage = ({ onNavigate, onBack }: { onNavigate: (page: string) => void, onBack: () => void }) => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Build Your <span className="text-red-600">Future</span>
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to gain new skills or find your dream job, we're here to support your career journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => onNavigate('training')}
            className="relative p-10 rounded-3xl shadow-xl border border-gray-100 cursor-pointer group overflow-hidden hover:shadow-2xl transition-all h-[400px] flex flex-col justify-end"
          >
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-in-a-coffee-shop-40036-large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-white/90 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent group-hover:from-black/80 group-hover:via-black/20 group-hover:to-transparent transition-all duration-500" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                <Laptop className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">Training</h2>
              <p className="text-gray-600 mb-8 group-hover:text-gray-200 transition-colors duration-500">Master in-demand skills with our professional certification courses designed for global careers.</p>
              <div className="flex items-center gap-2 text-red-600 font-bold group-hover:text-white">
                Explore Courses <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => onNavigate('jobs')}
            className="relative p-10 rounded-3xl shadow-xl border border-gray-100 cursor-pointer group overflow-hidden hover:shadow-2xl transition-all h-[400px] flex flex-col justify-end"
          >
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-shaking-hands-in-a-meeting-40037-large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-white/90 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent group-hover:from-black/80 group-hover:via-black/20 group-hover:to-transparent transition-all duration-500" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                <BriefcaseIcon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">Jobs</h2>
              <p className="text-gray-600 mb-8 group-hover:text-gray-200 transition-colors duration-500">Find exciting career opportunities and internships within Band9 Edu and our partner network.</p>
              <div className="flex items-center gap-2 text-red-600 font-bold group-hover:text-white">
                View Vacancies <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const TrainingPage = ({ onNavigate, onBack }: { onNavigate: (page: string, param?: string) => void, onBack: () => void }) => {
  const courses = [
    { 
      title: "Digital Marketing", 
      icon: <Target className="w-6 h-6" />, 
      desc: "Master SEO, SEM, and Social Media strategies.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-marketing-specialist-working-on-a-laptop-40030-large.mp4"
    },
    { 
      title: "Online MBA", 
      icon: <GraduationCap className="w-6 h-6" />, 
      desc: "Global business management and leadership.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-businessman-working-on-his-laptop-in-the-office-40031-large.mp4"
    },
    { 
      title: "Web Development", 
      icon: <Laptop className="w-6 h-6" />, 
      desc: "Full-stack development with modern frameworks.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-computer-keyboard-40032-large.mp4"
    },
    { 
      title: "Graphic Design", 
      icon: <Award className="w-6 h-6" />, 
      desc: "Visual storytelling and creative branding.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-graphic-designer-working-on-a-digital-tablet-40033-large.mp4"
    },
    { 
      title: "Data Analytics", 
      icon: <Search className="w-6 h-6" />, 
      desc: "Mastering data visualization and insights.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-data-analysis-on-a-laptop-screen-40034-large.mp4"
    },
    { 
      title: "Cyber Security", 
      icon: <Shield className="w-6 h-6" />, 
      desc: "Protecting digital assets and networks.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hacker-typing-on-a-laptop-40035-large.mp4"
    }
  ];

  const partners = ["Google", "Microsoft", "Amazon", "Meta", "IBM", "Salesforce"];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Get Trained, <br />
              <span className="text-red-600">Get Hired.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our training programs are designed by industry experts to make you job-ready. We don't just teach; we assist you in securing your dream role.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>100% Job Placement Assistance</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>Industry-Recognized Certifications</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>Real-World Project Experience</span>
              </div>
            </div>
            <button className="bg-red-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100">
              Enroll Now
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-600 rounded-[40px] rotate-6 opacity-10"></div>
            <img 
              src="https://picsum.photos/seed/training/800/600" 
              alt="Training" 
              className="relative z-10 rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Professional Courses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative p-8 rounded-3xl border border-gray-100 overflow-hidden group transition-all h-[350px] flex flex-col justify-end"
              >
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  >
                    <source src={course.videoUrl} type="video/mp4" />
                  </video>
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-white/90 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent group-hover:from-black/80 group-hover:via-black/20 group-hover:to-transparent transition-all duration-500" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-500">{course.title}</h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-200 transition-colors duration-500 line-clamp-2">{course.desc}</p>
                  <button 
                    onClick={() => onNavigate('course-details', course.title)}
                    className="text-red-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group-hover:text-white"
                  >
                    Course Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Global Partnerships</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">We have partnered with leading tech giants and global corporations to provide our students with exclusive job opportunities.</p>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {partners.map((partner) => (
                <div key={partner} className="text-2xl font-bold text-gray-500 hover:text-white transition-colors cursor-default">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseDetailsPage = ({ courseTitle, onBack }: { courseTitle: string, onBack: () => void }) => {
  const course = courseDetailsData[courseTitle];

  if (!course) return null;

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Training
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8">
              {course.icon}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {course.desc}
            </p>
            
            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                <Clock className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Duration</p>
                  <p className="text-gray-900 font-bold">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                <Target className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Level</p>
                  <p className="text-gray-900 font-bold">{course.level}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                <Briefcase className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Avg. Package</p>
                  <p className="text-gray-900 font-bold">{course.salaryRange}</p>
                </div>
              </div>
            </div>

            <button className="bg-red-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100 text-lg">
              Enroll Now
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 p-8 lg:p-10 rounded-[40px] border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-red-600" />
                Course Modules
              </h2>
              <div className="space-y-4">
                {course.modules.map((module: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-8 lg:p-10 rounded-[40px] text-white">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-red-600" />
                Learning Outcomes
              </h2>
              <div className="space-y-4 mb-12">
                {course.outcomes.map((outcome: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{outcome}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <BriefcaseIcon className="w-6 h-6 text-red-600" />
                Career Opportunities
              </h2>
              <div className="flex flex-wrap gap-3">
                {course.opportunities.map((opp: string, i: number) => (
                  <span key={i} className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-gray-200 border border-white/10">
                    {opp}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center pt-8">
              <button className="bg-red-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100 text-lg w-full">
                Enroll Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const JobsPage = ({ onBack }: { onBack: () => void }) => {
  const jobs = [
    { title: "Senior Student Counselor", type: "Full-time", location: "Dhaka, BD", salary: "$1200 - $1800" },
    { title: "Digital Marketing Executive", type: "Full-time", location: "Remote", salary: "$1000 - $1500" },
    { title: "IT Support Specialist", type: "Full-time", location: "Dhaka, BD", salary: "$800 - $1200" },
    { title: "Content Writer (Intern)", type: "Internship", location: "Remote", salary: "Stipend" },
    { title: "Visa Processing Officer", type: "Full-time", location: "Dhaka, BD", salary: "$900 - $1400" },
    { title: "UI/UX Designer (Intern)", type: "Internship", location: "Remote", salary: "Stipend" }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Current <span className="text-red-600">Vacancies</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our mission to transform global education. We're looking for passionate individuals to join our growing team.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 lg:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
                  {job.type === 'Internship' ? <UserPlus className="w-7 h-7" /> : <Building2 className="w-7 h-7" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1 font-bold text-red-600">{job.salary}</span>
                  </div>
                </div>
              </div>
              <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100 whitespace-nowrap">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6">Don't see a role that fits? Send us your CV anyway!</p>
          <button className="text-red-600 font-bold border-b-2 border-red-600 pb-1 hover:text-red-700 hover:border-red-700 transition-all">
            careers@band9edu.com
          </button>
        </div>
      </div>
    </div>
  );
};

const TeamPage = ({ onBack }: { onBack: () => void }) => {
  const team = [
    { name: "MD Moudud Ahmed Misil", role: "Founder", image: "https://picsum.photos/seed/founder/400/400" },
    { name: "Imran khan", role: "Director", image: "https://picsum.photos/seed/director1/400/400" },
    { name: "Muqtar Ali", role: "Director", image: "https://picsum.photos/seed/director2/400/400" },
    { name: "Md Millat Hosen", role: "TECH", image: "https://picsum.photos/seed/tech/400/400" },
    { name: "Nuna Angbo", role: "language Trainer", image: "https://picsum.photos/seed/trainer/400/400" }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-12 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Meet Our <span className="text-red-600">Team</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">The dedicated professionals behind Band9 Edu, committed to your global success.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">
                      <Twitter className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-bold uppercase tracking-widest text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InvestorsPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-12 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Investor <span className="text-red-600">Relations</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Partner with us as we redefine the future of global education and career development.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Why Invest in Band9 Edu?</h2>
            <p className="text-lg text-gray-600">Band9 Edu is at the forefront of the rapidly growing international education market. Our innovative platform and personalized approach are transforming how students and professionals navigate their global careers.</p>
            <div className="space-y-4">
              {[
                { title: "Market Leadership", desc: "Dominant presence in key emerging markets with high demand for global education." },
                { title: "Scalable Technology", desc: "Proprietary AI-driven course matching and application management systems." },
                { title: "High Growth Potential", desc: "Consistent year-over-year growth in student placements and revenue." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/invest/800/600" 
              alt="Investors" 
              className="rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-[30px] shadow-xl">
              <p className="text-4xl font-bold mb-1">150%+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Annual Growth</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-[40px] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Interested in Partnering?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Contact our investor relations team for more information about investment opportunities and our strategic roadmap.</p>
          <button className="bg-red-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all">
            Contact Investor Relations
          </button>
        </div>
      </div>
    </div>
  );
};

const AccommodationPage = ({ onBack }: { onBack: () => void }) => {
  const [filters, setFilters] = useState({
    country: '',
    university: '',
    priceRange: ''
  });

  const accommodations = [
    { id: 1, name: "Oxford Student Village", country: "UK", university: "University of Oxford", price: 180, image: "https://picsum.photos/seed/acc1/800/600", type: "En-suite" },
    { id: 2, name: "Cambridge Heights", country: "UK", university: "University of Cambridge", price: 220, image: "https://picsum.photos/seed/acc2/800/Cam", type: "Studio" },
    { id: 3, name: "Harvard Square Apartments", country: "USA", university: "Harvard University", price: 350, image: "https://picsum.photos/seed/acc3/800/600", type: "Shared Flat" },
    { id: 4, name: "Toronto Campus Living", country: "CANADA", university: "University of Toronto", price: 280, image: "https://picsum.photos/seed/acc4/800/600", type: "En-suite" },
    { id: 5, name: "Sydney Harbour Stay", country: "AUSTRALIA", university: "University of Sydney", price: 310, image: "https://picsum.photos/seed/acc5/800/600", type: "Studio" },
    { id: 6, name: "Berlin Student Hub", country: "GERMANY", university: "Humboldt University", price: 150, image: "https://picsum.photos/seed/acc6/800/600", type: "Shared Room" },
    { id: 7, name: "London Bridge Residence", country: "UK", university: "King's College London", price: 250, image: "https://picsum.photos/seed/acc7/800/600", type: "En-suite" },
    { id: 8, name: "NYC Scholar House", country: "USA", university: "Columbia University", price: 400, image: "https://picsum.photos/seed/acc8/800/600", type: "Studio" },
    { id: 9, name: "Melbourne City Stay", country: "AUSTRALIA", university: "University of Melbourne", price: 290, image: "https://picsum.photos/seed/acc9/800/600", type: "En-suite" },
  ];

  const filteredAccommodations = accommodations.filter(acc => {
    return (filters.country === '' || acc.country === filters.country) &&
           (filters.university === '' || acc.university.toLowerCase().includes(filters.university.toLowerCase())) &&
           (filters.priceRange === '' || (
             filters.priceRange === 'low' ? acc.price < 200 :
             filters.priceRange === 'mid' ? (acc.price >= 200 && acc.price <= 300) :
             acc.price > 300
           ));
  });

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-12 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Student <span className="text-red-600">Accommodation</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find your perfect home away from home with our curated student housing options.</p>
        </div>

        {/* Filter Board */}
        <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Country</label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none appearance-none"
                  value={filters.country}
                  onChange={(e) => setFilters({...filters, country: e.target.value})}
                >
                  <option value="">All Countries</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">USA</option>
                  <option value="CANADA">Canada</option>
                  <option value="AUSTRALIA">Australia</option>
                  <option value="GERMANY">Germany</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">University</label>
              <div className="relative">
                <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search by university..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none"
                  value={filters.university}
                  onChange={(e) => setFilters({...filters, university: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Price Range</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none appearance-none"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                  <option value="">All Prices</option>
                  <option value="low">Under $200 / week</option>
                  <option value="mid">$200 - $300 / week</option>
                  <option value="high">Above $300 / week</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccommodations.map((acc) => (
            <motion.div 
              key={acc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={acc.image} 
                  alt={acc.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-red-600 shadow-lg">
                  ${acc.price}/wk
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest mb-3">
                  <MapPin className="w-3 h-3" />
                  {acc.country}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{acc.name}</h3>
                <p className="text-gray-600 mb-6 flex items-center gap-2">
                  <School className="w-4 h-4" />
                  {acc.university}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-500">{acc.type}</span>
                  <button className="flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all">
                    Contact Agent <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredAccommodations.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your filters to find more options.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = ({ onNavigate }: { onNavigate: (page: string, param?: string) => void }) => {
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const countries = [
    "UK", "USA", "CANADA", "AUSTRALIA", "GERMANY", "IRELAND", "FRANCE", "ITALY", "DUBAI", "ESTONIA", 
    "LATVIA", "LITHUANIA", "BELGIUM", "NETHERLAND", "FINLAND", "MALTA", "CHINA", "INDIA", "BANGLADESH", "OTHERS"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer mr-2 flex-shrink-0" onClick={() => onNavigate('home')}>
            <img src="/logo.png" alt="Band9 Edu Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
            <span className="text-xl font-bold tracking-tight text-gray-900">Band9 <span className="text-red-600">Edu</span></span>
          </div>
          <div className="hidden lg:flex items-center gap-3 flex-1">
            <div 
              className="relative flex items-center gap-1 cursor-pointer group py-4"
              onMouseEnter={() => setIsDestOpen(true)}
              onMouseLeave={() => setIsDestOpen(false)}
              onClick={() => {
                onNavigate('destinations');
                setIsDestOpen(false);
              }}
            >
              <span className="text-[14px] font-medium text-gray-800 group-hover:text-red-600 transition-colors whitespace-nowrap">Destinations</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-500 group-hover:text-red-600 transition-colors transform transition-transform ${isDestOpen ? 'rotate-180' : ''}`} />
              
              <AnimatePresence>
                {isDestOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-[60] mt-1"
                  >
                    <div className="grid grid-cols-4 gap-4">
                      {countries.map((country) => (
                        <div 
                          key={country} 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (country === "OTHERS") {
                              onNavigate('destinations');
                            } else {
                              onNavigate('country-study', country);
                            }
                            setIsDestOpen(false);
                          }}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-red-600 transition-colors" />
                          <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">{country}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onNavigate('course-finder');
              }} 
              className="text-[14px] font-medium text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap"
            >
              Course finder
            </a>
            
            <div 
              className="relative flex items-center gap-1 cursor-pointer group py-4"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              onClick={() => {
                onNavigate('services');
                setIsServicesOpen(false);
              }}
            >
              <span className="text-[14px] font-medium text-gray-800 group-hover:text-red-600 transition-colors whitespace-nowrap">Services</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-500 group-hover:text-red-600 transition-colors transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[60] mt-1"
                  >
                    <div className="flex flex-col gap-1">
                      {servicesData.map((service) => (
                        <div 
                          key={service.id} 
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('services');
                            setIsServicesOpen(false);
                          }}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                        >
                          <div className="text-gray-400 group-hover/item:text-red-600 transition-colors">
                            {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5" })}
                          </div>
                          <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">{service.title}</span>
                        </div>
                      ))}
                      <div className="h-px bg-gray-100 my-2" />
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('services');
                          setIsServicesOpen(false);
                        }}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                      >
                        <span className="text-sm font-bold text-red-600">ALL SERVICES</span>
                        <ArrowRight className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative flex items-center gap-1 cursor-pointer group py-4"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
              onClick={() => {
                onNavigate('services'); // Default to services page if clicked
                setIsLangOpen(false);
              }}
            >
              <span className="text-[14px] font-medium text-gray-800 group-hover:text-red-600 transition-colors whitespace-nowrap">Language prep</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-500 group-hover:text-red-600 transition-colors transform transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-[250px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[60] mt-1"
                  >
                    <div className="flex flex-col gap-1">
                      {languagePrepData.map((exam) => (
                        <div 
                          key={exam.id} 
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('language-prep', exam.id);
                            setIsLangOpen(false);
                          }}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                        >
                          <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">{exam.title}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div 
              className="relative flex items-center gap-1 cursor-pointer group py-4"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
              onClick={() => {
                onNavigate('scholarships');
                setIsResourcesOpen(false);
              }}
            >
              <span className="text-[14px] font-medium text-gray-800 group-hover:text-red-600 transition-colors whitespace-nowrap">Resources</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-500 group-hover:text-red-600 transition-colors transform transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-[200px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[60] mt-1"
                  >
                    <div className="flex flex-col gap-1">
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('scholarships');
                          setIsResourcesOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                      >
                        <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">Scholarships</span>
                      </div>
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('study-guides');
                          setIsResourcesOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                      >
                        <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">Study Guides</span>
                      </div>
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('student-blogs');
                          setIsResourcesOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                      >
                        <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">Student Blogs</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div 
              className="relative flex items-center gap-1 cursor-pointer group py-4"
              onMouseEnter={() => setIsCareerOpen(true)}
              onMouseLeave={() => setIsCareerOpen(false)}
              onClick={() => {
                onNavigate('career');
                setIsCareerOpen(false);
              }}
            >
              <span className="text-[14px] font-medium text-gray-800 group-hover:text-red-600 transition-colors whitespace-nowrap">Career</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-500 group-hover:text-red-600 transition-colors transform transition-transform ${isCareerOpen ? 'rotate-180' : ''}`} />
              
              <AnimatePresence>
                {isCareerOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-[200px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[60] mt-1"
                  >
                    <div className="flex flex-col gap-1">
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('training');
                          setIsCareerOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                      >
                        <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">Training</span>
                      </div>
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('jobs');
                          setIsCareerOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                      >
                        <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">Jobs</span>
                      </div>
                      <div className="h-px bg-gray-100 my-2" />
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('career');
                          setIsCareerOpen(false);
                        }}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                      >
                        <span className="text-sm font-bold text-red-600">EXPLORE ALL</span>
                        <ArrowRight className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div 
              className="relative flex items-center gap-1 cursor-pointer group py-4"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <span className="text-[14px] font-medium text-gray-800 group-hover:text-red-600 transition-colors whitespace-nowrap">Company</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-500 group-hover:text-red-600 transition-colors transform transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} />
              
              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-[200px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[60] mt-1"
                  >
                    <div className="flex flex-col gap-1">
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('about');
                          setIsCompanyOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                      >
                        <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">About</span>
                      </div>
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('team');
                          setIsCompanyOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                      >
                        <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">Team</span>
                      </div>
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('investors');
                          setIsCompanyOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 group/item transition-all cursor-pointer"
                      >
                        <span className="text-sm text-gray-600 group-hover/item:text-red-600 font-medium">Investors</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('accommodation'); }} className="text-[13px] xl:text-[14px] font-medium text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">Accommodation</a>
          </div>
          <button className="hidden lg:flex bg-red-600 text-white px-5 py-2.5 rounded-xl text-[13px] xl:text-[14px] font-bold hover:bg-red-700 transition-all items-center gap-2 ml-12 flex-shrink-0">
            Book free counselling <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, color: "hover:bg-[#0077b5]", label: "LinkedIn", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, color: "hover:bg-[#1877f2]", label: "Facebook", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, color: "hover:bg-[#ff0000]", label: "YouTube", href: "#" },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ), 
      color: "hover:bg-[#25d366]", 
      label: "WhatsApp", 
      href: "#" 
    }
  ];

  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden relative">
      {/* Social Sidebar */}
      <div className="hidden xl:flex flex-col gap-4 absolute left-8 top-1/2 -translate-y-1/2 z-40">
        {socialLinks.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ scale: 1.1, x: 5 }}
            className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 group`}
            title={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Plane className="w-3 h-3" />
              Your Journey Starts Here
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Empowering Your <span className="text-red-600">Global Education</span> Dreams
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From academic assistance to visa facilitation, we provide end-to-end support for students seeking international education and professional growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition-all flex items-center gap-2 shadow-xl shadow-red-200 text-lg group">
                Talk with Expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-900">5,000+ Students</p>
                <p className="text-gray-500">Successfully Placed Globally</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/education/800/600" 
                alt="Students Studying" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 rounded-full flex flex-col items-center justify-center text-white font-bold text-center p-4 shadow-[0_10px_40px_rgba(220,38,38,0.5)] z-30 border-4 border-white cursor-default"
            >
              <span className="text-3xl mb-1 drop-shadow-md">100%</span>
              <span className="text-[11px] uppercase tracking-widest leading-tight font-extrabold drop-shadow-sm">Visa Success<br/>Rate</span>
            </motion.div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Certified Partner</p>
                  <p className="font-bold text-gray-900">Global Universities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-red-600 font-bold text-sm uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Educational Solutions</h3>
          <p className="text-gray-600">We offer a wide range of services designed to support students, professionals, and institutions in their educational journey.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
              <button className="w-full py-3 rounded-xl border border-red-100 text-red-600 font-bold text-sm hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2">
                Talk with Expert
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Destinations = ({ onSeeAll, onNavigate }: { onSeeAll: () => void, onNavigate: (page: string, country?: string) => void }) => {
  const countries = [
    { 
      name: "United Kingdom", 
      id: "UK",
      img: "https://picsum.photos/seed/london/400/300",
      desc: "Home to world-class universities and rich academic heritage."
    },
    { 
      name: "USA", 
      id: "USA",
      img: "https://picsum.photos/seed/nyc/400/300",
      desc: "Diverse opportunities in the land of innovation and research."
    },
    { 
      name: "Canada", 
      id: "CANADA",
      img: "https://picsum.photos/seed/toronto/400/300",
      desc: "High-quality education with excellent post-study work options."
    },
    { 
      name: "Australia", 
      id: "AUSTRALIA",
      img: "https://picsum.photos/seed/sydney/400/300",
      desc: "Top-ranked universities in a vibrant, multicultural environment."
    },
    { 
      name: "Germany", 
      id: "GERMANY",
      img: "https://picsum.photos/seed/berlin/400/300",
      desc: "Tuition-free public universities and strong industrial links."
    },
    { 
      name: "Ireland", 
      id: "IRELAND",
      img: "https://picsum.photos/seed/dublin/400/300",
      desc: "A friendly, English-speaking hub for tech and innovation."
    }
  ];

  return (
    <section id="destinations" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-red-600 font-bold text-sm uppercase tracking-widest mb-3">Global Reach</h2>
            <h3 className="text-4xl font-bold text-gray-900">Study in Your Dream Destination</h3>
          </div>
          <button 
            onClick={onSeeAll}
            className="text-red-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All Countries <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((c, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              onClick={() => onNavigate('country-study', c.id)}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-lg"
            >
              <img 
                src={c.img} 
                alt={c.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white font-bold text-2xl mb-2">{c.name}</h4>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {c.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-red-500 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Explore More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseFinderPage = ({ onBack }: { onBack: () => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const courses = [
    {
      title: "MSc International Business",
      university: "University of Hertfordshire",
      location: "United Kingdom",
      level: "Postgraduate",
      duration: "1 Year",
      intake: "Sep, Jan",
      fee: "£15,500"
    },
    {
      title: "BSc Computer Science",
      university: "Coventry University",
      location: "United Kingdom",
      level: "Undergraduate",
      duration: "3 Years",
      intake: "Sep, Jan, May",
      fee: "£16,800"
    },
    {
      title: "MBA Global Business",
      university: "University of Greenwich",
      location: "United Kingdom",
      level: "Postgraduate",
      duration: "1 Year",
      intake: "Sep, Jan, Apr",
      fee: "£16,000"
    },
    {
      title: "MSc Data Science",
      university: "University of East London",
      location: "United Kingdom",
      level: "Postgraduate",
      duration: "1 Year",
      intake: "Sep, Jan",
      fee: "£14,500"
    },
    {
      title: "BEng Mechanical Engineering",
      university: "Teesside University",
      location: "United Kingdom",
      level: "Undergraduate",
      duration: "3 Years",
      intake: "Sep, Jan",
      fee: "£14,000"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Finder</h1>
          <p className="text-gray-600 text-lg">Find your perfect course from thousands of options across global universities.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold">
                <Filter className="w-5 h-5 text-red-600" />
                Filters
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Study Level</label>
                  <div className="space-y-2">
                    {['Undergraduate', 'Postgraduate', 'Foundation', 'Doctorate'].map(level => (
                      <label key={level} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
                        <span className="text-sm text-gray-600 group-hover:text-red-600 transition-colors">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Country</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-red-600 outline-none">
                    <option>All Countries</option>
                    <option>United Kingdom</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Subject Area</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-red-600 outline-none">
                    <option>All Subjects</option>
                    <option>Business & Management</option>
                    <option>Computer Science & IT</option>
                    <option>Engineering</option>
                    <option>Health & Medicine</option>
                  </select>
                </div>
              </div>

              <button className="w-full mt-8 bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-all text-sm">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for courses, universities or subjects..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none shadow-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Course List */}
            <div className="space-y-4">
              {courses.map((course, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
                        <School className="w-3.5 h-3.5" />
                        {course.university}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{course.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {course.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <GraduationCap className="w-4 h-4" />
                          {course.level}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" />
                          {course.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-8">
                      <div className="text-right">
                        <p className="text-xs text-gray-400 uppercase font-bold">Annual Fee</p>
                        <p className="text-xl font-bold text-gray-900">{course.fee}</p>
                      </div>
                      <button className="bg-red-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-red-700 transition-all text-sm whitespace-nowrap">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const countryData: Record<string, any> = {
  "UK": {
    name: "United Kingdom",
    fullName: "United Kingdom",
    desc: "The UK is a global leader in education, offering a rich history of academic excellence and a wide range of courses at world-renowned universities.",
    universities: "160+",
    psw: "2 Years",
    image: "https://picsum.photos/seed/uk-education/800/600",
    advantages: [
      { title: "World-Class Education", desc: "UK universities consistently rank among the best in the world, ensuring a high-quality learning experience." },
      { title: "Shorter Course Duration", desc: "Most Master's degrees in the UK are only one year long, saving you time and money." },
      { title: "Cultural Diversity", desc: "Experience a vibrant, multicultural society that welcomes students from all over the globe." }
    ]
  },
  "USA": {
    name: "USA",
    fullName: "United States of America",
    desc: "The USA offers a vast array of educational opportunities with some of the world's most prestigious institutions and a focus on innovation.",
    universities: "4,000+",
    psw: "1-3 Years (OPT)",
    image: "https://picsum.photos/seed/usa-edu/800/600",
    advantages: [
      { title: "Academic Excellence", desc: "Home to many of the world's top-ranked universities and research facilities." },
      { title: "Flexible Education System", desc: "Choose from a wide variety of courses and customize your learning path." },
      { title: "Global Career Opportunities", desc: "Gain experience in one of the world's largest economies with global industry leaders." }
    ]
  },
  "CANADA": {
    name: "CANADA",
    fullName: "Canada",
    desc: "Canada is known for its high-quality education, safe environment, and excellent post-graduation work and immigration opportunities.",
    universities: "100+",
    psw: "Up to 3 Years",
    image: "https://picsum.photos/seed/canada-edu/800/600",
    advantages: [
      { title: "Quality of Life", desc: "Consistently ranked as one of the best countries to live in with a high standard of safety." },
      { title: "Affordable Education", desc: "Lower tuition fees compared to other popular study destinations like the USA or UK." },
      { title: "Work While Studying", desc: "International students can work part-time during studies and full-time during breaks." }
    ]
  },
  "AUSTRALIA": {
    name: "AUSTRALIA",
    fullName: "Australia",
    desc: "Australia offers a unique blend of world-class education and an exceptional lifestyle in a diverse and welcoming society.",
    universities: "40+",
    psw: "2-4 Years",
    image: "https://picsum.photos/seed/australia-edu/800/600",
    advantages: [
      { title: "Global Recognition", desc: "Australian degrees are highly valued by employers and academic institutions worldwide." },
      { title: "Research Opportunities", desc: "Strong focus on research and innovation across various fields of study." },
      { title: "Vibrant Student Life", desc: "Enjoy a high standard of living and beautiful natural landscapes while you study." }
    ]
  },
  "GERMANY": {
    name: "GERMANY",
    fullName: "Germany",
    desc: "Germany is a top destination for international students, offering high-quality education and strong links to industry.",
    universities: "400+",
    psw: "18 Months",
    image: "https://picsum.photos/seed/germany-edu/800/600",
    advantages: [
      { title: "Low Tuition Fees", desc: "Many public universities offer tuition-free education for international students." },
      { title: "Strong Economy", desc: "Excellent job prospects in Europe's largest economy, especially for STEM graduates." },
      { title: "Rich History & Culture", desc: "Experience a blend of historic tradition and modern innovation in the heart of Europe." }
    ]
  },
  "IRELAND": {
    name: "IRELAND",
    fullName: "Ireland",
    desc: "Ireland is a friendly, English-speaking country with a strong reputation for high-quality education and a vibrant tech scene.",
    universities: "8+",
    psw: "2 Years",
    image: "https://picsum.photos/seed/ireland-edu/800/600",
    advantages: [
      { title: "Tech Hub", desc: "Home to the European headquarters of many global tech giants like Google and Facebook." },
      { title: "Friendly Atmosphere", desc: "Known for its warm hospitality and safe, welcoming environment for students." },
      { title: "Rich Heritage", desc: "A country with a deep literary and artistic history, offering a unique cultural experience." }
    ]
  },
  "FRANCE": {
    name: "FRANCE",
    fullName: "France",
    desc: "France offers a prestigious education system and a rich cultural experience in one of the world's most beautiful countries.",
    universities: "3,500+",
    psw: "1-2 Years",
    image: "https://picsum.photos/seed/france-edu/800/600",
    advantages: [
      { title: "Art & Culture", desc: "Immerse yourself in a world-renowned culture of art, fashion, and gastronomy." },
      { title: "Affordable Public Unis", desc: "Public universities offer high-quality education at relatively low costs." },
      { title: "Central Location", desc: "Easily travel and explore the rest of Europe from a central location." }
    ]
  },
  "ITALY": {
    name: "ITALY",
    fullName: "Italy",
    desc: "Italy is home to some of the oldest and most prestigious universities in the world, offering a unique blend of history and modern learning.",
    universities: "90+",
    psw: "1 Year",
    image: "https://picsum.photos/seed/italy-edu/800/600",
    advantages: [
      { title: "Historical Legacy", desc: "Study in a country that has been a center of learning and culture for centuries." },
      { title: "Design & Innovation", desc: "A world leader in fields like fashion, architecture, and automotive design." },
      { title: "Culinary Excellence", desc: "Enjoy some of the world's best food and a high quality of life while you study." }
    ]
  },
  "DUBAI": {
    name: "DUBAI",
    fullName: "Dubai (UAE)",
    desc: "Dubai is a rapidly growing global hub for business and education, offering modern facilities and a diverse international community.",
    universities: "60+",
    psw: "Available",
    image: "https://picsum.photos/seed/dubai-edu/800/600",
    advantages: [
      { title: "Global Business Hub", desc: "Gain exposure to a dynamic international business environment and networking opportunities." },
      { title: "Modern Infrastructure", desc: "Study in state-of-the-art campuses with the latest technology and facilities." },
      { title: "Tax-Free Income", desc: "Excellent job prospects in a tax-free environment for graduates." }
    ]
  },
  "ESTONIA": {
    name: "ESTONIA",
    fullName: "Estonia",
    desc: "Estonia is a digital pioneer in Europe, offering innovative education and a high standard of living in a safe environment.",
    universities: "20+",
    psw: "9 Months",
    image: "https://picsum.photos/seed/estonia-edu/800/600",
    advantages: [
      { title: "Digital Society", desc: "Experience one of the world's most advanced digital societies and e-government systems." },
      { title: "Startup Culture", desc: "A thriving startup ecosystem with many opportunities for young entrepreneurs." },
      { title: "Safe & Clean", desc: "Enjoy a high quality of life in a safe, green, and technologically advanced country." }
    ]
  },
  "LATVIA": {
    name: "LATVIA",
    fullName: "Latvia",
    desc: "Latvia offers high-quality education at affordable costs in a beautiful Baltic setting with a rich cultural history.",
    universities: "30+",
    psw: "Available",
    image: "https://picsum.photos/seed/latvia-edu/800/600",
    advantages: [
      { title: "Affordable Living", desc: "Lower cost of living compared to many other European study destinations." },
      { title: "European Standards", desc: "Degrees are recognized across the EU and follow high academic standards." },
      { title: "Natural Beauty", desc: "Explore beautiful forests, beaches, and historic cities during your studies." }
    ]
  },
  "LITHUANIA": {
    name: "LITHUANIA",
    fullName: "Lithuania",
    desc: "Lithuania is a modern European country with a strong focus on education and innovation, offering a welcoming environment for students.",
    universities: "40+",
    psw: "Available",
    image: "https://picsum.photos/seed/lithuania-edu/800/600",
    advantages: [
      { title: "Growing Economy", desc: "A dynamic economy with increasing opportunities in tech and business sectors." },
      { title: "Quality Education", desc: "Strong academic traditions and modern teaching methods in various fields." },
      { title: "Cultural Experience", desc: "Discover a unique Baltic culture and a high standard of living at an affordable price." }
    ]
  },
  "BELGIUM": {
    name: "BELGIUM",
    fullName: "Belgium",
    desc: "Belgium is the heart of Europe, offering a multicultural environment and high-quality education in a variety of languages.",
    universities: "10+",
    psw: "1 Year",
    image: "https://picsum.photos/seed/belgium-edu/800/600",
    advantages: [
      { title: "International Hub", desc: "Home to many international organizations, including the EU and NATO." },
      { title: "Multilingual Society", desc: "Experience a diverse culture with several official languages and a global outlook." },
      { title: "High Academic Standards", desc: "Universities are known for their rigorous academic programs and research." }
    ]
  },
  "NETHERLAND": {
    name: "NETHERLAND",
    fullName: "Netherlands",
    desc: "The Netherlands offers a wide range of English-taught programs and a focus on interactive and student-centered learning.",
    universities: "14+",
    psw: "1 Year",
    image: "https://picsum.photos/seed/netherlands-edu/800/600",
    advantages: [
      { title: "English-Taught Courses", desc: "One of the largest selections of English-taught programs in non-English speaking Europe." },
      { title: "Innovative Teaching", desc: "Focus on practical application, teamwork, and critical thinking in education." },
      { title: "International Environment", desc: "A very open and diverse society that welcomes people from all over the world." }
    ]
  },
  "FINLAND": {
    name: "FINLAND",
    fullName: "Finland",
    desc: "Finland is consistently ranked as having one of the best education systems in the world, with a focus on equality and innovation.",
    universities: "35+",
    psw: "2 Years",
    image: "https://picsum.photos/seed/finland-edu/800/600",
    advantages: [
      { title: "World-Class Education", desc: "Known for its high-quality teaching and focus on student well-being and equality." },
      { title: "Innovation & Tech", desc: "A leader in technology and innovation, offering great prospects for STEM students." },
      { title: "High Quality of Life", desc: "Consistently ranked as one of the happiest and safest countries in the world." }
    ]
  },
  "MALTA": {
    name: "MALTA",
    fullName: "Malta",
    desc: "Malta is a beautiful Mediterranean island offering high-quality English-language education in a safe and sunny environment.",
    universities: "5+",
    psw: "Available",
    image: "https://picsum.photos/seed/malta-edu/800/600",
    advantages: [
      { title: "English-Speaking", desc: "English is an official language, making it easy for international students to adapt." },
      { title: "Sunny Climate", desc: "Enjoy a Mediterranean lifestyle with beautiful weather and beaches year-round." },
      { title: "Safe & Friendly", desc: "A small, safe, and welcoming country with a rich history and culture." }
    ]
  },
  "CHINA": {
    name: "CHINA",
    fullName: "China",
    desc: "China offers a unique opportunity to study in one of the world's fastest-growing economies with a rich and ancient culture.",
    universities: "2,500+",
    psw: "Available",
    image: "https://picsum.photos/seed/china-edu/800/600",
    advantages: [
      { title: "Economic Powerhouse", desc: "Gain insights into the world's second-largest economy and its global influence." },
      { title: "Cultural Immersion", desc: "Experience a deep and ancient culture while studying in modern, dynamic cities." },
      { title: "Affordable Education", desc: "Competitive tuition fees and many scholarship opportunities for international students." }
    ]
  },
  "INDIA": {
    name: "INDIA",
    fullName: "India",
    desc: "India offers a diverse and vibrant educational landscape with a strong focus on technical and professional education.",
    universities: "1,000+",
    psw: "Available",
    image: "https://picsum.photos/seed/india-edu/800/600",
    advantages: [
      { title: "Diverse Opportunities", desc: "A wide range of courses across various disciplines in a rapidly developing nation." },
      { title: "Technical Excellence", desc: "Strong reputation for engineering, technology, and management education." },
      { title: "Cultural Richness", desc: "Experience an incredibly diverse culture, language, and tradition while you study." }
    ]
  },
  "BANGLADESH": {
    name: "BANGLADESH",
    fullName: "Bangladesh",
    desc: "Bangladesh offers growing opportunities in higher education with a focus on professional and technical fields.",
    universities: "150+",
    psw: "Available",
    image: "https://picsum.photos/seed/bangladesh-edu/800/600",
    advantages: [
      { title: "Growing Sector", desc: "Rapidly expanding higher education sector with new facilities and programs." },
      { title: "Affordable Study", desc: "Low cost of education and living compared to many other regional destinations." },
      { title: "Warm Hospitality", desc: "Experience the legendary warmth and hospitality of the Bangladeshi people." }
    ]
  }
};

const CountryStudyPage = ({ country, onBack }: { country: string, onBack: () => void }) => {
  const data = countryData[country] || countryData["UK"];
  
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Study in <span className="text-red-600">{data.fullName}</span></h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {data.desc}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="text-red-600 font-bold text-2xl mb-1">{data.universities}</h4>
                <p className="text-gray-500 text-sm">Universities</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="text-red-600 font-bold text-2xl mb-1">{data.psw}</h4>
                <p className="text-gray-500 text-sm">Post-Study Work</p>
              </div>
            </div>
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100">
              Apply for {data.name} Intake
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src={data.image} 
              alt={`${data.name} Education`} 
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Top Choice</p>
                  <p className="text-gray-500 text-sm">Popular destination</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {data.advantages.map((item: any, i: number) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
              <h4 className="font-bold text-xl text-gray-900 mb-4">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-bold mb-8">Ready to study in {data.name}?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Our expert counselors will guide you through the entire process, from university selection to visa application.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all">
                Get Free Consultation
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10">
                View Universities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LanguagePrepPage = ({ examId, onBack }: { examId: string, onBack: () => void }) => {
  const exam = languagePrepData.find(e => e.id === examId) || languagePrepData[0];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
              Language Proficiency Guide
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">Complete Guide to <span className="text-red-600">{exam.title}</span> Exam</h1>
            <h2 className="text-2xl text-gray-500 font-medium mb-8">{exam.fullName}</h2>
            
            <div className="prose prose-lg text-gray-600 mb-10">
              <p className="text-xl leading-relaxed">{exam.desc}</p>
              <p className="leading-relaxed mt-4">{exam.details}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all flex items-center gap-2 shadow-xl shadow-red-200 group">
                Book Your Free Language Assessment Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                Get University-Specific Score Requirement
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-gray-50 aspect-[4/5]">
              <img 
                src={`https://picsum.photos/seed/${exam.id}-exam-prep/800/1000`} 
                alt={`${exam.title} Preparation`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Certified Training</div>
                  <div className="text-sm text-gray-500">Expert instructors</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">Achieve your target score with our personalized coaching and mock tests.</p>
            </div>
          </motion.div>
        </div>

        {/* Types Section (If available) */}
        {exam.types && (
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types of {exam.title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {exam.types.map((type: any, i: number) => (
                <div key={i} className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:rotate-6 transition-transform">
                    {i + 1}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{type.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Test Format Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{exam.title} Test Format</h3>
            <p className="text-gray-600">Understand the structure of the exam to prepare effectively.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exam.format.map((f: any, i: number) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-3xl mb-6">{['1️⃣', '2️⃣', '3️⃣', '4️⃣'][i]}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{f.section}</h4>
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  {f.time}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{f.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scoring & Advantages */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Scoring */}
          <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-red-500" />
              Scoring System
            </h3>
            <div className="space-y-8 relative z-10">
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Score Range</div>
                <div className="text-4xl font-bold text-red-500">{exam.scoring.range}</div>
              </div>
              <p className="text-gray-300 leading-relaxed">{exam.scoring.details}</p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="font-bold mb-2">University Requirements:</div>
                <p className="text-gray-400 text-sm leading-relaxed">{exam.scoring.requirements}</p>
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="bg-red-600 rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-white/80" />
              {exam.title} Advantages
            </h3>
            <div className="grid gap-4 relative z-10">
              {exam.advantages.map((adv: string, i: number) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                  <span className="font-medium">{adv}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-4 p-6 bg-black/10 rounded-2xl border border-white/5">
              <Calendar className="w-8 h-8 opacity-50" />
              <div>
                <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Validity</div>
                <div className="font-bold text-xl">{exam.validity}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-20 text-center border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Ace your {exam.title}?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Join our expert-led preparation classes and get the score you need for your dream university.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-200">
              Start Your Preparation
            </button>
            <button className="bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h1>
          <p className="text-gray-600 text-lg">We provide end-to-end support for your international education journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-10 h-10" })}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.desc}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>Personalized consultation sessions</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>Expert guidance from industry professionals</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>Continuous support throughout the process</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 group/btn">
                Talk with Expert
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DestinationsPage = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (page: string, country?: string) => void }) => {
  const destinationsData = [
    { name: "UK", id: "UK", img: "https://picsum.photos/seed/london/600/400" },
    { name: "USA", id: "USA", img: "https://picsum.photos/seed/nyc/600/400" },
    { name: "CANADA", id: "CANADA", img: "https://picsum.photos/seed/toronto/600/400" },
    { name: "AUSTRALIA", id: "AUSTRALIA", img: "https://picsum.photos/seed/sydney/600/400" },
    { name: "GERMANY", id: "GERMANY", img: "https://picsum.photos/seed/berlin/600/400" },
    { name: "IRELAND", id: "IRELAND", img: "https://picsum.photos/seed/dublin/600/400" },
    { name: "FRANCE", id: "FRANCE", img: "https://picsum.photos/seed/paris/600/400" },
    { name: "ITALY", id: "ITALY", img: "https://picsum.photos/seed/rome/600/400" },
    { name: "DUBAI", id: "DUBAI", img: "https://picsum.photos/seed/dubai/600/400" },
    { name: "ESTONIA", id: "ESTONIA", img: "https://picsum.photos/seed/tallinn/600/400" },
    { name: "LATVIA", id: "LATVIA", img: "https://picsum.photos/seed/riga/600/400" },
    { name: "LITHUANIA", id: "LITHUANIA", img: "https://picsum.photos/seed/vilnius/600/400" },
    { name: "BELGIUM", id: "BELGIUM", img: "https://picsum.photos/seed/brussels/600/400" },
    { name: "NETHERLAND", id: "NETHERLAND", img: "https://picsum.photos/seed/amsterdam/600/400" },
    { name: "FINLAND", id: "FINLAND", img: "https://picsum.photos/seed/helsinki/600/400" },
    { name: "MALTA", id: "MALTA", img: "https://picsum.photos/seed/valletta/600/400" },
    { name: "CHINA", id: "CHINA", img: "https://picsum.photos/seed/beijing/600/400" },
    { name: "INDIA", id: "INDIA", img: "https://picsum.photos/seed/delhi/600/400" },
    { name: "BANGLADESH", id: "BANGLADESH", img: "https://picsum.photos/seed/dhaka/600/400" },
    { name: "OTHERS", id: "OTHERS", img: "https://picsum.photos/seed/world/600/400" }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-red-600 font-bold mb-8 hover:gap-3 transition-all group"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore All Study Destinations</h1>
              <p className="text-gray-600 text-lg">Choose from a wide range of countries to start your international academic journey.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinationsData.map((c, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => c.id !== "OTHERS" && onNavigate('country-study', c.id)}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-lg"
                >
                  <img 
                    src={c.img} 
                    alt={c.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <h4 className="text-white font-bold text-xl">{c.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-red-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                  <p className="text-red-50 mb-8 text-sm leading-relaxed">
                    Get expert guidance on university selection, visa processing, and more. Our counselors are here to help you every step of the way.
                  </p>
                  <img 
                    src="https://picsum.photos/seed/counsel/400/300" 
                    alt="Counseling" 
                    className="rounded-xl mb-8 shadow-lg w-full object-cover h-40"
                    referrerPolicy="no-referrer"
                  />
                  <button className="w-full bg-white text-red-600 py-4 rounded-xl font-bold hover:bg-red-50 transition-all flex items-center justify-center gap-2 shadow-lg">
                    Book Free Counselling <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Why Choose Us?</h4>
                <ul className="space-y-4">
                  {[
                    "100% Visa Success Rate",
                    "Expert Career Guidance",
                    "End-to-End Support",
                    "Global University Network"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-red-600 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-700 -skew-x-12 translate-x-1/2 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-red-200 font-bold text-sm uppercase tracking-widest mb-3">About Us</h2>
            <h3 className="text-4xl font-bold mb-8">Your Trusted Partner in Global Education & Technology</h3>
            <div className="space-y-6 text-red-50">
              <p>
                Band9 Edu is dedicated to providing world-class educational support services, ranging from academic assistance and tutoring to comprehensive overseas consultancy.
              </p>
              <p>
                Our mission is to bridge the gap between students and their global academic aspirations by offering expert guidance on university selection, visa facilitation, and career development.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium">Expert Career Counseling</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium">End-to-End Visa Support</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium">Digital Learning Solutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium">Skill Development Programs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/grad1/300/400" alt="Graduation" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
                <div className="bg-white p-6 rounded-2xl text-gray-900 shadow-xl">
                  <p className="text-3xl font-bold text-red-600">15+</p>
                  <p className="text-sm font-medium text-gray-500 uppercase">Years Experience</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-red-500 p-6 rounded-2xl shadow-xl">
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm font-medium text-red-100 uppercase">Partner Universities</p>
                </div>
                <img src="https://picsum.photos/seed/grad2/300/400" alt="Graduation" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonialsData = [
  {
    name: "Sarah Jenkins",
    course: "MSc Data Science",
    country: "United Kingdom",
    image: "https://picsum.photos/seed/sarah/150/150",
    quote: "Band9 Edu made my dream of studying in the UK a reality. Their guidance through the university selection and visa process was invaluable."
  },
  {
    name: "Ahmed Khan",
    course: "MBA",
    country: "Canada",
    image: "https://picsum.photos/seed/ahmed/150/150",
    quote: "The personalized counseling I received was exceptional. They helped me secure a partial scholarship and guided me every step of the way."
  },
  {
    name: "Elena Rodriguez",
    course: "BSc Computer Science",
    country: "Australia",
    image: "https://picsum.photos/seed/elena/150/150",
    quote: "From IELTS preparation to my final visa approval, the team at Band9 Edu was supportive, professional, and highly knowledgeable."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Student Success Stories</h2>
          <p className="text-xl text-gray-600">Hear from our students who have successfully achieved their study abroad dreams with our guidance.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative"
            >
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 mt-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.course}</p>
                  <p className="text-sm text-red-600 font-medium">{testimonial.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Counseling CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100"
          >
            <div className="relative w-full md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-gray-100">
              <motion.img 
                animate={{ 
                  scale: [1, 1.03, 1],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                src="https://picsum.photos/seed/counseling-session-female/800/600" 
                alt="Counseling Session" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent"></div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider mb-4">
                <Users className="w-3 h-3" />
                Expert Guidance Available
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">One-on-One Counseling</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Connect with our expert female counselors who specialize in helping female students navigate their global education journey with confidence and clarity.
              </p>
              <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100 flex items-center gap-2 mx-auto md:mx-0 group">
                Book Free Counseling <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h3>
              <p className="text-gray-600 mb-10">Fill out the form below and our expert consultants will get back to you within 24 hours.</p>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Interested Country</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all appearance-none">
                    <option>United Kingdom</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" placeholder="Tell us about your academic goals..."></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200">
                    Send Message
                  </button>
                  <button className="bg-white text-gray-900 border border-gray-200 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4 text-red-600" />
                    Expert talk
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-gray-900 relative overflow-hidden flex flex-col justify-center items-center p-12 lg:p-16 text-center">
              {/* Background Clouds */}
              <div className="absolute inset-0 opacity-40">
                <img 
                  src="https://picsum.photos/seed/sky-clouds/800/1200" 
                  alt="Sky" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Animated Airplane */}
              <motion.div
                animate={{ 
                  x: [-100, 400],
                  y: [0, -50, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="relative z-20 mb-8"
              >
                <Plane className="w-24 h-24 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              </motion.div>

              <div className="relative z-10">
                <h4 className="text-3xl font-bold text-white mb-4">Your Global Future Awaits</h4>
                <p className="text-gray-300 text-lg mb-8 max-w-xs mx-auto">
                  We bridge the distance between you and your dream university across the globe.
                </p>
                
                <div className="flex flex-col gap-4 items-center">
                  <div className="flex items-center gap-3 text-red-500 font-bold bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
                    <Globe className="w-5 h-5 animate-spin-slow" />
                    <span>20+ Countries</span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-bold bg-red-600/20 px-6 py-3 rounded-full backdrop-blur-sm border border-red-600/30">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>100% Visa Success</span>
                  </div>
                </div>
              </div>

              {/* Social links moved inside for context */}
              <div className="mt-12 relative z-10">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Connect with us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-red-600 transition-all border border-white/10"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-red-600 transition-all border border-white/10"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-red-600 transition-all border border-white/10"><Instagram className="w-5 h-5" /></a>
                  <a href="https://www.linkedin.com/company/band9" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-red-600 transition-all border border-white/10"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img src="/logo.png" alt="Band9 Edu Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
                <span className="text-lg font-bold tracking-tight text-gray-900">Band9 <span className="text-red-600">Edu</span></span>
              </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your trusted partner for overseas education, visa facilitation, and academic support services. Empowering students to achieve their global dreams.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Services</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="hover:text-red-600 transition-colors">Overseas Consultancy</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="hover:text-red-600 transition-colors">Visa Facilitation</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="hover:text-red-600 transition-colors">Language Preparation</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="hover:text-red-600 transition-colors">Academic Assistance</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="hover:text-red-600 transition-colors">IT & Digital Learning</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('career'); }} className="hover:text-red-600 transition-colors">Career Guidance</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Resources</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('scholarships'); }} className="hover:text-red-600 transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Study Guides</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Visa Requirements</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Student Blogs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Newsletter</h5>
            <p className="text-gray-500 text-sm mb-4">Subscribe to get the latest updates on study abroad opportunities.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-600 w-full" />
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-all">Join</button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">© 2024 Band9 Edu. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-red-600">Privacy Policy</a>
            <a href="#" className="hover:text-red-600">Terms of Service</a>
            <a href="#" className="hover:text-red-600">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const studyGuidesData = [
  {
    title: "The Ultimate Guide to Studying in the UK",
    description: "Everything you need to know about universities, visas, and living in the UK.",
    image: "https://picsum.photos/seed/ukguide/400/300",
    date: "March 2024",
    readTime: "10 min read"
  },
  {
    title: "Navigating the US College Admissions Process",
    description: "A step-by-step breakdown of applications, essays, and standardized tests.",
    image: "https://picsum.photos/seed/usguide/400/300",
    date: "February 2024",
    readTime: "15 min read"
  },
  {
    title: "Australia: A Student's Paradise",
    description: "Discover the best cities, universities, and lifestyle tips for studying down under.",
    image: "https://picsum.photos/seed/ausguide/400/300",
    date: "January 2024",
    readTime: "8 min read"
  }
];

const StudyGuidesPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Study Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Comprehensive resources to help you plan your international education journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {studyGuidesData.map((guide, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{guide.date}</span>
                  <span>•</span>
                  <span>{guide.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{guide.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{guide.description}</p>
                <div className="flex items-center gap-2 text-red-600 font-medium">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const studentBlogsData = [
  {
    title: "My First Month in Toronto: Expectations vs Reality",
    author: "Ahmed Khan",
    university: "University of Toronto",
    image: "https://picsum.photos/seed/blog1/400/300",
    date: "March 1, 2024",
    category: "Student Life"
  },
  {
    title: "How I Managed My Finances While Studying in London",
    author: "Sarah Jenkins",
    university: "UCL",
    image: "https://picsum.photos/seed/blog2/400/300",
    date: "February 28, 2024",
    category: "Finance"
  },
  {
    title: "Top 5 Tips for Acing the IELTS Speaking Test",
    author: "Elena Rodriguez",
    university: "University of Melbourne",
    image: "https://picsum.photos/seed/blog3/400/300",
    date: "February 15, 2024",
    category: "Preparation"
  }
];

const StudentBlogsPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Blogs</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Real stories, tips, and experiences from students studying abroad.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {studentBlogsData.map((blog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-600">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-3">{blog.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors line-clamp-2">{blog.title}</h3>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{blog.author}</p>
                    <p className="text-xs text-gray-500">{blog.university}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState('home');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [selectedScholarship, setSelectedScholarship] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handleNavigate = (page: string, param?: string) => {
    if (page === 'about') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const element = document.getElementById('about');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById('about');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (page !== currentPage) {
      setPreviousPage(currentPage);
    }
    setCurrentPage(page);
    if (page === 'country-study') {
      setSelectedCountry(param || null);
    } else if (page === 'language-prep') {
      setSelectedExam(param || null);
    } else if (page === 'scholarship-detail') {
      setSelectedScholarship(param || null);
    } else if (page === 'course-details') {
      setSelectedCourse(param || null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-600">
      <Navbar onNavigate={handleNavigate} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Services />
            <About />
            <Destinations 
              onSeeAll={() => handleNavigate('destinations')} 
              onNavigate={handleNavigate}
            />
            <Testimonials />
            <Contact />
          </>
        ) : currentPage === 'destinations' ? (
          <DestinationsPage 
            onBack={() => handleNavigate('home')} 
            onNavigate={handleNavigate}
          />
        ) : currentPage === 'services' ? (
          <ServicesPage onBack={() => handleNavigate('home')} />
        ) : currentPage === 'language-prep' ? (
          <LanguagePrepPage 
            examId={selectedExam || 'ielts'} 
            onBack={() => handleNavigate('home')} 
          />
        ) : currentPage === 'country-study' ? (
          <CountryStudyPage 
            country={selectedCountry || 'UK'} 
            onBack={() => handleNavigate('home')} 
          />
        ) : currentPage === 'scholarships' ? (
          <ScholarshipsPage 
            onBack={() => handleNavigate(previousPage)} 
            onNavigate={handleNavigate}
          />
        ) : currentPage === 'scholarship-detail' ? (
          <ScholarshipDetailPage 
            slug={selectedScholarship || ''} 
            onBack={() => handleNavigate('scholarships')} 
          />
        ) : currentPage === 'career' ? (
          <CareerPage onNavigate={handleNavigate} onBack={() => handleNavigate('home')} />
        ) : currentPage === 'training' ? (
          <TrainingPage onNavigate={handleNavigate} onBack={() => handleNavigate('career')} />
        ) : currentPage === 'course-details' ? (
          <CourseDetailsPage courseTitle={selectedCourse || ""} onBack={() => handleNavigate('training')} />
        ) : currentPage === 'jobs' ? (
          <JobsPage onBack={() => handleNavigate('career')} />
        ) : currentPage === 'team' ? (
          <TeamPage onBack={() => handleNavigate('home')} />
        ) : currentPage === 'investors' ? (
          <InvestorsPage onBack={() => handleNavigate('home')} />
        ) : currentPage === 'accommodation' ? (
          <AccommodationPage onBack={() => handleNavigate('home')} />
        ) : currentPage === 'study-guides' ? (
          <StudyGuidesPage onBack={() => handleNavigate('home')} />
        ) : currentPage === 'student-blogs' ? (
          <StudentBlogsPage onBack={() => handleNavigate('home')} />
        ) : (
          <CourseFinderPage onBack={() => handleNavigate('home')} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50">
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}

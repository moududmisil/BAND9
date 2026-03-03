import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Calendar
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

const Navbar = ({ onNavigate }: { onNavigate: (page: string, param?: string) => void }) => {
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const countries = [
    "UK", "USA", "CANADA", "AUSTRALIA", "GERMANY", "IRELAND", "FRANCE", "ITALY", "DUBAI", "ESTONIA", 
    "LATVIA", "LITHUANIA", "BELGIUM", "NETHERLAND", "FINLAND", "MALTA", "CHINA", "INDIA", "BANGLADESH", "OTHERS"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer mr-8 flex-shrink-0" onClick={() => onNavigate('home')}>
            <img src="/logo.png" alt="Band9 Edu Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
            <span className="text-xl font-bold tracking-tight text-gray-900">Band9 <span className="text-red-600">Edu</span></span>
          </div>
          <div className="hidden lg:flex items-center gap-4 flex-1">
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
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-[14px] font-medium text-gray-800 group-hover:text-red-600 transition-colors whitespace-nowrap">Resources</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-red-600 transition-colors" />
            </div>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onNavigate('services');
              }} 
              className="text-[14px] font-medium text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap"
            >
              Career
            </a>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-[14px] font-medium text-gray-800 group-hover:text-red-600 transition-colors whitespace-nowrap">Company</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-red-600 transition-colors" />
            </div>
            <a href="#" onClick={() => onNavigate('home')} className="text-[14px] font-medium text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">Accommodation</a>
          </div>
          <button className="hidden lg:flex bg-red-600 text-white px-5 py-2.5 rounded-xl text-[14px] font-bold hover:bg-red-700 transition-all items-center gap-2 ml-auto flex-shrink-0">
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
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
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
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="hover:text-red-600 transition-colors">Career Guidance</a></li>
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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  const handleNavigate = (page: string, param?: string) => {
    setCurrentPage(page);
    if (page === 'country-study') {
      setSelectedCountry(param || null);
    } else if (page === 'language-prep') {
      setSelectedExam(param || null);
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

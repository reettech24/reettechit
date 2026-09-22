"use client";

import React, { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import ContactUsSection from "@/components/sections/ContactUsSection";
import {
  GraduationCap,
  BookOpen,
  Clock,
  ArrowRight,
  X,
  Users,
  Code2,
  ChevronDown,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Smartphone,
  Layout,
  Server,
  Shield,
  Coffee,
  Check,
  Star,
  Laptop,
  FolderGit2,
  Calendar,
  HelpCircle,
} from "lucide-react";

export default function CoursesClient() {
  const t = useTranslations("studentcourses");

  // Active track filter state
  const [activeCategory, setActiveCategory] = useState("All Courses");
  // Active course selected for Syllabus Modal
  const [selectedCourse, setSelectedCourse] = useState(null);
  // Enrollment Modal state
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollingCourseTitle, setEnrollingCourseTitle] = useState("");

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Form state for enrollment modal
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    college: "",
    message: "",
  });

  const rawCourses = useMemo(() => {
    try {
      const res = t.raw("featureItems");
      return Array.isArray(res) ? res : [];
    } catch (e) {
      return [];
    }
  }, [t]);

  // Extract unique categories for filter tabs
  const categories = useMemo(() => {
    const set = new Set();
    let filterAllText = "All Courses";
    try {
      filterAllText = t("filterAll") || "All Courses";
    } catch (e) {}
    set.add(filterAllText);

    if (Array.isArray(rawCourses)) {
      rawCourses.forEach((c) => {
        if (c && c.category) set.add(c.category);
      });
    }
    return Array.from(set);
  }, [rawCourses, t]);

  // Filtered courses list
  const filteredCourses = useMemo(() => {
    if (!Array.isArray(rawCourses)) return [];
    let filterAllText = "All Courses";
    try {
      filterAllText = t("filterAll") || "All Courses";
    } catch (e) {}

    if (activeCategory === "All Courses" || activeCategory === filterAllText) {
      return rawCourses;
    }
    return rawCourses.filter((c) => c && c.category === activeCategory);
  }, [rawCourses, activeCategory, t]);

  const rawSteps = useMemo(() => {
    try {
      const res = t.raw("journeySteps");
      return Array.isArray(res) ? res : [];
    } catch (e) {
      return [];
    }
  }, [t]);

  const rawFaqs = useMemo(() => {
    try {
      const res = t.raw("faqs");
      return Array.isArray(res) ? res : [];
    } catch (e) {
      return [];
    }
  }, [t]);

  const handleOpenEnrollModal = (courseTitle = "") => {
    setEnrollingCourseTitle(courseTitle);
    setFormData((prev) => ({ ...prev, course: courseTitle }));
    setFormSubmitted(false);
    setIsEnrollModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const cardPastelBgs = [
    { bg: "bg-[#FFE4EC]", text: "text-[#FF3B70]", icon: Smartphone },
    { bg: "bg-[#EDE9FE]", text: "text-[#7C3AED]", icon: Layout },
    { bg: "bg-[#FFF4DE]", text: "text-[#D97706]", icon: Server },
    { bg: "bg-[#E6F9F0]", text: "text-[#059669]", icon: Shield },
    { bg: "bg-[#E0F2FE]", text: "text-[#0284C7]", icon: Code2 },
    { bg: "bg-[#FCE7F3]", text: "text-[#DB2777]", icon: GraduationCap },
  ];

  const studentCapstones = [
    {
      title: "Foodly — Real-Time Delivery App",
      category: "Full-Stack Web Dev",
      desc: "Built with React, Node.js, Express & MongoDB. Live cart updates, Stripe payments, and admin inventory dashboard.",
      bgColor: "bg-emerald-100",
      tagColor: "bg-emerald-50 text-emerald-700",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Shopio — E-Commerce Store",
      category: "Full-Stack & UI/UX",
      desc: "Modern shopping experience with smooth checkout flow, wishlist, and responsive UI design system.",
      bgColor: "bg-pink-100",
      tagColor: "bg-pink-50 text-pink-700",
      tags: ["Next.js", "Tailwind", "Stripe"],
    },
    {
      title: "WalletWise — Cloud Finance Tracker",
      category: "Cloud & Data Science",
      desc: "Personal finance analytics dashboard with automated spending reports and cloud deployment on AWS.",
      bgColor: "bg-[#FFF4DE]",
      tagColor: "bg-amber-50 text-amber-700",
      tags: ["Python", "Pandas", "AWS"],
    },
    {
      title: "FitTrack — Health & Security Platform",
      category: "Mobile & Cybersecurity",
      desc: "Workout tracker and health companion featuring encrypted user data storage and OWASP security audit.",
      bgColor: "bg-[#EDE9FE]",
      tagColor: "bg-purple-50 text-purple-700",
      tags: ["React Native", "Firebase", "OAuth"],
    },
  ];

  const reetMentors = [
    {
      name: "Pankaj Deole",
      role: "Founder & CEO",
      bio: "Leads Reet Tech's vision, guiding software architecture and student developer growth.",
    },
    {
      name: "T Jaiprakash",
      role: "Chief Technology Officer",
      bio: "Leads engineering excellence, backend scalability, and 1-on-1 student code audits.",
    },
    {
      name: "Apurva Kalpande",
      role: "Solutions & Project Lead",
      bio: "Oversees solution delivery, Agile workflows, and student capstone reviews.",
    },
  ];

  return (
    <div className="bg-[#FAF7F5] text-slate-800 min-h-screen font-sans selection:bg-[#FF3B70] selection:text-white pt-24 relative overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Kalam:wght@400;700&family=Patrick+Hand&display=swap');
        
        .font-handwritten {
          font-family: 'Caveat', 'Kalam', cursive, sans-serif;
        }
        .font-kalam {
          font-family: 'Kalam', cursive, sans-serif;
        }
        .font-notebook {
          font-family: 'Patrick Hand', 'Caveat', cursive, sans-serif;
        }

        .paper-ruled-bg {
          background-image: linear-gradient(rgba(226, 232, 240, 0.5) 1px, transparent 1px);
          background-size: 100% 2rem;
        }

        .tape-strip {
          background: rgba(254, 240, 138, 0.85);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          border: 1px dashed rgba(217, 119, 6, 0.3);
        }
      `}</style>

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left relative">
            <div className="absolute -top-12 left-4 font-handwritten text-[#FF3B70] text-xl font-bold rotate-[-3deg] hidden sm:flex items-center gap-1.5 bg-[#FEF08A] text-slate-900 border border-amber-300 px-4 py-1.5 rounded-2xl shadow-sm z-10">
              <span>✍️ "Zero boring lectures. 100% Practical Live Code!"</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold shadow-2xs">
              <span className="font-handwritten text-[#FF3B70] text-base font-bold">★ Student Academy</span>
              <span className="text-slate-300">•</span>
              <span>Hi, Future Developers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1E1B4B] tracking-tight leading-[1.15]">
              Industry-Ready Student Courses &amp;{" "}
              <span className="text-[#FF3B70] relative inline-block">
                Tech Career Accelerator
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FF3B70]/30"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              {t("heroSubtext") ||
                "Learn directly from active software engineers at Reet Tech. Build 4+ production-ready capstone projects, receive 1-on-1 code reviews, and prepare for tech job interviews."}
            </p>

            <div className="inline-flex items-center gap-2 bg-[#E6F9F0] border border-emerald-300 text-emerald-800 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold shadow-2xs">
              <Calendar className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{t("nextBatch") || " Next Cohort Starts: 1st & 15th of Every Month | Flexible Evening & Weekend Batches"}</span>
            </div>

            <div className="relative pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenEnrollModal("Hero Batch Admissions")}
                  className="px-8 py-4 bg-[#FF3B70] text-white font-extrabold rounded-full hover:bg-[#E02D5F] transition-all shadow-md shadow-[#FF3B70]/25 flex items-center gap-2 text-base relative"
                >
                  <span>Apply for Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#available-courses"
                  className="px-8 py-4 bg-white border border-slate-300 text-slate-800 font-bold rounded-full hover:bg-slate-100 transition-all shadow-2xs flex items-center gap-2 text-base"
                >
                  <span>Explore Courses</span>
                  <BookOpen className="w-4 h-4 text-slate-600" />
                </a>
              </div>

              <div className="font-handwritten text-[#FF3B70] text-lg font-bold mt-2 ml-4 flex items-center gap-1 rotate-[-2deg]">
                <span>⤹ Limited seats per batch for 1-on-1 mentor attention!</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2 text-slate-500 text-sm font-medium">
              <span className="text-slate-400">Connect with Reet Tech:</span>
              <div className="flex items-center gap-3 text-slate-600">
                <a href="#" aria-label="Github Profile" className="p-2 rounded-full bg-white border border-slate-200 hover:text-[#FF3B70] transition-colors shadow-2xs">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" aria-label="LinkedIn Page" className="p-2 rounded-full bg-white border border-slate-200 hover:text-blue-600 transition-colors shadow-2xs">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter Feed" className="p-2 rounded-full bg-white border border-slate-200 hover:text-sky-500 transition-colors shadow-2xs">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram Profile" className="p-2 rounded-full bg-white border border-slate-200 hover:text-pink-600 transition-colors shadow-2xs">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute inset-0 bg-[#FFE4EC] rounded-full blur-2xl transform scale-95 -z-10 opacity-70" />

            <div className="relative w-full max-w-md bg-white p-6 rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
              <div className="absolute -top-6 -right-4 bg-[#FEF08A] text-slate-900 border border-amber-300 p-3 rounded-2xl shadow-lg transform rotate-6 z-20 font-handwritten text-base max-w-[170px] leading-tight">
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full mx-auto mb-1 opacity-70" />
                📌 "Build things that work. Commit code daily!"
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-left font-mono text-xs text-slate-200 space-y-2 border border-slate-800 shadow-inner">
                <div className="flex items-center gap-1.5 pb-3 border-b border-slate-800">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-slate-400 text-[10px] ml-2">ReetTech_Academy.jsx</span>
                </div>
                <p className="text-pink-400">const studentPath = &#123;</p>
                <p className="pl-4 text-emerald-400">practicalBuilding: <span className="text-amber-300">"100% Live Capstones"</span>,</p>
                <p className="pl-4 text-blue-400">mentorAudits: <span className="text-purple-300">"1-on-1 Code Reviews"</span>,</p>
                <p className="pl-4 text-indigo-400">careerPlacement: <span className="text-[#FF3B70]">true</span>,</p>
                <p className="text-pink-400">&#125;;</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#FFE4EC] p-3 rounded-2xl text-left border border-pink-200">
                  <div className="text-xs text-[#FF3B70] font-bold">500+ Students</div>
                  <div className="text-[11px] text-slate-600">Guided into tech</div>
                </div>
                <div className="bg-[#EDE9FE] p-3 rounded-2xl text-left border border-purple-200">
                  <div className="text-xs text-purple-700 font-bold">1-on-1 Mentors</div>
                  <div className="text-[11px] text-slate-600">Developer Pull Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- HANDWRITTEN QUOTE BANNER 1 ---------------- */}
      <section className="py-6 bg-[#FEF08A]/40 border-y border-amber-200/80 text-center px-6">
        <div className="max-w-4xl mx-auto font-handwritten text-xl sm:text-2xl text-amber-900 font-bold flex flex-wrap items-center justify-center gap-2">
          <span>✎</span>
          <span>“Code is like humor. When you have to explain it, it’s bad.”</span>
          <span className="text-[#FF3B70] font-semibold text-lg">— Cory House</span>
        </div>
      </section>

      {/* ---------------- 2. ABOUT US / PURPOSE SECTION ---------------- */}
      <section className="bg-[#FFF5F7] py-20 px-6 border-b border-pink-100 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white p-6 rounded-3xl border border-pink-200 shadow-lg relative max-w-sm w-full transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="w-20 h-5 bg-pink-200/70 mx-auto -mt-8 mb-4 rounded-sm rotate-2 shadow-2xs" />
              <div className="w-16 h-16 rounded-2xl bg-[#FFE4EC] text-[#FF3B70] flex items-center justify-center mb-4 mx-auto font-bold text-xl">
                <Laptop className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#1E1B4B] mb-2 text-center">Hands-On Code Building</h4>
              <p className="text-slate-600 text-sm text-center leading-relaxed">
                Bridging academic theory with real industry execution. Learn from working engineers and build verified software.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-center font-handwritten text-lg text-[#FF3B70] font-bold">
                ✏️ "Don't just memorize — build &amp; deploy!"
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B70] block">
              About Student Academy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B4B] tracking-tight">
              Building tech skills &amp; careers{" "}
              <span className="text-[#FF3B70] underline decoration-[#FF3B70]/30 decoration-wavy">
                with purpose
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
              {t("overviewDesc") ||
                "Traditional college degrees focus heavily on theoretical concepts. Our student programs are designed by active software developers to give you 100% practical exposure — helping you build real software, master modern tech stacks, and crack technical interviews."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
                <div className="w-10 h-10 rounded-xl bg-[#FFE4EC] text-[#FF3B70] flex items-center justify-center mx-auto mb-2 font-bold">
                  <Star className="w-5 h-5" />
                </div>
                <div className="text-xl font-extrabold text-[#1E1B4B]">3+ Years</div>
                <div className="text-xs text-slate-500 font-medium">Academy Legacy</div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
                <div className="w-10 h-10 rounded-xl bg-[#E6F9F0] text-[#059669] flex items-center justify-center mx-auto mb-2 font-bold">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div className="text-xl font-extrabold text-[#1E1B4B]">30+</div>
                <div className="text-xs text-slate-500 font-medium">Capstones Built</div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4DE] text-[#D97706] flex items-center justify-center mx-auto mb-2 font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-xl font-extrabold text-[#1E1B4B]">500+</div>
                <div className="text-xs text-slate-500 font-medium">Students Trained</div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
                <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center mx-auto mb-2 font-bold">
                  <Coffee className="w-5 h-5" />
                </div>
                <div className="text-xl font-extrabold text-[#1E1B4B]">100%</div>
                <div className="text-xs text-slate-500 font-medium">Live Code Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. WHAT WE OFFER / AVAILABLE COURSES ---------------- */}
      <section id="available-courses" className="bg-[#F6F4FF] py-20 px-6 border-b border-purple-100 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 relative">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
              Curated Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B] mb-3">
              Industry-Ready Student Courses
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Curated, project-driven programs designed to build real skills and job-ready portfolios.
            </p>
            <div className="font-handwritten text-purple-700 text-xl font-bold mt-2 rotate-[-2deg]">
              ⤹ "Choose your preferred track &amp; preview full syllabus!"
            </div>
          </div>

          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                    ? "bg-[#FF3B70] text-white shadow-md shadow-[#FF3B70]/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => {
              const pastelStyle = cardPastelBgs[idx % cardPastelBgs.length];
              const IconComp = pastelStyle.icon;

              return (
                <div
                  key={course.id || idx}
                  className="bg-white border border-slate-200/80 rounded-3xl p-7 shadow-2xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${pastelStyle.bg} ${pastelStyle.text} flex items-center justify-center font-bold`}>
                        <IconComp className="w-7 h-7" />
                      </div>

                      {course.duration && (
                        <span className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full font-bold">
                          <Clock className="w-3.5 h-3.5 text-purple-600" />
                          {course.duration}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#1E1B4B] mb-3 group-hover:text-[#FF3B70] transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                      {course.desc}
                    </p>

                    {course.roles && (
                      <div className="mb-5 bg-[#FAF7F5] p-3 rounded-2xl border border-slate-200/60 text-xs">
                        <span className="text-slate-400 font-bold block mb-0.5">Target Job Roles:</span>
                        <span className="text-[#FF3B70] font-bold">{course.roles}</span>
                      </div>
                    )}

                    {course.tags && Array.isArray(course.tags) && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {course.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="px-3.5 py-1.5 rounded-xl bg-[#EDE9FE]/80 hover:bg-[#EDE9FE] text-purple-800 border border-purple-200 font-handwritten text-lg font-bold flex items-center gap-1.5 transition-all shadow-2xs hover:scale-105"
                    >
                      <span>Read Syllabus ✍️</span>
                      <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
                    </button>

                    <button
                      onClick={() => handleOpenEnrollModal(course.title)}
                      className="px-4 py-2 bg-[#FF3B70] hover:bg-[#E02D5F] text-white text-xs font-bold rounded-full transition-all shadow-2xs"
                    >
                      Apply Batch
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- HANDWRITTEN QUOTE BANNER 2 ---------------- */}
      <section className="py-6 bg-[#FEF08A]/40 border-y border-amber-200/80 text-center px-6">
        <div className="max-w-4xl mx-auto font-handwritten text-xl sm:text-2xl text-amber-900 font-bold flex flex-wrap items-center justify-center gap-2">
          <span>✍️</span>
          <span>“First, solve the problem. Then, write the code.”</span>
          <span className="text-purple-700 font-semibold text-lg">— John Johnson</span>
        </div>
      </section>

      {/* ---------------- 4. SELECTED STUDENT CAPSTONES ---------------- */}
      <section className="bg-[#FFFDF9] py-20 px-6 border-b border-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B70] block mb-2">
                Portfolio Proof
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B]">
                Selected Student Capstones
              </h2>
            </div>
            <div className="space-y-1">
              <p className="text-slate-600 text-sm max-w-md">
                Here are real applications built by Reet Tech students. Each project is published on GitHub.
              </p>
              <div className="font-handwritten text-[#FF3B70] text-lg font-bold rotate-[-1deg]">
                📌 "100% Student Code. Verified on GitHub!"
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentCapstones.map((project, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className={`${project.bgColor} h-36 p-4 flex flex-col justify-end items-start relative`}>
                  <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full ${project.tagColor}`}>
                    {project.category}
                  </span>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#1E1B4B] text-lg mb-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => handleOpenEnrollModal(`Capstone: ${project.title}`)}
                      className="text-xs font-bold text-[#FF3B70] hover:text-[#E02D5F] flex items-center gap-1 font-handwritten text-base"
                    >
                      <span>View Project Outcomes ✎</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 5. LEARNING ROADMAP ---------------- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Structured Learning Framework
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B] mb-4">
            Our 4-Stage Career Accelerator Pathway
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            A proven step-by-step roadmap designed to guide you from beginner concepts to a hired software professional.
          </p>

          <div className="font-handwritten text-[#FF3B70] text-xl font-bold mt-2 rotate-[-2deg]">
            ✏️ "Step-by-step progress. No student left behind!"
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(rawSteps) && rawSteps.length > 0 && typeof rawSteps[0] === "object" ? (
            rawSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 rounded-3xl relative hover:border-purple-300 transition-all shadow-2xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFE4EC] text-[#FF3B70] text-xl font-extrabold flex items-center justify-center mb-5">
                  {stepItem.step || `0${idx + 1}`}
                </div>
                <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))
          ) : (
            <div className="grid md:grid-cols-3 gap-8 col-span-4">
              {Array.isArray(rawSteps) &&
                rawSteps.map((stepText, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-6 rounded-3xl text-center">
                    <div className="w-12 h-12 rounded-full bg-[#FF3B70] text-white font-bold mx-auto flex items-center justify-center mb-4">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-[#1E1B4B] text-lg mb-2">
                      {typeof stepText === "string" ? stepText : "Mentorship & Projects"}
                    </h3>
                    <p className="text-sm text-slate-600">
                      Work on real-world use cases, get code reviews, and build a verified career portfolio.
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------------- 6. FACULTY SPOTLIGHT ---------------- */}
      <section className="py-20 px-6 max-w-6xl mx-auto bg-white border border-slate-200 rounded-3xl mb-12 shadow-2xs relative">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
            Active Developer Mentors
          </span>
          <h2 className="text-3xl font-extrabold text-[#1E1B4B] mb-3">
            Learn Directly from Active Software Engineers
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Our instructors are active software engineers at Reet Tech who conduct 1-on-1 pull request reviews and guide your career.
          </p>

          <div className="font-handwritten text-purple-700 text-lg font-bold mt-2 rotate-[-1deg]">
            💬 "Have a question? Talk directly to our engineering team!"
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reetMentors.map((mentor, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F5] border border-slate-200/80 p-6 rounded-3xl text-center hover:border-pink-300 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FFE4EC] text-[#FF3B70] text-2xl font-extrabold flex items-center justify-center mx-auto mb-4 border border-pink-200">
                {mentor.name.charAt(0)}
              </div>
              <h3 className="font-bold text-[#1E1B4B] text-lg mb-1">{mentor.name}</h3>
              <div className="text-xs font-bold text-[#FF3B70] mb-3">{mentor.role}</div>
              <p className="text-slate-600 text-xs leading-relaxed">{mentor.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 6.5 STUDENT NOTEBOOK QUOTES ---------------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto my-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B70] block mb-1">
            Student Notebook Words
          </span>
          <h2 className="text-3xl font-extrabold text-[#1E1B4B]">
            Handwritten Advice from Seniors &amp; Mentors
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2">
            Real notes pinned on our student developer community board.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#FEF08A] text-slate-900 border border-amber-300 p-6 rounded-3xl shadow-md rotate-[-2deg] hover:rotate-0 transition-transform relative">
            <div className="w-20 h-5 bg-amber-200/80 mx-auto -mt-8 mb-4 rounded-sm rotate-1 shadow-2xs text-[10px] text-amber-800 text-center pt-0.5 font-mono">
              PINNED NOTE
            </div>
            <div className="font-handwritten text-2xl font-bold mb-3 text-amber-950 leading-snug">
              "Consistency beats intensity. Writing code for 45 minutes every day beats 10 hours on Sunday!"
            </div>
            <div className="text-xs font-bold text-amber-800 flex items-center justify-between pt-2 border-t border-amber-300/60 font-mono">
              <span>— Rahul, Batch '24</span>
              <span>⭐ React Dev</span>
            </div>
          </div>

          <div className="bg-[#FFE4EC] text-slate-900 border border-pink-300 p-6 rounded-3xl shadow-md rotate-[2deg] hover:rotate-0 transition-transform relative">
            <div className="w-20 h-5 bg-pink-200/80 mx-auto -mt-8 mb-4 rounded-sm -rotate-2 shadow-2xs text-[10px] text-pink-800 text-center pt-0.5 font-mono">
              PINNED NOTE
            </div>
            <div className="font-handwritten text-2xl font-bold mb-3 text-pink-950 leading-snug">
              "Don't just watch tutorial videos. Break your code, fix errors, and read compiler logs!"
            </div>
            <div className="text-xs font-bold text-[#FF3B70] flex items-center justify-between pt-2 border-t border-pink-300/60 font-mono">
              <span>— Sneha, Batch '24</span>
              <span>🚀 Backend Eng</span>
            </div>
          </div>

          <div className="bg-[#EDE9FE] text-slate-900 border border-purple-300 p-6 rounded-3xl shadow-md rotate-[-1deg] hover:rotate-0 transition-transform relative sm:col-span-2 lg:col-span-1">
            <div className="w-20 h-5 bg-purple-200/80 mx-auto -mt-8 mb-4 rounded-sm rotate-2 shadow-2xs text-[10px] text-purple-800 text-center pt-0.5 font-mono">
              PINNED NOTE
            </div>
            <div className="font-handwritten text-2xl font-bold mb-3 text-purple-950 leading-snug">
              "Building 3 live projects on GitHub got me 5 interview calls before graduation!"
            </div>
            <div className="text-xs font-bold text-purple-800 flex items-center justify-between pt-2 border-t border-purple-300/60 font-mono">
              <span>— Amit, Batch '23</span>
              <span>💼 Hired at Tech Corp</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 7. FAQS SECTION ---------------- */}
      {Array.isArray(rawFaqs) && rawFaqs.length > 0 && (
        <section className="py-20 px-6 max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl my-10 shadow-2xs">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B70] block mb-2">
              Have Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-[#1E1B4B] mb-3">
              {t("faqTitle") || "Frequently Asked Student Questions"}
            </h2>
          </div>

          <div className="space-y-4">
            {rawFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF7F5] border border-slate-200/80 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#1E1B4B] hover:text-[#FF3B70] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#FF3B70] flex-shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-[#FF3B70]" : ""
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ---------------- 8. CALL TO ACTION BANNER ---------------- */}
      <section className="bg-[#FFEBF1] py-20 px-6 text-center border-t border-pink-200 relative">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="font-handwritten text-[#FF3B70] text-2xl font-bold rotate-[-3deg] inline-block bg-[#FEF08A] text-slate-900 border border-amber-300 px-4 py-1.5 rounded-2xl shadow-sm mb-2">
            🎉 "Your future tech career starts with one click!"
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B4B] leading-tight">
            Have an idea? Let's build{" "}
            <span className="text-[#FF3B70] underline decoration-[#FF3B70]/30 decoration-wavy">
              something great together!
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
            Join hundreds of students building real skills, capstone projects, and successful tech careers with Reet Tech.
          </p>

          <div className="pt-2">
            <button
              onClick={() => handleOpenEnrollModal("CTA Banner")}
              className="px-9 py-4 bg-[#FF3B70] hover:bg-[#E02D5F] text-white font-extrabold rounded-full transition-all shadow-lg shadow-[#FF3B70]/30 text-lg inline-flex items-center gap-2"
            >
              <span>Apply for Student Batch</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactUsSection />

      {/* SYLLABUS MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FFFDF9] paper-ruled-bg border-2 border-amber-200/90 text-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <div className="w-32 h-6 bg-[#FEF08A]/90 border border-amber-300 shadow-2xs mx-auto -mt-9 mb-4 rounded-sm rotate-[-1deg] text-center pt-0.5 font-handwritten text-sm text-amber-900 font-bold">
              📌 STUDENT SYLLABUS
            </div>

            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-amber-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#FFE4EC] text-[#FF3B70] text-xs font-bold rounded-full border border-pink-200">
                {selectedCourse.category || "Course Preview"}
              </span>
              {selectedCourse.duration && (
                <span className="text-xs text-slate-600 font-semibold flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-purple-600" />
                  {selectedCourse.duration}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] mb-2">
              {selectedCourse.title}
            </h3>

            <div className="font-handwritten text-[#FF3B70] text-xl font-bold mb-4 rotate-[-1deg]">
              ✍️ "Detailed module breakdown &amp; hands-on student outcomes"
            </div>

            <p className="text-slate-600 text-sm mb-6 leading-relaxed bg-white/60 p-4 rounded-2xl border border-amber-100">
              {selectedCourse.desc}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 bg-[#FEF08A]/30 p-4 rounded-2xl border border-amber-200 text-xs">
              <div>
                <span className="text-amber-900 font-bold block mb-0.5 font-handwritten text-base">Target Audience:</span>
                <span className="text-slate-800 font-bold">{selectedCourse.audience || "Engineering & CS Students"}</span>
              </div>
              <div>
                <span className="text-amber-900 font-bold block mb-0.5 font-handwritten text-base">Target Job Roles:</span>
                <span className="text-[#FF3B70] font-bold">{selectedCourse.roles || "Software Developer"}</span>
              </div>
            </div>

            {selectedCourse.syllabus && Array.isArray(selectedCourse.syllabus) && (
              <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Syllabus Modules Breakdown
                  </h4>
                  <span className="font-handwritten text-purple-700 text-base font-bold">
                    ✏️ Step-by-Step Practical Learning
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {selectedCourse.syllabus.map((mod, mIdx) => (
                    <li
                      key={mIdx}
                      className="flex items-start gap-3 text-sm text-slate-800 bg-white p-3.5 rounded-2xl border border-amber-200/80 shadow-2xs group hover:border-pink-300 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#FFE4EC] text-[#FF3B70] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {mIdx + 1}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium">{mod}</span>
                        <div className="font-handwritten text-slate-500 text-base mt-0.5">
                          ✎ Hands-on exercise + Mentor pull review
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-[#EDE9FE]/50 p-4 rounded-2xl border border-purple-200 mb-6 flex items-start gap-3">
              <span className="text-xl">💡</span>
              <p className="text-xs text-purple-950 leading-relaxed font-medium">
                <strong className="font-handwritten text-lg text-purple-900 font-bold block">Mentor Note:</strong>
                "Every module ends with a pull request audit. You will write code in Git, push to GitHub, and receive 1-on-1 feedback from senior developers."
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-amber-200/80">
              <button
                onClick={() => {
                  const title = selectedCourse.title;
                  setSelectedCourse(null);
                  handleOpenEnrollModal(title);
                }}
                className="flex-1 py-3.5 bg-[#FF3B70] hover:bg-[#E02D5F] text-white font-extrabold rounded-full transition-all shadow-md shadow-[#FF3B70]/20 text-center text-sm flex items-center justify-center gap-2"
              >
                <span>Apply &amp; Enroll in This Track</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full transition-all text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ENROLLMENT MODAL */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white border border-slate-200 text-slate-800 rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsEnrollModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#1E1B4B] mb-2">
                  Application Submitted!
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  Thank you for applying to{" "}
                  <span className="text-[#FF3B70] font-bold">
                    {enrollingCourseTitle || "Reet Tech Student Program"}
                  </span>
                  . Our admissions counselor will contact you shortly.
                </p>
                <button
                  onClick={() => setIsEnrollModalOpen(false)}
                  className="px-6 py-2.5 bg-[#1E1B4B] hover:bg-slate-900 text-white font-bold rounded-full transition-all text-sm"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-[#FF3B70] text-xs font-bold uppercase tracking-wider mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Student Admissions Application</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#1E1B4B] mb-2">
                  Apply for Upcoming Batch
                </h3>
                <p className="text-slate-500 text-xs mb-6">
                  Fill in your details below and reserve your seat in the upcoming cohort.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-[#FAF7F5] border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#FF3B70] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 bg-[#FAF7F5] border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#FF3B70] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 bg-[#FAF7F5] border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#FF3B70] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Course Preference
                      </label>
                      <input
                        type="text"
                        value={formData.course}
                        onChange={(e) =>
                          setFormData({ ...formData, course: e.target.value })
                        }
                        placeholder="e.g. Full-Stack Web Development"
                        className="w-full px-4 py-2.5 bg-[#FAF7F5] border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#FF3B70] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        College / Year
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. COEP Pune / 3rd Year"
                        value={formData.college}
                        onChange={(e) =>
                          setFormData({ ...formData, college: e.target.value })
                        }
                        className="w-full px-4 py-2.5 bg-[#FAF7F5] border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#FF3B70] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your technical goals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-[#FAF7F5] border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#FF3B70] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FF3B70] hover:bg-[#E02D5F] text-white font-extrabold rounded-full transition-all shadow-md shadow-[#FF3B70]/20 flex items-center justify-center gap-2 text-sm mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

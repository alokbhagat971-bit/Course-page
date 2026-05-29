// pages/HomePage.jsx — IISPPR Academy · Creative Home Page
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Play, Star, Users, Award, BookOpen,
  ChevronDown, ChevronUp, Zap, Globe, Brain, BarChart2,
  CheckCircle, Shield, TrendingUp, Lightbulb, Target,
  GraduationCap, Clock, Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import "../styles/global.css";
import "../styles/HomePage.css";

/* ─── Image assets ─── */
import heroBg    from "../images/hero_bg.png";
import brainImg  from "../images/brain.png";
import computerImg from "../images/computer.png";
import earthImg  from "../images/earth.png";
import masterImg from "../images/master.png";

/* ─── Framer Motion helpers ─── */
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: d, duration: 0.6, ease: "easeOut" },
  }),
};
const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (d = 0) => ({
    opacity: 1,
    transition: { delay: d, duration: 0.5 },
  }),
};

/* ─── Data ─── */
const STATS = [
  { num: "2,000+",  label: "Students Enrolled",     icon: Users,       accent: "#e8a020" },
  { num: "96%",     label: "Completion Rate",        icon: TrendingUp,  accent: "#f5c518" },
  { num: "12+",     label: "Expert Instructors",     icon: Award,       accent: "#00d4c8" },
  { num: "4.9 ★",  label: "Average Rating",         icon: Star,        accent: "#bf7aff" },
];

const AUDIENCE = [
  {
    icon: GraduationCap,
    color: "#e8a020",
    bg: "rgba(232,160,32,0.1)",
    title: "Students & Graduates",
    desc: "Build skills that go far beyond the syllabus and stand out in competitive job markets.",
  },
  {
    icon: TrendingUp,
    color: "#f5c518",
    bg: "rgba(245,197,24,0.1)",
    title: "Working Professionals",
    desc: "Upskill at your own pace and switch into data-driven, high-growth career paths.",
  },
  {
    icon: Lightbulb,
    color: "#00d4c8",
    bg: "rgba(0,212,200,0.1)",
    title: "Entrepreneurs & Founders",
    desc: "Learn to make smarter decisions using data insights and analytical thinking.",
  },
];

const AUDIENCE_VISUALS = [
  { emoji: "🎓", title: "Curriculum Crafted by IIT Alumni", sub: "Industry-first approach" },
  { emoji: "🌍", title: "Global Perspective", sub: "50+ case studies" },
  { emoji: "💻", title: "Hands-on Projects", sub: "Real datasets" },
  { emoji: "🏆", title: "Certificate of Excellence", sub: "Industry recognised" },
  { emoji: "🤝", title: "Mentorship Sessions", sub: "1:1 guidance" },
];

const MODULES = [
  {
    week: "Module 01",
    title: "Foundations of Critical Thinking",
    desc: "Master the art of structured reasoning, logical analysis, and evidence-based decision making.",
    topics: ["Logic & Fallacies", "Mental Models", "Bayesian Thinking"],
    accent: "#e8a020",
  },
  {
    week: "Module 02",
    title: "Data Literacy & Interpretation",
    desc: "Understand data at a deep level — spot trends, detect biases, and draw accurate conclusions.",
    topics: ["Statistics Basics", "Visual Data", "Bias Detection"],
    accent: "#f5c518",
  },
  {
    week: "Module 03",
    title: "Global Trends & Local Impact",
    desc: "Connect macro-level global trends to micro-level decisions affecting your daily life and career.",
    topics: ["Economics", "Technology Trends", "Policy Analysis"],
    accent: "#00d4c8",
  },
  {
    week: "Module 04",
    title: "Problem Solving Frameworks",
    desc: "Apply industry-tested frameworks like First Principles, MECE, and Design Thinking.",
    topics: ["First Principles", "MECE", "Design Thinking"],
    accent: "#bf7aff",
  },
  {
    week: "Module 05",
    title: "Communication & Storytelling",
    desc: "Turn complex insights into compelling narratives that influence and inspire action.",
    topics: ["Data Storytelling", "Presentation Skills", "Executive Communication"],
    accent: "#e8a020",
  },
  {
    week: "Module 06",
    title: "Capstone & Real-World Project",
    desc: "Apply everything to a real-world problem — research, analyse, and present your findings.",
    topics: ["Industry Project", "Peer Review", "Expert Feedback"],
    accent: "#f5c518",
  },
];

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "IISPPR completely changed how I approach problems. I went from a generic engineering graduate to someone who thinks clearly and communicates with impact. Got placed at a top MNC within 2 months.",
    name: "Arjun Mehta",
    role: "Data Analyst @ Infosys",
    initial: "A",
    bg: "#e8a020",
    featured: true,
  },
  {
    stars: 5,
    quote: "The global lens module was an eye-opener. I finally understand why things happen in the world and how they affect my industry. Brilliant course!",
    name: "Priya Sharma",
    role: "MBA Student, IIM Ahmedabad",
    initial: "P",
    bg: "#f5c518",
  },
  {
    stars: 5,
    quote: "As an entrepreneur, I was making decisions on gut feel. IISPPR taught me to validate with data and think systematically. My startup's growth rate doubled.",
    name: "Rahul Gupta",
    role: "Founder, EdTech Startup",
    initial: "R",
    bg: "#00d4c8",
  },
];

const FAQS = [
  {
    q: "Who is this course designed for?",
    a: "This course is designed for students, graduates, working professionals, and entrepreneurs who want to develop critical thinking, data literacy, and analytical skills that are relevant in any career path.",
  },
  {
    q: "How long is the course, and is it self-paced?",
    a: "The course spans 6 weeks with approximately 3–4 hours of learning per week. It is fully self-paced — you can learn at any time that suits your schedule.",
  },
  {
    q: "Will I get a certificate upon completion?",
    a: "Yes! Upon completing all modules and the capstone project, you will receive an industry-recognised Certificate of Excellence from IISPPR Academy.",
  },
  {
    q: "Do I need any prior knowledge or degree to enrol?",
    a: "Absolutely not. The course is designed from the ground up to be accessible to anyone with curiosity and a willingness to learn. No prior technical background is required.",
  },
  {
    q: "Is there mentorship or live interaction available?",
    a: "Yes, enrolled students get access to monthly live Q&A sessions with instructors and optional 1:1 mentorship slots that can be booked through the student portal.",
  },
];

const MARQUEE_ITEMS = [
  { label: "Critical Thinking",       color: "#e8a020" },
  { label: "Data Literacy",           color: "#f5c518" },
  { label: "Global Perspective",      color: "#00d4c8" },
  { label: "Problem Solving",         color: "#bf7aff" },
  { label: "Communication Skills",    color: "#e8a020" },
  { label: "Industry Mentors",        color: "#f5c518" },
  { label: "Capstone Projects",       color: "#00d4c8" },
  { label: "Certificate of Excellence", color: "#bf7aff" },
];

const HERO_MODULES = [
  { icon: Brain,     color: "#e8a020", bg: "rgba(232,160,32,0.12)",  name: "Critical Thinking", sub: "6 core modules",   badge: "Popular", badgeBg: "rgba(232,160,32,0.2)",  badgeColor: "#e8a020" },
  { icon: BarChart2, color: "#f5c518", bg: "rgba(245,197,24,0.12)",  name: "Data Literacy",     sub: "Real datasets",    badge: "New",     badgeBg: "rgba(245,197,24,0.2)",  badgeColor: "#f5c518" },
  { icon: Globe,     color: "#00d4c8", bg: "rgba(0,212,200,0.12)",   name: "Global Trends",     sub: "50+ case studies", badge: "🌍",      badgeBg: "rgba(0,212,200,0.15)",  badgeColor: "#00d4c8" },
];

/* ─── Sub-components ─── */
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " faq-item--open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="faq-question__text">{q}</span>
        <span className="faq-question__icon">
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="faq-answer">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero" id="home" aria-label="Hero section"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center top" }}>
        <div className="hero__inner">

          {/* Left content */}
          <div className="hero__content">
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <span className="hero__badge">
                <span className="hero__badge-dot" />
                Now Enrolling · Batch 2026
              </span>
            </motion.div>

            <motion.h1 className="hero__title" custom={0.1} initial="hidden" animate="visible" variants={fadeUp}>
              Think Deeper.<br />
              <span className="hero__title-green">Grow Smarter.</span><br />
              <span className="hero__title-yellow">Lead Better.</span>
            </motion.h1>

            <motion.p className="hero__subtitle" custom={0.2} initial="hidden" animate="visible" variants={fadeUp}>
              IISPPR Academy's flagship course builds the <strong>critical thinking, data literacy,
              and global awareness</strong> that universities don't teach — but every top employer demands.
            </motion.p>

            <motion.div className="hero__ctas" custom={0.3} initial="hidden" animate="visible" variants={fadeUp}>
              <a href="https://iisppracademy.com/course" target="_blank" rel="noopener noreferrer" className="hero__cta-primary">
                Enrol Now — Free Preview
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#curriculum" className="hero__cta-secondary">
                <Play size={14} aria-hidden="true" />
                See Curriculum
              </a>
            </motion.div>

            <motion.div className="hero__trust" custom={0.4} initial="hidden" animate="visible" variants={fadeUp}>
              <div className="hero__trust-avatars" aria-hidden="true">
                {["A","P","R","S","K"].map((l, i) => (
                  <div key={i} className="hero__trust-avatar"
                    style={{ background: ["#1a3a24","#2a300a","#0f2040","#2a1a3a","#1a2a30"][i] }}>
                    {l}
                  </div>
                ))}
              </div>
              <p className="hero__trust-text">
                <strong>2,000+ learners</strong> already enrolled.<br />Join the next cohort today.
              </p>
            </motion.div>
          </div>

          {/* Right visual card */}
          <motion.div className="hero__visual" custom={0.2} initial="hidden" animate="visible" variants={fadeIn}>
            <div className="hero__card-stack">

              {/* Floating stat card */}
              <motion.div
                className="hero__float-card hero__float-card--stat"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="hero__float-icon" style={{ background: "rgba(61,219,122,0.12)" }}>
                  <Users size={18} color="#3ddb7a" />
                </div>
                <div>
                  <div className="hero__float-val">2,000+</div>
                  <div className="hero__float-label">Active Learners</div>
                </div>
              </motion.div>

              {/* Main card */}
              <div className="hero__main-card">
                <span className="hero__card-tag">
                  <Sparkles size={10} />
                  Flagship Program 2026
                </span>
                <h2 className="hero__card-title">
                  The IISPPR<br />Thinking Edge
                </h2>
                <p className="hero__card-desc">
                  A transformative 6-week program designed to make you think, lead, and communicate at the highest level.
                </p>
                <div className="hero__card-modules">
                  {HERO_MODULES.map(({ icon: Icon, color, bg, name, sub, badge, badgeBg, badgeColor }) => (
                    <div key={name} className="hero__module">
                      <div className="hero__module-icon" style={{ background: bg }}>
                        <Icon size={16} color={color} />
                      </div>
                      <div className="hero__module-text">
                        <div className="hero__module-name">{name}</div>
                        <div className="hero__module-sub">{sub}</div>
                      </div>
                      <span className="hero__module-badge" style={{ background: badgeBg, color: badgeColor }}>
                        {badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating cert card */}
              <motion.div
                className="hero__float-card hero__float-card--cert"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="hero__float-icon" style={{ background: "rgba(245,197,24,0.12)" }}>
                  <Award size={18} color="#f5c518" />
                </div>
                <div>
                  <div className="hero__float-val" style={{ fontSize: 14 }}>Certificate</div>
                  <div className="hero__float-label">On completion</div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <div className="marquee-section" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(({ label, color }, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-item__dot" style={{ background: color }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="stats-section" id="stats" aria-label="Course statistics">
        <div className="stats-inner">
          <div className="stats-grid">
            {STATS.map(({ num, label, icon: Icon, accent }, i) => (
              <motion.div
                key={label}
                className="stat-card"
                style={{ "--accent-color": accent }}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <div className="stat-card__icon" style={{ background: `${accent}18`, border: `1px solid ${accent}33` }}>
                  <Icon size={22} color={accent} />
                </div>
                <div className="stat-card__num">{num}</div>
                <div className="stat-card__label">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ──────────────────────────────── */}
      <section className="audience-section" id="whyus" aria-label="Who is this for">
        <div className="audience-inner">

          <motion.div
            className="audience__left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="section-pill">Who Is This For?</span>
            <h2 className="section-title">Built for the <span>Next Generation</span> of Thinkers</h2>
            <p className="section-desc">
              Whether you're a student hungry for an edge, a professional seeking a career leap,
              or an entrepreneur who wants to make smarter decisions — this course was crafted for you.
            </p>
            <div className="audience__cards">
              {AUDIENCE.map(({ icon: Icon, color, bg, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="audience-card"
                  custom={i * 0.1 + 0.2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                >
                  <div className="audience-card__icon" style={{ background: bg, border: `1px solid ${color}33` }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div className="audience-card__title">{title}</div>
                    <div className="audience-card__desc">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="audience__right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            custom={0.3}
          >
            {/* Photo grid replacing emoji cards */}
            <div className="audience-photo-grid">
              <motion.div className="audience-photo-card audience-photo-card--wide"
                whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 250 }}>
                <img src={masterImg} alt="Expert instructor teaching" className="audience-photo-img" />
                <div className="audience-photo-overlay">
                  <span className="audience-photo-tag">🏆 IIT Alumni Crafted</span>
                  <p>Industry-first approach</p>
                </div>
              </motion.div>

              <motion.div className="audience-photo-card"
                whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 250 }}>
                <img src={brainImg} alt="Critical thinking brain" className="audience-photo-img" />
                <div className="audience-photo-overlay">
                  <span className="audience-photo-tag">🧠 Critical Thinking</span>
                  <p>6 core modules</p>
                </div>
              </motion.div>

              <motion.div className="audience-photo-card"
                whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 250 }}>
                <img src={computerImg} alt="Hands-on learning" className="audience-photo-img" />
                <div className="audience-photo-overlay">
                  <span className="audience-photo-tag">💻 Hands-on Projects</span>
                  <p>Real datasets</p>
                </div>
              </motion.div>

              <motion.div className="audience-photo-card audience-photo-card--wide"
                whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 250 }}>
                <img src={earthImg} alt="Global perspective" className="audience-photo-img" />
                <div className="audience-photo-overlay">
                  <span className="audience-photo-tag">🌍 Global Perspective</span>
                  <p>50+ case studies</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── CURRICULUM ───────────────────────────────────── */}
      <section className="curriculum-section" id="curriculum" aria-label="Course curriculum">
        <div className="curriculum-inner">
          <motion.div
            className="curriculum-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="section-pill">The Curriculum</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              6 Weeks. <span>Life-Changing</span> Skills.
            </h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "14px auto 0", maxWidth: 520 }}>
              Every module is designed to challenge you, build on the last, and leave you with
              a tangible, portfolio-ready skill.
            </p>
          </motion.div>

          <div className="curriculum-grid">
            {MODULES.map(({ week, title, desc, topics, accent }, i) => (
              <motion.div
                key={week}
                className="curriculum-card"
                style={{ "--c-accent": accent }}
                custom={i * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
              >
                <div className="curriculum-card__week">{week}</div>
                <div className="curriculum-card__title">{title}</div>
                <div className="curriculum-card__desc">{desc}</div>
                <div className="curriculum-card__topics">
                  {topics.map((t) => (
                    <span key={t} className="curriculum-card__topic">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────── */}
      <section className="photo-strip-section" aria-label="Course highlights photo strip">
        <div className="photo-strip-inner">
          <motion.div className="photo-strip-header"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <span className="section-pill">Inside the Program</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Learning That <span>Looks Like This</span>
            </h2>
          </motion.div>

          <div className="photo-strip-grid">
            <motion.div className="photo-strip-card photo-strip-card--tall"
              custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
              whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }}>
              <img src={masterImg} alt="Expert mentorship sessions" className="photo-strip-img" />
              <div className="photo-strip-caption">
                <CheckCircle size={14} color="#3ddb7a" />
                <span>Expert Mentorship</span>
              </div>
            </motion.div>

            <motion.div className="photo-strip-card"
              custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
              whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }}>
              <img src={brainImg} alt="Analytical thinking training" className="photo-strip-img" />
              <div className="photo-strip-caption">
                <CheckCircle size={14} color="#f5c518" />
                <span>Analytical Training</span>
              </div>
            </motion.div>

            <motion.div className="photo-strip-card"
              custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
              whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }}>
              <img src={computerImg} alt="Data literacy with real tools" className="photo-strip-img" />
              <div className="photo-strip-caption">
                <CheckCircle size={14} color="#5b8fff" />
                <span>Data Literacy</span>
              </div>
            </motion.div>

            <motion.div className="photo-strip-card photo-strip-card--tall"
              custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
              whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }}>
              <img src={earthImg} alt="Global trends and awareness" className="photo-strip-img" />
              <div className="photo-strip-caption">
                <CheckCircle size={14} color="#bf7aff" />
                <span>Global Awareness</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="testimonials-section" id="reviews" aria-label="Student testimonials">
        <div className="testimonials-inner">
          <motion.div
            className="testimonials-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="section-pill">Student Stories</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Real People. <span>Real Transformations.</span>
            </h2>
          </motion.div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map(({ stars, quote, name, role, initial, bg, featured }, i) => (
              <motion.div
                key={name}
                className={`testimonial-card${featured ? " testimonial-card--featured" : ""}`}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="testimonial-stars" aria-label={`${stars} stars`}>
                  {Array.from({ length: stars }).map((_, j) => (
                    <Star key={j} size={14} fill="#f5c518" stroke="none" />
                  ))}
                </div>
                <p className="testimonial-quote">"{quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: bg }}>{initial}</div>
                  <div>
                    <div className="testimonial-name">{name}</div>
                    <div className="testimonial-role">{role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="faq-section" id="faq" aria-label="Frequently asked questions">
        <div className="faq-inner">
          <motion.div
            className="faq-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="section-pill">Got Questions?</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Frequently Asked <span>Questions</span>
            </h2>
          </motion.div>

          <motion.div
            className="faq-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
          >
            {FAQS.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="final-cta-section" aria-label="Enrol call to action">
        <motion.div
          className="final-cta-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="final-cta__title">
            Ready to Unlock Your <span>Thinking Potential?</span>
          </h2>
          <p className="final-cta__desc">
            Join thousands of learners who are already thinking differently, communicating better,
            and growing faster. Your transformation starts today.
          </p>
          <div className="final-cta__actions">
            <a href="https://iisppracademy.com/course" target="_blank" rel="noopener noreferrer" className="final-cta__btn">
              Start Learning Today
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="final-cta__note">
            <Shield size={12} />
            No prerequisites · Self-paced · Certificate included
          </p>
        </motion.div>
      </section>
    </>
  );
}

// pages/CourseDifferentPage.jsx — "What Makes This Course Different?" section
import { motion } from "framer-motion";
import { Brain, Globe, Rocket, MessageSquare, Gift, ArrowRight } from "lucide-react";

import Navbar     from "../components/Navbar";
import PillarCard from "../components/PillarCard";
import FloatIcon  from "../components/FloatIcon";

import { CARDS, AVATARS, AVATAR_FALLBACKS } from "../data/cards";

import "../styles/global.css";
import "../styles/CourseDifferentPage.css";

// Framer Motion variants
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

// Decorative floating icons — position, size, colour, icon, and bob speed
const FLOAT_ICONS = [
  { style: { top: 120, left: "8%"  }, size: 68, color: "#3ddb7a", icon: Brain,         iconSize: 30, duration: 5   },
  { style: { top: 180, left: "18%" }, size: 54, color: "#f5c518", icon: Globe,         iconSize: 24, duration: 6.5 },
  { style: { top: 110, right: "10%"}, size: 64, color: "#5b8fff", icon: Rocket,        iconSize: 28, duration: 4.5 },
  { style: { top: 200, right: "20%"}, size: 50, color: "#bf7aff", icon: MessageSquare, iconSize: 22, duration: 5.8 },
];

export default function CourseDifferentPage() {
  return (
    <>
      <Navbar />

      <div className="page">
        {/* Floating decorative blobs */}
        {FLOAT_ICONS.map(({ style, size, color, icon: Icon, iconSize, duration }, i) => (
          <FloatIcon key={i} style={style} size={size} color={color} duration={duration}>
            <Icon size={iconSize} />
          </FloatIcon>
        ))}

        <div className="page__inner">

          {/* ── Section header ── */}
          <motion.div
            className="section-header"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="header-pill">The IISPPR Difference</span>

            <h1 className="header-title">
              What Makes This<br />
              <span className="header-title__yellow">Course </span>
              <span className="header-title__green">Different?</span>
            </h1>

            <p className="header-sub">
              We go beyond textbooks. Experience industry-relevant learning designed<br />
              to build <strong>real-world thinkers, problem solvers, and future leaders.</strong>
            </p>
          </motion.div>

          {/* ── Pillar cards ── */}
          <div className="cards-grid">
            {CARDS.map((card, i) => (
              <PillarCard key={card.num} card={card} index={i} />
            ))}
          </div>

          {/* ── CTA bar ── */}
          <motion.div
            className="cta-bar"
            custom={0.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            {/* Left: gift icon + headline */}
            <div className="cta-bar__left">
              <div className="cta-bar__gift-icon" aria-hidden="true">
                <Gift size={26} />
              </div>
              <div>
                <strong className="cta-bar__title">
                  Join the Next Generation of{" "}
                  <span>Thinkers &amp; Innovators</span>
                </strong>
                <p className="cta-bar__subtitle">
                  Enrol today and transform the way you think.
                </p>
              </div>
            </div>

            {/* Centre: social proof image + text */}
            <div className="cta-bar__center">
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div className="cta-bar__image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=280&q=80"
                    alt="Group of Indian students collaborating"
                    className="cta-bar__group-img"
                    loading="lazy"
                  />
                  <div className="cta-bar__image-badge">+2K</div>
                </div>
                <p className="cta-bar__social-proof">
                  <strong>2,000+ learners</strong> already transformed their future.
                </p>
              </div>
            </div>

            {/* Right: CTA button */}
            <a
              href="https://iisppracademy.com/course"
              className="cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Journey Today
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}
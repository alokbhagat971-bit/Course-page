// pages/CourseDifferentPage.jsx — "What Makes This Course Different?" section

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Rocket,
  MessageSquare,
  Gift,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import PillarCard from "../components/PillarCard";
import FloatIcon from "../components/FloatIcon";

import { CARDS } from "../data/cards";

import "../styles/global.css";
import "../styles/CourseDifferentPage.css";

// ─────────────────────────────────────────────────────────
// Framer Motion variants
// ─────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// ─────────────────────────────────────────────────────────
// Decorative floating icons
// ─────────────────────────────────────────────────────────

const FLOAT_ICONS = [
  {
    style: { top: 120, left: "8%" },
    size: 68,
    color: "#3ddb7a",
    icon: Brain,
    iconSize: 30,
    duration: 5,
  },

  {
    style: { top: 180, left: "18%" },
    size: 54,
    color: "#f5c518",
    icon: Globe,
    iconSize: 24,
    duration: 6.5,
  },

  {
    style: { top: 110, right: "10%" },
    size: 64,
    color: "#5b8fff",
    icon: Rocket,
    iconSize: 28,
    duration: 4.5,
  },

  {
    style: { top: 200, right: "20%" },
    size: 50,
    color: "#bf7aff",
    icon: MessageSquare,
    iconSize: 22,
    duration: 5.8,
  },
];

// ─────────────────────────────────────────────────────────
// Ambient particles
// ─────────────────────────────────────────────────────────

const PARTICLES = [
  { left: "12%", top: "20%", duration: "8s", delay: "0s" },
  { left: "22%", top: "70%", duration: "11s", delay: "1s" },
  { left: "35%", top: "40%", duration: "9s", delay: "2s" },
  { left: "48%", top: "82%", duration: "13s", delay: "1.5s" },
  { left: "60%", top: "28%", duration: "10s", delay: "0.5s" },
  { left: "72%", top: "65%", duration: "12s", delay: "3s" },
  { left: "85%", top: "18%", duration: "9s", delay: "2.2s" },
  { left: "90%", top: "78%", duration: "14s", delay: "1s" },
  { left: "15%", top: "50%", duration: "10s", delay: "4s" },
  { left: "42%", top: "10%", duration: "8s", delay: "2.5s" },
  { left: "66%", top: "90%", duration: "15s", delay: "0s" },
  { left: "78%", top: "45%", duration: "11s", delay: "1.8s" },
];

// ─────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────

export default function CourseDifferentPage() {
  return (
    <>
      <Navbar />

      <div className="page">

        {/* ── Floating particles ── */}
        <div className="page-particles">
          {PARTICLES.map((particle, i) => (
            <span
              key={i}
              style={{
                left: particle.left,
                top: particle.top,
                animationDuration: particle.duration,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* ── Floating decorative blobs ── */}
        {FLOAT_ICONS.map(
          ({ style, size, color, icon: Icon, iconSize, duration }, i) => (
            <FloatIcon
              key={i}
              style={style}
              size={size}
              color={color}
              duration={duration}
            >
              <Icon size={iconSize} />
            </FloatIcon>
          )
        )}

        <div className="page__inner">

          {/* ── Section Header ── */}
          <motion.div
            className="section-header"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="header-pill">
              The IISPPR Difference
            </span>

            <h1 className="header-title">
              What Makes This
              <br />

              <span className="header-title__yellow">
                Course{" "}
              </span>

              <span className="header-title__green">
                Different?
              </span>
            </h1>

            <p className="header-sub">
              We go beyond textbooks. Experience industry-relevant learning
              designed
              <br />
              to build{" "}
              <strong>
                real-world thinkers, problem solvers, and future leaders.
              </strong>
            </p>
          </motion.div>

          {/* ── Cards Grid ── */}
          <div className="cards-grid">
            {CARDS.map((card, i) => (
              <PillarCard
                key={card.num}
                card={card}
                index={i}
              />
            ))}
          </div>

          {/* ── CTA Bar ── */}
          <motion.div
            className="cta-bar"
            custom={0.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >

            {/* Left */}
            <div className="cta-bar__left">

              <div
                className="cta-bar__gift-icon"
                aria-hidden="true"
              >
                <Gift size={26} />
              </div>

              <div>
                <strong className="cta-bar__title">
                  Join the Next Generation of{" "}
                  <span>
                    Thinkers &amp; Innovators
                  </span>
                </strong>

                <p className="cta-bar__subtitle">
                  Enrol today and transform the way you think.
                </p>
              </div>
            </div>

            {/* Center */}
            <div className="cta-bar__center">

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >

                <div className="cta-bar__image-wrap">

                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=280&q=80"
                    alt="Group of Indian students collaborating"
                    className="cta-bar__group-img"
                    loading="lazy"
                  />

                  <div className="cta-bar__image-badge">
                    +2K
                  </div>
                </div>

                <p className="cta-bar__social-proof">
                  <strong>2,000+ learners</strong>{" "}
                  already transformed their future.
                </p>

              </div>
            </div>

            {/* Right */}
            <a
              href="https://iisppracademy.com/course"
              className="cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Journey Today

              <ArrowRight
                size={15}
                aria-hidden="true"
              />
            </a>

          </motion.div>

        </div>
      </div>
    </>
  );
}
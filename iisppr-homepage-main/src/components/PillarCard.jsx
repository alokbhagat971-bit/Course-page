// components/PillarCard.jsx — Individual feature pillar card
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import "../styles/PillarCard.css";

// Animation variants
const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const glowVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

// Checkmark SVG icon reused in bullet points
function CheckIcon() {
  return (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
      <path
        d="M1 3L3 5L7 1"
        stroke="#3ddb7a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PillarCard({ card, index }) {
  const [hovered, setHovered] = useState(false);

  const { num, accent, icon: Icon, title, desc, bullets, img, dotActive } = card;
  const dots = [1, 2, 3, 4];

  return (
    <motion.article
      className="card"
      style={{ "--accent": accent }}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      whileHover={{
        y: -14,
        boxShadow: `0 28px 52px ${accent}40, 0 8px 20px ${accent}25, 0 0 0 1px ${accent}35`,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={title}
    >
      {/* Hover glow overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="card__glow"
            variants={glowVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${accent}22 0%, transparent 65%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Top row: number + progress dots */}
      <div className="card__top-row">
        <span className="card__num">{num}</span>
        <div className="card__dots" aria-hidden="true">
          {dots.map((d) => (
            <div
              key={d}
              className={`card__dot${d <= dotActive ? " card__dot--active" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Icon */}
      <div className="card__icon-wrap" aria-hidden="true">
        <Icon size={20} />
      </div>

      {/* Title & description */}
      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{desc}</p>

      {/* Bullet list */}
      <ul className="card__bullets" role="list">
        {bullets.map((text) => (
          <li key={text} className="card__bullet">
            <div className="card__bullet-dot" aria-hidden="true">
              <CheckIcon />
            </div>
            {text}
          </li>
        ))}
      </ul>

      {/* Image slot — placeholder span removed; image fills the wrapper */}
      <div className="card__img-wrapper">
        <img
          src={img}
          alt={title}
          className="card__img"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>

      {/* Footer: explore link + arrow */}
      <div className="card__footer">
        <span className="card__explore">Explore More</span>
        <motion.div
          className="card__arrow"
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400 }}
          aria-hidden="true"
        >
          <ChevronRight size={13} />
        </motion.div>
      </div>
    </motion.article>
  );
}
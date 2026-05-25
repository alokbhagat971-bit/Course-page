// components/FloatIcon.jsx — Animated floating decorative icon blob
import { motion } from "framer-motion";
import "../styles/CourseDifferentPage.css";

export default function FloatIcon({ children, style, size = 56, color, duration = 5 }) {
  return (
    <motion.div
      className="float-icon"
      style={{ width: size, height: size, color, ...style }}
      animate={{
        y:      [0, -28, 0],
        rotate: [0, 8, -8, 0],
        scale:  [1, 1.12, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  );
}
// data/cards.js — Pillar card content and configuration
// Each card maps to one of the four feature pillars shown on the page.
// To add or remove cards, edit this array — the grid renders automatically.

import { Brain, Globe, Rocket, MessageSquare } from "lucide-react";
import brain from "../images/brain.png";
import earth from "../images/earth.png";
import master from "../images/master.png";
import computer from "../images/computer.png";

export const CARDS = [
  {
    num: "01",
    accent: "#3ddb7a",
    icon: Brain,
    title: "Critical, Not Just Technical",
    desc: "We look beyond standard code syntaxes and parsing metrics.",
    bullets: ["Deep conceptual clarity", "Analytical thinking focus"],
    img: brain,   // Place this file in your /public folder
    dotActive: 1,
  },
  {
    num: "02",
    accent: "#f5c518",
    icon: Globe,
    title: "Global & Local Lens",
    desc: "Understand global trends and how they impact everyday life.",
    bullets: ["Global case studies", "Local impact, global insights"],
    img: earth,     // Place this file in your /public folder
    dotActive: 2,
  },
  {
    num: "03",
    accent: "#5b8fff",
    icon: Rocket,
    title: "Practical Skills You Can Use",
    desc: "Hands-on modules, real datasets, and applied projects.",
    bullets: ["Real-world applications", "Build portfolio-ready projects"],
    img: computer ,  // Place this file in your /public folder
    dotActive: 3,
  },
  {
    num: "04",
    accent: "#bf7aff",
    icon: MessageSquare,
    title: "Learn to Communicate With Impact",
    desc: "Translate complex data findings into compelling narratives.",
    bullets: ["Storytelling with data", "Present with confidence"],
    img: master,   // Place this file in your /public folder
    dotActive: 4,
  },
];

// Avatar images shown in the CTA bar social-proof stack.
// Place these files in your /public folder.
export const AVATARS = ["av1.jpg", "av2.jpg", "av3.jpg", "av4.jpg"];

// Avatar fallback background colours (shown if image fails to load).
export const AVATAR_FALLBACKS = ["#1e4028", "#0f2a1a", "#173320", "#0a1e0f"];

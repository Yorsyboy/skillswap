import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Skill } from "../types/skill";

interface Props {
  skill: Skill;
}

const categoryColor: Record<string, string> = {
  Technology: "#3b82f6",
  Design:     "#a855f7",
  Music:      "#f59e0b",
  Language:   "#10b981",
  Business:   "#f97316",
  Fitness:    "#ef4444",
  Cooking:    "#84cc16",
  Art:        "#ec4899",
  Writing:    "#06b6d4",
  Other:      "#6b7280",
};

const SkillCard = ({ skill }: Props) => {
  const [modal, setModal] = useState(false);
  const color = categoryColor[skill.category] ?? "#6b7280";

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative flex flex-col gap-3 p-5 rounded-2xl bg-[#111118] border border-white/[0.07] hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden group"
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 inset-x-0 h-0.5 opacity-70"
          style={{ background: color }}
        />

        {/* Type + Category */}
        <div className="flex items-center justify-between">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
              skill.type === "offer"
                ? "bg-green-500/10 text-green-400 border-green-500/25"
                : "bg-amber-500/10 text-amber-400 border-amber-500/25"
            }`}
          >
            ✦ {skill.type === "offer" ? "Offering" : "Requesting"}
          </span>
          <span className="text-xs font-semibold" style={{ color }}>
            {skill.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-syne font-bold text-base leading-snug tracking-tight">
          {skill.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#7a7a90] leading-relaxed line-clamp-3">
          {skill.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.07] text-[#7a7a90]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
              style={{ background: color }}
            >
              {skill.user.avatar}
            </div>
            <span className="text-xs font-medium text-[#b0b0c0]">
              {skill.user.name}
            </span>
          </div>
          <button
            onClick={() => setModal(true)}
            className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 hover:bg-indigo-500/20 transition-colors cursor-pointer"
          >
            Connect →
          </button>
        </div>
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(false)}
          >
            <motion.div
              className="relative bg-[#18181f] border border-white/10 rounded-2xl p-8 w-full max-w-sm text-center shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top shimmer line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />

              <button
                onClick={() => setModal(false)}
                className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-[#7a7a90] hover:text-white text-xs transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-syne text-xl font-extrabold text-white mx-auto mb-3"
                style={{ background: color }}
              >
                {skill.user.avatar}
              </div>

              <h2 className="font-syne text-xl font-extrabold tracking-tight mb-1">
                {skill.user.name}
              </h2>
              <p className="text-sm text-[#7a7a90] leading-relaxed mb-4">
                {skill.user.bio}
              </p>

              <div className="h-px bg-white/[0.07] mb-4" />

              <div className="flex flex-col items-center gap-2 mb-5">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    skill.type === "offer"
                      ? "bg-green-500/10 text-green-400 border-green-500/25"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/25"
                  }`}
                >
                  ✦ {skill.type === "offer" ? "Offering" : "Requesting"}
                </span>
                <span className="font-semibold text-sm">{skill.title}</span>
              </div>

              <a
                href={`mailto:${skill.user.contact}`}
                className="block w-full py-3 rounded-xl text-white font-semibold text-sm mb-2 hover:opacity-90 transition-opacity"
                style={{ background: color }}
              >
                ✉ Send Message
              </a>
              <p className="text-xs text-[#7a7a90]">{skill.user.contact}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SkillCard;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Skill } from "../types/skill";
import { X } from "lucide-react";

interface Props {
  skill: Skill;
}

const categoryColor: Record<string, string> = {
  Technology: "#3b82f6",
  Design: "#a855f7",
  Music: "#f59e0b",
  Language: "#10b981",
  Business: "#f97316",
  Fitness: "#ef4444",
  Cooking: "#84cc16",
  Art: "#ec4899",
  Writing: "#06b6d4",
  Other: "#6b7280",
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
          {skill.type === "offer" ? (
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/25">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-handshake w-3.5 h-3.5"
              >
                <path d="M8 21H4a2 2 0 0 1-2-2v-4" />
                <path d="M18 21h4a2 2 0 0 0 2-2v-4" />
                <path d="M15 3h-6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
                <path d="M2.5 15.5 8 21" />
                <path d="m21.5 15.5-5.5 5.5" />
                <path d="m17 8 2.5 2.5" />
                <path d="M7 8 4.5 10.5" />
              </svg>
              Offering
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-hand w-3.5 h-3.5"
              >
                <path d="M7 10v12" />
                <path d="M15 10v12" />
                <path d="M7 10a4 4 0 0 1 8 0" />
                <path d="M7 22a2 2 0 0 0 4 0" />
                <path d="M15 22a2 2 0 0 1-4 0" />
              </svg>
              Requesting
            </span>
          )}
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
            className="flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 hover:bg-indigo-500/20 transition-colors cursor-pointer"
          >
            Connect
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right w-4 h-4"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
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
                style={{
                  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
              />

              <button
                onClick={() => setModal(false)}
                className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-[#7a7a90] hover:text-white text-xs transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
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
                  {skill.type === "offer" ? (
                    <div className="flex items-center">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-handshake w-3.5 h-3.5 inline-block mr-1"
                      >
                        <path d="M8 21H4a2 2 0 0 1-2-2v-4" />
                        <path d="M18 21h4a2 2 0 0 0 2-2v-4" />
                        <path d="M15 3h-6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
                        <path d="M2.5 15.5 8 21" />
                        <path d="m21.5 15.5-5.5 5.5" />
                        <path d="m17 8 2.5 2.5" />
                        <path d="M7 8 4.5 10.5" />
                      </svg>
                      Offering
                    </div>
                  ) : (
                    <div className="flex item-center">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-hand w-3.5 h-3.5 inline-block mr-1"
                      >
                        <path d="M7 10v12" />
                        <path d="M15 10v12" />
                        <path d="M7 10a4 4 0 0 1 8 0" />
                        <path d="M7 22a2 2 0 0 0 4 0" />
                        <path d="M15 22a2 2 0 0 1-4 0" />
                      </svg>
                      Requesting
                    </div>
                  )}
                </span>
                <span className="font-semibold text-sm">{skill.title}</span>
              </div>

              <a
                href={`mailto:${skill.user.contact}`}
                className="block w-full py-3 rounded-xl text-white font-semibold text-sm mb-2 hover:opacity-90 transition-opacity"
                style={{ background: color }}
              >
                Send Message
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

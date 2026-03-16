import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import type { SkillCategory, SkillType } from "../types/skill";
import { useSkillStore } from "../store/skillStores";

const CATEGORIES: SkillCategory[] = [
  "Technology","Design","Music","Language","Business",
  "Fitness","Cooking","Art","Writing","Other",
];

const Explore = () => {
  const skills   = useSkillStore((s) => s.skills);
  const location = useLocation();

  const [search,   setSearch]   = useState("");
  const [typeFilter, setType]   = useState<SkillType | "all">("all");
  const [catFilter,  setCat]    = useState<SkillCategory | "all">("all");

  useEffect(() => {
    const p = new URLSearchParams(location.search).get("category") as SkillCategory | null;
    if (p && CATEGORIES.includes(p)) setCat(p);
  }, [location.search]);

  const filtered = useMemo(() =>
    skills.filter((s) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q)) ||
        s.user.name.toLowerCase().includes(q);
      return matchSearch &&
        (typeFilter === "all" || s.type === typeFilter) &&
        (catFilter  === "all" || s.category === catFilter);
    }),
    [skills, search, typeFilter, catFilter]
  );

  const clearAll = () => { setSearch(""); setType("all"); setCat("all"); };

  return (
    <div className="min-h-screen px-6 md:px-16 py-10">

      {/* Header */}
      <div className="mb-6">
        <h1 className="font-syne text-3xl font-extrabold tracking-tight">Explore Skills</h1>
        <p className="text-sm text-[#7a7a90] mt-1">
          {filtered.length} skill{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Search + type filter */}
      <div className="flex flex-wrap gap-3 mb-3">
        {/* Search */}
        <div className="relative flex-1 min-w-[220px]">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a4a60] text-sm pointer-events-none">🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, tag, or name…"
            className="w-full h-10 pl-9 pr-9 rounded-xl bg-[#111118] border border-white/[0.07] focus:border-indigo-500 outline-none text-sm text-white placeholder-[#4a4a60] transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a7a90] hover:text-white text-xs cursor-pointer"
            >✕</button>
          )}
        </div>

        {/* Type chips */}
        <div className="flex gap-2">
          {(["all","offer","request"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                typeFilter === t
                  ? t === "offer"
                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                    : t === "request"
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                    : "bg-white/[0.07] border-white/15 text-white"
                  : "bg-transparent border-white/[0.07] text-[#7a7a90] hover:text-white hover:border-white/15"
              }`}
            >
              {t === "all" ? "All Types" : t === "offer" ? "✦ Offers" : "✦ Requests"}
            </button>
          ))}
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setCat("all")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
            catFilter === "all"
              ? "bg-indigo-500 border-indigo-500 text-white"
              : "bg-transparent border-white/[0.07] text-[#7a7a90] hover:text-white hover:border-white/15"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCat(catFilter === cat ? "all" : cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
              catFilter === cat
                ? "bg-indigo-500 border-indigo-500 text-white"
                : "bg-transparent border-white/[0.07] text-[#7a7a90] hover:text-white hover:border-white/15"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid / Empty */}
      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4 py-24 text-[#7a7a90]"
        >
          <span className="text-5xl">🔭</span>
          <p className="text-sm">No skills match your search.</p>
          <button onClick={clearAll} className="px-5 py-2.5 rounded-xl border border-white/15 text-white text-sm font-medium hover:bg-white/[0.05] transition-colors cursor-pointer">
            Clear Filters
          </button>
        </motion.div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Explore;
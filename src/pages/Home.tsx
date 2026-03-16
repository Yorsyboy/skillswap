import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSkillStore } from "../store/skillStores";
import {

Laptop,
Palette,
Music,
Languages,
BarChart2,
PenLine,
ChefHat,
Dumbbell
} from "lucide-react";

const categories = [
{ icon: <Laptop size={24} />, label: "Technology" },
{ icon: <Palette size={24} />, label: "Design" },
{ icon: <Music size={24} />, label: "Music" },
{ icon: <Languages size={24} />, label: "Language" },
{ icon: <BarChart2 size={24} />, label: "Business" },
{ icon: <PenLine size={24} />, label: "Writing" },
{ icon: <ChefHat size={24} />, label: "Cooking" },
{ icon: <Dumbbell size={24} />, label: "Fitness" },
];

const steps = [
  { num: "01", title: "Post your skill", desc: "Share what you can teach or what you want to learn." },
  { num: "02", title: "Browse & Match",  desc: "Find people whose skills complement yours." },
  { num: "03", title: "Connect & Exchange", desc: "Reach out and start your skill exchange." },
];

const Home = () => {
  const skills   = useSkillStore((s) => s.skills);
  const offers   = skills.filter((s) => s.type === "offer").length;
  const requests = skills.filter((s) => s.type === "request").length;

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 pt-24 pb-20 min-h-[88vh] overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 bg-grid mask-radial pointer-events-none" />

        {/* Left */}
        <motion.div
          className="relative z-10 flex-1 max-w-xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-indigo-500/15 border border-indigo-500/30 text-indigo-300"
          >
            Peer-to-peer skill exchange
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-syne text-5xl md:text-6xl font-extrabold leading-[1.06] tracking-[-0.04em] mb-5"
          >
            Trade skills.<br />
            <span className="text-gradient">Grow together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.48 }}
            className="text-[#7a7a90] text-lg leading-relaxed mb-8 max-w-md"
          >
            SkillSwap connects people who have something to teach with those who want to learn — no money required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/explore"
              className="px-7 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Browse Skills
            </Link>
            <Link
              to="/post"
              className="px-7 py-3.5 rounded-xl border border-white/15 hover:bg-white/[0.05] text-white font-semibold text-sm transition-colors"
            >
              Post Your Skill
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.55 }}
          className="relative z-10 flex md:flex-col gap-3 flex-wrap justify-center"
        >
          {[
            { num: skills.length, label: "Active Skills",  color: "text-indigo-400" },
            { num: offers,        label: "Offers",         color: "text-green-400" },
            { num: requests,      label: "Requests",       color: "text-amber-400" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-5 px-8 rounded-2xl bg-[#111118] border border-white/[0.07] min-w-[130px]"
            >
              <span className={`font-syne text-4xl font-extrabold tracking-tight ${s.color}`}>
                {s.num}
              </span>
              <span className="text-[11px] text-[#7a7a90] mt-1">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Categories ── */}
      <section className="px-6 md:px-16 py-16 border-t border-white/[0.07]">
        <h2 className="font-syne text-2xl font-bold tracking-tight mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/explore?category=${cat.label}`}
                className="flex flex-col items-center gap-2 py-5 px-2 rounded-2xl bg-[#111118] border border-white/[0.07] hover:border-white/15 hover:bg-[#18181f] hover:-translate-y-1 transition-all duration-200"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-[11px] font-medium text-[#7a7a90]">{cat.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="px-6 md:px-16 py-16 border-t border-white/[0.07]">
        <h2 className="font-syne text-2xl font-bold tracking-tight mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="p-6 rounded-2xl bg-[#111118] border border-white/[0.07]">
              <span className="font-syne text-5xl font-extrabold text-white/10 block leading-none mb-4">
                {step.num}
              </span>
              <h3 className="font-semibold text-base mb-2">{step.title}</h3>
              <p className="text-sm text-[#7a7a90] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
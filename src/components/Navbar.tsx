import { LucideArrowLeftRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/explore", label: "Explore" },
    { to: "/post", label: "Post Skill" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 h-16 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.07]">
      {/* Brand */}
      <Link to="/" className="flex items-center gap-2 font-syne font-extrabold text-lg tracking-tight">
        <span className="text-2xl">
          <LucideArrowLeftRight />
        </span>
        <span>SkillSwap</span>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-1">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              pathname === l.to
                ? "text-white bg-white/[0.07]"
                : "text-[#7a7a90] hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/post"
          className="ml-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold transition-colors"
        >
          + Post Skill
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-white text-xl p-1"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-16 inset-x-0 bg-[#111118] border-b border-white/[0.07] flex flex-col p-4 gap-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium ${
                pathname === l.to ? "bg-white/[0.07] text-white" : "text-[#7a7a90]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
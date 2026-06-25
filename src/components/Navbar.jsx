import { motion } from "framer-motion";
import { BrainCircuit, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Assessment", to: "/assessment" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "About", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-blue-300/10 bg-[#020611]/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.25)]">
            <BrainCircuit size={28} />
          </span>
          <span className="text-2xl font-bold text-white sm:text-3xl">
            SkillSync AI
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item, index) => {
            const className = `relative text-sm font-medium transition ${
              index === 0
                ? "text-blue-400 after:absolute after:left-0 after:top-8 after:h-0.5 after:w-full after:rounded-full after:bg-blue-500"
                : "text-slate-100 hover:text-cyan-300"
            }`;

            return item.to ? (
              <Link key={item.name} to={item.to} className={className}>
                {item.name}
              </Link>
            ) : (
              <a key={item.name} href={item.href} className={className}>
                {item.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Dark theme"
            className="hidden h-10 w-10 place-items-center rounded-lg text-slate-100 transition hover:bg-white/5 sm:grid"
          >
            <Moon size={21} />
          </button>

          <Link
            to="/assessment"
            className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,99,235,0.34)] transition hover:translate-y-[-1px] sm:px-7"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

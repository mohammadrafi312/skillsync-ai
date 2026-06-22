import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-8 py-4">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          >
            SkillSync AI
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">

            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{
                  y: -2,
                  color: "#22d3ee",
                }}
                className="text-gray-300 transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}

          </div>

          {/* Get Started Button */}
          <Link to="/assessment">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(34,211,238,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-xl font-semibold"
            >
              Get Started
            </motion.button>
          </Link>

        </div>
      </div>
    </motion.nav>
  );
}
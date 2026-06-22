import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div
        id="home"
        className="relative overflow-hidden h-screen pt-24 bg-slate-950 text-white flex flex-col justify-center items-center px-6"
      >
        {/* Background Glow */}
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

        {/* Hero Section */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-6xl md:text-8xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          SkillSync AI
        </motion.h1>

        <p className="mt-6 text-xl text-gray-300">
          Your AI Career Copilot
        </p>

        <p className="mt-4 text-center max-w-3xl text-gray-400 text-lg">
          Discover your ideal career path, identify skill gaps,
          and build personalized learning roadmaps powered by AI.
        </p>

        <div className="mt-10">
          <Link to="/assessment">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition">
              Start Assessment
            </button>
          </Link>
        </div>

      </div>

      <Features />
      <Roadmap />
      <Stats />
      <Contact />
      <Footer />

    </>
  );
}
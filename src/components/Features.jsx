import { motion } from "framer-motion";
import { Brain, Target, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: <Brain size={50} />,
    title: "AI Career Guidance",
    desc: "Get personalized career recommendations based on your interests and skills.",
  },
  {
    icon: <Target size={50} />,
    title: "Skill Gap Analysis",
    desc: "Identify missing skills required for your dream role.",
  },
  {
    icon: <TrendingUp size={50} />,
    title: "Learning Roadmaps",
    desc: "Follow structured learning paths designed by AI.",
  },
  {
    icon: <Award size={50} />,
    title: "Progress Tracking",
    desc: "Track achievements and measure career readiness.",
  },
];

export default function Features() {
  return (
    <section
  id="features"
  className="bg-[#020611] text-white py-28 px-6"
>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl sm:text-5xl font-bold mb-6"
      >
        Why SkillSync?
      </motion.h2>

      <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"></div>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 text-lg">
        Everything you need to discover, plan, and achieve your dream career.
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className="bg-[#071226]/70 backdrop-blur-xl border border-cyan-500/10 rounded-lg p-8 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {feature.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

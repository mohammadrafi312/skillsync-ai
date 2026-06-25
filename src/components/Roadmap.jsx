import { motion } from "framer-motion";

const roadmapSteps = [
  "Take Career Assessment",
  "Identify Skill Gaps",
  "Follow Personalized Learning Path",
  "Build Real-World Projects",
  "Get Job Ready",
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="bg-[#020611] text-white py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          Career Roadmap
        </h2>

        <p className="text-center text-gray-400 mb-20">
          Follow a structured path from learning to landing your dream career.
        </p>

        <div className="space-y-8">

          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center gap-6 rounded-lg border border-cyan-500/10 bg-[#071226]/70 p-6 backdrop-blur-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-slate-950">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

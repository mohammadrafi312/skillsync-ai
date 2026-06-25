import { motion } from "framer-motion";

const roadmapSteps = [
  { title: "Take Career Assessment", desc: "Discover your strengths and ideal career paths." },
  { title: "Identify Skill Gaps", desc: "See exactly what you need to learn to reach your goals." },
  { title: "Follow Personalized Path", desc: "Engage with a curated curriculum designed just for you." },
  { title: "Build Real-World Projects", desc: "Gain hands-on experience to build your portfolio." },
  { title: "Get Job Ready", desc: "Prepare for interviews and land your dream job." },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-[#020611] text-white py-28 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Career Roadmap
          </h2>
          <p className="text-gray-400 text-lg">
            Follow a structured path from learning to landing your dream career.
          </p>
        </div>

        <div className="relative space-y-8 pl-4 sm:pl-0">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[38px] top-6 bottom-6 w-1 bg-gradient-to-b from-cyan-500/40 to-transparent hidden sm:block rounded-full"></div>

          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
              className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl border border-cyan-500/10 bg-[#071226]/60 p-6 backdrop-blur-xl hover:border-cyan-500/30 hover:bg-[#071226]/80 transition-all duration-300 group"
            >
              {/* Step Number Badge */}
              <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-xl text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300 z-10 relative">
                {index + 1}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
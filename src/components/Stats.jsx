import { Users, Briefcase, TrendingUp, Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Users size={40} />,
    value: "10K+",
    label: "Students Guided",
  },
  {
    icon: <Briefcase size={40} />,
    value: "500+",
    label: "Career Paths",
  },
  {
    icon: <TrendingUp size={40} />,
    value: "95%",
    label: "Success Rate",
  },
  {
    icon: <Star size={40} />,
    value: "1M+",
    label: "Skills Analyzed",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 px-6 py-24">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-bold text-white mb-16"
      >
        Trusted by Future Professionals
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-8 text-center hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mx-auto mb-6">
              {stat.icon}
            </div>

            <h3 className="text-5xl font-bold text-cyan-400 mb-3">
              {stat.value}
            </h3>

            <p className="text-gray-400">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}
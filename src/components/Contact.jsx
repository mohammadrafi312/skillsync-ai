import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#020611] text-white py-28 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Contact Us
        </motion.h2>

        <p className="text-gray-400 mb-12">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <div className="bg-[#071226]/70 border border-cyan-500/10 rounded-lg p-10 backdrop-blur-xl">

          <p className="text-xl mb-4">
            📧 Email:{" "}
            <a
              href="mailto:shaik.mohammadrafi2712@gmail.com"
              className="break-all font-semibold text-cyan-300 underline-offset-4 hover:text-cyan-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              shaik.mohammadrafi2712@gmail.com
            </a>
          </p>

<p className="text-xl mb-4">
  📱 Contact: +91 9381939958
</p>

<p className="text-xl mb-4">
  👨‍💻 Developer: Mohammad Rafi
</p>

<p className="text-xl mb-4">
  🎓 B.Tech CSE | Sir C. R. Reddy College of Engineering
</p>

<p className="text-xl">
  🌐 Website: Coming Soon
</p>

        </div>

      </div>
    </section>
  );
}

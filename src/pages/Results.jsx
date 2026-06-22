import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";
import CareerChart from "../components/CareerChart";

export default function Results() {
  const scores =
    JSON.parse(localStorage.getItem("careerResult")) || {
      software: 0,
      data: 0,
      design: 0,
      marketing: 0,
    };

  let career = "Data Analyst";
  let match = "94%";

  let skills = ["SQL", "Power BI", "Python", "Excel"];

  let courses = [
    "SQL for Beginners",
    "Power BI Dashboard Masterclass",
    "Python for Data Analysis",
    "Advanced Excel",
  ];

  let roadmap = [
    "Learn Excel Fundamentals",
    "Master SQL Queries",
    "Build Power BI Dashboards",
    "Learn Python for Data Analysis",
    "Create Real-World Projects",
  ];

  const maxCareer = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  if (maxCareer === "software") {
    career = "Software Engineer";
    match = "96%";

    skills = ["HTML & CSS", "JavaScript", "React", "Node.js"];

    courses = [
      "HTML & CSS Bootcamp",
      "JavaScript Complete Guide",
      "React Development",
      "Node.js Fundamentals",
    ];

    roadmap = [
      "Learn HTML & CSS",
      "Master JavaScript",
      "Build React Projects",
      "Learn Backend Development",
      "Create Full Stack Apps",
    ];
  }

  if (maxCareer === "design") {
    career = "UI/UX Designer";
    match = "92%";

    skills = [
      "Figma",
      "Wireframing",
      "User Research",
      "Prototyping",
    ];

    courses = [
      "Figma Masterclass",
      "UI Design Essentials",
      "UX Research Fundamentals",
      "Prototyping Workshop",
    ];

    roadmap = [
      "Learn Design Principles",
      "Master Figma",
      "Create Wireframes",
      "Build Interactive Prototypes",
      "Develop Portfolio Projects",
    ];
  }

  if (maxCareer === "marketing") {
    career = "Digital Marketer";
    match = "91%";

    skills = [
      "SEO",
      "Google Ads",
      "Content Marketing",
      "Analytics",
    ];

    courses = [
      "SEO Fundamentals",
      "Google Ads Masterclass",
      "Digital Marketing Strategy",
      "Content Marketing",
    ];

    roadmap = [
      "Learn Marketing Basics",
      "Master SEO",
      "Run Google Ads Campaigns",
      "Analyze Performance Metrics",
      "Build Marketing Portfolio",
    ];
  }

  const downloadRoadmap = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("SkillSync AI Career Roadmap", 20, 20);

    doc.setFontSize(16);
    doc.text(`Recommended Career: ${career}`, 20, 40);
    doc.text(`Career Match: ${match}`, 20, 55);

    doc.text("Recommended Skills:", 20, 80);

    skills.forEach((skill, index) => {
      doc.text(`• ${skill}`, 30, 95 + index * 10);
    });

    doc.text("Learning Roadmap:", 20, 150);

    roadmap.forEach((step, index) => {
      doc.text(`${index + 1}. ${step}`, 30, 165 + index * 10);
    });

    doc.save("SkillSync-Roadmap.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-10">
        <Link to="/">
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition">
            🏠 Back to Home
          </button>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          {career}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl mt-4 text-gray-300"
        >
          {match} Career Match
        </motion.p>

        <div className="max-w-xl mx-auto mt-8">
          <div className="bg-slate-800 rounded-full h-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: match }}
              transition={{ duration: 1.5 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-4 rounded-full"
            />
          </div>

          <p className="text-gray-400 mt-3">
            Career Compatibility Score
          </p>
        </div>

        <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
          Based on your responses, this career path best matches your
          interests, strengths, and preferred working style.
        </p>

      </div>

      {/* Skills */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Recommended Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-slate-800 rounded-xl p-4"
              >
                ✅ {skill}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Roadmap */}
      <div className="max-w-4xl mx-auto mt-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Your Learning Roadmap
        </h2>

        <div className="space-y-6">

          {roadmap.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <p className="text-xl">
                {step}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* Courses */}
      <div className="max-w-4xl mx-auto mt-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Recommended Courses
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {courses.map((course) => (
            <div
              key={course}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              🎓 {course}
            </div>
          ))}

        </div>

      </div>

      {/* Radar Chart */}
      <div className="max-w-5xl mx-auto mt-20">
        <CareerChart />
      </div>

      {/* Buttons */}
      <div className="text-center mt-16 flex justify-center gap-4">

        <Link to="/">
          <button className="px-8 py-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
            🏠 Home
          </button>
        </Link>

        <button
          onClick={downloadRoadmap}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
        >
          📥 Download Career Roadmap
        </button>

      </div>

    </div>
  );
}
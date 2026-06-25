import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import { CheckCircle, BookOpen, Target, TrendingUp } from "lucide-react";
// Career path recommendations with comprehensive resources
const careerInsights = {
  software: {
    title: "Software Engineering",
    description: "You have a strong logical mindset ideal for building applications and systems.",
    roles: ["Full Stack Developer", "Backend Engineer", "Mobile App Developer"],
    color: "from-blue-500 to-cyan-400",
    skills: ["JavaScript/TypeScript", "React/Vue", "Node.js", "Databases", "Git & Version Control"],
    roadmap: [
      "Master HTML, CSS & JavaScript fundamentals",
      "Learn a frontend framework (React, Vue, or Angular)",
      "Understand backend development & APIs",
      "Build full-stack projects",
      "Learn DevOps and deployment"
    ],
    courses: [
      { title: "The Complete JavaScript Course", platform: "Udemy", url: "https://udemy.com" },
      { title: "React - The Complete Guide", platform: "Udemy", url: "https://udemy.com" },
      { title: "Node.js Design Patterns", platform: "Pluralsight", url: "https://pluralsight.com" }
    ]
  },
  design: {
    title: "UI/UX & Product Design",
    description: "Your creative approach makes you perfect for designing intuitive user experiences.",
    roles: ["Product Designer", "UX Researcher", "UI Developer"],
    color: "from-purple-500 to-pink-500",
    skills: ["Figma/Adobe XD", "User Research", "Prototyping", "Wireframing", "Design Systems"],
    roadmap: [
      "Learn design principles and color theory",
      "Master Figma or Adobe XD",
      "Study user research methods",
      "Build design portfolio",
      "Contribute to open-source design projects"
    ],
    courses: [
      { title: "UI/UX Design Masterclass", platform: "Coursera", url: "https://coursera.org" },
      { title: "Advanced Figma", platform: "Skillshare", url: "https://skillshare.com" },
      { title: "UX Research Fundamentals", platform: "Interaction Design", url: "https://interaction-design.org" }
    ]
  },
  data: {
    title: "Data Science & Analytics",
    description: "You excel at finding patterns and making data-driven decisions.",
    roles: ["Data Analyst", "Machine Learning Engineer", "Data Scientist"],
    color: "from-emerald-400 to-teal-500",
    skills: ["Python/R", "SQL", "Statistics", "Power BI/Tableau", "Machine Learning"],
    roadmap: [
      "Master SQL and database querying",
      "Learn Python for data analysis",
      "Study statistics and probability",
      "Learn visualization tools (Power BI, Tableau)",
      "Build predictive models with ML"
    ],
    courses: [
      { title: "Python for Data Science", platform: "Coursera", url: "https://coursera.org" },
      { title: "Advanced SQL", platform: "DataCamp", url: "https://datacamp.com" },
      { title: "Machine Learning A-Z", platform: "Udemy", url: "https://udemy.com" }
    ]
  },
  marketing: {
    title: "Digital Marketing & Strategy",
    description: "You understand human behavior and excel at driving brand growth.",
    roles: ["Growth Hacker", "SEO Specialist", "Product Marketing Manager"],
    color: "from-orange-400 to-amber-500",
    skills: ["SEO/SEM", "Google Analytics", "Content Marketing", "Social Media", "Copywriting"],
    roadmap: [
      "Understand digital marketing fundamentals",
      "Master Google Analytics",
      "Learn SEO best practices",
      "Build social media strategy",
      "Create data-driven campaigns"
    ],
    courses: [
      { title: "Digital Marketing Specialization", platform: "Coursera", url: "https://coursera.org" },
      { title: "Google Analytics 4 Certification", platform: "Google", url: "https://skillshop.withgoogle.com" },
      { title: "SEO Masterclass", platform: "Udemy", url: "https://udemy.com" }
    ]
  }
};

export default function Results() {
  const navigate = useNavigate();
  const [topCategory, setTopCategory] = useState(null);
  const [scores, setScores] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("careerResult");
    if (savedData) {
      const parsedScores = JSON.parse(savedData);
      setScores(parsedScores);
      const highest = Object.keys(parsedScores).reduce((a, b) => 
        parsedScores[a] > parsedScores[b] ? a : b
      );
      setTopCategory(highest);
    } else {
      navigate("/assessment");
    }
  }, [navigate]);

  const downloadPDF = () => {
    if (!scores) return;
    const doc = new jsPDF();
    const insight = careerInsights[topCategory];
    
    doc.setFontSize(20);
    doc.text("Career Assessment Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
    
    doc.setFontSize(16);
    doc.text(`Recommended Path: ${insight.title}`, 20, 50);
    
    doc.setFontSize(12);
    doc.text("Your Score Breakdown:", 20, 70);
    let yPos = 80;
    Object.entries(scores).forEach(([key, value]) => {
      doc.text(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value} points`, 30, yPos);
      yPos += 10;
    });
    
    yPos += 10;
    doc.text("Recommended Skills:", 20, yPos);
    yPos += 8;
    insight.skills.forEach(skill => {
      doc.text(`• ${skill}`, 30, yPos);
      yPos += 7;
    });
    
    yPos += 5;
    doc.text("Learning Roadmap:", 20, yPos);
    yPos += 8;
    insight.roadmap.forEach((step, idx) => {
      doc.text(`${idx + 1}. ${step}`, 30, yPos);
      yPos += 7;
    });
    
    doc.save(`Career-Report-${topCategory}.pdf`);
  };

  if (!topCategory) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading insights...</div>;

  const insight = careerInsights[topCategory];

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Your Career Profile</h1>
          <p className="text-gray-400 text-lg">Based on your assessment, here is your personalized career trajectory.</p>
        </div>

        {/* Highlight Card */}
        <div className={`rounded-3xl p-1 bg-gradient-to-r ${insight.color} mb-12 shadow-2xl`}>
          <div className="bg-slate-900 rounded-[23px] p-8 sm:p-12 h-full flex flex-col items-center text-center">
            <h2 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${insight.color} mb-4`}>
              {insight.title}
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl">
              {insight.description}
            </p>
            
            <div className="w-full text-left">
              <h3 className="text-xl font-semibold mb-4 text-white border-b border-slate-700 pb-2">Recommended Roles</h3>
              <div className="flex flex-wrap gap-3 justify-center mt-4">
                {insight.roles.map((role) => (
                  <span key={role} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium hover:bg-slate-700 transition-colors">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Score Breakdown */}
        {scores && (
          <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="text-cyan-400" size={24} />
              Your Assessment Scores
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(scores).map(([category, score]) => (
                <div key={category} className="bg-slate-800 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-400 mb-2 capitalize">{category}</p>
                  <p className="text-3xl font-bold text-cyan-400">{score}</p>
                  <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" 
                      style={{width: `${(score / 10) * 100}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Skills */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="text-green-400" size={24} />
            Essential Skills to Master
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {insight.skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl hover:border-cyan-400 border border-slate-700 transition-colors">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <span className="text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Roadmap */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="text-orange-400" size={24} />
            Your Learning Roadmap
          </h3>
          <div className="space-y-4">
            {insight.roadmap.map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  {idx + 1}
                </div>
                <div className="bg-slate-800 flex-1 p-4 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
                  <p className="text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="text-purple-400" size={24} />
            Recommended Courses
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {insight.courses.map((course, idx) => (
              <a 
                key={idx}
                href={course.url}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-cyan-400 transition-colors cursor-pointer group"
              >
                <h4 className="font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">{course.title}</h4>
                <p className="text-sm text-gray-400">{course.platform}</p>
                <p className="text-xs text-cyan-400 mt-2">Learn More →</p>
              </a>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
          >
            Back to Home
          </button>
          <button 
            onClick={downloadPDF}
            className="px-8 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
          >
            📥 Download Report
          </button>
          <button 
            onClick={() => navigate("/assessment")}
            className={`px-8 py-3 rounded-xl text-slate-900 font-bold bg-gradient-to-r ${insight.color} hover:opacity-90 transition-opacity`}
          >
            Retake Assessment
          </button>
        </div>

      </div>
    </div>
  );
}
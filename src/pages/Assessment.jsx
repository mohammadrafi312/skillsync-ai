import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Optimized data structure: mapping each option directly to its category
const questions = [
  {
    question: "Which activity do you enjoy the most?",
    options: [
      { label: "Coding", category: "software" },
      { label: "Designing", category: "design" },
      { label: "Data Analysis", category: "data" },
      { label: "Marketing", category: "marketing" },
    ],
  },
  {
    question: "Which subject interests you most?",
    options: [
      { label: "Programming", category: "software" },
      { label: "UI/UX", category: "design" },
      { label: "Statistics", category: "data" },
      { label: "Business", category: "marketing" },
    ],
  },
  {
    question: "What type of work do you prefer?",
    options: [
      { label: "Building Apps", category: "software" },
      { label: "Creative Design", category: "design" },
      { label: "Analyzing Data", category: "data" },
      { label: "Selling Products", category: "marketing" },
    ],
  },
  {
    question: "Which tool would you like to master?",
    options: [
      { label: "VS Code", category: "software" },
      { label: "Figma", category: "design" },
      { label: "Power BI", category: "data" },
      { label: "Google Ads", category: "marketing" },
    ],
  },
  {
    question: "What excites you most?",
    options: [
      { label: "Software", category: "software" },
      { label: "Design", category: "design" },
      { label: "Insights", category: "data" },
      { label: "Growth", category: "marketing" },
    ],
  },
  {
    question: "How do you prefer to solve problems?",
    options: [
      { label: "Programming", category: "software" },
      { label: "Creativity", category: "design" },
      { label: "Data", category: "data" },
      { label: "Communication", category: "marketing" },
    ],
  },
  {
    question: "Which environment do you enjoy?",
    options: [
      { label: "Tech Teams", category: "software" },
      { label: "Creative Studios", category: "design" },
      { label: "Research Teams", category: "data" },
      { label: "Business Teams", category: "marketing" },
    ],
  },
  {
    question: "What motivates you most?",
    options: [
      { label: "Building Products", category: "software" },
      { label: "Creating Designs", category: "design" },
      { label: "Finding Insights", category: "data" },
      { label: "Growing Brands", category: "marketing" },
    ],
  },
  {
    question: "Which skill sounds most interesting?",
    options: [
      { label: "Web Development", category: "software" },
      { label: "UI Design", category: "design" },
      { label: "Machine Learning", category: "data" },
      { label: "Digital Marketing", category: "marketing" },
    ],
  },
  {
    question: "Where do you see yourself in 5 years?",
    options: [
      { label: "Software Engineer", category: "software" },
      { label: "UI/UX Designer", category: "design" },
      { label: "Data Scientist", category: "data" },
      { label: "Marketing Manager", category: "marketing" },
    ],
  },
];

export default function Assessment() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({
    software: 0,
    data: 0,
    design: 0,
    marketing: 0,
  });

  const handleAnswer = (category) => {
    // Dynamically update the specific category score
    const updatedScores = { 
      ...scores, 
      [category]: scores[category] + 1 
    };
    
    setScores(updatedScores);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      localStorage.setItem("careerResult", JSON.stringify(updatedScores));
      navigate("/results");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center px-6 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-center">
        Career Assessment
      </h1>

      <p className="text-gray-400 mb-10 font-medium">
        Question {current + 1} of {questions.length}
      </p>

      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="bg-slate-800/50 h-2.5 rounded-full mb-10 overflow-hidden border border-slate-700/50">
          <div
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-slate-100 leading-tight">
          {questions[current].question}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {questions[current].options.map((option) => (
            <button
              key={option.label}
              onClick={() => handleAnswer(option.category)}
              className="p-5 text-left text-lg font-medium bg-slate-900/80 rounded-xl border border-slate-700/50 hover:border-cyan-400 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-cyan-500/10"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Assessment() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "Which activity do you enjoy the most?",
      options: ["Coding", "Designing", "Data Analysis", "Marketing"],
    },
    {
      question: "Which subject interests you most?",
      options: ["Programming", "UI/UX", "Statistics", "Business"],
    },
    {
      question: "What type of work do you prefer?",
      options: ["Building Apps", "Creative Design", "Analyzing Data", "Selling Products"],
    },
    {
      question: "Which tool would you like to master?",
      options: ["VS Code", "Figma", "Power BI", "Google Ads"],
    },
    {
      question: "What excites you most?",
      options: ["Software", "Design", "Insights", "Growth"],
    },
  ];

  const [current, setCurrent] = useState(0);

  const [scores, setScores] = useState({
    software: 0,
    data: 0,
    design: 0,
    marketing: 0,
  });

  const handleAnswer = (option) => {
    const updated = { ...scores };

    if (
      option === "Coding" ||
      option === "Programming" ||
      option === "Building Apps" ||
      option === "VS Code" ||
      option === "Software"
    ) {
      updated.software += 1;
    }

    if (
      option === "Data Analysis" ||
      option === "Statistics" ||
      option === "Analyzing Data" ||
      option === "Power BI" ||
      option === "Insights"
    ) {
      updated.data += 1;
    }

    if (
      option === "Designing" ||
      option === "UI/UX" ||
      option === "Creative Design" ||
      option === "Figma" ||
      option === "Design"
    ) {
      updated.design += 1;
    }

    if (
      option === "Marketing" ||
      option === "Business" ||
      option === "Selling Products" ||
      option === "Google Ads" ||
      option === "Growth"
    ) {
      updated.marketing += 1;
    }

    setScores(updated);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      localStorage.setItem(
        "careerResult",
        JSON.stringify(updated)
      );

      navigate("/results");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center px-6">

      <h1 className="text-5xl font-bold mb-6">
        Career Assessment
      </h1>

      <p className="text-gray-400 mb-10">
        Question {current + 1} of {questions.length}
      </p>

      <div className="w-full max-w-2xl">

        <div className="bg-slate-800 h-3 rounded-full mb-8">
          <div
            className="bg-cyan-400 h-3 rounded-full transition-all duration-500"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <h2 className="text-3xl font-semibold mb-8">
          {questions[current].question}
        </h2>

        <div className="grid gap-4">

          {questions[current].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="p-5 bg-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:scale-105 transition"
            >
              {option}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}
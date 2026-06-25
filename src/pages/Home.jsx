import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Bell,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  GraduationCap,
  LayoutDashboard,
  Map,
  Rocket,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import heroStack from "../assets/hero.png";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Stats from "../components/Stats";

const heroFeatures = [
  {
    icon: Sparkles,
    title: "AI-Powered Assessment",
    desc: "Intelligent questions that understand your interests and goals",
  },
  {
    icon: Target,
    title: "Smart Recommendations",
    desc: "Personalized career matches based on your unique profile",
  },
  {
    icon: Map,
    title: "Learning Roadmaps",
    desc: "Step-by-step learning paths tailored just for you",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    desc: "Track your progress and stay motivated every step of the way",
  },
];

const dashboardNav = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: ClipboardCheck, label: "Assessment" },
  { icon: BookOpen, label: "Roadmap" },
  { icon: GraduationCap, label: "Skills" },
  { icon: Code2, label: "Courses" },
  { icon: Activity, label: "Progress" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
];

const metrics = [
  {
    label: "Career Match",
    value: "96%",
    status: "Excellent Match",
    ring: "96%",
    color: "#2f7bff",
  },
  {
    label: "Job Readiness",
    value: "85%",
    status: "Very Good",
    ring: "85%",
    color: "#3ee79b",
  },
  {
    label: "Skills Score",
    value: "78%",
    status: "Good Progress",
    ring: "78%",
    color: "#356bff",
  },
];

const activities = [
  "Assessment Completed",
  "Roadmap Generated",
  "Course Enrolled",
];

function ProgressRing({ value, color }) {
  return (
    <div
      className="relative grid h-16 w-16 place-items-center rounded-full"
      style={{ background: `conic-gradient(${color} ${value}, #10213f 0)` }}
      aria-hidden="true"
    >
      <div className="grid h-11 w-11 place-items-center rounded-full bg-[#081225]">
        <Zap size={14} className="text-cyan-200" />
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      id="dashboard"
      initial={{ opacity: 0, x: 80, rotateY: -8 }}
      animate={{ opacity: 1, x: 0, rotateY: -5 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="dashboard-shell relative mx-auto w-full max-w-[690px] overflow-hidden rounded-lg border border-cyan-400/50 bg-[#061024]/80 shadow-[0_0_45px_rgba(37,99,235,0.32)] backdrop-blur-xl lg:mx-0"
    >
      <img
        src={heroStack}
        alt=""
        className="pointer-events-none absolute right-6 top-5 h-20 w-20 opacity-10"
      />

      <div className="grid min-h-[470px] grid-cols-1 md:grid-cols-[170px_1fr]">
        <aside className="hidden border-r border-cyan-300/10 bg-[#030a19]/55 p-4 md:block">
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
              <BrainCircuit size={22} />
            </span>
            <span className="font-semibold">SkillSync AI</span>
          </div>

          <div className="space-y-2">
            {dashboardNav.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                    item.active
                      ? "bg-blue-600/35 text-white shadow-[0_0_24px_rgba(37,99,235,0.18)]"
                      : "text-slate-300"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </aside>

        <div className="relative p-4 sm:p-5">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-lg font-semibold text-white">
                Welcome back, Alex!
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Ready to continue your learning journey?
              </p>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <Bell size={18} />
              <div className="grid h-9 w-9 place-items-center rounded-full border border-blue-300/30 bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold">
                A
              </div>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-blue-300/10 bg-white/[0.035] p-3"
              >
                <p className="text-xs text-slate-300">{metric.label}</p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-2xl font-semibold">{metric.value}</p>
                    <p className="mt-1 text-xs text-emerald-300">
                      {metric.status}
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <ProgressRing value={metric.ring} color={metric.color} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-lg border border-blue-300/10 bg-white/[0.035] p-3">
              <p className="text-xs text-slate-300">Recommended Career</p>
              <h3 className="mt-3 text-lg font-semibold">Software Engineer</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                Build innovative solutions and shape the future with code.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/assessment"
                  className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_22px_rgba(37,99,235,0.35)]"
                >
                  View Roadmap
                </Link>
                <a
                  href="#roadmap"
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-300/50"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-blue-300/10 bg-white/[0.035] p-3">
              <div className="mx-auto mb-2 h-32 max-w-[200px] sm:h-36">
                <div className="radar-chart" aria-hidden="true" />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                <span>Problem Solving</span>
                <span>Technical Skills</span>
                <span>Leadership</span>
                <span>Communication</span>
              </div>
            </div>
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[0.9fr_0.9fr_1fr]">
            <div className="rounded-lg border border-blue-300/10 bg-white/[0.035] p-3">
              <p className="text-xs text-slate-300">Learning Progress</p>
              <div className="mt-4 flex items-end justify-between">
                <p className="text-2xl font-semibold">72%</p>
                <p className="text-xs text-slate-400">72%</p>
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-slate-800">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              </div>
            </div>

            <div className="rounded-lg border border-blue-300/10 bg-white/[0.035] p-3">
              <p className="text-xs text-slate-300">Next Milestone</p>
              <p className="mt-4 text-sm font-semibold text-white">
                Complete React Course
              </p>
              <p className="mt-5 text-xs text-slate-400">React Basics</p>
              <div className="mt-3 h-1.5 rounded-full bg-slate-800">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-400 to-blue-500" />
              </div>
            </div>

            <div className="rounded-lg border border-blue-300/10 bg-white/[0.035] p-3">
              <p className="text-xs text-slate-300">Recent Activity</p>
              <div className="mt-4 space-y-3">
                {activities.map((activity, index) => (
                  <div
                    key={activity}
                    className="flex items-center justify-between gap-3 text-xs"
                  >
                    <span className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 size={14} className="text-cyan-300" />
                      {activity}
                    </span>
                    <span className="text-slate-500">{index + 1}d ago</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#020611] text-white">
        <section
          id="home"
          className="hero-stage relative isolate overflow-hidden px-6 pb-10 pt-24 sm:pt-28"
        >
          <div className="hero-wave" aria-hidden="true" />
          <div className="hero-grid mx-auto grid min-h-[500px] max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 max-w-2xl"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/50 bg-blue-500/10 px-5 py-2 text-sm font-medium text-slate-100 shadow-[0_0_24px_rgba(37,99,235,0.2)]">
                <Rocket size={17} className="text-cyan-300" />
                Your AI Career Copilot
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-7xl xl:text-[4.4rem]">
                Discover Your{" "}
                <span className="hero-gradient-text">Perfect Career</span>{" "}
                Path with <span className="hero-gradient-text">AI</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Take our intelligent assessment, get personalized career
                recommendations, and follow a customized learning roadmap to
                achieve your dreams.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/assessment"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-7 py-4 font-semibold text-white shadow-[0_0_34px_rgba(37,99,235,0.45)] transition hover:translate-y-[-2px]"
                >
                  Start Assessment
                  <ArrowRight size={20} />
                </Link>

                <a
                  href="#roadmap"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-blue-400/70 bg-slate-950/50 px-7 py-4 font-semibold text-white transition hover:border-cyan-300 hover:bg-blue-500/10"
                >
                  <Map size={22} className="text-cyan-300" />
                  Explore Roadmap
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex -space-x-3">
                  {["MR", "AI", "JS"].map((avatar) => (
                    <span
                      key={avatar}
                      className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#020611] bg-gradient-to-br from-slate-700 to-blue-500 text-xs font-bold"
                    >
                      {avatar}
                    </span>
                  ))}
                </div>
                <p className="text-slate-300">
                  <span className="font-semibold text-blue-400">
                    10,000+ students
                  </span>
                  <br />
                  trust SkillSync AI
                </p>
              </div>
            </motion.div>

            <DashboardPreview />
          </div>

          <div className="relative z-10 mx-auto mt-6 grid max-w-7xl gap-0 overflow-hidden rounded-lg border border-blue-400/20 bg-[#071226]/75 shadow-[0_0_50px_rgba(37,99,235,0.2)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`p-6 sm:p-7 ${
                    index !== heroFeatures.length - 1
                      ? "border-blue-300/10 lg:border-r"
                      : ""
                  } ${index < 2 ? "sm:border-b lg:border-b-0" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-blue-500/15 text-cyan-300 shadow-[0_0_28px_rgba(37,99,235,0.35)]">
                      <Icon size={25} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Features />
        <Roadmap />
        <Stats />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

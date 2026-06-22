import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "SQL", score: 90 },
  { subject: "Python", score: 80 },
  { subject: "Power BI", score: 95 },
  { subject: "Excel", score: 85 },
  { subject: "Communication", score: 75 },
];

export default function CareerChart() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">
        Skill Readiness Dashboard
      </h2>

      <div style={{ width: "100%", height: 400 }}>

        <ResponsiveContainer>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />

            <Radar
              name="Skills"
              dataKey="score"
              stroke="#22d3ee"
              fill="#22d3ee"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}
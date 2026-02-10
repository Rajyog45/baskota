type Props = {
  label: string;
  level: "Low" | "Medium" | "High";
};

export default function RiskCard({ label, level }: Props) {
  const color =
    level === "High"
      ? "text-red-600"
      : level === "Medium"
      ? "text-yellow-600"
      : "text-green-600";

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`text-xl font-bold mt-2 ${color}`}>{level}</p>
    </div>
  );
}

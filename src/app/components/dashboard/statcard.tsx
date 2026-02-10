type StatCardProps = {
  title: string;
  value: string;
  status?: "good" | "warning";
};

export default function StatCard({ title, value, status }: StatCardProps) {
  const statusColor =
    status === "good"
      ? "text-green-600"
      : status === "warning"
      ? "text-yellow-600"
      : "text-gray-900";

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-2xl font-bold mt-2 ${statusColor}`}>
        {value}
      </p>
    </div>
  );
}

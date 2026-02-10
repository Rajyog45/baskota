type Props = {
  label: string;
  value: string;
  benchmark: string;
};

export default function BenchmarkCard({ label, value, benchmark }: Props) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-bold mt-2">{value}</p>
      <p className="text-sm text-gray-400 mt-1">
        Industry Avg: {benchmark}
      </p>
    </div>
  );
}

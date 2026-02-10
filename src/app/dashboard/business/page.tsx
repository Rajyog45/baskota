import StatCard from "@/app/components/dashboard/statcard";

export default function BusinessFinancePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">
        Business & Financial Performance
      </h2>
      <p className="text-gray-600 mb-6">
        A combined view of business health and financial stability.
      </p>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Revenue" value="$120,000" />
        <StatCard title="Total Expenses" value="$78,000" />
        <StatCard title="Net Profit" value="$42,000" />
        <StatCard title="Health Score" value="82 / 100" />
      </div>

      {/* Insights Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Consultant Insights</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Revenue growth is strong but operating costs are rising.</li>
          <li>• Cash reserves are below industry benchmark.</li>
          <li>• Margin optimization opportunities identified.</li>
        </ul>
      </div>
    </div>
  );
}

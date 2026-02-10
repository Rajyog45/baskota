export default function InsightPanel() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Strategic Consultant Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
        <div>
          <h4 className="font-medium mb-2">Observations</h4>
          <ul className="space-y-1">
            <li>• Revenue growth remains positive</li>
            <li>• Expense ratio trending upward</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Risks</h4>
          <ul className="space-y-1">
            <li>• Cost inflation pressure</li>
            <li>• Limited cash buffer</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Opportunities</h4>
          <ul className="space-y-1">
            <li>• Margin optimization potential</li>
            <li>• Process efficiency improvements</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import StatCard from "../components/dashboard/statcard";
import InsightPanel from "../components/dashboard/insightcard";
import FocusAreaCard from "../components/dashboard/focusareacard";
import BenchmarkCard from "../components/dashboard/benchmarkcard";
import RiskCard from "../components/dashboard/riskcard";
import NepseTopGainers from "../components/nepse";

export default function DashboardPage() {
  return (
    <div className="space-y-10">

      {/* Executive Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Executive Business Dashboard
        </h1>
        <p className="text-gray-600">
          Integrated view of business performance, finance, and strategy
        </p>
      </div>

      {/* 1. Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Business Health" value="82 / 100" status="good" />
        <StatCard title="Revenue Growth" value="+8.4%" />
        <StatCard title="Profit Margin" value="35%" />
        <StatCard title="Overall Risk" value="Moderate" status="warning" />
      </div>

      {/* 2. Strategic Insights */}
      <InsightPanel />

      {/* 3. Focus Areas */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Priority Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FocusAreaCard
            title="Cost Optimization"
            status="Needs Attention"
            description="Operating costs rising faster than revenue."
          />
          <FocusAreaCard
            title="Cash Flow Management"
            status="Moderate"
            description="Cash reserves below industry benchmark."
          />
          <FocusAreaCard
            title="Revenue Diversification"
            status="Opportunity"
            description="High dependency on primary revenue stream."
          />
        </div>
      </div>

      {/* 4. Industry Benchmarks */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Industry Benchmark</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenchmarkCard label="Profit Margin" value="35%" benchmark="43%" />
          <BenchmarkCard label="Cost Ratio" value="65%" benchmark="58%" />
          <BenchmarkCard label="Growth Rate" value="8.4%" benchmark="7.1%" />
        </div>
      </div>

      {/* 5. Risk Radar */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Risk Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RiskCard label="Liquidity Risk" level="Medium" />
          <RiskCard label="Cost Volatility" level="High" />
          <RiskCard label="Market Dependency" level="Medium" />
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-blue-600 text-white p-6 rounded-xl flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">
            Ready for a customized business strategy?
          </h3>
          <p className="text-blue-100">
            Get a detailed Business & Finance consultation from our experts.
          </p>
        </div>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium">
          Book Consultation
        </button>
      </div>
    <NepseTopGainers/>
    </div>
  );
}

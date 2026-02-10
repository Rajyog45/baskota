import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Business ", href: "/dashboard/business" },
  { name: "Finance", href: "/dashboard/finance" },
  { name: "Investment Strategy", href: "/dashboard/investment" },
  { name: "Market Insights", href: "/dashboard/market" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6 text-xl font-bold text-blue-600">
        Baskota Consulting
      </div>

      <nav className="px-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

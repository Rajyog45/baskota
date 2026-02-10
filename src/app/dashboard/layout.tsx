import Sidebar from "../components/dashboard/sidebar";
import TopBar from "../components/dashboard/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopBar />
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

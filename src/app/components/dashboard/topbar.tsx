export default function TopBar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-gray-800">
        Business Intelligence Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Welcome, Vikram</span>
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
          V
        </div>
      </div>
    </header>
  );
}

import { Analytics } from "@/components/dashboard/Analytics";
import { ChartSection } from "@/components/dashboard/ChartSection";
import { Header } from "@/components/dashboard/Header";
import { RightSidebar } from "@/components/dashboard/RightSidebar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {rightSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={() => setRightSidebarOpen(false)}
        />
      )}

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          onSidebarToggle={() => setSidebarOpen(true)}
          onRightSidebarToggle={() => setRightSidebarOpen(true)}
        />
        <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            <h1 className="text-xl font-semibold text-gray-900">Today</h1>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <StatsCards />
          <ChartSection />
          <Analytics />
        </div>
      </div>

      <RightSidebar
        isOpen={rightSidebarOpen}
        onClose={() => setRightSidebarOpen(false)}
      />
    </div>
  );
}

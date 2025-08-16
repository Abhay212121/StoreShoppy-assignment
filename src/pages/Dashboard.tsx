// import { ChevronDown } from "lucide-react";
import { Header } from "@/components/dashboard/Header";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { useState } from "react";

// import { StatsCards } from "@/components/dashboard/stats-cards";
// import { ChartsSection } from "@/components/dashboard/charts-section";
// import { AnalyticsGrid } from "@/components/dashboard/analytics-grid";
// import { RightSidebar } from "@/components/dashboard/right-sidebar";

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
      </div>
    </div>
  );
}

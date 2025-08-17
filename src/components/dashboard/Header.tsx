import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bell,
  Copy,
  Star,
  Search,
  Menu,
  Moon,
  Clock,
  LayoutDashboard,
} from "lucide-react";

interface HeaderProps {
  onSidebarToggle: () => void;
  onRightSidebarToggle: () => void;
}

export function Header({ onSidebarToggle, onRightSidebarToggle }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={onSidebarToggle}
          >
            <Menu className="w-4 h-4" />
          </Button>

          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
            >
              <Copy className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
            >
              <Star className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="hidden sm:inline">Dashboards</span>
            <span className="hidden sm:inline">/</span>
            <span className="font-medium text-gray-900">Default</span>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search"
              className="pl-10 w-48 lg:w-64 bg-gray-50 border-gray-200"
            />
            <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 hidden lg:inline">
              ⌘/
            </kbd>
          </div>
          <div className="flex items-center gap-1 lg:gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
            >
              <Moon className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
            >
              <Clock className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="xl:hidden"
              onClick={onRightSidebarToggle}
            >
              <Bell className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden xl:flex"
            >
              <Bell className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
            >
              <LayoutDashboard className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

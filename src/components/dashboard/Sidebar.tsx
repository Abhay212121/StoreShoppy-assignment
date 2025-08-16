"use client";

import { Button } from "@/components/ui/button";
import {
  FileText,
  Folder,
  Globe,
  User,
  Settings,
  BarChart3,
  Users,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out`}
    >
      <div className="lg:hidden absolute top-4 right-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">B</span>
          </div>
          <span className="font-semibold text-gray-900">ByeWind</span>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <div className="flex gap-4 mb-4">
              <button className="text-sm text-gray-600 hover:text-gray-900">
                Favorites
              </button>
              <button className="text-sm text-gray-400 hover:text-gray-600">
                Recently
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Overview</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Projects</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Dashboards
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg px-2 py-1">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span>Default</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                <FileText className="w-4 h-4" />
                <span>eCommerce</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                <Folder className="w-4 h-4" />
                <span>Projects</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                <Globe className="w-4 h-4" />
                <span>Online Courses</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Pages
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                <User className="w-4 h-4" />
                <span>User Profile</span>
              </div>
              <div className="ml-6 space-y-1">
                <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                  Overview
                </div>
                <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                  Projects
                </div>
                <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                  Campaigns
                </div>
                <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                  Documents
                </div>
                <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                  Followers
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                <Settings className="w-4 h-4" />
                <span>Account</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                <BarChart3 className="w-4 h-4" />
                <span>Corporate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                <FileText className="w-4 h-4" />
                <span>Blog</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer px-2 py-1">
                <Users className="w-4 h-4" />
                <span>Social</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
            <span className="text-white text-xs">S</span>
          </div>
          <span>SnowUI</span>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, User, X } from "lucide-react";

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications = [
  { type: "bug", message: "You fixed a bug.", time: "Just now" },
  { type: "user", message: "New user registered.", time: "59 minutes ago" },
  { type: "bug", message: "You fixed a bug.", time: "12 hours ago" },
  {
    type: "subscription",
    message: "Andi Lane subscribed to you.",
    time: "Today, 11:59 AM",
  },
];

const activities = [
  {
    user: "Changed the style.",
    time: "Just now",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    user: "Released a new version.",
    time: "59 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    user: "Submitted a bug.",
    time: "12 hours ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    user: "Modified a data in Page X.",
    time: "Today, 11:59 AM",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    user: "Deleted a page in Project X.",
    time: "Feb 2, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

const contacts = [
  { name: "Natali Craig", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Drew Cano", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Andi Lane", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Koray Okumus", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Kate Morrison", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Melody Macy", avatar: "/placeholder.svg?height=32&width=32" },
];

export function RightSidebar({ isOpen, onClose }: RightSidebarProps) {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "translate-x-full"
      } 2xl:translate-x-0 fixed 2xl:static inset-y-0 right-0 z-50 w-80 bg-white border-l border-gray-200 flex flex-col transition-transform duration-300 ease-in-out`}
    >
      <div className="2xl:hidden absolute top-4 right-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Notifications
          </h3>
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {notification.type === "bug" && (
                    <Settings className="w-4 h-4 text-gray-600" />
                  )}
                  {notification.type === "user" && (
                    <User className="w-4 h-4 text-gray-600" />
                  )}
                  {notification.type === "subscription" && (
                    <Bell className="w-4 h-4 text-gray-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Activities
          </h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.user}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contacts</h3>
          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-900 truncate">
                  {contact.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

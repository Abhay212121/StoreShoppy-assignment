import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const statsData = [
  {
    title: "Views",
    value: "721K",
    change: "+11.02%",
    isPositive: true,
    bgColor: "bg-blue-50 border-blue-100",
  },
  {
    title: "Visits",
    value: "367K",
    change: "-0.03%",
    isPositive: false,
    bgColor: "bg-purple-50 border-purple-100",
  },
  {
    title: "New Users",
    value: "1,156",
    change: "+15.03%",
    isPositive: true,
    bgColor: "bg-green-50 border-green-100",
  },
  {
    title: "Active Users",
    value: "239K",
    change: "+6.08%",
    isPositive: true,
    bgColor: "bg-orange-50 border-orange-100",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-8">
      {statsData.map((stat, index) => (
        <Card
          key={index}
          className={stat.bgColor}
        >
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div
                className={`flex items-center gap-1 ${
                  stat.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                <TrendingUp
                  className={`w-4 h-4 ${!stat.isPositive ? "rotate-180" : ""}`}
                />
                <span className="text-sm font-medium">{stat.change}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

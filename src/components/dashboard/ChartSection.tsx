import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const lineChartData = [
  { month: "Jan", totalUsers: 15000, thisYear: 12000 },
  { month: "Feb", totalUsers: 18000, thisYear: 14000 },
  { month: "Mar", totalUsers: 16000, thisYear: 13000 },
  { month: "Apr", totalUsers: 20000, thisYear: 15000 },
  { month: "May", totalUsers: 22000, thisYear: 18256598 },
  { month: "Jun", totalUsers: 25000, thisYear: 19000 },
  { month: "Jul", totalUsers: 28000, thisYear: 21000 },
];

const trafficSources = [
  { name: "Google", percentage: 85 },
  { name: "YouTube", percentage: 70 },
  { name: "Instagram", percentage: 60 },
  { name: "Pinterest", percentage: 45 },
  { name: "Facebook", percentage: 40 },
  { name: "Twitter", percentage: 25 },
  { name: "Tumblr", percentage: 20 },
];

export const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6 mb-8">
      {/* Line Chart */}
      <Card className="xl:col-span-2">
        <CardHeader className="pb-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-4 overflow-x-auto sm:overflow-visible">
              <button className="text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1 whitespace-nowrap">
                Total Users
              </button>
              <button className="text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap">
                Total Projects
              </button>
              <button className="text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap">
                Operating Status
              </button>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm text-gray-600">This year</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-600">Last year</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Chart */}
          <div className="h-48 sm:h-56 lg:h-64">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <LineChart data={lineChartData}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                />
                <Line
                  type="monotone"
                  dataKey="totalUsers"
                  stroke="#000000"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="thisYear"
                  stroke="#d1d5db"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Highlighted Metric */}
          <div className="mt-4">
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-3 py-1 rounded text-sm">
              18,256,598
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Traffic by Website */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Traffic by Website
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-gray-600 truncate w-20 sm:w-28 md:w-auto">
                  {source.name}
                </span>
                <div className="flex items-center gap-2 flex-1 ml-4">
                  <Progress
                    value={source.percentage}
                    className="flex-1"
                  />
                  <span className="text-xs text-gray-500 min-w-[2rem]">
                    {source.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

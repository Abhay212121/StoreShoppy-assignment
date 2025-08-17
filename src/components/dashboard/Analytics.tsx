import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const barChartData = [
  { name: "Linux", value: 18000, color: "#8b5cf6" },
  { name: "Mac", value: 25000, color: "#10b981" },
  { name: "iOS", value: 30000, color: "#1f2937" },
  { name: "Windows", value: 28000, color: "#60a5fa" },
  { name: "Android", value: 15000, color: "#6b7280" },
  { name: "Other", value: 25000, color: "#10b981" },
];

const pieChartData = [
  { name: "United States", value: 38.6, color: "#60a5fa" },
  { name: "Canada", value: 22.5, color: "#10b981" },
  { name: "Mexico", value: 30.8, color: "#8b5cf6" },
  { name: "Other", value: 8.1, color: "#1f2937" },
];

export const Analytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Traffic by Device
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40 sm:h-48 lg:h-56">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart data={barChartData}>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="value">
                  {barChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Traffic by Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={50}
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 flex-1 w-full text-sm">
              {pieChartData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Marketing & SEO
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <div className="text-2xl sm:text-2xl font-bold text-gray-900 mb-1">
              30M
            </div>
            <div className="text-sm text-gray-600">Total Impressions</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Clock, Briefcase, TrendingUp, CheckCircle2, ChevronRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const barData = [
  { name: 'Mon', hours: 6 },
  { name: 'Tue', hours: 8.5 },
  { name: 'Wed', hours: 7 },
  { name: 'Thu', hours: 9 },
  { name: 'Fri', hours: 5.5 },
  { name: 'Sat', hours: 2 },
  { name: 'Sun', hours: 0 },
];

const areaData = [
  { name: 'Week 1', value: 40 },
  { name: 'Week 2', value: 55 },
  { name: 'Week 3', value: 45 },
  { name: 'Week 4', value: 70 },
];

const pieData = [
  { name: 'Design', value: 35 },
  { name: 'Development', value: 45 },
  { name: 'Meetings', value: 15 },
  { name: 'Admin', value: 5 },
];

const COLORS = ['#0891B2', '#0D9488', '#2563EB', '#4F46E5'];

const StatCard = ({ title, value, icon: Icon, trend, trendValue }: { title: string, value: string, icon: any, trend: 'up' | 'down', trendValue: string }) => (
  <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className="flex justify-between items-start">
        <div className="p-2 bg-secondary rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className={cn(
          "flex items-center text-xs font-semibold px-2 py-0.5 rounded-full",
          trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
        )}>
          {trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
          {trendValue}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <h3 className="text-2xl font-bold mt-1 tracking-tight">{value}</h3>
      </div>
    </CardContent>
  </Card>
);

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground mt-1">Track your progress and productivity for this week.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Hours" value="38.5h" icon={Clock} trend="up" trendValue="+12%" />
        <StatCard title="Active Projects" value="8" icon={Briefcase} trend="up" trendValue="+2" />
        <StatCard title="Completed Tasks" value="24" icon={CheckCircle2} trend="down" trendValue="-5%" />
        <StatCard title="Efficiency Score" value="92%" icon={TrendingUp} trend="up" trendValue="+3%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Activity Insights</CardTitle>
              <CardDescription>Daily hours logged over the current week.</CardDescription>
            </div>
            <Button variant="outline" size="sm">Download PDF</Button>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0891B2" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0891B2" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} />
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="value" stroke="#0891B2" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Time Allocation</CardTitle>
            <CardDescription>Distribution across activities.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {pieData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="text-xs text-muted-foreground font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Entries</CardTitle>
            <Button variant="ghost" size="sm" className="text-primary gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { project: 'Redesign UI Kit', time: '2h 15m', tag: 'Design', status: 'Completed', date: 'Today, 2:30 PM' },
                { project: 'API Integration', time: '4h 30m', tag: 'Dev', status: 'In Progress', date: 'Today, 10:00 AM' },
                { project: 'Weekly Sync', time: '45m', tag: 'Meeting', status: 'Completed', date: 'Yesterday' },
              ].map((entry, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold text-primary">
                      {entry.project[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{entry.project}</h4>
                      <p className="text-xs text-muted-foreground">{entry.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{entry.time}</p>
                    <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-wider px-2 py-0">
                      {entry.tag}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Top Projects</CardTitle>
            <CardDescription>Most time consuming projects this month.</CardDescription>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <Tooltip
                  cursor={{fill: '#F8FAFC'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="hours" fill="#0891B2" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
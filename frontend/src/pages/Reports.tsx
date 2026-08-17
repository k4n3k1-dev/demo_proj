import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  Legend
} from 'recharts';
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Download, Calendar, Filter, FileText, ChevronDown } from 'lucide-react';

const data = [
  { name: 'Jan', design: 45, dev: 60, meeting: 24 },
  { name: 'Feb', design: 52, dev: 48, meeting: 30 },
  { name: 'Mar', design: 38, dev: 75, meeting: 20 },
  { name: 'Apr', design: 65, dev: 55, meeting: 28 },
  { name: 'May', design: 48, dev: 82, meeting: 35 },
  { name: 'Jun', design: 60, dev: 70, meeting: 25 },
];

export default function Reports() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground mt-1">Deep dive into your productivity and project statistics.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" /> This Quarter
            <ChevronDown className="w-3 h-3" />
          </Button>
          <Button className="bg-primary gap-2">
            <Download className="w-4 h-4" /> Export All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Billable Amount', value: '$12,450.00', sub: '+18% from last month' },
          { label: 'Productivity', value: '84%', sub: 'Based on active hours' },
          { label: 'Projects Completed', value: '3', sub: 'In the last 30 days' }
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <p className="text-xs text-emerald-600 mt-1 font-medium">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Time Distribution by Category</CardTitle>
              <CardDescription>Visualizing how time is spent across different departments.</CardDescription>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="bar">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Chart Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bar">Bar Chart</SelectItem>
                  <SelectItem value="line">Line Chart</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="h-[400px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                   contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" />
                <Bar dataKey="design" name="Design" fill="#0891B2" radius={[4, 4, 0, 0]} />
                <Bar dataKey="dev" name="Development" fill="#2563EB" radius={[4, 4, 0, 0]} />
                <Bar dataKey="meeting" name="Meetings" fill="#CBD5E1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Generated Invoices</CardTitle>
              <CardDescription>Latest financial reports for clients.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: 'INV-2023-001', client: 'TechFlow Inc.', date: 'Nov 15, 2023', amount: '$4,200', status: 'Paid' },
                  { id: 'INV-2023-002', client: 'Acme Corp', date: 'Nov 12, 2023', amount: '$1,850', status: 'Pending' },
                  { id: 'INV-2023-003', client: 'Global Logistics', date: 'Nov 08, 2023', amount: '$3,100', status: 'Paid' },
                ].map((inv, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-dashed hover:border-solid hover:bg-secondary/20 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary rounded-md">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{inv.client}</p>
                        <p className="text-xs text-muted-foreground">{inv.id} • {inv.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">{inv.amount}</p>
                      <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${inv.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {inv.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Milestone Accuracy</CardTitle>
              <CardDescription>Actual time vs estimated time for milestones.</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px]">
               <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="dev" stroke="#0891B2" strokeWidth={3} dot={{r: 4}} />
                  <Line type="monotone" dataKey="design" stroke="#2563EB" strokeWidth={3} dot={{r: 4}} />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 flex items-center justify-center gap-8 text-xs text-muted-foreground font-medium">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-cyan-600"></div>
                   Estimated
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                   Actual
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
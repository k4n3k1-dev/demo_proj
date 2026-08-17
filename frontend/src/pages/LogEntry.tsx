import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Clock, Calendar as CalendarIcon, Tag, AlignLeft, CheckCircle2 } from 'lucide-react';

export default function LogEntry() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Log Time</h1>
        <p className="text-muted-foreground mt-2">Track the hours you've spent on specific tasks and projects.</p>
      </div>

      <Card className="border-none shadow-xl shadow-slate-200/50">
        <CardHeader>
          <CardTitle>Entry Details</CardTitle>
          <CardDescription>All fields marked with an asterisk are required.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="project">Project *</Label>
            <Select defaultValue="p1">
              <SelectTrigger id="project">
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="p1">TechFlow Brand Identity</SelectItem>
                <SelectItem value="p2">Mobile App Development</SelectItem>
                <SelectItem value="p3">Quarterly Marketing Audit</SelectItem>
                <SelectItem value="p4">E-commerce Platform Migration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date">Date *</Label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (HH:MM) *</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="duration" placeholder="00:00" defaultValue="01:30" className="pl-10" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <div className="relative">
              <Tag className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Select defaultValue="design">
                <SelectTrigger id="category" className="pl-10">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="dev">Development</SelectItem>
                  <SelectItem value="meeting">Meetings</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <div className="relative">
              <AlignLeft className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <textarea 
                id="description"
                className="w-full min-h-[120px] p-3 pl-10 rounded-md border border-input bg-transparent text-sm focus:ring-1 ring-primary outline-none"
                placeholder="What did you work on?"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t gap-4">
            <Button variant="ghost">Clear Fields</Button>
            <Button className="bg-primary flex-1 max-w-[200px] gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Submit Entry
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Logged Today', value: '5h 15m' },
          { label: 'Logged This Week', value: '32h 45m' },
          { label: 'Monthly Goal', value: '160h' }
        ].map((item, i) => (
          <div key={i} className="p-4 bg-card border rounded-xl text-center">
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{item.label}</p>
            <p className="text-xl font-bold mt-1">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
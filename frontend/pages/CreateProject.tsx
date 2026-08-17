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
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeft,
  Save,
  X,
  Calendar,
  Briefcase,
  DollarSign,
  Users,
  Target,
  PlusCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ProjectForm = ({ title, description }: { title: string, description: string }) => (
  <div className="max-w-4xl mx-auto space-y-8">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/projects">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 border">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Link to="/projects">
          <Button variant="ghost">Cancel</Button>
        </Link>
        <Button className="bg-primary gap-2">
          <Save className="w-4 h-4" /> Save Project
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Project Name *</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="title" placeholder="e.g. Website Redesign" className="pl-10" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="client">Client Name *</Label>
                <Input id="client" placeholder="e.g. Acme Corp" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select defaultValue="design">
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="dev">Development</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="strategy">Strategy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                className="w-full min-h-[120px] p-3 rounded-md border border-input bg-transparent text-sm focus:ring-1 ring-primary outline-none"
                placeholder="Brief overview of project goals and scope..."
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Milestones & Goals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-4">
               {[1, 2].map((i) => (
                 <div key={i} className="flex gap-4 items-start p-4 border rounded-lg bg-secondary/20">
                    <div className="w-8 h-8 rounded bg-card border flex items-center justify-center shrink-0">
                       <Target className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                       <Input placeholder="Milestone name" className="bg-card border-none shadow-sm" />
                       <div className="flex gap-2">
                          <Input type="date" className="bg-card border-none shadow-sm flex-1" />
                          <Button variant="ghost" size="icon" className="text-muted-foreground">
                             <X className="w-4 h-4" />
                          </Button>
                       </div>
                    </div>
                 </div>
               ))}
               <Button variant="outline" className="w-full border-dashed gap-2">
                  <PlusCircle className="w-4 h-4" /> Add Milestone
               </Button>
             </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Timeline & Budget</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="start-date">Start Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="start-date" type="date" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date">Estimated End Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="end-date" type="date" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <Label htmlFor="budget">Estimated Budget</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="budget" type="number" placeholder="0.00" className="pl-10" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Project Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">Public Project</p>
                <p className="text-xs text-muted-foreground">Visible to everyone in the workspace.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">Billable</p>
                <p className="text-xs text-muted-foreground">Include hours in invoice generation.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">Auto-Archiving</p>
                <p className="text-xs text-muted-foreground">Archive after project end date.</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export function CreateProject() {
  return <ProjectForm title="Create Project" description="Define the scope and goals for your new endeavor." />;
}

export function EditProject() {
  return <ProjectForm title="Edit Project" description="Update the project details and configuration." />;
}

export default CreateProject;
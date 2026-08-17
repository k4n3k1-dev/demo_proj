import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  PlusCircle,
  Search,
  Filter,
  MoreVertical,
  Clock,
  Users,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'TechFlow Identity',
    client: 'TechFlow Inc.',
    hours: 124,
    team: [1, 2, 3, 4],
    progress: 75,
    status: 'In Progress',
    tag: 'Design',
    deadline: 'Dec 15'
  },
  {
    id: 2,
    title: 'Mobile App V2',
    client: 'Acme Corp',
    hours: 340,
    team: [2, 5, 6],
    progress: 45,
    status: 'In Progress',
    tag: 'Dev',
    deadline: 'Jan 20'
  },
  {
    id: 3,
    title: 'Quarterly Audit',
    client: 'Global Logistics',
    hours: 12,
    team: [1, 4],
    progress: 100,
    status: 'Completed',
    tag: 'Marketing',
    deadline: 'Completed'
  },
  {
    id: 4,
    title: 'Website Redesign',
    client: 'EcoSolutions',
    hours: 86,
    team: [3, 7, 8, 9],
    progress: 20,
    status: 'On Hold',
    tag: 'Design',
    deadline: 'Feb 10'
  },
  {
    id: 5,
    title: 'API Integration',
    client: 'Fintech Partners',
    hours: 156,
    team: [5, 6],
    progress: 60,
    status: 'In Progress',
    tag: 'Dev',
    deadline: 'Dec 30'
  },
  {
    id: 6,
    title: 'Brand Strategy',
    client: 'Nexus Media',
    hours: 42,
    team: [1, 2, 8],
    progress: 90,
    status: 'Review',
    tag: 'Strategy',
    deadline: 'Dec 05'
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-1">Manage all your active and archived workspace projects.</p>
        </div>
        <Link to="/projects/create">
          <Button className="bg-primary gap-2">
            <PlusCircle className="w-4 h-4" /> Create Project
          </Button>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 bg-card p-2 rounded-xl shadow-sm border">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by title, client or tag..." className="pl-10 border-none bg-transparent shadow-none focus-visible:ring-0" />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto border-t sm:border-t-0 sm:border-l pt-2 sm:pt-0 sm:pl-4 px-2">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
            <Filter className="w-4 h-4" /> Status
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
            <Users className="w-4 h-4" /> Team
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className={cn(
                  "font-medium uppercase text-[10px] tracking-widest px-2 py-0 border-primary/20",
                  project.status === 'Completed' ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "text-primary bg-accent/50"
                )}>
                  {project.tag}
                </Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
              <Link to={`/projects/${project.id}`} className="block group/title">
                <CardTitle className="mt-2 text-xl group-hover/title:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover/title:opacity-100" />
                </CardTitle>
              </Link>
              <CardDescription className="text-sm font-medium">{project.client}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-muted-foreground">Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-1.5" />
              </div>

              <div className="flex justify-between items-center pt-2">
                <div className="flex -space-x-2">
                  {project.team.map((m) => (
                    <Avatar key={m} className="w-8 h-8 border-2 border-card ring-0">
                      <AvatarImage src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-${m}.jpg`} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                    +2
                  </div>
                </div>
                <div className="flex flex-col items-end">
                   <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {project.hours}h
                   </div>
                   <p className="text-[10px] text-muted-foreground mt-0.5">Logged Total</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-secondary/30 px-6 py-3 border-t">
               <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "w-2 h-2 rounded-full",
                      project.status === 'In Progress' ? "bg-primary" :
                      project.status === 'Completed' ? "bg-emerald-500" : "bg-amber-500"
                    )}></span>
                    <span className="text-xs font-semibold text-muted-foreground">{project.status}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Due {project.deadline}</span>
               </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
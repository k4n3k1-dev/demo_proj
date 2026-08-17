import React from 'react';
import { cn } from '@/lib/utils';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Edit,
  ArrowLeft,
  Clock,
  Calendar,
  Users,
  CheckCircle2,
  Clock3,
  FileText,
  Paperclip,
  Share2
} from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link to="/projects">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 border">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <div className="flex items-center gap-2 mb-1">
             <Badge className="bg-primary text-primary-foreground">Design</Badge>
             <span className="text-xs text-muted-foreground font-medium">• Project ID: PRJ-00{id || '1'}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">TechFlow Brand Identity</h1>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" className="gap-2">
            <Share2 className="w-4 h-4" /> Share
          </Button>
          <Link to={`/projects/${id}/edit`}>
            <Button className="bg-primary gap-2">
              <Edit className="w-4 h-4" /> Edit Details
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive brand identity redesign for TechFlow Inc. This project includes logo design,
                visual language guidelines, typography system, and a comprehensive UI kit for their
                upcoming platform migration.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t">
                 <div>
                   <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Start Date</p>
                   <p className="font-semibold mt-1 flex items-center gap-2">
                     <Calendar className="w-4 h-4 text-primary" /> Oct 12, 2023
                   </p>
                 </div>
                 <div>
                   <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">End Date</p>
                   <p className="font-semibold mt-1 flex items-center gap-2">
                     <Calendar className="w-4 h-4 text-primary" /> Dec 15, 2023
                   </p>
                 </div>
                 <div>
                   <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Client</p>
                   <p className="font-semibold mt-1">TechFlow Inc.</p>
                 </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-secondary/50 border mb-6">
              <TabsTrigger value="overview" className="data-[state=active]:bg-card">Timeline</TabsTrigger>
              <TabsTrigger value="team" className="data-[state=active]:bg-card">Team Members</TabsTrigger>
              <TabsTrigger value="files" className="data-[state=active]:bg-card">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card className="border-none shadow-sm">
                <CardContent className="pt-6 space-y-8">
                  {[
                    { status: 'Completed', title: 'Phase 1: Discovery & Research', date: 'Oct 12 - Oct 25', hours: '42h' },
                    { status: 'In Progress', title: 'Phase 2: Visual Concept Design', date: 'Oct 26 - Nov 20', hours: '68h' },
                    { status: 'Upcoming', title: 'Phase 3: Brand Guidelines', date: 'Nov 21 - Dec 05', hours: '0h' },
                    { status: 'Upcoming', title: 'Phase 4: Handoff & Assets', date: 'Dec 06 - Dec 15', hours: '0h' },
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6 relative">
                      {i !== 3 && <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border"></div>}
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center z-10 shrink-0",
                        phase.status === 'Completed' ? "bg-emerald-100 text-emerald-600" :
                        phase.status === 'In Progress' ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" : "bg-secondary text-muted-foreground"
                      )}>
                        {phase.status === 'Completed' ? <CheckCircle2 className="w-5 h-5" /> :
                         phase.status === 'In Progress' ? <Clock3 className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-current"></div>}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                           <h4 className={cn("font-bold", phase.status === 'Upcoming' && "text-muted-foreground")}>{phase.title}</h4>
                           <span className="text-xs font-mono bg-secondary px-2 py-0.5 rounded text-muted-foreground">{phase.hours} logged</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{phase.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team">
              <Card className="border-none shadow-sm">
                 <CardContent className="pt-6">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((m) => (
                        <div key={m} className="flex items-center justify-between p-3 border rounded-lg">
                           <div className="flex items-center gap-3">
                              <Avatar>
                                 <AvatarImage src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-${m}.jpg`} />
                                 <AvatarFallback>U</AvatarFallback>
                              </Avatar>
                              <div>
                                 <p className="text-sm font-semibold">Team Member {m}</p>
                                 <p className="text-xs text-muted-foreground">{m % 2 === 0 ? 'Developer' : 'Designer'}</p>
                              </div>
                           </div>
                           <Button variant="ghost" size="sm">View Activity</Button>
                        </div>
                      ))}
                    </div>
                 </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="files">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Identity_Guidelines.pdf', size: '12.4 MB', type: 'PDF' },
                    { name: 'Logo_Final_Assets.zip', size: '84.2 MB', type: 'ZIP' },
                    { name: 'Client_Feedback_Oct.docx', size: '1.2 MB', type: 'DOC' },
                  ].map((file, i) => (
                    <Card key={i} className="border-none shadow-sm">
                       <CardContent className="p-4 flex items-center gap-3">
                          <div className="p-2 bg-secondary rounded-lg">
                             <FileText className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 overflow-hidden">
                             <p className="text-sm font-medium truncate">{file.name}</p>
                             <p className="text-xs text-muted-foreground">{file.size}</p>
                          </div>
                          <Button variant="ghost" size="icon">
                             <Paperclip className="w-4 h-4" />
                          </Button>
                       </CardContent>
                    </Card>
                  ))}
               </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card className="border-none shadow-sm overflow-hidden">
             <div className="h-2 bg-primary"></div>
             <CardHeader>
                <CardTitle>Overall Progress</CardTitle>
                <CardDescription>Estimated vs Actual time spent</CardDescription>
             </CardHeader>
             <CardContent className="space-y-6">
                <div className="text-center">
                   <div className="inline-flex items-end gap-1">
                      <span className="text-4xl font-bold tracking-tight">75</span>
                      <span className="text-xl text-muted-foreground font-medium mb-1">%</span>
                   </div>
                </div>
                <Progress value={75} className="h-3" />
                <div className="space-y-3 pt-2">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                         <Clock className="w-4 h-4" /> Logged Hours
                      </span>
                      <span className="font-bold">124.5h</span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                         <Users className="w-4 h-4" /> Active Members
                      </span>
                      <span className="font-bold">8</span>
                   </div>
                </div>
             </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
             <CardHeader>
                <CardTitle>Budget Health</CardTitle>
             </CardHeader>
             <CardContent>
                <div className="space-y-4">
                   <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Budget</span>
                      <span className="font-bold">$15,000</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Used to Date</span>
                      <span className="font-bold">$11,250</span>
                   </div>
                   <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: '75%' }}></div>
                   </div>
                   <p className="text-[10px] text-center text-muted-foreground">You are within 5% of the projected spend.</p>
                </div>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
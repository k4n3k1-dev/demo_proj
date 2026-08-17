import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Search, Mail, Phone, MoreHorizontal, UserPlus, Briefcase } from 'lucide-react';

const members = [
  { id: 1, name: 'John Doe', role: 'Project Manager', email: 'john@projectpro.com', status: 'Active', projects: 12 },
  { id: 2, name: 'Sarah Wilson', role: 'UI/UX Designer', email: 'sarah@projectpro.com', status: 'Active', projects: 8 },
  { id: 3, name: 'Michael Chen', role: 'Frontend Developer', email: 'michael@projectpro.com', status: 'Away', projects: 5 },
  { id: 4, name: 'Emily Brown', role: 'Product Designer', email: 'emily@projectpro.com', status: 'Active', projects: 7 },
  { id: 5, name: 'David Smith', role: 'Backend Developer', email: 'david@projectpro.com', status: 'Busy', projects: 4 },
  { id: 6, name: 'Jessica Lee', role: 'Marketing Specialist', email: 'jessica@projectpro.com', status: 'Active', projects: 6 },
];

export default function Team() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
          <p className="text-muted-foreground mt-1">Collaborate and manage roles for your workspace members.</p>
        </div>
        <Button className="bg-primary gap-2">
          <UserPlus className="w-4 h-4" /> Invite Member
        </Button>
      </div>

      <div className="flex items-center gap-4 bg-card p-2 rounded-xl shadow-sm border max-w-md">
        <Search className="ml-2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search members..." className="border-none bg-transparent shadow-none focus-visible:ring-0" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="border-none shadow-sm hover:shadow-md transition-all group">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <Avatar className="w-16 h-16 border-2 border-card ring-2 ring-secondary">
                  <AvatarImage src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-${member.id}.jpg`} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-end gap-2">
                   <Badge variant="outline" className={cn(
                     "text-[10px] font-bold uppercase tracking-widest",
                     member.status === 'Active' ? "text-emerald-600 bg-emerald-50 border-emerald-100" :
                     member.status === 'Busy' ? "text-amber-600 bg-amber-50 border-amber-100" : "text-slate-500 bg-slate-50 border-slate-100"
                   )}>
                      {member.status}
                   </Badge>
                   <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-4 h-4" />
                   </Button>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <div className="mt-4 space-y-2">
                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-3.5 h-3.5" /> {member.email}
                   </div>
                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="w-3.5 h-3.5" /> {member.projects} Projects
                   </div>
                </div>
              </div>
            </CardContent>
            <div className="px-6 py-3 bg-secondary/30 border-t flex justify-between items-center">
               <Button variant="link" className="p-0 h-auto text-xs font-bold text-primary">View Profile</Button>
               <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full bg-card shadow-sm border">
                     <Mail className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full bg-card shadow-sm border">
                     <Phone className="w-3.5 h-3.5" />
                  </Button>
               </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
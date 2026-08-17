import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const entries = [
  { id: 1, project: 'TechFlow Identity', category: 'Design', duration: '2h 30m', date: '2023-11-20', description: 'Logo refinements and color palette exploration' },
  { id: 2, project: 'Mobile App', category: 'Dev', duration: '4h 15m', date: '2023-11-20', description: 'Authentication flow implementation' },
  { id: 3, project: 'Marketing Audit', category: 'Meeting', duration: '1h 00m', date: '2023-11-19', description: 'Weekly stakeholder sync' },
  { id: 4, project: 'TechFlow Identity', category: 'Design', duration: '3h 45m', date: '2023-11-19', description: 'Typography scale and icon system' },
  { id: 5, project: 'E-commerce Mig', category: 'Research', duration: '2h 15m', date: '2023-11-18', description: 'Analysis of current database structure' },
  { id: 6, project: 'Mobile App', category: 'Dev', duration: '5h 30m', date: '2023-11-18', description: 'Bug fixes in payment module' },
  { id: 7, project: 'Admin Task', category: 'Admin', duration: '0h 45m', date: '2023-11-17', description: 'Quarterly reporting' },
];

export default function EntryHistory() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Entry History</h1>
          <p className="text-muted-foreground mt-1">Review and manage all your logged time entries.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" /> Export
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search descriptions or projects..." className="pl-10 max-w-sm border-none bg-secondary/50" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader className="bg-secondary/30">
                <TableRow>
                  <TableHead className="w-[120px]">Date</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Duration</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.id} className="hover:bg-secondary/20 transition-colors">
                    <TableCell className="font-medium text-sm text-muted-foreground">
                      {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </TableCell>
                    <TableCell className="font-semibold text-sm">{entry.project}</TableCell>
                    <TableCell className="max-w-[300px]">
                      <p className="text-sm truncate" title={entry.description}>{entry.description}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-normal">
                        {entry.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono font-bold text-primary">
                      {entry.duration}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Edit className="w-4 h-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2 text-destructive">
                            <Trash2 className="w-4 h-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Showing 7 of 142 entries</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
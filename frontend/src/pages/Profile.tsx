import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Mail, MapPin, Globe, Twitter, Linkedin } from 'lucide-react';

export default function Profile() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-card shadow-lg">
              <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 h-8 w-8 rounded-full border shadow-sm">
              <Camera className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" /> john.doe@projectpro.com
            </p>
          </div>
        </div>
        <Button className="bg-primary">Save Changes</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and how others see you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea 
                  id="bio"
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-transparent text-sm focus:ring-1 ring-primary outline-none"
                  placeholder="Tell us about yourself..."
                  defaultValue="Product Designer and Project Manager at TechFlow. Passionate about building great user experiences and efficient workflows."
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="location" className="pl-10" defaultValue="San Francisco, CA" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="website" className="pl-10" defaultValue="johndoe.design" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Profiles</CardTitle>
              <CardDescription>Connect your professional social media accounts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <div className="relative">
                  <Twitter className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="twitter" className="pl-10" placeholder="https://twitter.com/username" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="linkedin" className="pl-10" placeholder="https://linkedin.com/in/username" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-dashed">
                <span className="text-sm font-medium">Role</span>
                <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-semibold">Admin</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-dashed">
                <span className="text-sm font-medium">Joined</span>
                <span className="text-sm text-muted-foreground">Oct 2023</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium">Projects</span>
                <span className="text-sm text-muted-foreground">12 Active</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
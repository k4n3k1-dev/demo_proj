import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-6">
        <span className="text-4xl font-bold text-primary">404</span>
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2">Page Not Found</h1>
      <p className="text-muted-foreground text-lg max-w-md mb-8">
        Oops! The page you're looking for doesn't exist or has been moved to a new workspace.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" className="gap-2" onClick={() => window.history.back()}>
          <ArrowLeft className="w-4 h-4" /> Go Back
        </Button>
        <Link to="/">
          <Button className="bg-primary gap-2">
            <Home className="w-4 h-4" /> Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
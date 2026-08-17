import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Clock, 
  User, 
  Settings, 
  Users, 
  BarChart3, 
  PlusCircle, 
  LogOut, 
  Bell,
  Search,
  Menu,
  ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Pages (to be created)
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import CreateProject from './pages/CreateProject';
import EditProject from './pages/EditProject';
import LogEntry from './pages/LogEntry';
import EntryHistory from './pages/EntryHistory';
import Profile from './pages/Profile';
import SettingsPage from './pages/Settings';
import Team from './pages/Team';
import Reports from './pages/Reports';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const SidebarLink = ({ to, icon: Icon, label, active }: { to: string, icon: any, label: string, active?: boolean }) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm",
      active 
        ? "bg-accent text-accent-foreground font-medium" 
        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
    )}
  >
    <Icon className="w-4 h-4" />
    {label}
  </Link>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card flex flex-col fixed inset-y-0">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Briefcase className="text-primary-foreground w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">ProjectPro</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">Main</div>
          <SidebarLink to="/" icon={LayoutDashboard} label="Dashboard" active={location.pathname === '/'} />
          <SidebarLink to="/projects" icon={Briefcase} label="Projects" active={location.pathname.startsWith('/projects')} />
          <SidebarLink to="/log-entry" icon={Clock} label="Log Entry" active={location.pathname === '/log-entry'} />
          <SidebarLink to="/history" icon={Clock} label="Entry History" active={location.pathname === '/history'} />
          
          <div className="pt-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">Management</div>
          <SidebarLink to="/team" icon={Users} label="Team Members" active={location.pathname === '/team'} />
          <SidebarLink to="/reports" icon={BarChart3} label="Reports" active={location.pathname === '/reports'} />
          
          <div className="pt-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">Account</div>
          <SidebarLink to="/profile" icon={User} label="Profile" active={location.pathname === '/profile'} />
          <SidebarLink to="/settings" icon={Settings} label="Settings" active={location.pathname === '/settings'} />
        </nav>

        <div className="p-4 border-t mt-auto">
          <div className="flex items-center gap-3 px-3 py-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john@projectpro.com</p>
            </div>
            <Link to="/login">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                <LogOut className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="h-16 border-b bg-card/80 backdrop-blur-md sticky top-0 z-30 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer">Workspace</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium capitalize">
              {location.pathname === '/' ? 'Dashboard' : location.pathname.substring(1).replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input 
                type="search" 
                placeholder="Search projects..." 
                className="pl-9 pr-4 py-2 bg-secondary/50 border-none rounded-full text-sm focus:ring-1 ring-primary w-64 outline-none"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-card"></span>
            </Button>
            <Link to="/projects/create">
              <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                <PlusCircle className="w-4 h-4" />
                <span className="hidden sm:inline">New Project</span>
              </Button>
            </Link>
          </div>
        </header>

        {/* Page Container */}
        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/projects/:id/edit" element={<EditProject />} />
          <Route path="/log-entry" element={<LogEntry />} />
          <Route path="/history" element={<EntryHistory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
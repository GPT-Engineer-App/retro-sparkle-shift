import { Home, BarChart2, Clipboard, Settings } from "lucide-react";
import Dashboard from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Retrospectives",
    to: "/retrospectives",
    icon: <Clipboard className="h-4 w-4" />,
    page: <div>Retrospectives Page</div>, // Placeholder
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <div>Analytics Page</div>, // Placeholder
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <div>Settings Page</div>, // Placeholder
  },
];

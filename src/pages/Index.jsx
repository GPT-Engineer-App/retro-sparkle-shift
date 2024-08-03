import { useState } from 'react';
import { Layout, LayoutContent, LayoutHeader, LayoutSidebar } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import UpcomingRetrospectives from '@/components/UpcomingRetrospectives';
import { navItems } from '@/nav-items';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout>
      <LayoutHeader className="bg-teal-600 text-white p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">RetroBoost</h1>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </LayoutHeader>
      <div className="flex flex-1">
        <LayoutSidebar className={`bg-teal-700 text-white p-4 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href={item.to} className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </LayoutSidebar>
        <LayoutContent className="bg-gray-100 p-6 flex-1">
          <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UpcomingRetrospectives />
            {/* More widgets will be added here */}
          </div>
        </LayoutContent>
      </div>
    </Layout>
  );
};

export default Dashboard;

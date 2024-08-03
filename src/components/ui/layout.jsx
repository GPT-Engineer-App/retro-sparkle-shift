import React from 'react';
import { cn } from '@/lib/utils';

export const Layout = ({ children, className, ...props }) => (
  <div className={cn('min-h-screen flex flex-col', className)} {...props}>
    {children}
  </div>
);

export const LayoutHeader = ({ children, className, ...props }) => (
  <header className={cn('flex-shrink-0', className)} {...props}>
    {children}
  </header>
);

export const LayoutSidebar = ({ children, className, ...props }) => (
  <aside className={cn('w-64 flex-shrink-0', className)} {...props}>
    {children}
  </aside>
);

export const LayoutContent = ({ children, className, ...props }) => (
  <main className={cn('flex-grow', className)} {...props}>
    {children}
  </main>
);

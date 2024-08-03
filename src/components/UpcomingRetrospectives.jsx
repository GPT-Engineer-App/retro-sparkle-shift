import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UpcomingRetrospectives = () => {
  const upcomingRetros = [
    { id: 1, title: 'Sprint 23 Retro', date: '2023-04-15', time: '14:00' },
    { id: 2, title: 'Q2 Review', date: '2023-04-20', time: '10:00' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Retrospectives</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {upcomingRetros.map((retro) => (
            <li key={retro.id} className="flex justify-between items-center">
              <span className="font-medium">{retro.title}</span>
              <span className="text-sm text-gray-500">{retro.date} at {retro.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default UpcomingRetrospectives;

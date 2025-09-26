import React from 'react';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { Leaderboard } from '@/components/dashboard/leaderboard';
import { Announcements } from '@/components/dashboard/announcements';

export default function DashboardPage() {
  return (
    <div className="grid gap-8">
      <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
      
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Leaderboard />
        </div>
        <div>
          <Announcements />
        </div>
      </div>
    </div>
  );
}

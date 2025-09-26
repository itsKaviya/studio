import { GroupsDisplay } from '@/components/groups/groups-display';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function GroupsPage() {
  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline">Batch & Group Management</h1>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Group
        </Button>
      </div>
      <p className="text-muted-foreground">Organize students into teams for targeted assignments and leaderboards.</p>
      <GroupsDisplay />
    </div>
  );
}

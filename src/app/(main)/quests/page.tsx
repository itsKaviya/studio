import { QuestsList } from '@/components/quests/quests-list';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function QuestsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline">Quest Management</h1>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Quest
        </Button>
      </div>
      <p className="text-muted-foreground">Build and deploy learning modules for your students.</p>
      <QuestsList />
    </div>
  );
}

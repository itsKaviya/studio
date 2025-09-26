import { ContentTable } from '@/components/content/content-table';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function ContentPage() {
  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline">Content Library</h1>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Content
        </Button>
      </div>
      <p className="text-muted-foreground">Manage your learning materials like PDFs, videos, and links.</p>
      <ContentTable />
    </div>
  );
}

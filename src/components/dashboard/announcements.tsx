import { announcements } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Megaphone } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';

export function Announcements() {
  const sortedAnnouncements = [...announcements].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Class Announcements</CardTitle>
        <CardDescription>Post messages for all students.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <Textarea placeholder="Type your announcement here..." className="min-h-[100px]" />
        <Button className="w-full">
          <Megaphone className="mr-2 h-4 w-4" /> Post Announcement
        </Button>
      </CardContent>
      <CardFooter className="flex-1 flex flex-col items-start p-0">
        <h3 className="text-sm font-medium px-6 pb-2">Recent</h3>
        <ScrollArea className="h-[150px] w-full">
            <div className="px-6">
            {sortedAnnouncements.map((announcement) => (
                <div key={announcement.id} className="mb-4 text-sm">
                    <p className="text-foreground/90">{announcement.message}</p>
                    <p className="text-xs text-muted-foreground">{formatDistanceToNow(announcement.date, { addSuffix: true })}</p>
                </div>
            ))}
            </div>
        </ScrollArea>
      </CardFooter>
    </Card>
  );
}

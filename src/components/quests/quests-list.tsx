import { quests } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical, Star, Trophy, Users, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const statusColors = {
    'Active': 'default',
    'Archived': 'secondary',
    'Draft': 'outline',
} as const;

export function QuestsList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {quests.map((quest) => (
        <Card key={quest.id} className="flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <Badge variant={statusColors[quest.status]}>{quest.status}</Badge>
                <CardTitle className="mt-2">{quest.title}</CardTitle>
                <CardDescription>{quest.objective}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem>Archive</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <div className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    <span>{quest.xpReward} XP</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-accent" />
                    <span>{quest.badgeReward}</span>
                </div>
            </div>
            {quest.status === 'Active' && quest.dueDate && (
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Due: {quest.dueDate.toLocaleDateString()}</span>
                </div>
            )}
            
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Submissions
                </span>
                <span className="text-sm text-muted-foreground">{quest.submissions} / {quest.totalStudents}</span>
              </div>
              <Progress value={(quest.submissions / quest.totalStudents) * 100} />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

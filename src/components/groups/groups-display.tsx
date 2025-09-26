import { groups } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MoreVertical, Star as StarIcon, CheckCircle, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function GroupsDisplay() {
  return (
    <TooltipProvider>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.id}>
            <CardHeader>
               <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>{group.name}</CardTitle>
                        <CardDescription>{group.members.length} members</CardDescription>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Group</DropdownMenuItem>
                        <DropdownMenuItem>Assign Quest</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete Group</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent>
              <div className="flex -space-x-2 overflow-hidden">
                {group.members.map((member) => (
                  <Tooltip key={member.id}>
                    <TooltipTrigger asChild>
                      <Avatar className="inline-block h-10 w-10 border-2 border-card">
                        <AvatarImage src={member.avatarUrl} data-ai-hint="person portrait" />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="flex items-center gap-2">
                          {member.id === group.leader && <Crown className="h-4 w-4 text-accent" />}
                          <p>{member.name}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <StarIcon className="h-4 w-4" />
                    <span>{group.teamXp.toLocaleString()} XP</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4" />
                    <span>{group.teamQuestCompletion * 100}% Complete</span>
                </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </TooltipProvider>
  );
}

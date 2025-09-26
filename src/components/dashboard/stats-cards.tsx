import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Star, CheckCircle } from "lucide-react";

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Class Level</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-headline">Level 5</div>
          <p className="text-xs text-muted-foreground">Forest Dweller</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Top Student XP</CardTitle>
          <Star className="h-4 w-4 text-accent" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-headline">9,500 XP</div>
          <p className="text-xs text-muted-foreground">Diana Prince</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Quest Completion</CardTitle>
          <CheckCircle className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-headline">85%</div>
          <p className="text-xs text-muted-foreground">Average across all active quests</p>
        </CardContent>
      </Card>
    </div>
  );
}

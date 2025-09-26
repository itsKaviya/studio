import { students } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";

export function Leaderboard() {
  const topStudents = [...students]
    .sort((a, b) => b.totalXp - a.totalXp)
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
            <div>
                <CardTitle>XP Leaderboard</CardTitle>
                <CardDescription>Top 5 students by experience points.</CardDescription>
            </div>
            <Link href="/students">
                <Button variant="outline">View All</Button>
            </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Rank</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Level</TableHead>
              <TableHead className="text-right">Total XP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topStudents.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                    {index === 0 ? (
                      <Star className="w-5 h-5 text-accent" fill="currentColor" />
                    ) : (
                      index + 1
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint="person portrait" />
                      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="font-medium">{student.name}</div>
                  </div>
                </TableCell>
                <TableCell>
                    <Badge variant="secondary">{student.level}</Badge>
                </TableCell>
                <TableCell className="text-right font-semibold font-mono">
                  {student.totalXp.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

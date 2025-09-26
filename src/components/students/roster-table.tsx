"use client";

import React, { useState, useMemo } from "react";
import type { Student } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, ArrowUpDown, AlertCircle, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RewardDialog } from "./reward-dialog";

type SortKey = keyof Student | "name";

export function RosterTable({ students: initialStudents }: { students: Student[] }) {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: "asc" | "desc" } | null>(null);
  const [filter, setFilter] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const sortedStudents = useMemo(() => {
    let sortableStudents = [...students];
    if (sortConfig !== null) {
      sortableStudents.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof Student];
        const bValue = b[sortConfig.key as keyof Student];

        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableStudents.filter((student) =>
      student.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [students, sortConfig, filter]);

  const requestSort = (key: SortKey) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  
  const getSortIndicator = (key: SortKey) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown className="ml-2 h-4 w-4 text-muted-foreground/50" />;
    }
    return sortConfig.direction === 'asc' ? '▲' : '▼';
  };

  const isLowEngagement = (lastLogin: Date): boolean => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return lastLogin < oneWeekAgo;
  };

  const handleReward = (student: Student) => {
    setSelectedStudent(student);
  };

  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter students..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead onClick={() => requestSort("name")} className="cursor-pointer">
                <div className="flex items-center">Name {getSortIndicator("name")}</div>
              </TableHead>
              <TableHead onClick={() => requestSort("totalXp")} className="cursor-pointer">
                <div className="flex items-center">Total XP {getSortIndicator("totalXp")}</div>
              </TableHead>
              <TableHead onClick={() => requestSort("badgesEarned")} className="cursor-pointer">
                 <div className="flex items-center">Badges {getSortIndicator("badgesEarned")}</div>
              </TableHead>
              <TableHead onClick={() => requestSort("lastLogin")} className="cursor-pointer">
                <div className="flex items-center">Last Login {getSortIndicator("lastLogin")}</div>
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint="person portrait" />
                      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{student.name}</span>
                    {isLowEngagement(student.lastLogin) && (
                        <AlertCircle className="h-4 w-4 text-destructive" title="Low Engagement" />
                    )}
                  </div>
                </TableCell>
                <TableCell>{student.totalXp.toLocaleString()}</TableCell>
                <TableCell>{student.badgesEarned}</TableCell>
                <TableCell>{student.lastLogin.toLocaleDateString()}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleReward(student)}>
                        <Award className="mr-2 h-4 w-4" />
                        <span>Grant Bonus XP</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
       {selectedStudent && (
        <RewardDialog
          student={selectedStudent}
          isOpen={!!selectedStudent}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setSelectedStudent(null);
            }
          }}
        />
      )}
    </>
  );
}

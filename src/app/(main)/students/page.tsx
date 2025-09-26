import { RosterTable } from "@/components/students/roster-table";
import { students } from "@/lib/data";

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Student Roster</h1>
      <RosterTable students={students} />
    </div>
  );
}

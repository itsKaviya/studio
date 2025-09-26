"use server";

import { suggestBonusXpReason, SuggestBonusXpReasonInput } from "@/ai/flows/suggest-bonus-xp-reason";
import { students } from "@/lib/data";

export async function suggestReasonAction(studentId: string): Promise<{success: boolean; reason?: string; error?: string}> {
  try {
    const student = students.find((s) => s.id === studentId);

    if (!student) {
      return { success: false, error: "Student not found." };
    }

    const input: SuggestBonusXpReasonInput = {
      studentName: student.name,
      totalXp: student.totalXp,
      questCompletionRate: student.questCompletionRate,
      badgesEarned: student.badgesEarned,
      lastActivity: student.lastLogin.toDateString(),
      masterySkills: student.masterySkills,
    };

    const result = await suggestBonusXpReason(input);
    
    if (result && result.reason) {
      return { success: true, reason: result.reason };
    } else {
      return { success: false, error: "Failed to generate a suggestion from AI." };
    }
  } catch (e) {
    console.error(e);
    return { success: false, error: "An unexpected error occurred." };
  }
}

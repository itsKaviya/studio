'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting reasons to award bonus XP to students.
 *
 * The flow takes student performance data as input and uses an LLM to generate a personalized reason
 * for awarding bonus XP. This allows teachers to quickly and easily recognize student effort and engagement.
 *
 * @interface SuggestBonusXpReasonInput - Defines the input schema for the flow.
 * @interface SuggestBonusXpReasonOutput - Defines the output schema for the flow.
 * @function suggestBonusXpReason - The main function that triggers the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBonusXpReasonInputSchema = z.object({
  studentName: z.string().describe('The name of the student.'),
  totalXp: z.number().describe('The total experience points of the student.'),
  questCompletionRate: z
    .number()
    .describe('The quest completion rate of the student (0 to 1).'),
  badgesEarned: z.number().describe('The number of badges earned by the student.'),
  lastActivity: z.string().describe('Last activity'),
  masterySkills: z
    .array(z.string())
    .describe('A list of skills the student has mastered.'),
});
export type SuggestBonusXpReasonInput = z.infer<
  typeof SuggestBonusXpReasonInputSchema
>;

const SuggestBonusXpReasonOutputSchema = z.object({
  reason: z
    .string()
    .describe(
      'A personalized reason for awarding bonus XP to the student, based on their performance data.'
    ),
});
export type SuggestBonusXpReasonOutput = z.infer<
  typeof SuggestBonusXpReasonOutputSchema
>;

export async function suggestBonusXpReason(
  input: SuggestBonusXpReasonInput
): Promise<SuggestBonusXpReasonOutput> {
  return suggestBonusXpReasonFlow(input);
}

const suggestBonusXpReasonPrompt = ai.definePrompt({
  name: 'suggestBonusXpReasonPrompt',
  input: {schema: SuggestBonusXpReasonInputSchema},
  output: {schema: SuggestBonusXpReasonOutputSchema},
  prompt: `Based on the student's performance data, suggest a reason for awarding bonus XP.

Student Name: {{{studentName}}}
Total XP: {{{totalXp}}}
Quest Completion Rate: {{{questCompletionRate}}}
Badges Earned: {{{badgesEarned}}}
Mastery Skills: {{#each masterySkills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Suggest a reason for awarding bonus XP that is personalized and specific to the student's achievements. Please also consider the last login time: {{{lastActivity}}}. Focus on positive reinforcement and encouragement.
`,
});

const suggestBonusXpReasonFlow = ai.defineFlow(
  {
    name: 'suggestBonusXpReasonFlow',
    inputSchema: SuggestBonusXpReasonInputSchema,
    outputSchema: SuggestBonusXpReasonOutputSchema,
  },
  async input => {
    const {output} = await suggestBonusXpReasonPrompt(input);
    return output!;
  }
);

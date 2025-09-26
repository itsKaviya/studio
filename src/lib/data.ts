import type { Student, Quest, ContentItem, Group, Announcement } from './types';

export const students: Student[] = [
  { id: '1', name: 'Alex Johnson', avatarUrl: 'https://picsum.photos/seed/1/100/100', totalXp: 8500, badgesEarned: 12, lastLogin: new Date('2024-07-29T10:00:00Z'), questCompletionRate: 0.9, masterySkills: ['Water Cycle', 'Biomes'], level: 'Forest Dweller' },
  { id: '2', name: 'Brenda Smith', avatarUrl: 'https://picsum.photos/seed/2/100/100', totalXp: 9200, badgesEarned: 15, lastLogin: new Date('2024-07-30T11:30:00Z'), questCompletionRate: 0.95, masterySkills: ['Water Cycle', 'Biomes', 'Sustainability'], level: 'River Guardian' },
  { id: '3', name: 'Carlos Gomez', avatarUrl: 'https://picsum.photos/seed/3/100/100', totalXp: 7800, badgesEarned: 10, lastLogin: new Date('2024-07-28T14:00:00Z'), questCompletionRate: 0.8, masterySkills: ['Biomes'], level: 'Forest Dweller' },
  { id: '4', name: 'Diana Prince', avatarUrl: 'https://picsum.photos/seed/4/100/100', totalXp: 9500, badgesEarned: 18, lastLogin: new Date('2024-07-30T09:00:00Z'), questCompletionRate: 1.0, masterySkills: ['Water Cycle', 'Biomes', 'Sustainability'], level: 'River Guardian' },
  { id: '5', name: 'Ethan Hunt', avatarUrl: 'https://picsum.photos/seed/5/100/100', totalXp: 8800, badgesEarned: 14, lastLogin: new Date('2024-07-29T18:00:00Z'), questCompletionRate: 0.85, masterySkills: ['Water Cycle', 'Sustainability'], level: 'Forest Dweller' },
  { id: '6', name: 'Fiona Glenanne', avatarUrl: 'https://picsum.photos/seed/6/100/100', totalXp: 7200, badgesEarned: 8, lastLogin: new Date('2024-07-15T12:00:00Z'), questCompletionRate: 0.6, masterySkills: ['Water Cycle'], level: 'Seedling' },
  { id: '7', name: 'George Costanza', avatarUrl: 'https://picsum.photos/seed/7/100/100', totalXp: 6500, badgesEarned: 5, lastLogin: new Date('2024-07-25T08:00:00Z'), questCompletionRate: 0.7, masterySkills: ['Biomes'], level: 'Seedling' },
  { id: '8', name: 'Hannah Abbott', avatarUrl: 'https://picsum.photos/seed/8/100/100', totalXp: 8100, badgesEarned: 11, lastLogin: new Date('2024-07-30T13:45:00Z'), questCompletionRate: 0.92, masterySkills: ['Water Cycle', 'Biomes'], level: 'Forest Dweller' },
];

export const quests: Quest[] = [
  { id: 'q1', title: 'The Water Cycle Journey', objective: 'Identify and describe the 4 main stages of the water cycle.', xpReward: 500, badgeReward: 'Hydrology Expert', status: 'Active', dueDate: new Date('2024-08-15T23:59:59Z'), submissions: 18, totalStudents: 20 },
  { id: 'q2', title: 'Biome Explorer', objective: 'Identify 5 unique desert adaptations in plants and animals.', xpReward: 750, badgeReward: 'Desert Wanderer', status: 'Active', dueDate: new Date('2024-08-20T23:59:59Z'), submissions: 15, totalStudents: 20 },
  { id: 'q3', title: 'Sustainability Challenge', objective: 'Propose a solution to a local environmental issue.', xpReward: 1000, badgeReward: 'Eco Warrior', status: 'Draft', submissions: 0, totalStudents: 20 },
  { id: 'q4', title: 'Ancient Civilizations', objective: 'Compare and contrast two ancient civilizations.', xpReward: 600, badgeReward: 'Time Traveler', status: 'Archived', submissions: 20, totalStudents: 20 },
];

export const contentItems: ContentItem[] = [
  { id: 'c1', title: 'Water Cycle Explained (Video)', type: 'Video', topic: 'Water Cycle', gradeLevel: '5', status: 'Active in Quest' },
  { id: 'c2', title: 'Introduction to Biomes (PDF)', type: 'PDF', topic: 'Biomes', gradeLevel: '5', status: 'Active in Quest' },
  { id: 'c3', title: 'Recycling Guide', type: 'Link', topic: 'Sustainability', gradeLevel: '5', status: 'Draft' },
  { id: 'c4', title: 'The Great Pyramid of Giza', type: 'PDF', topic: 'History', gradeLevel: '6', status: 'Archived' },
];

export const groups: Group[] = [
  { id: 'g1', name: 'Team Redwood', leader: '2', members: [students[1], students[3], students[4]], teamXp: 26500, teamQuestCompletion: 0.92 },
  { id: 'g2', name: 'The Ocean Defenders', leader: '1', members: [students[0], students[2], students[7]], teamXp: 24400, teamQuestCompletion: 0.87 },
  { id: 'g3', name: 'The Trailblazers', members: [students[5], students[6]], teamXp: 13700, teamQuestCompletion: 0.65 },
];

export const announcements: Announcement[] = [
    { id: 'a1', message: 'Welcome back to a new week of learning! The "Biome Explorer" quest is now live.', date: new Date('2024-07-29T09:00:00Z') },
    { id: 'a2', message: 'Reminder: The "Water Cycle Journey" quest is due this Friday. Let me know if you have any questions!', date: new Date('2024-07-28T14:00:00Z') },
];

export type Student = {
  id: string;
  name: string;
  avatarUrl: string;
  totalXp: number;
  badgesEarned: number;
  lastLogin: Date;
  questCompletionRate: number; // 0 to 1
  masterySkills: string[];
  level: string;
};

export type Quest = {
  id: string;
  title: string;
  objective: string;
  xpReward: number;
  badgeReward: string;
  status: 'Active' | 'Draft' | 'Archived';
  dueDate?: Date;
  submissions: number;
  totalStudents: number;
};

export type ContentItem = {
  id: string;
  title: string;
  type: 'PDF' | 'Video' | 'Link';
  topic: string;
  gradeLevel: string;
  status: 'Active in Quest' | 'Archived' | 'Draft';
};

export type Group = {
  id: string;
  name: string;
  leader?: string; // Student ID
  members: Student[];
  teamXp: number;
  teamQuestCompletion: number;
};

export type Announcement = {
  id: string;
  message: string;
  date: Date;
};
